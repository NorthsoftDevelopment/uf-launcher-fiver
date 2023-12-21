import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import Swal from "sweetalert2";
import MicrosoftLogin from "../../hooks/Auth/MicrosoftLoginBeta";

export const LoginPage = () => {

    return (
        <div>
            <h1>Logeate</h1>
            <button onClick={MicrosoftLogin}>Login with Microsoft</button>
            <button onClick={MicrosoftLogin}>Login de terceros</button>
        </div>
    )
}
