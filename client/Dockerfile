# Step 1: Use an official node image as a build stage
FROM node:16-alpine as build

# Step 2: Set working directory inside the container
WORKDIR /app

# Step 3: Copy package.json and package-lock.json for dependencies
COPY package*.json ./

# Step 4: Install dependencies
RUN npm install

# Step 5: Copy the rest of the application code
COPY . .

# Step 6: Build the application
RUN npm run build

# Step 7: Use a lightweight web server to serve the built static files
FROM nginx:alpine

# Step 8: Copy the built files from the build stage to nginx's default directory
COPY --from=build /app/build /usr/share/nginx/html

# Step 9: Expose port 3000
EXPOSE 3000

# Step 10: Start nginx
CMD ["nginx", "-g", "daemon off;"]
