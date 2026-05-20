# Stage 1: build frontend
FROM node:20 AS frontend-build

WORKDIR /app/frontend
COPY frontend/package*.json ./
RUN npm install
COPY frontend/ .
RUN npm run build


# Stage 2: backend
FROM node:20

WORKDIR /app/backend

COPY backend/package*.json ./
RUN npm install

COPY backend/ .

# copy React build into backend/public
COPY --from=frontend-build /app/frontend/build ./public

EXPOSE 5000

CMD ["npm", "start"]