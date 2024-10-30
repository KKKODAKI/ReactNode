import React, { useState } from "react";
import axios from "axios";

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

            if(response.status==200){
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
            <form onSubmit="">
                <div>
                    <label>Nome:</label>
                    <input
                        type="text"
                        name="username"
                        value=""
                        onChange=""
                        required
                    />
                </div>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        name="email"
                        value=""
                        onChange=""
                        required
                    />
                </div>
                <div>
                    <label>Senha:</label>
                    <input
                        type="password"
                        name="password"
                        value=""
                        onChange=""
                        required
                    />
                </div>
                <button type="submit">Create Account</button>
            </form>
            <p></p>
        </div>
    )
};  

export default UserAccountForm;