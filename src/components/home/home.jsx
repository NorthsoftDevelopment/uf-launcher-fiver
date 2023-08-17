import './home.css'
import background1 from '../../assets/backgrounds/background-home.png'
import backgroundvanilla from '../../assets/backgrounds/cards/vanilla-background.png'
import backgroundforge from '../../assets/backgrounds/cards/forge-background.png'
import { useAuth0 } from '@auth0/auth0-react';
import Cookies from 'js-cookie';
import { Loader } from '../loader/Loader';
import { Card } from '../Cards/Card/Card';

export const HomePage = () => {

    const { user, isAuthenticated, isLoading } = useAuth0();

    if (isLoading) return <Loader />

    if (isAuthenticated) {
    
        const email = [user.email]
    
        Cookies.set('email', email, { expires: 365, sameSite: 'strict' });

        console.log('email actualizado')
      } else {
        Cookies.set('email', null, { expires: 365, sameSite: 'strict' });

        console.log('no estas loegado')
      }

    return (
        <div className='page'>
            <div>
                <div className='zone-full'>
                    <img className='background-all' src={background1} />
                    <div className='zone-1'>
                        <h3 className='title-general'>Lo mas visto</h3>
                        <div className='cards'>
                            <a href='/launch/vanilla' className='no-color'>
                                <Card
                                title='Minecraft Vanilla'
                                image={backgroundvanilla}
                                />
                            </a>
                            <a href='/launch/forge' className='no-color'>
                            <Card
                                title='Minecraft Forge'
                                image={backgroundforge}
                                />
                            </a>
                            <a href='/launch/gamership/net' className='no-color'>
                            <Card
                                title='Gamership Network'
                                image={background1}
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}
