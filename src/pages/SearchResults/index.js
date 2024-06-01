import React from 'react';
import { Link } from 'react-router-dom';
import { data } from '../../data';

function SearchResults() {
  const searchQuery = window.location.pathname.split('/').pop();
  const filteredData = data.filter((item) => item.type === 'fruta' && item.name.toLowerCase().includes(searchQuery.toLowerCase()));

  return (
    <div className="container-carrinho">
      <div className="search-results-container">
        <h1>Resultados de busca para "{searchQuery}"</h1>
        <ul className="search-results-list">
          {filteredData.map((item, index) => (
            <li key={item.id}>
              <div className="col-12">
                <div className="row">
                    <div key={searchQuery} className="produto-container-prisncipal">
                      <div className="produto-prisncipal">
                        <Link to={`/paginapd/${item.id}`} >
                          <img src={item.image} alt={item.name} className="img-fluid" />
                        </Link>
                        <span>{item.name}</span>
                        <span>
                          R$ <span className="price">{item.price}</span> <span className="unit">{item.unit}</span>
                        </span>
                      </div>
                    </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
        {filteredData.length === 0 && (
          <p>Nenhum resultado encontrado para "{searchQuery}"</p>
        )}
      </div>
    </div>
  );
}

export default SearchResults;