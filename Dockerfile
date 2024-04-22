FROM node:20-alpine
WORKDIR /app

# Копируем файлы package.json и package-lock.json
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем остальные файлы проекта
COPY . .

# Собираем приложение
RUN npm run build

# Указываем порт, на котором будет работать приложение
EXPOSE 3000

ENV PORT 3000
ENV HOSTNAME localhost

# Запускаем приложение при старте контейнера
CMD ["npm", "start"]
