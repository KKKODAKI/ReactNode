import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const ProductDataForm = () => {
    const [formData, setFormData] = useState({
        id: '',
        produto: '',
        categoria: '',
        preco: ''
    });

    const [responseMessage, setResponseMessage] = useState('');

    // Tratar o evento change dos campos do form
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // Tratar o salvar dados
    const handleSave = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/products', formData);
            setResponseMessage(response.data.message);
            handleClear();
        } catch (error) {
            setResponseMessage('Erro ao salvar o produto');
        }
    };

    const handleClear = () => {
        setFormData({
            id: '',
            produto: '',
            categoria: '',
            preco: ''
        });
        setResponseMessage('');
    };

    const handleSearch = async () => {
        try {
            const response = await axios.get(`/api/products/${formData.id}`);
            setFormData(response.data);
            setResponseMessage('');
        } catch (error) {
            setResponseMessage('Produto não encontrado');
        }
    };

    return (
        <div className="container d-flex justify-content-center align-items-center">
            <div className="card p-4 shadow-sm">
                <h3>Cadastro de Produtos</h3>
                <form className="form-group" onSubmit={handleSave}>
                    <div className="mb-3">
                        <label className="fw-bold text-center d-block">ID:</label>
                        <input
                            type='text'
                            name='id'
                            value={formData.id}
                            onChange={handleChange}
                            className='form-control'
                        />
                    </div>
                    <div className="mb-3">
                        <label className="fw-bold text-center d-block">Produto:</label>
                        <input
                            type='text'
                            name='produto'
                            value={formData.produto}
                            onChange={handleChange}
                            className='form-control'
                        />
                    </div>
                    <div className="mb-3">
                        <label className="fw-bold text-center d-block">Categoria:</label>
                        <input
                            type='text'
                            name='categoria'
                            value={formData.categoria}
                            onChange={handleChange}
                            className='form-control'
                        />
                    </div>
                    <div className="mb-3">
                        <label className="fw-bold text-center d-block">Preço:</label>
                        <input
                            type='text'
                            name='preco'
                            value={formData.preco}
                            onChange={handleChange}
                            className='form-control'
                        />
                    </div>
                    <button type="submit" className="btn btn-success btn-block mt-3 mx-1" onClick={handleSave}>Salvar</button>
                    <button type="submit" className="btn btn-danger btn-block mt-3 mx-1" onClick={handleClear}>Limpar</button>
                    <button type="submit" className="btn btn-warning btn-block mt-3 mx-1" onClick={handleSearch}>Buscar</button>
                </form>
                {responseMessage && <div className='alert alert-info mt-3'>{responseMessage}</div>}
            </div>
        </div>    
    );
};

export default ProductDataForm;