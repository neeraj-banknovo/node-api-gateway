# Copying the .env file

echo "Copying the .env files..."

cp users/sample.env users/.env
cp orders/sample.env orders/.env
cp products/sample.env products/.env

# Create the databases
chmod +x ./create-databases.sh

# Start the services
echo "Setting up the containers..."
docker-compose up