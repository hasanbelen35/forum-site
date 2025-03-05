FROM node:18-alpine AS builder

WORKDIR /app

# Paketleri yükle
COPY package.json package-lock.json ./
RUN npm install --frozen-lockfile

COPY . .
RUN npm run build

RUN rm -rf node_modules && npm install --omit=dev

FROM node:18-alpine

WORKDIR /app  

COPY --from=builder /app/package.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/src ./src  

# Portu aç
EXPOSE 3000

# Production modunda başlat
CMD ["npm", "run", "start"]
