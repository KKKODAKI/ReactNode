import React, { useState } from "react";
import UserAccountForm from './UserAccountForm';
import ProductDataForm from './ProductDataForm';
import ShowAllProducts from './ShowAllProducts';
import DeleteProductById from './DeleteProductById';
import UpdateProductByID from './UpdateProductByID';
import UserLogin from './UserLogin';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [currentPage, setCurrentPage] = useState('landing');
  const [showMenu, setShowMenu] = useState(false);

  const handleNavClick = (page) => {
    setCurrentPage(page);
  }

  const handleMenuClick = (option) => {
    switch (option) {
      case 'createProducts':
        setCurrentPage('createProducts');
        break;
      case 'showAllProducts':
        setCurrentPage('showAllProducts');
        break;
      case 'deleteProductById':
        setCurrentPage('deleteProductById');
        break;
      case 'updateProductById':
        setCurrentPage('updateProductById');
        break;
      default:
        break;
    }
    setShowMenu(false);
  }

  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light bg-secondary bg-gradient">
        <a className="navbar-brand ms-2 text-dark" href="#" onClick={() => handleNavClick('landing')}>Landing Page</a>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <button className="nav-link btn" onClick={() => handleNavClick('createAccount')}>Criar conta</button>
            </li>
            <li className="nav-item">
              <button className="nav-link btn" onClick={() => handleNavClick('login')}>Login</button>
            </li>
            <li className="nav-item">
              <button className="nav-link btn me-2" onClick={() => handleNavClick('logout')}>Sair</button>
            </li>
            <li className='nav-item'>
              <button className='nav-link btn' onClick={() => setShowMenu(!showMenu)}>Produtos</button>
            </li>
          </ul>
        </div>
      </nav>

      {/* Menu Flutuante */}
      {showMenu && (
        <div className="dropdown-menu show" style={{ position: 'absolute', right: '10px', top: '50px' }}>
          <button className="dropdown-item" onClick={() => handleMenuClick('createProducts')}>Novo produto</button>
          <button className="dropdown-item" onClick={() => handleMenuClick('showAllProducts')}>Mostrar todos os produtos</button>
          <button className="dropdown-item" onClick={() => handleMenuClick('deleteProductById')}>Deletar produto</button>
          <button className="dropdown-item" onClick={() => handleMenuClick('updateProductById')}>Atualizar produto</button>
        </div>
      )}

      {/* Conteúdo Principal */}
      <div className="container text-center mt-5">
        {currentPage === 'landing' && (
          <div className="mt-4">
            <h1 className="display-4">Segundo Bimestre</h1>
          </div>
        )}

        {/* Criar conta */}
        {currentPage === 'createAccount' && (
          <div className="mt-4">
            <div>
              <UserAccountForm />
            </div>
          </div>
        )}

        {/* Login */}
        {currentPage === 'login' && (
          <div className="mt-4">
            <div>
              <UserLogin />
            </div>
          </div>
        )}

        {/* Sair */}
        {currentPage === 'logout' && (
          <div className="mt-4">
            <div>Adicionar o Sair</div>
          </div>
        )}

        {/* Criar Produtos */}
        {currentPage === 'createProducts' && (
          <div className="mt-4">
            <div>
              <ProductDataForm />
            </div>
          </div>
        )}

        {/* Mostrar todos os produtos */}
        {currentPage === 'showAllProducts' && (
          <div className="mt-4">
            <div>
              <ShowAllProducts />
            </div>
          </div>
        )}

        {/* Deletar produto por id */}
        {currentPage === 'deleteProductById' && (
          <div className="mt-4">
            <div>
              <DeleteProductById />
            </div>
          </div>
        )}

        {/* Atualizar produto por id */}
        {currentPage === 'updateProductById' && (
          <div className="mt-4">
            <div>
              <UpdateProductByID />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;