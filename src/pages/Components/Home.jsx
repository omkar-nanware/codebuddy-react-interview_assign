import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginForm from './LoginForm';
import UserInfoForm from './UserInfo';
import ContactForm from './ContactForm';
import NavigationTabs from './NavigationTab';

const Home = () => {
    const [initialValues, setInitialValues] = useState({
      emailId: '',
      password: '',
      firstName: '',
      lastName: '',
      address: '',
      countryCode: '',
      phoneNumber: '',
      acceptTermsAndCondition: false,
    });
  
    const [page, setPage] = useState('login');
    const navigate = useNavigate();
  
    const handleSave = (values) => {
      setInitialValues(values);
    };
  
    const handleSaveAndNext = (values, nextPage) => {
      setInitialValues(values);
      setPage(nextPage);
    };
  
    const handleContactSubmit = async (values) => {
      setInitialValues(values);
      const data = {
        emailId: values.emailId,
        password: values.password,
        firstName: values.firstName,
        lastName: values.lastName,
        address: values.address,
        countryCode: values.countryCode,
        phoneNumber: values.phoneNumber,
      };
  
      try {
        const response = await fetch('https://codebuddy.review/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        });
  
        if (response.ok) {
          navigate('/posts');
        } else {
          console.error('Failed to submit the form');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };
  
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
          <NavigationTabs page={page} setPage={setPage} initialValues={initialValues} />
          {page === 'login' && (
            <LoginForm
              initialValues={initialValues}
              onSave={handleSave}
              onSaveAndNext={(values) => handleSaveAndNext(values, 'userinfo')}
            
            />
          )}
          {page === 'userinfo' && (
            <UserInfoForm
              initialValues={initialValues}
              onSave={handleSave}
              onSaveAndNext={(values) => handleSaveAndNext(values, 'contact')}
              setPage={setPage}
            />
          )}
          {page === 'contact' && (
            <ContactForm
              initialValues={initialValues}
              onSave={handleSave}
              onSubmit={handleContactSubmit}
              setPage={setPage}
            />
          )}
        </div>
      </div>
    );
  };
  
  export default Home;