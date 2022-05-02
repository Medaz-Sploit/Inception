NAME = inception

all: prune linux reload

linux:
	echo "127.0.0.1 mazoukni.42.fr" >> /etc/hosts
	
stop:
	docker-compose -f srcs/docker-compose.yml down

prune:
	docker system prune -f
	docker kill $(docker ps -q)
	docker rm $(docker ps --filter=status=exited --filter=status=created -q)
	docker rmi $(docker images -a -q)


reload: 
	docker-compose -f srcs/docker-compose.yml up --build

.PHONY: linux stop clean prune reload all
