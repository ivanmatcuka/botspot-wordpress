FROM wordpress:latest
RUN a2enmod headers
RUN apt update && apt install -y iptables
RUN update-alternatives --set iptables /usr/sbin/iptables-legacy