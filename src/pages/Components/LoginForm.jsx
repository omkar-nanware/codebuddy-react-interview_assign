import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { loginValidationSchema } from './ValidationSchema';


const LoginForm = ({ initialValues, onSave, onSaveAndNext }) => (
    <>
      <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={loginValidationSchema}
        onSubmit={() => {}}
      >
        {({ values, validateForm, errors, touched, setTouched }) => (
          <Form>
            <div className="mb-4">
              <label htmlFor="emailId" className="block text-gray-700">Email</label>
              <Field
                type="email"
                id="emailId"
                name="emailId"
                className="mt-1 p-2 border rounded w-full"
              />
              <ErrorMessage name="emailId" component="div" className="text-red-500 text-sm" />
            </div>
            <div className="mb-6">
              <label htmlFor="password" className="block text-gray-700">Password</label>
              <Field
                type="password"
                id="password"
                name="password"
                className="mt-1 p-2 border rounded w-full"
              />
              <ErrorMessage name="password" component="div" className="text-red-500 text-sm" />
            </div>
            <div className="flex justify-between">
              <button type="button" onClick={() => validateForm().then((formErrors) => {
                setTouched({
                  emailId: true,
                  password: true,
                });
                if (Object.keys(formErrors).length === 0) {
                  onSave(values);
                }
              })} className="bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600">
                Save
              </button>
              <button type="button" onClick={() => {
                validateForm().then((formErrors) => {
                  setTouched({
                    emailId: true,
                    password: true,
                  });
                  if (Object.keys(formErrors).length === 0) {
                    onSaveAndNext(values);
                  }
                });
              }} className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
                Save and Next
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
  
  export default LoginForm;