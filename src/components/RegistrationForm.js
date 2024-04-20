import React from 'react';

const RegistrationForm = () => {
  return (
    <div style={{ width: '400px', padding: '20px', backgroundColor: 'black', color: '#ffffff' }}> 
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Registro de Usuario</h2>
      <form>
        <div style={{ marginBottom: '20px' }}>
          <label htmlFor="name" style={{ color: '#ffffff' }}>Nombre:</label>
          <input type="text" id="name" style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #4b0082' }} /> 
        </div>
        <div style={{ marginBottom: '20px' }}>
          <label htmlFor="email" style={{ color: '#ffffff' }}>Email:</label> 
          <input type="email" id="email" style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #4b0082' }} /> 
        </div>
        <div style={{ marginBottom: '20px' }}>
          <label htmlFor="password" style={{ color: '#ffffff' }}>Contraseña:</label> 
          <input type="password" id="password" style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #4b0082' }} /> 
        </div>
        <button type="submit" style={{ width: '100%', padding: '10px', backgroundColor: '#00FFFF', color: '#000000', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Registrarse</button> 
      </form>
    </div>
  );
};

export default RegistrationForm;