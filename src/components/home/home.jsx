import React from 'react'
import './home.css'
import background1 from '../../assets/backgrounds/background-home.png'

export const HomePage = () => {

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
                            <a href='src/launchers/test/index.html' className='no-color'>
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
