#!/bin/bash

npm run build
echo "Building TS Build"

docker build -t cex-db-ingestor .
echo "Docker Image Build"
