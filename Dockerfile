# Use Node.js image to build the app
FROM node:18-alpine AS build

WORKDIR /app

# Copy package.json and package-lock.json first
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the files
COPY . .

# Build the React application
RUN npm run build

# Use Nginx to serve the built files
FROM nginx:alpine

# Install certbot and python for SSL certificate management
RUN apk add --no-cache certbot certbot-nginx curl bash

# Remove the default Nginx configuration
RUN rm /etc/nginx/conf.d/default.conf

# Copy the custom Nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy the built React files to the Nginx web root
COPY --from=build /app/dist /usr/share/nginx/html

# Create directories for SSL certificates
RUN mkdir -p /etc/nginx/ssl

# Expose ports 80 (HTTP) and 443 (HTTPS)
EXPOSE 80 443

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
