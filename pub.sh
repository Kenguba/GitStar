#!/bin/sh
kill -9 $(lsof -i:7002 -t)
cd /home/admin/app && ls | egrep  -v "^(deep|zbt|aliyun|Learn)[^.]*$" | xargs rm -rf
<<<<<<< HEAD
sudo systemctl restart nginx && systemctl enable nginx
=======
sudo systemctl start nginx && systemctl enable nginx
>>>>>>> 框架设计基本完毕,等待二次开发
