import React, { useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import axios from "axios";

const CaptchaImplementation = ({ setDisabled }) => {
  const captchaRef = useRef(null);
  const [isTokenFailed, setTokenFailed] = useState(false);

  const captchaExpired = (setDisabled) => {
    // console.log("the captcha has expired");
    setDisabled(true);
  };

  const verifyToken = (token, setDisabled, captchaRef) => {
    // console.log("verify this", token);

    const postData = async () => {
      return await axios({
        method: "POST",
        url: `${process.env.REACT_APP_API_ENDPOINT}/api/verifyCaptcha`,
        data: { token },
      });
    };

    postData()
      .then((response) => {
        // console.log(response);
        if (response.status === 200) {
          // console.log("verification result", response.data);
          // console.log("token verified successfully!");
          if (response.data.success) {
            setDisabled(false);
            setTokenFailed(false);
          } else {
            captchaRef.current.reset();
            setTokenFailed(true);
            // console.log("failed token");
          }
        }
      })
      .catch((error) => {
        console.log("Error sending token for verification:", error);
      });
  };

  return (
    <>
      <div className="flex flex-col">
        <ReCAPTCHA
          className="mx-auto"
          sitekey={process.env.REACT_APP_SITE_KEY}
          ref={captchaRef}
          onChange={(token) => verifyToken(token, setDisabled, captchaRef)}
          onExpired={() => captchaExpired(setDisabled)}
        />
        {isTokenFailed && (
          <p className="font-thin text-pink-600">
            Verification failed, you might be a robot &#x1F914;.Try again
          </p>
        )}
      </div>
    </>
  );
};

export default CaptchaImplementation;
