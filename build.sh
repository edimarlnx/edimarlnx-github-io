docker ps -a
docker run --rm -v %cd%/:/env node:8-alpine sh -c "cd /env && npm install && ./node_modules/@angular/cli/bin/ng build --prod && ls"
