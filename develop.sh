#!/bin/bash
# Function to run when the script is cancelled
cleanup() {
  echo "Caught interrupt signal, stopping services..."
  docker compose down
  exit 0
}
# Trap SIGINT and call cleanup function
trap cleanup SIGINT

# Check for skip-docker parameter
SKIP_DOCKER="false"
while [[ $# -gt 0 ]]; do
  case $1 in
    --skip-docker)
      SKIP_DOCKER="true"
      shift
      ;;
    *)
      shift
      ;;
  esac
done

# Builds and runs the postgres, cache , rabbitmq
if [ "$SKIP_DOCKER" != "true" ]; then
  echo "Starting docker services..."
  docker compose up postgres cache rabbitmq --detach
else
  echo "Skipping docker services..."
fi

# Intall the dependencies
npm install

# Prisma migrate
npx prisma migrate dev

# Start the api service and the consumer service
concurrently \
  --prefix "[{name}]" \
  --names "API,CONSUMER" \
  --prefix-colors "bgBlue.bold,bgGreen.bold" \
  "npm run api:dev" \
  "npm run consumer:dev"

# Keep the script running
wait
