#!/bin/bash

set -e
set -u

function create_database() {
  local database=$1
  echo "  Creating database '$database'"
  psql -v ON_ERROR_STOP=1 --username "root" --dbname "postgres" <<-EOSQL
        CREATE DATABASE $database;
        GRANT ALL PRIVILEGES ON DATABASE $database TO "root";
EOSQL
}

if [ -n "${POSTGRES_MULTIPLE_DATABASES:-}" ]; then
  echo "Databases to create: $POSTGRES_MULTIPLE_DATABASES"
  for db in $(echo $POSTGRES_MULTIPLE_DATABASES | tr ',' ' '); do
    create_database $db
  done
  echo "Multiple databases created"
fi