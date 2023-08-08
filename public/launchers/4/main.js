const Cookies = require('js-cookie')
const axios = require('axios')

const email = Cookies.get('email')

console.log(email)

const api = 'https://inhonia-launcher-api.vercel.app/instance/whitelist'
const docUbi = 'oEFiPXiavEfQlfHQ0mgC'

const docRef = [docUbi]

axios.post(api, docRef)

      .then((response) => {

        console.log(response.data);

        const whitelist = response.data

        if (email === 'koraook@gmail.com') {

            document.getElementById('tabla').style.display = "flex"
            
            console.log('Usuario Administrador')
        
        } else {
        
            console.log('not admin user')
        
        }
        
        
        if (whitelist.includes(email)) {

            console.log('Usuario en whitelist');

          } else {

            window.location.href = '/';
          }

        console.log('Sucessfully Get')
      })

      .catch((error) => {
        console.error(error);

        window.location.href = '/'


      });




function useradd() {

    var usermail = document.getElementById('adduser').value

    var email = [usermail]

    const datasend = {
        email: email,
        ubicacion: 'oEFiPXiavEfQlfHQ0mgC'
    }

    const api = 'https://inhonia-launcher-api.vercel.app/instance/adduser'

    axios
      .post(api, datasend)

      .then((response) => {
        console.log(response.data);

        console.log('Send Sucessfully')
      })

      .catch((error) => {
        console.error(error);
      });

}




