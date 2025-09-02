'use client';

import React, { useCallback } from "react";
import ReCAPTCHA from "react-google-recaptcha";

interface CaptchaImplementationProps {
  setDisabled: (disabled: boolean) => void;
}

const CaptchaImplementation: React.FC<CaptchaImplementationProps> = ({
  setDisabled,
}) => {
  const handleCaptchaChange = useCallback(
    (value: string | null) => {
      setDisabled(!value);
    },
    [setDisabled]
  );

  return (
    <ReCAPTCHA
      sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ""}
      onChange={handleCaptchaChange}
    />
  );
};

export default CaptchaImplementation;
