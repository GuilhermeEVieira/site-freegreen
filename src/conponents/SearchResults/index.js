import React from 'react';
import { Link } from 'react-router-dom';
import { data } from '../../data';

function SearchResults() {
  const searchQuery = window.location.pathname.split('/').pop();
  const filteredData = data.filter((item) => item.name.toLowerCase().includes(searchQuery.toLowerCase()));

  return (

    <div className="search-results-container">
      <h1>Resultados de busca para "{searchQuery}"</h1>
      <ul className="search-results-list">
        {filteredData.map((item, product) => (
          <li key={item.id}>
            <Link to={`/paginapd/${product.id}`} >
              <img src={product.image} alt={product.name} className="img-fluid" />
            </Link>
          </li>
        ))}
      </ul>
      {filteredData.length === 0 && (
        <p>Nenhum resultado encontrado para "{searchQuery}"</p>
      )}
    </div>
  );
}

export default SearchResults;