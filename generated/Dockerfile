# Use Node.js 18+ with Debian base for better native module support
FROM node:18-slim

# Install system dependencies
RUN apt-get update && apt-get install -y \
    bash \
    curl \
    git \
    python3 \
    make \
    g++ \
    build-essential \
    procps \
    && rm -rf /var/lib/apt/lists/*

# Create a non-root user for security early
RUN groupadd -g 1001 envio && \
    useradd -u 1001 -g envio -m -s /bin/bash envio

# Install pnpm globally
RUN npm install -g pnpm@latest

# Set working directory and change ownership
WORKDIR /app
RUN chown -R envio:envio /app

# Switch to envio user for dependency installation
USER envio

# Copy package files for dependency installation
COPY --chown=envio:envio package.json pnpm-lock.yaml ./

# Install dependencies as envio user
RUN pnpm install --frozen-lockfile

# Copy project configuration and source files
COPY --chown=envio:envio config.yaml ./
COPY --chown=envio:envio schema.graphql ./
COPY --chown=envio:envio tsconfig.json ./
COPY --chown=envio:envio src/ ./src/
COPY --chown=envio:envio abi/ ./abi/
COPY --chown=envio:envio test/ ./test/

# Copy generated folder but exclude node_modules to avoid pnpm store conflicts
COPY --chown=envio:envio generated/ ./generated/
RUN rm -rf ./generated/node_modules

# Copy and make startup script executable
COPY --chown=envio:envio generated/start-indexer.sh /app/start-indexer.sh
RUN chmod +x /app/start-indexer.sh

# Build the main TypeScript project
RUN pnpm build

# Build the generated ReScript project
WORKDIR /app/generated

# Install dependencies for the generated project fresh (no frozen lockfile to avoid conflicts)
RUN pnpm install

# Build the generated project
RUN pnpm build

# Install the correct hypersync-client for the container architecture
RUN pnpm add @envio-dev/hypersync-client-linux-arm64-gnu@0.6.5;

# Rebuild native modules for the container architecture
RUN pnpm rebuild || echo "Rebuild failed, continuing..."

# Set up database migrations if needed
RUN pnpm db-setup || echo "Database setup skipped - will be handled at runtime"

# Set working directory to generated folder for runtime
WORKDIR /app/generated

# Expose the port that the indexer runs on
EXPOSE 8081

# Health check command (check if process is running)
HEALTHCHECK --interval=30s --timeout=10s --start-period=60s --retries=3 \
    CMD pgrep -f "ts-node" > /dev/null || exit 1

# Start the indexer using the startup script
CMD ["/app/start-indexer.sh"] 

