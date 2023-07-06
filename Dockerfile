# Use an official Node.js runtime as the base image
FROM node:16

# Set the working directory inside the container for Express.js
WORKDIR /usr/src/app/express-app

# Copy Express.js package.json and package-lock.json to the working directory
COPY express-app/package*.json ./

# Install Express.js dependencies
RUN npm install

# Copy the rest of the Express.js application files to the working directory
COPY express-app .

# Set the working directory inside the container for Next.js
WORKDIR /usr/src/app/next-app

# Copy Next.js package.json and package-lock.json to the working directory
COPY next-app/package*.json ./

# Install Next.js dependencies
RUN npm install

# Copy the rest of the Next.js application files to the working directory
COPY next-app .

# Build the Next.js application
RUN npm run build

# Expose the ports for both applications
EXPOSE 4000
EXPOSE 3000

# Start the Express.js application on port 4000
CMD ["npm", "start"]
