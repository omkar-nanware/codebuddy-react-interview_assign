import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { contactValidationSchema } from './ValidationSchema';

const ContactForm = ({ initialValues, onSubmit,setPage }) => (
  <>
    <h2 className="text-2xl font-bold mb-6 text-center">Contact Information</h2>
    <Formik
      initialValues={initialValues}
      validationSchema={contactValidationSchema}
      onSubmit={onSubmit}
    >
      <Form>
        <div className="mb-4">
          <label htmlFor="countryCode" className="block text-gray-700">Country Code</label>
          <Field
            as="select"
            id="countryCode"
            name="countryCode"
            className="mt-1 p-2 border rounded w-full"
          >
            <option value="">Select Country Code</option>
            <option value="+91">India (+91)</option>
            <option value="+1">America (+1)</option>
          </Field>
          <ErrorMessage name="countryCode" component="div" className="text-red-500 text-sm" />
        </div>
        <div className="mb-4">
          <label htmlFor="phoneNumber" className="block text-gray-700">Phone Number</label>
          <Field
            type="text"
            id="phoneNumber"
            name="phoneNumber"
            className="mt-1 p-2 border rounded w-full"
          />
          <ErrorMessage name="phoneNumber" component="div" className="text-red-500 text-sm" />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700">
            <Field type="checkbox" name="acceptTermsAndCondition" className="mr-2" />
            Accept Terms and Conditions
          </label>
          <ErrorMessage name="acceptTermsAndCondition" component="div" className="text-red-500 text-sm" />
        </div>
        <div className="flex justify-between">
          <button type="button" onClick={() => setPage('userinfo')} className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600">
            Back
          </button>
          <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
            Submit
          </button>
        </div>
      </Form>
    </Formik>
  </>
);

export default ContactForm;
