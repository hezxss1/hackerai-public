#!/data/data/com.termux/files/usr/bin/bash
# E2B connection script for Termux

API_KEY=$1
if [ -z "$API_KEY" ]; then
  echo "E2B_API_KEY not set. Skipping E2B."
  exit 1
fi

echo "Connecting to E2B..."
response=$(curl -s -X POST "https://api.e2b.dev/v1/sandbox" \
  -H "Authorization: Bearer $API_KEY" \
  -H "Content-Type: application/json" \
  -d '{"template": "base"}')

if echo "$response" | grep -q "id"; then
  echo "E2B sandbox ready."
  exit 0
else
  echo "E2B connection failed."
  echo "Response: $response"
  exit 1
fi