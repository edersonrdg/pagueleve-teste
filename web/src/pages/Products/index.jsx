import React from 'react';
import Sidebar from '../../components/Sidebar';
import './styles.css'

function Products() {
  return (
    <>
      <Sidebar />
      <div className="main-content">
      <div id="header">
        <h1>Produtos</h1>
        <button type="button" id="btn-primary">Novo produto</button>
      </div>
      <div id="product-content">
        <table id="product-table">
          <thead>
          <tr>
            <th>Nome</th>
            <th>Descrição</th>
            <th>Preço</th>
            <th>Quantidade</th>
            <th>Data de criação</th>
            <th>Ultima edição</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>Banana</td>
            <td>1 kg</td>
            <td>50 reais</td>
            <td>40</td>
            <td>399</td>
            <td>399</td>
            <td>
              <button type="button">Excluir</button>
            </td>
          </tr>
          <tr>
            <td>Banana</td>
            <td>1 kg</td>
            <td>50 reais</td>
            <td>40</td>
            <td>399</td>
            <td>399</td>
            <td>
              <button type="button">Excluir</button>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
    )
    </>
  );
}

export default Products;