# Use official Node.js 18 lightweight image as base
FROM node:18-alpine

# Set working directory inside the container
WORKDIR /app

# Copy package files first (for faster builds)
COPY package*.json ./

# Install dependencies
RUN npm install --production

# Copy the rest of your app code
COPY . .

# Expose port 3000
EXPOSE 3000

# Command to start the app
CMD ["node", "app.js"]