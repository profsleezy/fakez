import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import CryptoJS from 'crypto-js';

const AuthTelegram = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const hash = params.get('hash');
    const queryParams = Object.fromEntries(params.entries());

    // Remove the hash from the queryParams
    delete queryParams.hash;

    const checkString = Object.keys(queryParams)
      .sort()
      .map(k => `${k}=${queryParams[k]}`)
      .join('\n');

    // Replace with your bot token
    const botToken = '7387954378:AAGvBonVY0jzmdxiuBOKuy1LdC3Bqzft35k';
    const secretKey = CryptoJS.enc.Hex.parse(CryptoJS.SHA256(botToken).toString());
    const computedHash = CryptoJS.HmacSHA256(checkString, secretKey).toString(CryptoJS.enc.Hex);

    if (computedHash === hash) {
      const { id, first_name, username, photo_url } = queryParams;

      // Optionally, store user data or pass it along in the navigation
      // Navigate to the profile page with the user data
      navigate(`/profile/${id}`, {
        state: { first_name, username, photo_url }
      });
    } else {
      console.error('Invalid hash');
      // Handle invalid hash (e.g., show an error message)
    }
  }, [location, navigate]);

  return <div>Processing...</div>;
};

export default AuthTelegram;
