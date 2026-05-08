-- PostgreSQL CDC Configuration for Debezium
-- This script sets up CDC capabilities for the database

-- Create a dedicated user for Debezium CDC
CREATE USER debezium_user WITH REPLICATION PASSWORD 'debezium_password';

-- Grant necessary permissions
GRANT CONNECT ON DATABASE "envio-dev" TO debezium_user;
GRANT USAGE ON SCHEMA public TO debezium_user;
GRANT SELECT ON ALL TABLES IN SCHEMA public TO debezium_user;
GRANT SELECT ON ALL SEQUENCES IN SCHEMA public TO debezium_user;

-- Grant permissions for future tables
ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT SELECT ON TABLES TO debezium_user;

-- Create publication for CDC (captures all table changes)
CREATE PUBLICATION dbz_publication FOR ALL TABLES;

-- Alternatively, create publication for specific tables:
-- CREATE PUBLICATION dbz_publication FOR TABLE table1, table2;

-- Verify setup
SELECT * FROM pg_publication WHERE pubname = 'dbz_publication';

-- Show current replication slots (will be empty initially)
SELECT slot_name, plugin, slot_type, database, active, confirmed_flush_lsn
FROM pg_replication_slots; 