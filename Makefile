NAME = inception

all: prune linux reload

linux:
	echo "127.0.0.1 mazoukni.42.fr" >> /etc/hosts
	
stop:
	docker-compose -f srcs/docker-compose.yml down

prune:
	docker system prune -f

reload: 
	docker-compose -f srcs/docker-compose.yml up --build

.PHONY: linux stop clean prune reload all
