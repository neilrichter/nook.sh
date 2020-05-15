#!/bin/bash

[ -d "node_modules" ] && NODE_ENV=DEV npm i
npm run dev