#!/bin/bash

# Start the server in the background
cd server && npm start &

# Start the client
cd client && npm run dev 