#!/bin/sh

docker stack deploy -c docker-compose-haproxy.yml testapp
