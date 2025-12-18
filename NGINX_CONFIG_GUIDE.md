# Nginx Configuration Template
# This file helps you understand and customize the nginx.conf

# For your specific domain, you need to update the following in nginx.conf:
# 1. Replace "localhost" with "your-domain.com www.your-domain.com"
# 2. Ensure SSL certificates are correctly mounted in Docker

# Example of what to change:
# OLD: server_name localhost;
# NEW: server_name your-domain.com www.your-domain.com;

# After updating, rebuild the Docker image and run the container with volume mounts for SSL

# The main nginx.conf already includes:
# ✓ HTTP to HTTPS redirect
# ✓ SSL/TLS configuration
# ✓ Security headers (HSTS, X-Frame-Options, etc.)
# ✓ Gzip compression
# ✓ Static file caching
# ✓ React Router SPA support (try_files fallback)
