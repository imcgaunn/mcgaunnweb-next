#!/usr/bin/env bash
ARTIFACT_NAME="doctl-1.60.0-linux-amd64.tar.gz"
wget https://github.com/digitalocean/doctl/releases/download/v1.60.0/${ARTIFACT_NAME}
sudo tar xzf ~/${ARTIFACT_NAME} -C /usr/local/bin/
