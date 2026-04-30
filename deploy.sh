set -e

cd /home/ubuntu/cloudStorageApp-frontend

git pull
npm i
npm run test
npm run build
aws s3 cp dist/ s3://cloudosphere-frontend --recursive
aws cloudfront create-invalidation \
  --distribution-id EZD4ART89QW8S \
  --paths "/index.html"
