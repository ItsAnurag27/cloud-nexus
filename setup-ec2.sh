#!/bin/bash

# CloudNexus EC2 Setup Script
# This script automates the initial setup on EC2

set -e  # Exit on error

echo "========================================="
echo "CloudNexus EC2 Setup Script"
echo "========================================="

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${GREEN}[✓]${NC} $1"
}

print_error() {
    echo -e "${RED}[✗]${NC} $1"
}

print_info() {
    echo -e "${YELLOW}[i]${NC} $1"
}

# Check if running on Linux
if [[ ! "$OSTYPE" =~ ^linux ]]; then
    print_error "This script must be run on Linux (EC2)"
    exit 1
fi

# Update system
print_info "Updating system packages..."
sudo apt update
sudo apt upgrade -y
print_status "System updated"

# Install Docker
print_info "Installing Docker..."
sudo apt install -y docker.io
sudo systemctl enable docker
sudo systemctl start docker
print_status "Docker installed"

# Install Docker Compose
print_info "Installing Docker Compose..."
sudo curl -L "https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose
print_status "Docker Compose installed"

# Add user to docker group
print_info "Configuring Docker permissions..."
sudo usermod -aG docker $USER
print_status "Docker permissions configured (log out and back in for changes to take effect)"

# Install Git
print_info "Installing Git..."
sudo apt install -y git
print_status "Git installed"

# Install Certbot for SSL
print_info "Installing Certbot..."
sudo apt install -y certbot
print_status "Certbot installed"

# Verify installations
print_info "Verifying installations..."
docker --version
docker-compose --version
git --version
certbot --version
print_status "All installations verified"

echo ""
echo "========================================="
echo "Setup Complete!"
echo "========================================="
echo ""
echo "Next steps:"
echo "1. Clone the repository:"
echo "   git clone https://github.com/your-username/Web-CloudNexus.git"
echo "   cd Web-CloudNexus-master"
echo ""
echo "2. Get SSL certificate (requires domain pointing to this EC2):"
echo "   sudo certbot certonly --standalone -d your-domain.com -d www.your-domain.com"
echo ""
echo "3. Update nginx.conf with your domain name"
echo ""
echo "4. Build and run Docker container:"
echo "   sudo docker-compose up -d"
echo ""
echo "5. Verify HTTPS is working:"
echo "   curl -I https://your-domain.com"
echo ""
echo "For detailed instructions, see DEPLOYMENT_GUIDE.md"
echo ""
