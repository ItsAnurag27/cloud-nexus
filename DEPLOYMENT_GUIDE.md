# EC2 Deployment Guide - CloudNexus Website

This guide covers deploying the CloudNexus website to AWS EC2 with Docker, domain mapping, and HTTPS support.

## Prerequisites

- AWS EC2 instance (Ubuntu 22.04 LTS recommended)
- Domain name registered
- Git installed on EC2
- Docker and Docker Compose installed on EC2

## Step 1: Prepare Your EC2 Instance

### 1.1 Launch EC2 Instance

1. Launch an **Ubuntu 22.04 LTS** instance on AWS EC2
2. Security Group Settings:
   - Allow inbound traffic on port **22** (SSH)
   - Allow inbound traffic on port **80** (HTTP)
   - Allow inbound traffic on port **443** (HTTPS)

### 1.2 Connect to Your EC2 Instance

```bash
ssh -i your-key-pair.pem ubuntu@your-ec2-public-ip
```

### 1.3 Install Docker and Docker Compose

```bash
# Update system packages
sudo apt update
sudo apt upgrade -y

# Install Docker
sudo apt install -y docker.io

# Install Docker Compose
sudo curl -L "https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose

# Add current user to docker group
sudo usermod -aG docker $USER
newgrp docker

# Verify installation
docker --version
docker-compose --version
```

## Step 2: Push Repository to EC2

### 2.1 Clone Repository on EC2

```bash
cd /home/ubuntu
git clone https://github.com/your-username/Web-CloudNexus.git
cd Web-CloudNexus-master
```

OR if you have a private repository:

```bash
git clone https://github.com/your-username/Web-CloudNexus.git
cd Web-CloudNexus-master
```

## Step 3: Build and Run Docker Container

### 3.1 Build the Docker Image

```bash
# From the project directory
sudo docker build -t cloudnexus-website:latest .
```

### 3.2 Run the Container (Initial - HTTP only)

```bash
sudo docker run -d \
  --name cloudnexus-app \
  -p 80:80 \
  cloudnexus-website:latest
```

Verify the container is running:

```bash
sudo docker ps
```

Access your website via: `http://your-ec2-public-ip`

## Step 4: Set Up Domain Mapping and HTTPS

### 4.1 Point Your Domain to EC2

1. Go to your domain registrar (GoDaddy, Namecheap, etc.)
2. Update DNS A record to point to your EC2 **Elastic IP**
3. Create a new A record with:
   - **Name**: @ (or www)
   - **Type**: A
   - **Value**: your-ec2-elastic-ip
4. Wait for DNS propagation (can take 5-30 minutes)

### 4.2 Verify Domain Mapping

```bash
# Wait a few minutes for DNS propagation, then test
ping your-domain.com
nslookup your-domain.com
```

### 4.3 Update Nginx Configuration

On your **local machine**, update the `nginx.conf` file:

```bash
# Replace "localhost" with your domain
sed -i 's/server_name localhost;/server_name your-domain.com www.your-domain.com;/g' nginx.conf
```

Or edit the file manually and replace:
- `server_name localhost;` with `server_name your-domain.com www.your-domain.com;`

### 4.4 Set Up SSL Certificate with Let's Encrypt

#### Option A: Using Docker Container with Certbot

```bash
# Stop the running container
sudo docker stop cloudnexus-app
sudo docker rm cloudnexus-app

# Create SSL certificate directory
sudo mkdir -p /home/ubuntu/cloudnexus-ssl

# Obtain SSL certificate (replace with your domain and email)
sudo docker run --rm -it \
  -p 80:80 \
  -v /home/ubuntu/cloudnexus-ssl:/etc/letsencrypt \
  certbot/certbot certonly --standalone \
  -d your-domain.com \
  -d www.your-domain.com \
  --email your-email@example.com \
  --agree-tos \
  --no-eff-email
```

#### Option B: Direct Installation on EC2

```bash
# Install certbot
sudo apt install -y certbot python3-certbot-nginx

# Obtain certificate (requires port 80 to be open)
sudo certbot certonly --standalone \
  -d your-domain.com \
  -d www.your-domain.com \
  --email your-email@example.com \
  --agree-tos \
  --no-eff-email
```

## Step 5: Run Docker with SSL Support

### 5.1 Rebuild the Docker Image with Updated Nginx Config

```bash
# On local machine, commit and push changes
git add nginx.conf
git commit -m "Update nginx config for HTTPS and domain mapping"
git push origin main

# On EC2, pull the latest changes
cd /home/ubuntu/Web-CloudNexus-master
git pull origin main

# Rebuild the Docker image
sudo docker build -t cloudnexus-website:latest .
```

