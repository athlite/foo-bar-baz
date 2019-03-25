#!/usr/bin/env sh
 
if [ "$NODE_ENV" = "test" ]; then
  yarn test
else
  yarn start
fi
