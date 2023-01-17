import axios from 'axios';
import { useCallback, useEffect, useState } from 'react';
import './App.css';
import { Login } from './pages/login/Login';
import { CONTACTS_URL, USERS_URL } from './utils/constants';

function App() {
    const [users, setUsers] = useState<string[]>([]);

    const fetchData = useCallback(async () => {
        try {
            const { data } = await axios.get(USERS_URL);
            setUsers(data);
        } catch (error) {}
    }, []);
    useEffect(() => {
        fetchData().catch((e) => console.log(e));
    }, [fetchData]);

    return (
        <div className="App">
            <Login />
            <p>{JSON.stringify(users)}</p>
        </div>
    );
}

export default App;
