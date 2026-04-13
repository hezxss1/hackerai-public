import { useState } from 'react';

export default function AuthForm({ onAuth }) {
    const [apiKey, setApiKey] = useState('');
    const [sshConfig, setSshConfig] = useState({ host: '', username: '', key: '' });
    const [useSSH, setUseSSH] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        onAuth({ apiKey, sshConfig });
    };

    return (
        <form onSubmit={handleSubmit}>
            {!useSSH ? (
                <div>
                    <label>API Key:</label>
                    <input
                        type="password"
                        value={apiKey}
                        onChange={(e) => setApiKey(e.target.value)}
                        placeholder="LM Studio/OpenRouter/E2B"
                    />
                </div>
            ) : (
                <div>
                    <label>SSH Host:</label>
                    <input
                        type="text"
                        value={sshConfig.host}
                        onChange={(e) => setSshConfig({ ...sshConfig, host: e.target.value })}
                        placeholder="localhost"
                    />
                    <label>Username:</label>
                    <input
                        type="text"
                        value={sshConfig.username}
                        onChange={(e) => setSshConfig({ ...sshConfig, username: e.target.value })}
                        placeholder="user"
                    />
                    <label>SSH Key:</label>
                    <textarea
                        value={sshConfig.key}
                        onChange={(e) => setSshConfig({ ...sshConfig, key: e.target.value })}
                        placeholder="Paste private key"
                    />
                </div>
            )}
            <button type="button" onClick={() => setUseSSH(!useSSH)}>
                {useSSH ? 'Use API Key' : 'Use SSH'}
            </button>
            <button type="submit">Authenticate</button>
        </form>
    );
}