#!/bin/bash
set -euo pipefail

rm -rf build
mkdir build


cd ./src-zotero7
zip -r ../build/ai-assistant-zotero7.xpi *
cd ../build


jq ".addons[\"ai.assistant@example.com\"].updates[0].update_hash = \"sha256:`shasum -a 256 ai-assistant-zotero7.xpi | cut -d' ' -f1`\"" ../updates.json.tmpl > updates.json
