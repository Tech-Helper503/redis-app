FROM redis/redis-stack:latest

RUN apt install nodejs

ADD ./* $HOME/src/

RUN npm install

RUN npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch 

RUN npm dev