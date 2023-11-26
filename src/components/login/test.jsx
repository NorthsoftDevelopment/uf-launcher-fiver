import { useEffect, useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import { Loader } from '../loader/Loader';
import './login.css'

export const Test = () => {
  const [profileImageUrl, setProfileImageUrl] = useState(null);

  useEffect(() => {
    // Esta función se ejecutará una vez que el componente haya sido montado en el DOM.
    // Puedes poner aquí la lógica que desees ejecutar al cargar la página.
    test();
  }, []);

  const test = async () => {
    axios.get('https://inhonia-launcher-api.vercel.app/profile')
      .then(response => {
        const data = response.data
        const id = data.docId._path.segments[1]

        axios.put('https://inhonia-launcher-api.vercel.app/auth/profile', id)

          .then(response => {

            const profile = response.data
            const displayname = profile.displayName
            const mail = profile._json.mail

           

            const user = {
              displayname: displayname,
              mail: mail,
              img: '', 
            }

            axios.get('https://graph.microsoft.com/v1.0/me/photo/$value', {

              headers: {
                Authorization: `Bearer ${profile.accessToken}`
              },

              responseType: 'arraybuffer'
            })

              .then(response => {

                const imageUrl = URL.createObjectURL(new Blob([response.data]));

                user.img = imageUrl

                setProfileImageUrl(imageUrl)

                const userJSON = JSON.stringify(user);

                Cookies.set('userinfo', userJSON, { expires: 7, sameSite: 'strict' });

                window.location.href = '/auth/complete'
              })
              .catch(error => {
                console.error(error);

                const userJSON = JSON.stringify(user)

                Cookies.set('userinfo', userJSON, { expires: 7, sameSite: 'strict' });

                console.log('Error al cargar la imagen del usuario')

                //window.location.href = '/auth/complete'

              });
              
              const userJSON = JSON.stringify(user);

                Cookies.set('userinfo', userJSON, { expires: 7, sameSite: 'strict' });

                window.location.href = '/auth/complete'
                
          })
          .catch(error => {
            console.error(error);
          });
      })
      .catch(error => {
        console.error(error);
      });
  }

  return (
    <div>

      <img className='devuser-img' src={profileImageUrl}/>    
    <Loader />

    </div>
  )
}
