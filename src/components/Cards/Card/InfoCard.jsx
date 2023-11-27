import React from 'react'
import { Link } from 'react-router-dom'

export const InfoCard = ({ banner, background, title, notes, autor, id }) => {
    return (
        <div className='infocard-container'>
            <div className='infocard-data'>
                <img src={banner}></img>
                <div className='infocard-data-text'>
                    <h2>{title}</h2>
                    <h4>{autor}</h4>
                    <p>{notes}</p>
                    <Link className='button-play-cards no-decoration' to={`/instance/${id}`}>
                        <img src='https://cdn.discordapp.com/attachments/910002249651077150/1177882648782307409/play-icon.png?ex=65741fb3&is=6561aab3&hm=05e388c96abf803f02505db64af31d02cbb7c53a46008e633d2c0344403bc110&'></img>
                        <h1>JUGAR</h1>
                    </Link>
                </div>
                
            </div>
            <div className='infocard-background'>
                <img src={background}></img>
            </div>
        </div>
    )
}