### 5.2 Run Container with SSL Volume Mounts

```bash
# For Let's Encrypt certificates in /etc/letsencrypt
sudo docker run -d \
  --name cloudnexus-app \
  -p 80:80 \
  -p 443:443 \
  -v /etc/letsencrypt:/etc/nginx/ssl \
  cloudnexus-website:latest

# OR if you used /home/ubuntu/cloudnexus-ssl
sudo docker run -d \
  --name cloudnexus-app \
  -p 80:80 \
  -p 443:443 \
  -v /home/ubuntu/cloudnexus-ssl:/etc/nginx/ssl \
  cloudnexus-website:latest
```

### 5.3 Verify HTTPS is Working

```bash
# Check if certificate is loaded
curl -I https://your-domain.com

# Test from browser
https://your-domain.com
```

## Step 6: Auto-Renew SSL Certificate

### 6.1 Create Renewal Script

```bash
sudo nano /home/ubuntu/renew-ssl.sh
```

Add the following content:

```bash
#!/bin/bash
# Renew Let's Encrypt certificate

sudo certbot renew --quiet

# Reload nginx in Docker container
sudo docker exec cloudnexus-app nginx -s reload
```

```bash
sudo chmod +x /home/ubuntu/renew-ssl.sh
```

### 6.2 Set Up Cron Job for Auto-Renewal

```bash
# Open crontab
sudo crontab -e

# Add this line (runs renewal check daily at 2 AM)
0 2 * * * /home/ubuntu/renew-ssl.sh >> /var/log/ssl-renewal.log 2>&1
```

## Step 7: Create Docker Compose File (Optional but Recommended)

Create `docker-compose.yml` for easier management:

```yaml
version: '3.8'

services:
  cloudnexus-app:
    build: .
    container_name: cloudnexus-app
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - /etc/letsencrypt:/etc/nginx/ssl
      - /home/ubuntu/Web-CloudNexus-master/dist:/usr/share/nginx/html
    restart: always
    networks:
      - cloudnexus-network

networks:
  cloudnexus-network:
    driver: bridge
```

Then use:

```bash
# Build and run
sudo docker-compose up -d

# Check logs
sudo docker-compose logs -f

# Stop
sudo docker-compose down
```

## Step 8: Security Hardening

### 8.1 Update EC2 Security Group Rules

```bash
# Only allow SSH from your IP
# Allow HTTP from anywhere (will be redirected to HTTPS)
# Allow HTTPS from anywhere
```

### 8.2 Enable UFW Firewall (if desired)

```bash
sudo ufw allow 22/tcp
sudo ufw allow 80/tcp
sudo ufw allow 443/tcp
sudo ufw enable
```

## Troubleshooting

### Container won't start
```bash
sudo docker logs cloudnexus-app
```

### SSL Certificate Issues
```bash
# Check certificate validity
sudo certbot certificates

# Renew certificate manually
sudo certbot renew --force-renewal
```

### Domain not resolving
```bash
# Check DNS propagation
nslookup your-domain.com
dig your-domain.com
```

### Port 443 refused
```bash
# Ensure Security Group allows port 443
# Check if nginx is listening
sudo docker exec cloudnexus-app netstat -tlnp
```

## Monitoring and Logs

### View Docker Container Logs
```bash
sudo docker logs -f cloudnexus-app
```

### Check Nginx Logs Inside Container
```bash
sudo docker exec cloudnexus-app tail -f /var/log/nginx/access.log
sudo docker exec cloudnexus-app tail -f /var/log/nginx/error.log
```

## Commands Summary

```bash
# View running containers
sudo docker ps

# View all containers
sudo docker ps -a

# Stop container
sudo docker stop cloudnexus-app

# Start container
sudo docker start cloudnexus-app

# Restart container
sudo docker restart cloudnexus-app

# Remove container
sudo docker rm cloudnexus-app

# View container logs
sudo docker logs cloudnexus-app

# Execute command in container
sudo docker exec cloudnexus-app <command>

# Rebuild image
sudo docker build -t cloudnexus-website:latest .
```

## Additional Resources

- [AWS EC2 Documentation](https://docs.aws.amazon.com/ec2/)
- [Docker Documentation](https://docs.docker.com/)
- [Let's Encrypt](https://letsencrypt.org/)
- [Nginx Documentation](https://nginx.org/)

---

**Last Updated**: December 18, 2025
