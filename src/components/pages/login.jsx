import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import Swal from "sweetalert2";
import MicrosoftLogin from "../../hooks/Auth/MicrosoftLoginBeta";

export const LoginPage = () => {

    const TerLogin = () => {
        const username = document.getElementById('nickname').value
        const data = {
            name: username
        }
        Cookies.set("user", JSON.stringify(data), { expires: 30, sameSite: "strict" });
        window.location.href = '/login/complete'
    }
    return (
        <div>
            <h1>Logeate</h1>
            <button onClick={MicrosoftLogin}>Login with Microsoft</button>
            <button onClick={TerLogin}>Login de terceros</button>
            <input placeholder="Tu usuario" id='nickname'></input>
        </div>
    )
}
