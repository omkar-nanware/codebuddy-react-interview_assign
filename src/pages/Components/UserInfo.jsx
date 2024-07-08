import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { userInfoValidationSchema } from './ValidationSchema';


const UserInfoForm = ({ initialValues, onSave, onSaveAndNext, setPage }) => (
    <>
      <h2 className="text-2xl font-bold mb-6 text-center">User Information</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={userInfoValidationSchema}
        onSubmit={() => {}}
      >
        {({ values, validateForm, errors, touched, setTouched }) => (
          <Form>
            <div className="mb-4">
              <label htmlFor="firstName" className="block text-gray-700">First Name</label>
              <Field
                type="text"
                id="firstName"
                name="firstName"
                className="mt-1 p-2 border rounded w-full"
              />
              <ErrorMessage name="firstName" component="div" className="text-red-500 text-sm" />
            </div>
            <div className="mb-4">
              <label htmlFor="lastName" className="block text-gray-700">Last Name</label>
              <Field
                type="text"
                id="lastName"
                name="lastName"
                className="mt-1 p-2 border rounded w-full"
              />
              <ErrorMessage name="lastName" component="div" className="text-red-500 text-sm" />
            </div>
            <div className="mb-6">
              <label htmlFor="address" className="block text-gray-700">Address</label>
              <Field
                type="text"
                id="address"
                name="address"
                className="mt-1 p-2 border rounded w-full"
              />
              <ErrorMessage name="address" component="div" className="text-red-500 text-sm" />
            </div>
            <div className="flex justify-between">
              <button type="button" onClick={() => setPage('login')} className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600">
                Back
              </button>
              <button type="button" onClick={() => validateForm().then((formErrors) => {
                setTouched({
                  firstName: true,
                  lastName: true,
                  address: true,
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
                    firstName: true,
                    lastName: true,
                    address: true,
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
  
  export default UserInfoForm;