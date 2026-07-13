#!/usr/bin/env bash
set -euo pipefail
# Used when Easypanel/Nixpacks Install Command is set to: bash ./scripts/easypanel-install.sh
if [ -f package-lock.json ]; then
  npm ci --no-audit --no-fund || npm install --no-audit --no-fund
else
  npm install --no-audit --no-fund
fi
