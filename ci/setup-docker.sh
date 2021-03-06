#!/usr/bin/env bash

# Enable bash strict mode
set -euo pipefail

sudo mount -t tmpfs -o size=4G /dev/null /dev/shm
sleep 2
sudo nohup dockerd --bip 172.18.0.1/16 </dev/null >/dev/null 2>&1 &
sudo usermod -aG docker $(whoami)
