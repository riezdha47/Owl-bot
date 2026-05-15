import { useEffect, useState } from 'react';

import api from '../services/api';

export default function Settings() {
    const [settings, setSettings] = useState({});

    useEffect(() => {
        fetchSettings();
    }, []);

    const fetchSettings = async() => {
        try {
            const response = await api.get('/settings', {
                params: {
                    guildId: '123456789'
                }
            });

            setSettings(response.data.data || {});
        } catch (error) {
            console.log(error);
        }
    };

    const saveSettings = async() => {
        try {
            await api.post('/settings', {
                guildId: '123456789',
                data: settings
            });

            alert('Settings Saved');
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div>
            <h1>Settings Page</h1>

            <input
                type="text"
                placeholder="Prefix"
                value={settings.prefix || ''}
                onChange={(e) =>
                    setSettings({
                        ...settings,
                        prefix: e.target.value
                    })
                }
            />

            <button onClick={saveSettings}>
                Save
            </button>
        </div>
    );
}
