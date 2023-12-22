import Cookies from 'js-cookie'
import React from 'react'

export const Logout = () => {

    window.location.reload()
    Cookies.remove('user')
    
}
