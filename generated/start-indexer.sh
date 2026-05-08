#!/bin/bash

set -e

echo "Starting Envio Indexer..."
cd /app/generated

echo "Checking native module availability..."
if ! node -e "require('@envio-dev/hypersync-client')" 2>/dev/null; then
    echo "WARNING: hypersync-client not available, but starting anyway..."
fi

echo "Setting up database..."
# Wait for database to be ready using Node.js TCP connection test
echo "Waiting for database to be ready..."
for i in {1..20}; do
    if node -e "
const net = require('net');
const client = new net.Socket();
client.setTimeout(3000);
client.connect(5432, 'envio-postgres', () => {
    console.log('Database connection successful');
    client.destroy();
    process.exit(0);
});
client.on('error', () => {
    client.destroy();
    process.exit(1);
});
client.on('timeout', () => {
    client.destroy();
    process.exit(1);
});
" 2>/dev/null; then
        echo "Database is ready!"
        break
    fi
    if [ $i -eq 20 ]; then
        echo "Database not ready after 20 attempts, proceeding anyway..."
        break
    fi
    echo "Attempt $i/20: Database not ready yet, waiting 3 seconds..."
    sleep 3
done

echo "Running database migrations..."
pnpm db-setup || echo "Database setup failed, continuing anyway..."

echo "Starting indexer process..."
exec pnpm start 
