#!/bin/bash
docker images |grep none | awk '{print "docker rmi -f" , $3}'|sh