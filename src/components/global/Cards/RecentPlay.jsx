import { InfoCard } from '../../Cards/Card/InfoCard'
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
                const api = 'http://localhost:3000/instance/data'

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
