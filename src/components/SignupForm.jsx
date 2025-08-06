import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const SignupForm = () => {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      gender: '',
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('Required'),
      lastName: Yup.string()
        .max(20, 'Must be 20 characters or less')
        .required('Required'),
      email: Yup.string().email('Invalid email address').required('Required'),
    }),
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  const formStyle = {
    maxWidth: '400px',
    margin: '40px auto',
    padding: '32px',
    borderRadius: '12px',
    boxShadow: '0 2px 16px rgba(0,0,0,0.08)',
    background: '#fff',
    display: 'flex',
    flexDirection: 'column',
    gap: '18px',
    fontFamily: 'Segoe UI, Arial, sans-serif'
  };

  const labelStyle = {
    fontWeight: 'bold',
    marginBottom: '6px',
    color: '#333'
  };

  const inputStyle = {
    padding: '10px',
    borderRadius: '6px',
    border: '1px solid #ccc',
    fontSize: '16px',
    marginBottom: '4px',
    outline: 'none',
    transition: 'border-color 0.2s'
  };

  const errorStyle = {
    color: '#e74c3c',
    fontSize: '13px',
    marginBottom: '4px'
  };

  const buttonStyle = {
    padding: '12px',
    borderRadius: '6px',
    border: 'none',
    background: '#007bff',
    color: '#fff',
    fontWeight: 'bold',
    fontSize: '16px',
    cursor: 'pointer',
    marginTop: '10px',
    transition: 'background 0.2s'
  };
  return (
    <form onSubmit={formik.handleSubmit} style={formStyle}>
      <label htmlFor="firstName" style={labelStyle}>First Name</label>
      <input
        id="firstName"
        name="firstName"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.firstName}
        style={inputStyle}
      />
      {formik.touched.firstName && formik.errors.firstName ? (
        <div style={errorStyle}>{formik.errors.firstName}</div>
      ) : null}

      <label htmlFor="lastName" style={labelStyle}>Last Name</label>
      <input
        id="lastName"
        name="lastName"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.lastName}
        style={inputStyle}
      />
      {formik.touched.lastName && formik.errors.lastName ? (
        <div style={errorStyle}>{formik.errors.lastName}</div>
      ) : null}

      <label htmlFor="email" style={labelStyle}>Email Address</label>
      <input
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
        style={inputStyle}
      />
      {formik.touched.email && formik.errors.email ? (
        <div style={errorStyle}>{formik.errors.email}</div>
      ) : null}

      <label htmlFor="gender" style={labelStyle}>Gender</label>
      <select
        id="gender"
        name="gender"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.gender}
        style={inputStyle}
      >
        <option value="">Select Gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="other">Other</option>
      </select>
      {formik.touched.gender && formik.errors.gender ? (
        <div style={errorStyle}>{formik.errors.gender}</div>
      ) : null}

      <button type="submit" style={buttonStyle}>Submit</button>
    </form>
  );
};

export default SignupForm;