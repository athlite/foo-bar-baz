#!/usr/bin/env sh
 
if [ "$NODE_ENV" = "test" ]; then
  yarn test
elif [ "$NODE_ENV" = "production" ]; then
  yarn start
else
  echo "\$NODE_ENV must be set to test or production."
  exit 1
fi
