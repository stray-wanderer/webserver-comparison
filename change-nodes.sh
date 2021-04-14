#!/bin/sh
docker service scale testapp_testapp="$1"
