# hackerai-public

Fork of [hackerai](https://github.com/hackerai-tech/hackerai) with custom authentication (LM Studio/OpenRouter/E2B/SSH) and uncensored mode.

## Features
- Supports LM Studio, OpenRouter, and E2B API keys, or SSH for local inference.
- Removes content restrictions and censorship.
- Preserves the original agent mode.

## Setup
1. Clone this repository.
2. Install dependencies: `npm install`
3. Configure your API keys in `.env` or via the UI.
4. Run the application.

## Authentication
- Set `LM_STUDIO_API_KEY`, `OPENROUTER_API_KEY`, or `E2B_API_KEY` in `.env`.
- For local inference, configure SSH access in the settings.

## Contributing
Pull requests are welcome. For major changes, please open an issue first.

## License
MIT