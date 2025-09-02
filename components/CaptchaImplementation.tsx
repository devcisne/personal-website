import React, { useRef, useState } from "react";
import ReCAPTCHA, { ReCAPTCHAProps } from "react-google-recaptcha";
import axios from "axios";

interface CaptchaImplementationProps {
  setDisabled: (disabled: boolean) => void;
}

const CaptchaImplementation: React.FC<CaptchaImplementationProps> = ({ setDisabled }) => {
  const captchaRef = useRef<ReCAPTCHA>(null);
  const [isTokenFailed, setTokenFailed] = useState(false);
  const [isVerifying, setIsVerifying] = useState(false);

  const captchaExpired = () => {
    setDisabled(true);
  };

  const verifyToken = async (token: string | null) => {
    if (!token) return;

    setIsVerifying(true);
    setTokenFailed(false);

    try {
      const response = await axios({
        method: "POST",
        url: `${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/verifyCaptcha`,
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
        sitekey={process.env.NEXT_PUBLIC_SITE_KEY as string}
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
