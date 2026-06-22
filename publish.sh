pnpm build
rsync -avh ./dist/* thatalexguy@bsd:/var/www/htdocs/ --delete --progress
