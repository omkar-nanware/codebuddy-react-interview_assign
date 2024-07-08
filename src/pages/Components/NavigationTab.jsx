import React from 'react';

const NavigationTabs = ({ page, setPage, initialValues }) => {
  const isLoginFilled = initialValues.emailId && initialValues.password;
  const isUserInfoFilled = isLoginFilled && initialValues.firstName && initialValues.address;

  return (
    <div className="flex justify-around mb-4">
      <button
        className={`py-2 px-4 rounded ${page === 'login' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        onClick={() => setPage('login')}
      >
        Login
      </button>
      <button
        className={`py-2 px-4 rounded ${page === 'userinfo' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        onClick={() => isLoginFilled && setPage('userinfo')}
        disabled={!isLoginFilled}
      >
        User Info
      </button>
      <button
        className={`py-2 px-4 rounded ${page === 'contact' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        onClick={() => isUserInfoFilled && setPage('contact')}
        disabled={!isUserInfoFilled}
      >
        Contact Info
      </button>
    </div>
  );
};

export default NavigationTabs;
