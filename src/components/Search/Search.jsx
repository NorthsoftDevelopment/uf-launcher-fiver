import { useEffect, useState } from 'react';
import axios from 'axios';
import { CardUser } from '../ExtraComponents/global/CardUser';
import { SeparateShort } from '../ExtraComponents/Separate/Separate';

export const Search = () => {
    const [users, setUsers] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredUsers, setFilteredUsers] = useState([]);

    useEffect(() => {
        instancesGet();
    }, []);

    const instancesGet = async () => {
        try {
            const api = 'https://inhonia-launcher-api.vercel.app/search';
            const response = await axios.get(api);
            const data = response.data;
            console.log(data);
            setUsers(data);
            setFilteredUsers(data); // Inicialmente, los usuarios filtrados son iguales a todos los usuarios.
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const handleSearch = (event) => {
        const searchTerm = event.target.value.toLowerCase();
        setSearchTerm(searchTerm);

        // Filtrar usuarios basándose en el término de búsqueda
        const filteredUsers = users.filter((user) =>
            user.name.toLowerCase().includes(searchTerm)
        );
        setFilteredUsers(filteredUsers);
    };

    return (
        <div className='content'>
            <div className='titles'>
                <div>
                <h1 className='title-general-bold-big'>BUSCAR</h1>
                <h3>Busca Instancias, Usuarios Y Blogs</h3>
                </div>
                
                
                <input
                    type='text'
                    placeholder='Buscar Usuarios'
                    className='input-general'
                    value={searchTerm}
                    onChange={handleSearch}
                />
            </div>

            <SeparateShort />


            <div className='cards'>
                {Array.isArray(filteredUsers) &&
                    filteredUsers.map((user, index) => (
                        <div key={index}>
                            <CardUser name={user.name} img={user.img} />
                        </div>
                    ))}
            </div>
        </div>
    );
};
