#!/bin/bash

# Install Composer dependencies
composer install --no-dev --optimize-autoloader

# Run any PHP-specific build steps here
# For example:
# php artisan config:cache
# php artisan route:cache

# Install Node.js dependencies
npm install

# Run any Node.js build steps here
# For example:
# npm run build