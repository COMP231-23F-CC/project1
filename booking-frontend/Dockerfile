
# 使用nginx来部署应用
FROM  nginx:stable-alpine-slim
COPY ./dist /usr/share/nginx/html

# 暴露80端口
EXPOSE 80

# 启动nginx服务器
CMD ["nginx", "-g", "daemon off;"]
