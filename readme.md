# Laravel Realtime with laravel-echo-server

use :

 - Laravel 8.0
 - docker 
	 - php 7.4
	 - Apache debian:jessie
	 - MySql 8.0 & PhpMyAdmin
	 - MongoDB // Mongo-Express
	 - Node 10 
		 - laravel-echo-server
	 - Redis

# Installation process

 - ### launch docker-compose
	>		docker-compose up --build
   
  - ### Connect to the php container
  
	> 		docker exec -it laravel_realtime_php bash
	>		cd www/
	>		cp .env.example .env
	> 		composer install
	>		php artisan key:generate
	>		npm install
	>		npm run dev

### Application running at http://localhost:8000/


# For test realtime

connect to http://localhost:8000/testEvent
and watch http://localhost:8000/

**Play with and Enjoy** :blush:

 # For More

 - mongo-express running at http://localhost:8081/
 - laravel application is configure with container mongodb
- access to redis-cli with
	>		docker exec -it laravel_realtime_redis redis-cli
- access to logs of laravel-echo-server
	> 		docker logs laravel_realtime_node -f


# Documentation

 - https://www.docker.com/
 - https://laravel.com/docs/8.x
 - https://github.com/tlaverdure/laravel-echo-server
 - https://redis.io/
 - https://www.mongodb.com/fr
