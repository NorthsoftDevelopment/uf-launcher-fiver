import Cookies from 'js-cookie'
import './Complete.css'

export const LoginComplete = () => {

    const Profile = Cookies.get('userinfo')

    const profile = JSON.parse(Profile)

    console.log(profile.img)

  return (
    <div className='profile-full'>
        <img className='user-big' src={profile.img} alt='imagen'></img>
        <h2>Listo para jugar</h2>
        <h2>{profile.displayname}</h2>
        <p>{profile.mail}</p>
    </div>
  )
}
