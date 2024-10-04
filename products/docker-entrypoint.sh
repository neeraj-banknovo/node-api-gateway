#!/bin/sh

echo "Preparing .env..."
cp sample.env .env

echo "Running migrations..."
yarn migration:run

echo "Starting products service"
exec node dist/main
