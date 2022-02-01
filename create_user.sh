#!/bin/bash -e

if [[ ${DEBUG} == "true" ]]; then set -x; else set +x; fi

if [ x"$USER_ID" != x"0" ]; then
    echo "default:x:${USER_ID}:${GROUP_ID}:Default Application User:${HOME}:/bin/bash" >> /etc/passwd
fi

find "${HOME}" -not -path "*/node_modules*" -exec chown -R ${USER_ID} {} \;
find "${HOME}" -not -path "*/node_modules*" -exec chgrp -R ${GROUP_ID} {} \;
find "${HOME}" -not -path "*/node_modules*" -exec chmod -R g+rw {} \;
find "${HOME}" -not -path "*/node_modules*" -type d -exec chmod g+x {} +
