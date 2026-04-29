set -e

git pull
npm run build
aws s3 cp dist/ s3://cloudosphere-frontend --recursive
aws cloudfront create-invalidation \
  --distribution-id EZD4ART89QW8S \
  --paths "/index.html"
