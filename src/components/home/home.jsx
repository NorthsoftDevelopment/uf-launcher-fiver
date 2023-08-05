import './home.css'
import background1 from '../../assets/backgrounds/background-home.png'
import { useAuth0 } from '@auth0/auth0-react';
import Cookies from 'js-cookie';
import { Loader } from '../loader/Loader';

export const HomePage = () => {

    const { user, isAuthenticated, isLoading } = useAuth0();

    if (isLoading) return <Loader />

    if (isAuthenticated) {
    
        const email = JSON.stringify(user.email)
    
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
                            <a href='src/launchers/1/index.html' className='no-color'>
                                <div className='card'>
                                    <img className='img-card' src={background1}></img>
                                    <p className='text-card'>Minecraft Vanilla</p>
                                </div>
                            </a>
                            <a href='src/launchers/2/index.html' className='no-color'>
                            <div className='card' >
                                <img className='img-card' src={background1}></img>
                                <p className='text-card'>Minecraft Forge</p>
                            </div>
                            </a>
                            <a href='src/launchers/3/index.html' className='no-color'>
                            <div className='card'>
                                <img className='img-card' src={background1}></img>
                                <p className='text-card'>Minecraft Optifine</p>
                            </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}
