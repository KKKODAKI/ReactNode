import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const ShowAllProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('http://localhost:8000/products/allproducts');
                setProducts(response.data);
            } catch (err) {
                console.error('Erro ao buscar todos os produtos', err);
                setProducts([]); // Limpa os produtos em caso de erro
            }
        };

        fetchProducts();
    }, []);

    return (
        <div className="container mt-5">
            <h3 className="text-center mb-4">Todos os Produtos</h3>
            {products.length > 0 ? (
                <ul className="list-group">
                    {products.map(product => (
                        <li key={product.id} className="list-group-item">
                            <strong>ID:</strong> {product.id} | <strong>Nome:</strong> {product.nome} | <strong>Descrição:</strong> {product.descricao} | <strong>Preço:</strong> R$ {product.preco} | <strong>Estoque:</strong> {product.estoque}
                        </li>
                    ))}
                </ul>
            ) : (
                <div className="alert alert-danger mt-3">
                    Nenhum produto encontrado ou ocorreu um erro ao buscar os produtos.
                </div>
            )}
        </div>
    );
};

export default ShowAllProducts;