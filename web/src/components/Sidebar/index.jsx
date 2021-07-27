import React from 'react';
import { Link } from 'react-router-dom';


function Sidebar() {
  return (
    <aside>
      <div id="title">
        <h1>Pegueleve</h1>
      </div>
      <nav>
      <Link to="/produtos" className="nav-button">
        <span id="product-card" className="selected">Produtos</span>
      </Link>
      </nav>
    </aside>
  );
}

export default Sidebar;