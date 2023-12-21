import axios from "axios";
import Cookies from "js-cookie";

export const instancesGet = async () => {
    try {
        const useremail = Cookies.get('email')
        const email = useremail
        const api = 'https://inhonia-launcher-api.vercel.app/instance/profile'
        const data = {
            user: email
        }
        const response = await axios.post(api, data);
        const instances = response.data
        return instances;


    } catch (error) {

    }

}
