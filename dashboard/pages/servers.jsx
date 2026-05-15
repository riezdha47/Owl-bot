import { useEffect, useState } from 'react';

import api from '../services/api';

export default function Servers() {
    const [servers, setServers] = useState([]);

    useEffect(() => {
        fetchServers();
    }, []);

    const fetchServers = async() => {
        try {
            const response = await api.get('/guilds');

            setServers(response.data.data);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div>
            <h1>Servers Page</h1>

            {
                servers.map(server => (
                    <div key={server.id}>
                        {server.name}
                    </div>
                ))
            }
        </div>
    );
}
