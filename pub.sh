#!/bin/sh
kill -9 $(lsof -i:7002 -t)
cd /home/admin/app && ls | egrep  -v "^(deep|zbt|aliyun|Learn)[^.]*$" | xargs rm -rf
sudo systemctl restart nginx && systemctl enable nginx
