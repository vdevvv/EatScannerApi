FROM node:20-alpine AS builder
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npx prisma generate
RUN npm run build

FROM node:20-alpine
WORKDIR /usr/src/app
COPY --from=builder /usr/src/app/package*.json ./
RUN npm install --omit=dev
COPY --from=builder /usr/src/app/dist ./dist
COPY --from=builder /usr/src/app/prisma ./prisma

CMD ["npm", "run", "start:prod"]