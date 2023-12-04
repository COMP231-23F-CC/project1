# 使用最新版本的 Node.js 作为基础镜像
FROM node:alpine

# 设置工作目录为 /app
WORKDIR /app

# 复制项目文件到工作目录
COPY . .

# 安装 pnpm、复制 package.json 和 pnpm-lock.yaml 文件，并安装项目依赖
# 所有这些步骤都在一个 RUN 指令中完成
RUN npm install -g pnpm && \
    pnpm install



# 暴露 3000 端口，Vite 默认端口
EXPOSE 80

# 运行 Vite 开发服务器
CMD ["pnpm", "run", "dev2"]
