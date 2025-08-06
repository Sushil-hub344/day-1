import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const Login = () => {
  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
     
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('Required'),
      password: Yup.string()
        .max(20, 'Must be 20 characters or less')
        .required('Required'),
     
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

  const p ={
    JustifyContent: 'center',
    color: '#333',
    textAlign: 'center',
    marginTop: '10px',
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
      <label htmlFor="username" style={labelStyle}> username</label>
      <input
        id="username"
        name="username"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.username}
        style={inputStyle}
      />
      {formik.touched.username && formik.errors.username ? (
        <div style={errorStyle}>{formik.errors.username}</div>
      ) : null}

      <label htmlFor="password" style={labelStyle}>password</label>
      <input
        id="password"
        name="password"
        type="password"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.lastName}
        style={inputStyle}
      />
      {formik.touched.password && formik.errors.password ? (
        <div style={errorStyle}>{formik.errors.password}</div>
      ) : null}

      <button type="submit" style={buttonStyle}>Login</button>

      <p style={p}> Forgot Username/Password?</p>
    </form>
    
  );
};

export default Login;