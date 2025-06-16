#!/bin/bash
cd /home/kavia/workspace/code-generation/minimalhabit-tracker-45574-2d22891d/minimalhabit_tracker
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

