# Quick Deployment Checklist

## Pre-Deployment (Local Machine)

- [ ] Update `nginx.conf` with your domain name (replace `localhost` with your domain)
- [ ] Commit all changes to git
- [ ] Push to your repository

```bash
# Example:
sed -i 's/server_name localhost;/server_name your-domain.com www.your-domain.com;/g' nginx.conf
git add nginx.conf Dockerfile docker-compose.yml
git commit -m "Configure for production deployment"
git push
```

## EC2 Setup (One Time)

### 1. Launch EC2 Instance
- Instance Type: t3.micro (eligible for free tier) or t3.small
- OS: Ubuntu 22.04 LTS
- Security Group: Allow ports 22, 80, 443
- Elastic IP: Attach an Elastic IP to your instance

### 2. Connect to EC2 and Run Setup Script

```bash
ssh -i your-key.pem ubuntu@your-elastic-ip

# Download and run setup script
wget https://raw.githubusercontent.com/your-username/Web-CloudNexus/main/setup-ec2.sh
chmod +x setup-ec2.sh
./setup-ec2.sh
```

### 3. Clone Repository

```bash
git clone https://github.com/your-username/Web-CloudNexus.git
cd Web-CloudNexus-master
```

## Domain & SSL Setup

### 1. Point Domain to EC2

- Go to your domain registrar
- Create A record: `@` → `your-elastic-ip`
- Create A record: `www` → `your-elastic-ip`
- Wait 5-30 minutes for DNS propagation

### 2. Get SSL Certificate

```bash
# Wait for DNS to propagate, then run:
sudo certbot certonly --standalone \
  -d your-domain.com \
  -d www.your-domain.com \
  --email your-email@example.com \
  --agree-tos \
  --non-interactive
```

## Deployment

### 1. Build and Run Container

```bash
# Pull latest code
git pull

# Build Docker image
sudo docker build -t cloudnexus-website:latest .

# Option A: Using Docker Run
sudo docker run -d \
  --name cloudnexus-app \
  -p 80:80 \
  -p 443:443 \
  -v /etc/letsencrypt:/etc/nginx/ssl:ro \
  --restart always \
  cloudnexus-website:latest

# Option B: Using Docker Compose (Recommended)
sudo docker-compose up -d
```

### 2. Verify Deployment

```bash
# Check container is running
sudo docker ps

# Test HTTP redirect to HTTPS
curl -I http://your-domain.com

# Test HTTPS
curl -I https://your-domain.com

# View logs
sudo docker logs -f cloudnexus-app
```

## Post-Deployment

### 1. Set Up SSL Auto-Renewal

```bash
# Create renewal script
sudo nano /home/ubuntu/renew-ssl.sh
```

Add:
```bash
#!/bin/bash
sudo certbot renew --quiet
sudo docker exec cloudnexus-app nginx -s reload
```

```bash
sudo chmod +x /home/ubuntu/renew-ssl.sh

# Add to crontab (runs daily at 2 AM)
sudo crontab -e
# Add: 0 2 * * * /home/ubuntu/renew-ssl.sh >> /var/log/ssl-renewal.log 2>&1
```

### 2. Monitor Application

```bash
# View real-time logs
sudo docker logs -f cloudnexus-app

# Check certificate status
sudo certbot certificates

# Check disk usage
df -h

# Check Docker container status
sudo docker stats cloudnexus-app
```

## Updating Website

When you make changes to the website:

```bash
# On local machine
git add .
git commit -m "Your commit message"
git push

# On EC2
cd Web-CloudNexus-master
git pull

# Rebuild and restart
sudo docker build -t cloudnexus-website:latest .
sudo docker stop cloudnexus-app
sudo docker run -d \
  --name cloudnexus-app \
  -p 80:80 \
  -p 443:443 \
  -v /etc/letsencrypt:/etc/nginx/ssl:ro \
  --restart always \
  cloudnexus-website:latest

# Or with docker-compose
sudo docker-compose down
sudo docker-compose up -d
```

## Troubleshooting

### Certificate Issues
```bash
# Check certificate status
sudo certbot certificates

# Renew certificate manually
sudo certbot renew --force-renewal

# Check Let's Encrypt logs
sudo tail -f /var/log/letsencrypt/letsencrypt.log
```

### Container Issues
```bash
# View detailed logs
sudo docker logs cloudnexus-app

# Inspect container
sudo docker inspect cloudnexus-app

# Check if ports are in use
sudo lsof -i :80
sudo lsof -i :443
```

### DNS Issues
```bash
# Verify domain points to EC2
nslookup your-domain.com
dig your-domain.com +short

# Test connectivity
ping your-domain.com
curl -v https://your-domain.com
```

## Key Modifications Made

1. **Dockerfile**
   - Added certbot for SSL certificate management
   - Exposed ports 80 and 443
   - Created SSL directory

2. **nginx.conf**
   - HTTP → HTTPS redirect
   - SSL/TLS configuration
   - Security headers (HSTS, X-Frame-Options, etc.)
   - Gzip compression
   - React Router support with SPA fallback

3. **docker-compose.yml**
   - Created for easier container management
   - Volume mounting for SSL certificates
   - Health checks
   - Automatic restart policy

4. **DEPLOYMENT_GUIDE.md**
   - Comprehensive step-by-step guide

5. **setup-ec2.sh**
   - Automated EC2 initialization script

## Security Best Practices

- [ ] Use Elastic IP (won't change when instance restarts)
- [ ] Enable SSL/TLS with Let's Encrypt
- [ ] Configure Security Group to allow only necessary ports
- [ ] Enable automatic SSL certificate renewal
- [ ] Monitor Docker container logs regularly
- [ ] Keep EC2 instance and packages updated
- [ ] Use strong SSH key
- [ ] Enable CloudWatch monitoring (optional)

## Cost Optimization (AWS Free Tier)

- EC2: t3.micro is free for 12 months
- Elastic IP: Free if associated with running instance
- Let's Encrypt: Free SSL certificates
- CloudWatch: Free tier includes basic monitoring

---

**Everything is now ready for deployment!**
