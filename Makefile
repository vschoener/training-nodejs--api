API_SERVICE=api

build:
	docker-compose up --build -d

up:
	docker-compose up -d

debug:
	docker-compose up

down:
	docker-compose down

logs:
	docker-compose logs -f

node-logs:
	docker-compose logs -f $(API_SERVICE)

rm:
	docker-compose down --volume

shell:
	docker-compose exec $(API_SERVICE) bash

ps:
	docker-compose ps

install:
	docker-compose run --rm ${API_SERVICE} bash -c "npm install"
