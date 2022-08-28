import React from 'react'
import ReCAPTCHA from "react-google-recaptcha"
import axios from "axios";

const CaptchaImplementation = ({ setDisabled }) => {
    const captchaExpired = (setDisabled) => {
        console.log("the captcha has expired")
        setDisabled(true)
    }

    const verifyToken = (token, setDisabled) => {
        console.log("verify this", token)
        // console.log("this", captchaRef)

        axios({ method: "POST", url: "http://localhost:5000/api/verifyCaptcha", data: { token } }).then((response) => {
            console.log(response)
            if (response.status === 200) {
                console.log("verification result", response.data)
                console.log("token verified successfully!");
                if (response.data.success) {
                    setDisabled(false)
                }
                // captchaRef.current.reset();
            }
        }).catch((error) => {
            console.log("Error sending token for verification:", error);
        });
    }

    return (
        <>
            <ReCAPTCHA
                sitekey={process.env.REACT_APP_SITE_KEY}
                // ref={captchaRef}
                onChange={(token) => verifyToken(token, setDisabled)}
                onExpired={() => captchaExpired(setDisabled)}
            />
        </>

    )
}

export default CaptchaImplementation