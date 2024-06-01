import 'bootstrap';
import { data } from '../../data';

function Paginapd() {
  console.log('data:', data);
  const product = data.getProduct();
  const relatedProducts = data.getRelatedProducts();

  return (
    <div>
      <div className="item-container">
        <div className="item-box">
          <div className="image-box">
            <img src={`/imagens/${product.image}`} alt={product.name} />
          </div>
          <div className="text-container">
            <div className="category">{product.type}</div>
            <div className="name">{product.name}</div>
            <div className="price-porduto">R$ {product.price} Unidade</div>
            <hr />
            <div className="button-container">
              <button className="buy-button">Comprar</button>
              <button className="add-button">Adicionar ao Carrinho</button>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="produto-page-product">
        <div className="oucompre">
          <h3>Ou Compre Outros</h3>
        </div>
      </div>
      <section id="home" className="d-flex">
        <div className="container align-self-center">
          <div className="row-product">
            <div className="col-md-12 banner-container">
              <div id="carousel-feira" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                  {relatedProducts.map((product, index) => (
                    <div key={index} className="carousel-item">
                      <div className="produto-container-product">
                        <div className="produto-product">
                          <img src={`/imagens/${product.imagem}`} alt={product.nome} />
                          <span>{product.nome}</span>
                          <span>R$ <span className="price">{product.price}</span> <span className="unit">{product.unidade}</span></span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Paginapd;