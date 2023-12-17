import { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Loader } from "../../loader/Loader";
import axios from "axios";
import { Card } from "../../Cards/Card/Card";

export const AllInstances = () => {

    const { user, isAuthenticated, isLoading } = useAuth0();
    const [instances, setInstances] = useState([]);
    const [loading2, setLoading2] = useState(true)

    if (isLoading) {
        return <Loader reason='Recuperando perfil' />;
    }

    useEffect(() => {

        //Take user mc profil
        instancesGet()

    }, []);

    const instancesGet = async () => {

        try {


            if (isAuthenticated) {
                const email = user.email
                const api = 'https://inhonia-launcher-api.vercel.app/instance/profile'

                const data = {
                    user: email
                }

                const response = await axios.post(api, data);

                const instances = response.data




                setInstances(instances)

            }

        } catch (error) {

        }

    }


    return (
        <div className='cards'>

            {instances.length > 0 ? (
                instances.map((instance, index) => (

                    <Card key={index}
                        title={instance.datos.title}
                        link={`/instance/${instance.datos.id}`}
                        image={instance.datos.banner}
                    />

                ))
            ) : (
                <div>
                    <h4 className="title-general">Crea, diseña y construye</h4>
                    <p>Lamentamos informarte que por ahora no tienes instancias en tu cuenta, explora para descubrir mas.</p>
                </div>

            )}

        </div>
    )
}
