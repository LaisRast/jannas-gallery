# Jannas Gallery

Janna's Gallery is an application created to showcase the amazing artwork and books created by Janna. It provides a
visually appealing and organized way to present her creations to the world.

## Development

To start the application locally, run the following commands:

1. **Download PocketBase**:
   ```bash
   make pocketbase-download
   ```
   This downloads and extracts the PocketBase binary into the `pocketbase/` directory.

2. **Run the frontend**:
   ```bash
   make app-run
   ```
   This starts the Vite development server, which serves the React app locally.

3. **Run PocketBase**:
   ```bash
   make pocketbase-run
   ```
   This starts the PocketBase backend server locally, allowing API requests to be handled.

## Server Deployment

To deploy the application, use the following commands:

1. **Deploy the frontend**:
   ```bash
   make app-deploy
   ```
   This builds the frontend with Vite and deploys the `dist/` folder to the server.

2. **Deploy PocketBase**:
   ```bash
   make pocketbase-deploy
   ```
   This syncs the PocketBase files and migrations to the server, and runs database migrations.

## Server Configuration

1. **Nginx**:
   The Nginx configuration file is located in `infra/nginx.conf` and is responsible for serving the website and proxying
   requests to the PocketBase backend:
    - `/` (Root location): Serves static files from the `dist/` directory (frontend build).
    - `/pb` (Proxy to PocketBase): Proxies API requests to PocketBase running on `127.0.0.1:8090`. This is where the app
      interacts with the backend for data storage and retrieval.

2. **Systemd Service**:
   The PocketBase server is managed as a systemd service for automatic startup and monitoring.
    - Copy `infra/pocketbase.service` to `/etc/systemd/system/pocketbase-janna.service`.
    - Enable and start the PocketBase server:
      ```bash
      sudo systemctl enable pocketbase-janna
      sudo systemctl start pocketbase-janna
      ```

