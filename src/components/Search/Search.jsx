import { useEffect, useState } from 'react';
import axios from 'axios';
import { CardUser } from '../ExtraComponents/global/CardUser';
import { SeparateShort } from '../ExtraComponents/Separate/Separate';
import Sidebar from '../Profile/ProfileBar';
import { FollowingHook } from '../../hooks/Users/FollowingUser';
import followingIcon from '../../assets/icon/hooks/heart-icon.png'

export const Search = () => {
    const [users, setUsers] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredUsers, setFilteredUsers] = useState([]);
    const [sidebarContent, setSidebarContent] = useState({});
    const [isSidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = async (doc) => {


        const datasend = {
            type: 'users',
            doc: doc
        }
        try {
            const api = 'https://inhonia-launcher-api.vercel.app/search/information';
            const response = await axios.post(api, datasend);
            const data = response.data;
            console.log(data);

            setSidebarContent(data.datos)
            setSidebarOpen(!isSidebarOpen);
        } catch (error) {
            console.error('Error fetching data:', error);
        }

    };

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
            setFilteredUsers(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const handleSearch = (event) => {
        const searchTerm = event.target.value.toLowerCase();
        setSearchTerm(searchTerm);


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
                        <div key={index} >
                            <button onClick={() => toggleSidebar(user.user)} className='button-free'>

                                <CardUser name={user.name} img={user.img} />
                            </button>

                        </div>
                    ))}
            </div>

            <Sidebar isOpen={isSidebarOpen} onClose={toggleSidebar} content={<div>


                <div>
                    <div className='sidebar-zone1'>
                        <div className='sidebar-picture'>
                            <img src={sidebarContent.img}></img>
                        </div>

                    </div>

                    <img className='sidebar-background' src='https://cdn.discordapp.com/attachments/910002249651077150/1178107004745682944/Merry-Christmas6_6838525_lrg.jpg?ex=6574f0a6&is=65627ba6&hm=c437a99f08f83a7840cfe7f2e99ccf57adea3942de5f67a35558be962b4524ca&'></img>
                    <SeparateShort />


                    <div>
                        <div className='sidebar-profile'>

                            <div>
                                <h1>{sidebarContent.name}</h1>
                                <p>{sidebarContent.user}</p>
                            </div>


                        </div>

                        <SeparateShort />
                        <div className='sidebar-profile-2' >
                            <button className='button-follow' onClick={() => FollowingHook(sidebarContent.user)}>
                                <img src={followingIcon}></img>
                                <p>Seguir</p>
                            </button>
                        </div>

                    </div>

                </div>

            </div>} />
        </div>
    );
};
