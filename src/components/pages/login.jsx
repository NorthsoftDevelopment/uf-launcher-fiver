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
        <div className="content-center">
            <h2>Iniciar Sesion</h2>
            <div className="login-content">
                <button onClick={MicrosoftLogin} className="button-general">Login with Microsoft</button>

                <div>

                    <input placeholder="Tu usuario" id='nickname' className="general-input"></input>
                    <button onClick={TerLogin} className="button-general">Login de terceros</button>
                </div>
            </div>
        </div>
    )
}
