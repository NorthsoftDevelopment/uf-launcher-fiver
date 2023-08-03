import Cookies from 'js-cookie'
import './Complete.css'
import { useAuth0 } from '@auth0/auth0-react'

export const LoginComplete = () => {
    const {user} = useAuth0()
    const Profile = Cookies.get('userinfo')

    const profile = JSON.parse(Profile)

    console.log(profile.img)

  return (
    <div className='profile-full'>
        <img className='user-big' src={user.picture} alt='imagen'></img>
        <h2>Listo para jugar</h2>
        <h2>{user.className}</h2>
        <p>{user.email}</p>
    </div>
  )
}
