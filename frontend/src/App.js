import React, { useState } from "react";
import './App.css';
import UserAccountForm from './UserAccountForm';
import 'bootstrap';

function App() {
  return (
    <div>
      <header class="d-block .bg-secondary">
        <div>
          <h3>Landing Page</h3>
        </div>
        <div class="mx-2">
          <a>Criar Conta</a>
          <a>Login</a>
          <a>Sair</a>
        </div>
      </header>
      <div>
        <UserAccountForm/>
      </div>
    </div>
  );
}

export default App;
