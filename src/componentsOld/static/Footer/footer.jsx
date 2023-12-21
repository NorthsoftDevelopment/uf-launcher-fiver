import React from 'react'
import { Link } from 'react-router-dom'
import './footer.css'

export const Footer = () => {
  return (
    <footer>
            <div className='footer-lists'>
                <div className='footer-list'>
                    <h3>Buscar</h3>
                    <ul>
                        <Link to='/launcher' className='no-decoration'><li>Inhonia Launcher</li></Link>
                        <Link to='/insideweb' className='no-decoration'><li>InsideWeb</li></Link>
                        <Link to='/minecraft' className='no-decoration'><li>Minecraft Dev</li></Link>
                        <Link to='/contact' className='no-decoration'><li>Landing Page</li></Link>
                    </ul>
                </div>
                <div className='footer-list'>
                    <h3>Inhonia Launcher</h3>
                    <ul>
                        <Link to='/launcher'  className='no-decoration'><li>Sobre el</li></Link>
                        <Link to='/launcher/download' className='no-decoration'><li>Descargas</li></Link>
                        <Link to='/launcher' className='no-decoration'><li>Funciones</li></Link>
                        <Link to='/contact' className='no-decoration'><li>Desarrolladores</li></Link>
                    </ul>
                </div>
                <div className='footer-list'>
                    <h3>InsideWeb</h3>
                    <ul>
                        <Link to='/insideweb' className='no-decoration'><li>Sobre el</li></Link>
                        <Link to='https://insideweb.inhonia.com/news' className='no-decoration'><li>Novedades</li></Link>
                        <Link to='https://insideweb.inhonia.com/' className='no-decoration'><li>Dashboard</li></Link>
                        <Link to='/contact' className='no-decoration'><li>Landing page</li></Link>
                    </ul>
                </div>
                <div className='footer-list'>
                    <h3>Minecraft Dev</h3>
                    <ul>
                        <Link to='/minecraft' className='no-decoration'><li>Proyectos</li></Link>
                        <Link to='https://myalbum.com/album/et66BmARh9rtBq/' className='no-decoration'><li>De terceros</li></Link>
                        <Link to='https://discord.gg/nHUCkpqntj' className='no-decoration'><li>Discord</li></Link>
                        <Link to='/minecraft/build' className='no-decoration'><li>Building</li></Link>
                    </ul>
                </div>
                <div className='footer-list'>
                    <h3>Educacion</h3>
                    <ul>
                        <Link to='/minecraft/education' className='no-decoration'><li>Minecraft</li></Link>
                        <Link to='/products/web-page' className='no-decoration'><li>Paginas web</li></Link>
                        <Link to='/contact' className='no-decoration'><li>Contacto</li></Link>
                    </ul>
                </div>

                <div className='footer-list'>
                    <h3>About</h3>
                    <ul>
                        <Link to='/about-us/' className='no-decoration'><li>Nosotros</li></Link>
                        <Link to='/about-us/' className='no-decoration'><li>¿Quienes somos?</li></Link>
                        <Link to='/about-us/experience' className='no-decoration'><li>Experiencia</li></Link>
                        <Link to='https://discord.gg/nHUCkpqntj' className='no-decoration'><li>Discord</li></Link>
                    </ul>
                </div>
            </div>
            <div className='footer-final'>
                <div>
                <img src='https://cdn.discordapp.com/attachments/1098296460786806866/1140008751622017114/inh-full-white.png'></img>
                </div>
            </div>
        </footer>
  )
}
