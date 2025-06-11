# Use Node.js LTS version as the base image
FROM node:20-alpine

# Create app directory
WORKDIR /usr/src/app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy source code
COPY . .

# Build the application
RUN npm run build

# Remove development dependencies
RUN npm prune --production

# Expose port 80
EXPOSE 80

# Set environment variables
ENV NODE_ENV=production
ENV PORT=80

# Start the application
CMD ["npm", "run", "start:prod"] 