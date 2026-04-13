# HackerAI Public

**Uncensored, open-source AI agent with custom authentication.**

## Features
- **No bullshit**: Only requires LM Studio, OpenRouter, E2B, or SSH.
- **Uncensored**: No content restrictions.
- **Agent mode**: Full functionality preserved.

## Setup
1. Clone this repo:
   ```bash
   git clone https://github.com/hezxss1/hackerai-public.git
   cd hackerai-public
   npm install
   ```
2. Open `public/api-key-ui.html` in your browser.
3. Select your provider and enter your API key or SSH details.
4. Click **Save & Start HackerAI**.

## Providers
| Provider      | Key Format          | Notes                          |
|---------------|---------------------|--------------------------------|
| LM Studio     | Any long string     | Local inference                |
| OpenRouter    | `sk-or-...`         | Select a model in the UI      |
| E2B           | `e2b-...`           | Cloud inference                |
| SSH           | N/A                  | Local inference via SSH        |

## Running
- After saving your config, run:
  ```bash
  npm start
  ```
- Open `http://localhost:3000` in your browser.

## Contributing
Pull requests welcome. For major changes, open an issue first.

## License
MIT