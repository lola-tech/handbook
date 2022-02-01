#!/bin/bash -e
echo -e "\n---> run time\n"

export RUN_COMMAND=${RUN_COMMAND:-"yarn start"}

(eval "${RUN_COMMAND}")
