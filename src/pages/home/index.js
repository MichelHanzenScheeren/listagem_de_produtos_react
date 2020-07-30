import React, { Component } from "react";
import { Link }  from "react-router-dom";
import AxiosApi from "../../services/api";
import Loading from "../../components/loading";
import "./styles.css";

export default class Home extends Component {
  state = {
    products: [],
    numberOfPages: 1,
    page: 1,
  };
  componentDidMount() { 
    this.loadProducts();
  }

  loadProducts = async (page = 1) => {
    const {docs, ...info} = await AxiosApi.loadProducts(page);
    this.setState({products: docs, numberOfPages: info.pages, page});
  }

  prevPage = () => {
    const {page} = this.state;
    if(page === 1) return;
    const newPage = page - 1;
    this.loadProducts(newPage);
  }
  nextPage = () => {
    const {page,  numberOfPages} = this.state;
    if(page === numberOfPages) return;
    const newPage = page + 1;
    this.loadProducts(newPage);
  }

  render() {
    const { products, page, numberOfPages } = this.state;
    return  (products.length === 0)
      ? (<Loading />) 
      : (
      <div className="products-list">
        {products.map((product) => (
          <article key={product._id}>
            <strong>{product.title}</strong>
            <p>{product.description}</p>
            <Link to={`/product/${product._id}`}>Acessar </Link>
          </article>
        ))}
        <div className="actions">
          <button disabled={page === 1} onClick={this.prevPage} >Anterior</button>
          <button disabled={page === numberOfPages} onClick={this.nextPage}>Próxima</button>
        </div>
      </div>
    );
  }
}