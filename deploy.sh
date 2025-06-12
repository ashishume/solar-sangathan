#!/bin/bash

# Exit on error
set -e

echo "🚀 Starting deployment process..."

# Navigate to the backend directory
cd backend

# Pull latest changes
echo "📥 Pulling latest changes..."
git pull

# Build the Docker image
echo "🏗️ Building Docker image..."
sudo docker build -t solar-sangathan-backend .

# Stop and remove the existing container if it exists
echo "🧹 Cleaning up existing container..."
sudo docker stop solar-sangathan-backend || true
sudo docker rm solar-sangathan-backend || true

# Run the new container
echo "🚀 Starting new container..."
sudo docker run -d \
    --name solar-sangathan-backend \
    -p 80:3000 \
    --restart unless-stopped \
    solar-sangathan-backend

echo "✅ Deployment completed successfully!" 