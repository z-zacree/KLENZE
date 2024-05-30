FROM php:8.3-fpm

# Arguments defined in docker-compose.yml
ARG user
ARG uid

# Set working directory
WORKDIR /var/www

COPY . .

# Install system dependencies
RUN apt-get update && apt-get install -y \
    git \
    curl \
    libpq-dev \
    libpng-dev \
    libonig-dev \
    libxml2-dev \
    zip \
    unzip

# Clear cache
RUN apt-get clean && rm -rf /var/lib/apt/lists/*

# Set PostgreSQL installation path
RUN docker-php-ext-configure pgsql -with-pgsql=/usr/local/pgsql

# Enable OPCache
# RUN docker-php-ext-configure opcache --enable-opcache

# Install PHP extensions
RUN docker-php-ext-install pdo_pgsql mbstring exif pcntl bcmath gd #opcache

# Get latest Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Create system user to run Composer and Artisan Commands
RUN useradd -G www-data,root -u $uid -d /home/$user $user
RUN mkdir -p /home/$user/.composer
RUN mkdir -p /var/www/vendor
RUN chown -R $user:$user /home/$user
RUN chown -R $user:www-data . /var/www

USER $user

RUN composer install --prefer-dist --no-scripts --no-progress --no-interaction

RUN composer dump-autoload -o