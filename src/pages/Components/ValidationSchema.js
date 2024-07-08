import * as Yup from 'yup';


 export const loginValidationSchema = Yup.object({
    emailId: Yup.string().email('Invalid email address').required('Required'),
    password: Yup.string()
    .matches(/^(?=(?:.*?[A-Z]){2})(?=(?:.*?[a-z]){2})(?=(?:.*?\d){2})(?=(?:.*?[@$!%*?&]){2})[A-Za-z\d@$!%*?&]{8,}$/, 
      'Must contain at least 2 capital letters, 2 small letters, 2 numbers, and 2 special characters')
    .required('Required')
});

  export const userInfoValidationSchema = Yup.object({
    firstName: Yup.string()
      .matches(/^[A-Za-z]+$/, 'Only alphabets are allowed')
      .min(2, 'Minimum 2 characters')
      .max(50, 'Maximum 50 characters')
      .required('Required'),
    lastName: Yup.string()
      .matches(/^[A-Za-z]*$/, 'Only alphabets are allowed'),
    address: Yup.string()
      .min(10, 'Minimum 10 characters')
      .required('Required'),
  });

  export const contactValidationSchema = Yup.object({
    countryCode: Yup.string().oneOf(['+91', '+1'], 'Invalid country code').required('Required'),
    phoneNumber: Yup.string().matches(/^\d{10}$/, 'Must be exactly 10 digits').required('Required'),
    acceptTermsAndCondition: Yup.bool().oneOf([true], 'You must accept the terms and conditions').required('Required'),
  });