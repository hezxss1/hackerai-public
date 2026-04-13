#!/data/data/com.termux/files/usr/bin/bash
# Termux: OpenRouter, Hugging Face, NVIDIA, and E2B

clear
echo "🚀 HackerAI Termux Setup 🚀"
echo "----------------------------------"

# Install dependencies
pkg update -y && pkg upgrade -y
pkg install nodejs python git curl -y
npm install -g pnpm

# Clone and install
pnpm install

# Copy .env.example to .env
cp .env.example .env

# Prompt for API selection
echo "\nSelect your API provider:"
PS3="Choose an option: "
options=("OpenRouter" "Hugging Face" "NVIDIA" "E2B")
select opt in "${options[@]}"; do
  case $opt in
    "OpenRouter")
      echo "API_PROVIDER=openrouter" >> .env
      read -p "Paste your OpenRouter API key: " api_key
      echo "OPENROUTER_API_KEY=$api_key" >> .env
      break
      ;;
    "Hugging Face")
      echo "API_PROVIDER=huggingface" >> .env
      read -p "Paste your Hugging Face API key: " api_key
      echo "HUGGINGFACE_API_KEY=$api_key" >> .env
      break
      ;;
    "NVIDIA")
      echo "API_PROVIDER=nvidia" >> .env
      read -p "Paste your NVIDIA API key: " api_key
      echo "NVIDIA_API_KEY=$api_key" >> .env
      break
      ;;
    "E2B")
      echo "API_PROVIDER=e2b" >> .env
      read -p "Paste your E2B API key: " api_key
      echo "E2B_API_KEY=$api_key" >> .env
      break
      ;;
    *) echo "Invalid option. Exiting."; exit 1 ;;
  esac
done

# Prompt for model selection
echo "\nEnter the model you want to use (e.g., mistralai/mistral-7b-instruct-v0.1):"
read -p "Model: " model
echo "MODEL=$model" >> .env

# Confirm E2B integration if E2B is selected
if grep -q "API_PROVIDER=e2b" .env; then
  echo "\nE2B integration selected. Testing connection..."
  bash e2b/connect.sh $api_key
  if [ $? -eq 0 ]; then
    echo "E2B connection successful!"
  else
    echo "E2B connection failed. Check your API key."
    exit 1
  fi
fi

echo "\n🎉 Setup complete!"
echo "Run the app with: pnpm start"
