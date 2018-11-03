#!/bin/bash
export SCRIPT_DIR=$(dirname `readlink -f ${0}`)
export PROJECT_DIR=$(dirname ${SCRIPT_DIR})

export GITHUB_PAGE=edimarlnx.github.io
export COMMIT_MSG="Deploy by build on `date '+%Y-%m-%d %H:%M'`"

# Build project
cd ${PROJECT_DIR}
ng build --prod

# Publish project
cd ${SCRIPT_DIR}
if [ -d ${GITHUB_PAGE} ]; then
  rm -rf ${GITHUB_PAGE}
fi
git clone git@github.com:edimarlnx/${GITHUB_PAGE}.git
cd ${GITHUB_PAGE}
rm -rf *.js *.css *.html assets rest
cp -rp ../../dist/* ./
git add .
git commit -m "${COMMIT_MSG}"
git push origin master