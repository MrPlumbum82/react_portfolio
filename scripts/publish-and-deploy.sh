#!/bin/bash

# PUBLISH

# Bash Variables
# DOCKERHUB_USERNAME (env var) (update var name)
# DOCKERHUB_PASSWORD (env var) (update var name)
# DOCKERHUB_REPO (local) (create this)
# DOCKERHUB_TAG (local) (create this)

# Build Docker Image
docker build -f ./Dockerfile.prod -t mrplum/react_portfolio .

# Login in to push to docker hub
echo $DOCKER_PASSWORD | docker login -u $DOCKER_USERNAME --password-stdin

# Push to docker hub with tag
docker push mrplum/react_portfolio:latest

# DEPLOY

# Bash Variables
# VPS_USERNAME (env var)
# VPS_PASSWORD (env var)
# VPS_IP (env var)
# DOCKERHUB_USERNAME (env var) (update and use it)
# DOCKERHUB_REPO (local) (create)
# DOCKERHUB_TAG (local) (create)

# Copy Prod YAML File to VPS (update the yml to pull from docker hub)
sshpass -p $VPS_PASSWORD scp -o stricthostkeychecking=no ./docker-compose.prod.yml $VPS_USERNAME@$VPS_IP:/opt/tmp/docker-compose-react-portfolio.yml

# Run Docker Compose Down
sshpass -p $VPS_PASSWORD ssh -o StrictHostKeyChecking=no $VPS_USERNAME@$VPS_IP "docker-compose -f /opt/tmp/docker-compose-react-portfolio.yml down"

# Run Docker Pull
sshpass -p $VPS_PASSWORD ssh -o StrictHostKeyChecking=no $VPS_USERNAME@$VPS_IP "docker pull mrplum/react_portfolio:latest"

# Run Docker Compose Up
sshpass -p $VPS_PASSWORD ssh -o StrictHostKeyChecking=no $VPS_USERNAME@$VPS_IP "docker-compose -f /opt/tmp/docker-compose-react-portfolio.yml up -d"
