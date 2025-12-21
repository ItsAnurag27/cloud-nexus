# CloudNexus Website - Complete Deployment Guide

## Table of Contents
1. [Overview](#overview)
2. [Prerequisites](#prerequisites)
3. [Project Setup (Local Machine)](#project-setup-local-machine)
4. [EC2 Instance Setup](#ec2-instance-setup)
5. [Docker Configuration](#docker-configuration)
6. [Deployment Steps](#deployment-steps)
7. [HTTPS & Domain Setup](#https--domain-setup)
8. [Troubleshooting Guide](#troubleshooting-guide)
9. [Maintenance & Monitoring](#maintenance--monitoring)

---

## Overview

This guide walks through deploying the CloudNexus React website to AWS EC2 using Docker with Nginx as the web server. The deployment includes HTTP support initially, with HTTPS/domain mapping as a secondary step.

### Architecture
- **Frontend**: React application (Vite)
- **Web Server**: Nginx (Alpine Linux)
- **Container**: Docker with Docker Compose
- **Hosting**: AWS EC2
- **SSL**: Let's Encrypt certificates (optional)

---

## Prerequisites

### Local Machine Requirements
- Git installed
- Node.js 18+ (for local development)
- Docker installed (optional for local testing)
- GitHub account with repository access
- Text editor (VS Code recommended)

### AWS Requirements
- AWS Account with EC2 access
- Elastic IP address available
- Domain name (for HTTPS setup)

---

## Project Setup (Local Machine)

### Step 1: Prepare Your Repository

```bash
# Clone the repository
git clone https://github.com/ItsAnurag27/cloud-nexus.git
cd cloud-nexus

# Verify required files exist
ls -la Dockerfile docker-compose.yml nginx.conf package.json
```

### Step 2: Verify Project Files

Ensure these files exist in your project root:

1. **Dockerfile** - Multi-stage build (Node + Nginx)
   - Stage 1: Node.js build stage
   - Stage 2: Nginx serving stage

2. **docker-compose.yml** - Container orchestration
   - Service definition
   - Port mappings
   - Volume configuration

3. **nginx.conf** - Web server configuration
   - HTTP server block (active)
   - HTTPS server block (commented for later)
   - React Router support with `try_files` fallback

4. **package.json** - Node dependencies

### Step 3: Local Testing (Optional)

```bash
# Install dependencies
npm install

# Build React app locally
npm run build

# Verify build output
ls -la dist/
```

### Step 4: Git Configuration

```bash
# Configure git with your credentials
git config --global user.name "Your Name"
git config --global user.email "your-email@example.com"

# Add and commit all changes
git add .
git commit -m "Prepare for EC2 deployment"
git push origin main
```

---

## EC2 Instance Setup

### Step 1: Launch EC2 Instance

**AWS Console Steps:**

1. Go to **EC2 Dashboard** → **Launch Instances**
2. **Choose AMI**: Select **Ubuntu 22.04 LTS** (Free tier eligible)
3. **Instance Type**: Select **t3.micro** (Free tier) or **t3.small** (recommended)
4. **Key Pair**: Create or select an existing key pair
   - Download and save the `.pem` file securely
5. **Network Settings**:
   - Auto-assign Public IP: **Enable**
   - Create or select a Security Group
6. **Storage**: 30 GB minimum (default is fine)
7. Click **Launch Instances**

### Step 2: Allocate Elastic IP

1. Go to **EC2 Dashboard** → **Elastic IPs**
2. Click **Allocate Elastic IP**
3. Select your instance
4. Associate the Elastic IP with your instance
5. **Save the Elastic IP** (e.g., `3.216.74.125`)

### Step 3: Configure Security Group

1. Go to **Security Groups** in EC2 Dashboard
2. Find your instance's Security Group
3. Click **Inbound rules** → **Edit inbound rules**
4. Add these rules:

| Type | Protocol | Port | Source | Description |
|------|----------|------|--------|-------------|
| SSH | TCP | 22 | 0.0.0.0/0 | SSH access |
| HTTP | TCP | 80 | 0.0.0.0/0 | Web traffic |
| HTTPS | TCP | 443 | 0.0.0.0/0 | Secure web |

5. Click **Save rules**

### Step 4: Connect to EC2

```bash
# On your local machine
# Make key pair readable
chmod 400 your-key-pair.pem

# SSH into EC2
ssh -i your-key-pair.pem ubuntu@your-elastic-ip
# or
ssh -i your-key-pair.pem ec2-user@your-elastic-ip
```

### Step 5: Update System

```bash
# Update package manager
sudo apt update
sudo apt upgrade -y

# Install essential tools
sudo apt install -y curl wget git
```

### Step 6: Install Docker & Docker Compose

```bash
# Install Docker
sudo apt install -y docker.io

# Start Docker service
sudo systemctl enable docker
sudo systemctl start docker

# Verify Docker installation
docker --version

# Install Docker Compose
sudo curl -L "https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose

# Verify installation
docker-compose --version

# Add current user to docker group (optional, to avoid sudo)
sudo usermod -aG docker $USER
newgrp docker
```

---

## Docker Configuration

### Dockerfile Explanation

```dockerfile
# Stage 1: Build React app with Node.js
FROM node:18-alpine AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Serve with Nginx
FROM nginx:alpine
RUN apk add --no-cache certbot certbot-nginx curl bash
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html
RUN mkdir -p /etc/nginx/ssl
EXPOSE 80 443
CMD ["nginx", "-g", "daemon off;"]
```

**Key Points:**
- Multi-stage build: Reduces final image size
- Node stage: Compiles React with Vite
- Nginx stage: Serves production files only
- Certbot included for SSL certificate management
- Ports 80 (HTTP) and 443 (HTTPS) exposed

### docker-compose.yml Explanation

```yaml
services:
  cloudnexus-app:
    build:
      context: .           # Build from current directory
      dockerfile: Dockerfile
    container_name: cloudnexus-app
    ports:
      - "80:80"           # HTTP
      - "443:443"         # HTTPS
    volumes:
      # SSL certificates (uncomment after obtaining)
      # - /etc/letsencrypt:/etc/nginx/ssl:ro
    restart: always        # Auto-restart on failure
    healthcheck:
      test: ["CMD", "wget", "--quiet", "--tries=1", "--spider", "http://localhost/"]
      interval: 30s
      timeout: 10s
      retries: 3
      start_period: 40s
    logging:
      driver: "json-file"
      options:
        max-size: "10m"
        max-file: "3"
```

### nginx.conf Explanation

**Current Active Configuration (HTTP only):**

```nginx
server {
    listen 80;
    server_name _;
    root /usr/share/nginx/html;
    index index.html;
    
    location / {
        try_files $uri /index.html;  # SPA fallback
    }
    
    location /assets/ {
        expires max;                  # Cache static assets
        access_log off;
    }
    
    gzip on;                         # Compression
    gzip_types text/plain text/css application/json application/javascript;
}
```

**Key Features:**
- ✅ Listens on port 80 (HTTP)
- ✅ React Router support with `try_files` fallback
- ✅ Static asset caching
- ✅ Gzip compression enabled
- ⏸️ HTTPS config commented (for later)

---

## Deployment Steps

### Step 1: Clone Repository on EC2

```bash
# On EC2 instance
cd /home/ec2-user  # or /home/ubuntu depending on AMI
git clone https://github.com/ItsAnurag27/cloud-nexus.git cloud-nexus
cd cloud-nexus

# Verify files
ls -la
```

### Step 2: Build Docker Image

```bash
# Build the Docker image
sudo docker build -t cloudnexus-website:latest .

# This will:
# 1. Build React app with Node.js
# 2. Copy dist files to Nginx
# 3. Create final Docker image (~200MB)

# Monitor build progress
# Should take 5-10 minutes on first build
```

### Step 3: Run Docker Container

```bash
# Option A: Using Docker Compose (Recommended)
sudo docker-compose up -d

# Option B: Using Docker directly
sudo docker run -d \
  --name cloudnexus-app \
  -p 80:80 \
  -p 443:443 \
  --restart always \
  cloudnexus-website:latest
```

### Step 4: Verify Deployment

```bash
# Check container status
sudo docker ps

# Should show:
# STATUS: Up X minutes (health: starting) → Up X minutes (healthy)

# Check container logs
sudo docker logs cloudnexus-app

# Should show: "nginx entered MASTER mode"

# Test HTTP connection
curl http://localhost
curl http://your-elastic-ip

# Check with wget
wget -q -O- http://localhost | head -20
```

### Step 5: Monitor Container

```bash
# View real-time logs
sudo docker-compose logs -f cloudnexus-app

# Check container resource usage
sudo docker stats cloudnexus-app

# View detailed container info
sudo docker inspect cloudnexus-app

# Check open ports
sudo lsof -i -P -n | grep LISTEN
```

---

## HTTPS & Domain Setup

### Step 1: Point Domain to EC2

**At Your Domain Registrar (GoDaddy, Namecheap, etc.):**

1. Go to **DNS Settings**
2. Find **A Records**
3. Create/Edit A Record:
   - **Name**: `@` (root domain)
   - **Value**: Your Elastic IP (e.g., `3.216.74.125`)
   - **TTL**: 3600 (or default)
4. Create additional A Record for www:
   - **Name**: `www`
   - **Value**: Your Elastic IP
   - **TTL**: 3600

**Verify DNS Resolution:**

```bash
# Wait 5-30 minutes for DNS propagation, then test:
nslookup your-domain.com
dig your-domain.com +short
ping your-domain.com

# All should return your Elastic IP
```

### Step 2: Get SSL Certificate

**Prerequisites:**
- Domain must be pointing to EC2 (DNS propagated)
- Port 80 must be open and responding
- Container must be running

**Obtain Certificate with Certbot:**

```bash
# Install Certbot on EC2 (if not already in Docker)
sudo apt install -y certbot

# Stop the container temporarily
sudo docker-compose down

# Get SSL certificate
sudo certbot certonly --standalone \
  -d your-domain.com \
  -d www.your-domain.com \
  --email your-email@example.com \
  --agree-tos \
  --non-interactive

# Certificates stored in: /etc/letsencrypt/live/your-domain.com/
# cert.pem - public certificate
# privkey.pem - private key
```

### Step 3: Enable HTTPS in nginx.conf

**Update nginx.conf on local machine:**

```bash
# Edit nginx.conf locally and:
# 1. Uncomment the HTTPS server block
# 2. Replace server_name localhost with your domain
# 3. Update certificate paths

# Example:
server {
    listen 443 ssl http2;
    server_name your-domain.com www.your-domain.com;
    
    ssl_certificate /etc/nginx/ssl/live/your-domain.com/cert.pem;
    ssl_certificate_key /etc/nginx/ssl/live/your-domain.com/privkey.pem;
    
    # ... rest of config
}

# Also uncomment HTTP redirect:
server {
    listen 80;
    server_name _;
    return 301 https://$host$request_uri;
}
```

### Step 4: Update docker-compose.yml

**Uncomment the SSL volume:**

```yaml
volumes:
  - /etc/letsencrypt:/etc/nginx/ssl:ro  # Read-only access to certs
```

### Step 5: Rebuild and Deploy

```bash
# Local machine
git add nginx.conf docker-compose.yml
git commit -m "Enable HTTPS with Let's Encrypt"
git push origin main

# On EC2
cd /home/ec2-user/cloud-nexus
git pull origin main
sudo docker-compose build --no-cache
sudo docker-compose up -d

# Verify
curl https://your-domain.com
# Should load without SSL warnings
```

### Step 6: Auto-Renew SSL Certificate

**Create renewal script on EC2:**

```bash
sudo nano /home/ec2-user/renew-ssl.sh
```

**Add this content:**

```bash
#!/bin/bash
# Renew Let's Encrypt certificates
sudo certbot renew --quiet

# Reload nginx in container
sudo docker exec cloudnexus-app nginx -s reload

# Log the renewal
echo "SSL renewal attempted on $(date)" >> /var/log/ssl-renewal.log
```

**Make executable and add to cron:**

```bash
sudo chmod +x /home/ec2-user/renew-ssl.sh

# Edit crontab
sudo crontab -e

# Add this line (runs daily at 2 AM):
0 2 * * * /home/ec2-user/renew-ssl.sh >> /var/log/ssl-renewal.log 2>&1
```

---

## Troubleshooting Guide

### Issue 1: Container Won't Start

**Symptoms:**
- `docker ps` shows container restarting
- Status: `Restarting (0) less than a second ago`

**Solutions:**

```bash
# Check container logs
sudo docker logs cloudnexus-app --tail 100

# Common causes:
# 1. Nginx configuration error
sudo docker exec cloudnexus-app nginx -t

# 2. Missing SSL certificates (if enabled)
sudo docker exec cloudnexus-app ls -la /etc/nginx/ssl/

# 3. Port already in use
sudo lsof -i :80
sudo lsof -i :443

# 4. Rebuild from scratch
sudo docker-compose down
sudo docker-compose build --no-cache
sudo docker-compose up
```

### Issue 2: Connection Refused / Connection Reset

**Symptoms:**
- Browser: "This site can't be reached"
- Terminal: `curl: (7) Failed to connect`

**Solutions:**

```bash
# 1. Verify Security Group
# AWS Console → Security Groups → Check inbound rules
# Should allow port 80 and 443 from 0.0.0.0/0

# 2. Check if container is running
sudo docker ps

# 3. Test localhost inside container
sudo docker exec cloudnexus-app curl http://localhost

# 4. Check nginx is listening
sudo docker exec cloudnexus-app netstat -tlnp

# 5. Verify Elastic IP is correct
# Compare EC2 console Elastic IP with what you're accessing

# 6. Ping the server
ping your-elastic-ip
```

### Issue 3: Website Loads But Shows 404 / Blank Page

**Symptoms:**
- HTTP loads but shows 404 or blank
- React routes don't work

**Solutions:**

```bash
# 1. Check if React build succeeded
sudo docker exec cloudnexus-app ls -la /usr/share/nginx/html/

# Should contain: index.html, assets/, etc.

# 2. Verify nginx configuration
sudo docker exec cloudnexus-app cat /etc/nginx/conf.d/default.conf

# Should have: try_files $uri /index.html;

# 3. Check nginx error logs
sudo docker logs cloudnexus-app | grep "error"

# 4. Rebuild the image
sudo docker-compose down
sudo docker-compose build --no-cache
sudo docker-compose up -d
```

### Issue 4: SSL Certificate Issues

**Symptoms:**
- Browser: "Your connection is not private"
- Certificate expired warning

**Solutions:**

```bash
# 1. Check certificate status
sudo certbot certificates

# 2. Check certificate paths in nginx.conf
grep "ssl_certificate" /path/to/nginx.conf

# 3. Verify certificate files exist
sudo ls -la /etc/letsencrypt/live/your-domain.com/

# 4. Manual certificate renewal
sudo certbot renew --force-renewal

# 5. Check Docker volume mount
sudo docker inspect cloudnexus-app | grep -A 20 "Mounts"

# Should show /etc/letsencrypt mounted to /etc/nginx/ssl

# 6. Reload nginx
sudo docker exec cloudnexus-app nginx -s reload
```

### Issue 5: DNS Not Resolving

**Symptoms:**
- `nslookup your-domain.com` returns wrong IP
- Certbot fails: "Unable to reach server"

**Solutions:**

```bash
# 1. Check DNS propagation
nslookup your-domain.com
dig your-domain.com

# 2. Flush local DNS cache
sudo systemd-resolve --flush-caches

# 3. Verify registrar A records
# Go to domain registrar → DNS settings
# Confirm A records point to correct Elastic IP

# 4. Use public DNS resolver
nslookup your-domain.com 8.8.8.8

# 5. Wait for propagation
# DNS can take 5 minutes to 24 hours
# Check status at: https://www.whatsmydns.net
```

### Issue 6: High Memory/CPU Usage

**Symptoms:**
- Container using 100% CPU
- Container keeps restarting

**Solutions:**

```bash
# 1. Check resource usage
sudo docker stats cloudnexus-app

# 2. View container logs for loops/errors
sudo docker logs cloudnexus-app | tail -50

# 3. Check if build completed successfully
sudo docker ps -a | grep cloudnexus-app

# 4. Inspect image size
sudo docker images | grep cloudnexus-app

# 5. Rebuild image without cache
sudo docker-compose build --no-cache

# 6. Limit container resources (if needed)
# Edit docker-compose.yml:
# resources:
#   limits:
#     cpus: '1'
#     memory: 512M
```

### Issue 7: Port 80/443 Already in Use

**Symptoms:**
- Error: `bind: address already in use`
- Docker fails to start

**Solutions:**

```bash
# 1. Find process using the port
sudo lsof -i :80
sudo lsof -i :443

# 2. Kill the process (if needed)
sudo kill -9 <PID>

# 3. Or change port mapping in docker-compose.yml
# From: "80:80"
# To: "8080:80"
# Then access: http://your-ip:8080

# 4. Check EC2 Security Group again
# Ensure ports are correctly configured
```

### Issue 8: Build Fails - npm install Error

**Symptoms:**
- Docker build fails at npm install
- Error: `npm ERR! 404`

**Solutions:**

```bash
# 1. Check package.json syntax
npm json

# 2. Verify dependencies exist
cat package.json | grep -A 20 "dependencies"

# 3. Clear npm cache in Dockerfile
# Add to Dockerfile before RUN npm install:
# RUN npm cache clean --force

# 4. Use specific Node version
# Update Dockerfile: FROM node:18-alpine
# (Current version - may need to adjust)

# 5. Check internet connectivity inside Docker
sudo docker run --rm node:18-alpine npm list

# 6. Rebuild with no-cache
sudo docker-compose build --no-cache
```

---

## Maintenance & Monitoring

### Daily Operations

**Check Container Status:**
```bash
sudo docker-compose ps
sudo docker logs -f cloudnexus-app
```

**Monitor Resources:**
```bash
sudo docker stats cloudnexus-app
```

**Restart Container:**
```bash
sudo docker-compose restart
```

### Weekly Tasks

**Check SSL Certificate Expiration:**
```bash
sudo certbot certificates
```

**Update System Packages:**
```bash
sudo apt update
sudo apt upgrade -y
```

**Check Disk Usage:**
```bash
df -h
du -sh docker-volumes/
```

### Updating Website

**When You Make Changes Locally:**

```bash
# 1. Push changes to GitHub
git add .
git commit -m "Description of changes"
git push origin main

# 2. On EC2, pull and rebuild
cd /home/ec2-user/cloud-nexus
git pull origin main

# 3. Rebuild Docker image
sudo docker-compose build --no-cache
sudo docker-compose up -d

# 4. Verify changes
curl http://your-ip/
```

### Backup Configuration

**Save SSL Certificates:**
```bash
sudo tar -czf cloudnexus-ssl-backup.tar.gz /etc/letsencrypt/
sudo cp cloudnexus-ssl-backup.tar.gz /home/ec2-user/
```

**Export Container:**
```bash
sudo docker save cloudnexus-website:latest | gzip > cloudnexus-image.tar.gz
```

### View Logs

**Nginx Access Logs:**
```bash
sudo docker exec cloudnexus-app tail -f /var/log/nginx/access.log
```

**Nginx Error Logs:**
```bash
sudo docker exec cloudnexus-app tail -f /var/log/nginx/error.log
```

**Docker Container Logs:**
```bash
sudo docker logs --tail 100 -f cloudnexus-app
```

---

## Quick Reference Commands

```bash
# Container Management
sudo docker-compose up -d              # Start container
sudo docker-compose down               # Stop container
sudo docker-compose restart            # Restart container
sudo docker-compose logs -f            # View live logs
sudo docker ps                         # List running containers
sudo docker ps -a                      # List all containers
sudo docker-compose ps                 # Show compose services

# Image Management
sudo docker build -t cloudnexus:latest .    # Build image
sudo docker images                          # List images
sudo docker rmi cloudnexus:latest          # Remove image
sudo docker build --no-cache -t cloudnexus . # Rebuild (no cache)

# Git Operations
git status                             # Check changes
git add .                             # Stage changes
git commit -m "message"               # Commit
git push origin main                  # Push to GitHub
git pull origin main                  # Pull from GitHub

# System
sudo systemctl status docker          # Docker service status
sudo systemctl restart docker         # Restart Docker service
df -h                                 # Disk usage
htop                                  # System monitoring
```

---

## Helpful Resources

- [Docker Documentation](https://docs.docker.com/)
- [Nginx Documentation](https://nginx.org/en/docs/)
- [Let's Encrypt Documentation](https://letsencrypt.org/docs/)
- [AWS EC2 Documentation](https://docs.aws.amazon.com/ec2/)
- [React Vite Documentation](https://vitejs.dev/)

---

## Support & Next Steps

### After Deployment

1. ✅ Test HTTP access: `http://your-elastic-ip`
2. ✅ Set up domain and SSL
3. ✅ Configure auto-renewal for certificates
4. ✅ Set up monitoring and alerts
5. ✅ Regular backups

### Future Enhancements

- [ ] Add CloudFront CDN for caching
- [ ] Set up CloudWatch monitoring
- [ ] Configure automated backups
- [ ] Add custom domain email
- [ ] Set up CI/CD pipeline for auto-deployment

---

**Document Version**: 1.0  
**Last Updated**: December 19, 2025  
**Status**: ✅ Ready for Production

