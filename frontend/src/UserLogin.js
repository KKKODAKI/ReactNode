import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const UserLogin = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
        ...formData,
        [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
        const response = await axios.post('http://localhost:8000/users/login/', formData);
        if (response.status === 200) {
            setResponseMessage('Login efetuado com sucesso!');
        } else {
            setResponseMessage('Erro ao efetuar login.');
        }
        } catch (error) {
        setResponseMessage('Falha ao conectar ao servidor.');
        }
    };

    const [responseMessage, setResponseMessage] = useState('');

    return (
        <div className="container d-flex justify-content-center align-items-center">
        <div className="card p-4 shadow-sm">
            <h3 className="text-center mb-4">Faça seu login</h3>
            <form onSubmit={handleSubmit} className="form-group">
            <div className="mb-3">
                <label className="fw-bold text-start d-block">Email:</label>
                <input
                className="form-control"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                />
            </div>
            <div className="mb-3">
                <label className="fw-bold text-start d-block">Senha:</label>
                <input
                className="form-control"
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                />
            </div>
            
            <button type="submit" className="btn btn-secondary btn-block mt-3">Entrar</button>
            
            </form>
            <div className="text-center">
            <p className="mt-3 text-center">{responseMessage}</p>
            </div>
        </div>
        </div>
    );
};

export default UserLogin;