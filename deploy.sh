#!/bin/bash

# Build the project
npm run build

# Install Netlify CLI if not already installed
if ! command -v netlify &> /dev/null; then
    npm install netlify-cli -g
fi

# Deploy to Netlify
netlify deploy --prod
