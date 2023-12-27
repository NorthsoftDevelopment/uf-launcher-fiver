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

        const settingsDefault = {
            launcherType: 'sk',
            allocatedMemory: '4'
          }
        Cookies.set('launcher_settings', JSON.stringify(settingsDefault), { expires: 365, sameSite: 'strict' });
        window.location.href = '/login/complete'
    }
    return (
        <div className="content-center">
            <h2>Iniciar sesión</h2>
            <div className="login-content">
                <button onClick={MicrosoftLogin} className="button-general">Iniciar sesión con Microsoft</button>
                <div className="separate"></div>
                <div className="input-warp">
                    <input placeholder="Tu usuario" id='nickname' className="general-input"></input>
                    <button onClick={TerLogin} className="button-general">Inicio de sesión de terceros</button>
                </div>
            </div>
        </div>
    )
}
