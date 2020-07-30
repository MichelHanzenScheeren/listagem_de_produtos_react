import React, { Component } from "react";
import Loading from "../../components/loading";
import AxiosApi from "../../services/api";
import "./styles.css";

export default class Product extends Component {
  state = {
    product: undefined,
  };

  componentDidMount() { 
    this.loadProductDetails();
  }

  loadProductDetails = async () => {
    const { id } = this.props.match.params;
    const product = await AxiosApi.loadProductDetails(id);
    this.setState({product});
  }

  render() {
    const { product } = this.state;
    return (product === undefined)
      ? (<Loading />)
      : (
        <div className="product-details">
          <h1>{product.title}</h1>
          <p>{product.description}</p>
          <p>
            URL: <a href={product.url}>{product.url}</a>
          </p>
        </div>
      );
    
  }
}