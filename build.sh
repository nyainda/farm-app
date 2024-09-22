#!/bin/bash

# Install PHP dependencies
composer install --no-dev --optimize-autoloader

# Generate Ziggy routes
php artisan ziggy:generate

# Install Node.js dependencies
npm ci

# Build assets
npm run build

# Run any additional Laravel commands
php artisan config:cache
php artisan route:cache
php artisan view:cache