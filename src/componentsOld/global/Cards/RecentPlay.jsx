import { InfoCard } from '../../Cards/Card/InfoCard'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Cookies from 'js-cookie'
import bannerLoader from '../../../assets/icon/loader/loader-poster.png'
import backgroundLoader from '../../../assets/icon/loader/loader-background.png'

export const RecentPlay = () => {

    const [instances, setInstances] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        instancesGet()
    }, [])


    const instancesGet = async () => {

        try {


            {
                const api = 'https://inhonia-launcher-api.vercel.app/instance/data'

                var docRef = Cookies.get('recentPlayedID')

                if (docRef === undefined) {
                    docRef = 'oEFiPXiavEfQlfHQ0mgC'
                }

                const data = {
                    location: docRef
                }

                const response = await axios.post(api, data);

                const instances = response.data




                setInstances(instances)

                setLoading(false)


            }

        } catch (error) {

            console.log('error', error)

        }

    }

    return (
        <div>
            {loading ? (
                <InfoCard

                    desc='Cargando..'
                    banner={bannerLoader}
                    background={backgroundLoader}
                />
            ) : (

                <InfoCard

                    title={instances.datos.title}
                    autor={instances.datos.autor}
                    notes={instances.datos.notes}
                    banner={instances.datos.banner}
                    background={instances.datos.img}
                    id={instances.datos.id}
                />

            )}
        </div>
    )
}

export const RecentPlayName = () => {

    const [instances, setInstances] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        instancesGet()
    }, [])


    const instancesGet = async () => {

        try {


            {
                const api = 'https://inhonia-launcher-api.vercel.app/instance/data'

                var docRef = Cookies.get('recentPlayedID')

                if (docRef === undefined) {
                    docRef = 'oEFiPXiavEfQlfHQ0mgC'
                }

                const data = {
                    location: docRef
                }

                const response = await axios.post(api, data);

                const instances = response.data




                setInstances(instances)

                setLoading(false)


            }

        } catch (error) {

            console.log('error', error)

        }

    }

    return (
        <div>
            {loading ? (
                <Link className='no-decoration button-play'>
                <img src='https://cdn.discordapp.com/attachments/910002249651077150/1177882648782307409/play-icon.png?ex=65741fb3&is=6561aab3&hm=05e388c96abf803f02505db64af31d02cbb7c53a46008e633d2c0344403bc110&'></img>
                <h1>...</h1>
            </Link>
            ) : (



                <Link to={`/instance/${instances.datos.id}`} className='no-decoration button-play'>
                    <img src='https://cdn.discordapp.com/attachments/910002249651077150/1177882648782307409/play-icon.png?ex=65741fb3&is=6561aab3&hm=05e388c96abf803f02505db64af31d02cbb7c53a46008e633d2c0344403bc110&'></img>
                    <h1>{instances.datos.title}</h1>
                </Link>



            )}
        </div>
    )
}

