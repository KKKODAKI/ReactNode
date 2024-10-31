import React, { useState } from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';


const UserAccountForm = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        console.log('Entrou aqui')
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        })
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            console.log('Salvando dados');

            const response = await axios.post('https://api.example.com/create-account', formData);

            if(response.status===200){
                setResponseMessege('Conta criada com sucesso!');
            }
            else{
                setResponseMessege('Erro ao criar a conta de usuário.');
            }
        } catch (error) {
            setResponseMessege('Falha ao conectar ao servidor.');
        }
    };

    const [responseMessege, setResponseMessege] = useState('');

    return (
        <div ClassName="user-account-form">
            <h3>Crie sua conta de usuário</h3>
            <form onSubmit={handleSubmit} className="form-group">
                <div>
                    <label>Nome:</label>
                    <input
                        className="form-control"
                        type="text"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Email:</label>
                    <input
                        className="form-control"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Senha:</label>
                    <input
                        className="form-control"
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary btn-block mt-3">Create Account</button>
            </form>
            <p></p>
        </div>
    )
};  

export default UserAccountForm;