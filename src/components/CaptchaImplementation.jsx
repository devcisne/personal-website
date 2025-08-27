import React, { useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import axios from "axios";

const CaptchaImplementation = ({ setDisabled }) => {
  const captchaRef = useRef(null);
  const [isTokenFailed, setTokenFailed] = useState(false);
  const [isVerifying, setIsVerifying] = useState(false);

  const captchaExpired = () => {
    setDisabled(true);
  };

  const verifyToken = async (token) => {
    if (!token) return;

    setIsVerifying(true);
    setTokenFailed(false);

    try {
      const response = await axios({
        method: "POST",
        url: `${process.env.REACT_APP_API_ENDPOINT}/api/verifyCaptcha`,
        data: { token },
      });

      if (response.status === 200) {
        if (response.data.success) {
          setDisabled(false);
          setTokenFailed(false);
        } else {
          captchaRef.current?.reset();
          setTokenFailed(true);
          setDisabled(true);
        }
      }
    } catch (error) {
      console.error("Error sending token for verification:", error);
      setTokenFailed(true);
      setDisabled(true);
    } finally {
      setIsVerifying(false);
    }
  };

  return (
    <div className="flex flex-col">
      <ReCAPTCHA
        className="mx-auto"
        sitekey={process.env.REACT_APP_SITE_KEY}
        ref={captchaRef}
        onChange={verifyToken}
        onExpired={captchaExpired}
        aria-label="CAPTCHA verification"
      />
      {isVerifying && (
        <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
          Verifying...
        </p>
      )}
      {isTokenFailed && (
        <p className="font-thin text-pink-600 mt-2" role="alert">
          Verification failed, you might be a robot &#x1F914;. Please try again.
        </p>
      )}
    </div>
  );
};

export default CaptchaImplementation;
