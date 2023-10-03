import './home.css'
import background1 from '../../assets/backgrounds/background-home.png'
import backgroundvanilla from '../../assets/backgrounds/cards/vanilla-background.png'
import backgroundforge from '../../assets/backgrounds/cards/forge-background.png'
import { useAuth0 } from '@auth0/auth0-react';
import Cookies from 'js-cookie';
import { Loader } from '../loader/Loader';
import { Card } from '../Cards/Card/Card';
import { ConnectMinecraft } from '../../private/ConnectMinecraft';
import { Tooltip } from '../ExtraComponents/Tooltips/Tooltip';
import { Separate, SeparateShort } from '../ExtraComponents/Separate/Separate';

export const HomePage = () => {

    const changeSkin = () => {
        const { shell } = require('electron');
        shell.openExternal('https://discord.gg/nHUCkpqntj');
      };

    //Auth imports and loader
    const { user, isAuthenticated, isLoading } = useAuth0();
    if (isLoading) return <Loader />


    //Actualizacion del email del usuario
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
                        <img className='background-all' src='https://th.bing.com/th/id/R.85d080d1c31d978ed05b2dc467753447?rik=mDhFJliEg9ECpA&riu=http%3a%2f%2fwww.justpushstart.com%2fwp-content%2fuploads%2f2015%2f10%2fMinecraft-Halloween.png&ehk=Gq7FOiDef7LI33RXAcaCpPlv%2fr3pJTd%2fO7lUkzy52Cs%3d&risl=&pid=ImgRaw&r=0' />
                        <div className='zone-1'>
                            <h1 className=''>¡Feliz Halloween!</h1>
                            <h3 className='title-general'>Instancias Vanilla</h3>
                            <div className='cards'>
                                <Card
                                    title='Minecraft Vanilla'
                                    image={backgroundvanilla}
                                    link='/launch/vanilla'
                                />

                                <Card
                                    title='Minecraft Forge'
                                    image={backgroundforge}
                                    link='/launch/forge'
                                />

                            </div>
                        </div>
                    </div>
                </div>
                <div className='content'>
                    <h3 className='title-general'>Algunas novedades...</h3>
                    <div className='cards'>
                        <Card
                            title='Halloween en el launcher'
                            image='https://static.planetminecraft.com/files/resource_media/screenshot/1802/2017-11-01-16-46-30-1515494419_lrg.png'
                        />

                        <Card
                            title='Comparte el launcher desde nuestra pagina'
                            image='https://www.dropbox.com/scl/fi/8ij9vokra7jwijajv0ppu/notice-slide1.png?rlkey=pgoh8y205t6porlgmolvvved2&dl=1'
                            link='https://beta.inhonia.com/launcher'
                        />

                        <Card
                            title='Minecraft Forge y Vanilla No funcionan'
                            image={backgroundforge}
                        />

                    </div>

                    <Separate />

                    <h3 className='title-general'>¿Necesitas una instancia?</h3>

                    <p>Solicitala desde nuestro discord! Puedes llegar a tener una instancia privada para compartir con tus amigos/proyecto.</p>

                    <SeparateShort />
                    <button className='button-general' onClick={changeSkin}>Entrar ahora</button>
                </div>

            </div >
        </ConnectMinecraft>
    )
}
