import './home.css'
import background1 from '../../assets/backgrounds/background-home.png'
import backgroundvanilla from '../../assets/backgrounds/cards/vanilla-background.png'
import backgroundforge from '../../assets/backgrounds/cards/forge-background.png'
import { useAuth0 } from '@auth0/auth0-react';
import Cookies from 'js-cookie';
import { Loader } from '../loader/Loader';
import { Card } from '../Cards/Card/Card';
import { ConnectMinecraft } from '../../private/ConnectMinecraft';

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
        <ConnectMinecraft>
            <div className='page'>

                <div>
                    <div className='zone-full'>
                        <img className='background-all' src={background1} />
                        <div className='zone-1'>
                            <h3 className='title-general'>Instancias Beta</h3>
                            <div className='cards'>
                                <Card
                                    title='Minecraft Vanilla'
                                    image={backgroundvanilla}
                                    link='/launch/vanilla'
                                />


                                <Card
                                    title='Gamership Network'
                                    image='https://cdn.discordapp.com/attachments/1075189121783443588/1141878076402315304/background-mrpolar_1.png'
                                    link='/launch/gamership/net'
                                />


                                <Card
                                    title='Minecraft Forge'
                                    image={backgroundforge}
                                    link='/launch/forge'
                                />


                                <Card
                                    title='Fakeland'
                                    image='https://cdn.discordapp.com/attachments/975766486222266368/1141912870792200212/2022-05-21_10.02.03.png'
                                    link='/launch/extra1'
                                />

                            </div>
                        </div>
                    </div>
                </div>

            </div >
        </ConnectMinecraft>
    )
}
