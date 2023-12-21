import { useEffect, useState } from 'react'
import './style.css'
import axios from 'axios'
import { useAuth0 } from '@auth0/auth0-react'
import { Loader } from '../../loader/Loader'

export const Following = () => {

    const [following, setFollowing] = useState([])
    const { user, isAuthenticated, isLoading } = useAuth0();

    useEffect(() => {
        instancesGet()
    }, [user.email])

    const instancesGet = async () => {

        if (isAuthenticated) {
            try {
                const emailValue = user.email;
                const api = `http://localhost:3000/users?email=${emailValue}`;
                const response = await axios.get(api);

                const data = response.data;

                setFollowing(data.data[0].follows);

                console.log(following);

            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }

    };

    return (
        <div className='following-content'>
           {following.length > 0 ? (
            following.map((item) => (
                <div key={item.id} className='following-card'>
                    <div className='following-card-left'>
                        <img src={item.profileImage} alt={`Profile of ${item.username}`} />
                        <div className='following-card-content'>
                            <h2>{item.username}</h2>
                            <p>{item.activity}</p>
                        </div>
                    </div>
                    <div>
                        <h1>+</h1>
                    </div>
                </div>
            ))
        ) : (
            <p>No estás siguiendo a nadie actualmente.</p>
        )}

    
        </div>
    )
}
