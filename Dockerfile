#starting from the latest stable version at the time, can be changed accordingly
FROM node:16.13.1

WORKDIR /opt/app-root/src

ENV USER_ID=1001 \
    GROUP_ID=0 \
    HOME=/opt/app-root \
    APP_HOME=/opt/app-root/src

#don't forget to create the artifact in the pipeline
COPY artifact.tar.gz /opt/app-root/src/artifact.tar.gz
#create non-root user
COPY create_user.sh /usr/local/bin/
#script to run at runtime
COPY startup.sh /usr/local/bin/

#minimal security updates on OS
RUN apt update
RUN apt-get install -y --only-upgrade $( apt-get --just-print upgrade | awk 'tolower($4) ~ /.*security.*/ || tolower($5) ~ /.*security.*/ {print $2}' | sort | uniq )

#unarchiving the tar.gz file
RUN tar xzf /opt/app-root/src/artifact.tar.gz
#installing yarn dependencies
RUN yarn
#linting code files
RUN yarn lint
#creating a production suitable build
RUN NODE_ENV=production yarn build
#creating 1001 user
RUN /usr/local/bin/create_user.sh

#using 1001 user
USER 1001

#exposing the port the app runs on
EXPOSE 3000

#running startup.sh as the main process
ENTRYPOINT ["/usr/local/bin/startup.sh"]
