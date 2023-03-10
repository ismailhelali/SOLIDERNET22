<script>
    import React from 'react';
import jspdf from 'jspdf';

class ProductList extends React.Component {
  state = {
    categories: ['Category 1', 'Category 2', 'Category 3'],
    products: [
      { name: 'Product 1', category: 'Category 1', quantity: 0, unit: 'unit' },
      { name: 'Product 2', category: 'Category 1', quantity: 0, unit: 'unit' },
      { name: 'Product 3', category: 'Category 2', quantity: 0, unit: 'unit' },
      { name: 'Product 4', category: 'Category 2', quantity: 0, unit: 'unit' },
      { name: 'Product 5', category: 'Category 3', quantity: 0, unit: 'unit' },
      { name: 'Product 6', category: 'Category 3', quantity: 0, unit: 'unit' },
    ],
    selectedCategory: '',
    selectedProducts: [],
    search: '',
    message: '',
  };

  handleQuantityChange = (event, index) => {
    const { products } = this.state;
    products[index].quantity = event.target.value;
    this.setState({ products });
  };

  handleUnitChange = (event, index) => {
    const { products } = this.state;
    products[index].unit = event.target.value;
    this.setState({ products });
  };

  handleCategoryChange = (event) => {
    this.setState({ selectedCategory: event.target.value });
  };

  handleSearchChange = (event) => {
    this.setState({ search: event.target.value });
  };

  handleMessageChange = (event) => {
    this.setState({ message: event.target.value });
  };

  handleCheckboxChange = (event, index) => {
    const { products, selectedProducts } = this.state;
    if (event.target.checked) {
      selectedProducts.push(products[index]);
    } else {
      const productIndex = selectedProducts.indexOf(products[index]);
      selectedProducts.splice(productIndex, 1);
    }
    this.setState({ selectedProducts });
  };

  generatePDF = () => {
    const { selectedProducts, message } = this.state;
    const doc = new jspdf();
    doc.text(message, 10, 10);
    selectedProducts.forEach((product, index) => {
      doc.text(`${product.name}: ${product.quantity} ${product.unit}`, 10, 15 + (index * 10));
    });
    doc.save('products.pdf');
  };

  render() {
    const { categories, products, selectedCategory, search, message, selectedProducts } = this.state;
    return (
      <div>
<div>
  <label htmlFor="category-select">Filter by Category:</label>
  <select id="category-select" onChange={this.handleCategoryChange}>
    <option value="">All</option>
    {categories.map((category) => (
      <option value={category}>{category}</option>
    ))}
  </select>
  <br />
  <label htmlFor="search">Search by Product Name:</label>
  <input id="search" onChange={this.handleSearchChange} />
  <br />
  <ul>
    {products
      .filter((product) => {
        if (selectedCategory) {
          return product.category === selectedCategory;
        }
        return true;
      })
      .filter((product) => {
        if (search) {
          return product.name.toLowerCase().includes(search.toLowerCase());
        }
        return true;
      })
      .map((product, index) => (
        <li key={product.name}>
          <input
            type="checkbox"
            checked={selectedProducts.includes(product)}
            onChange={(event) => this.handleCheckboxChange(event, index)}
          />
          {product.name}
          <br />
          <label htmlFor={`${product.name}-quantity`}>Quantity:</label>
          <input
            id={`${product.name}-quantity`}
            type="number"
            value={product.quantity}
            onChange={(event) => this.handleQuantityChange(event, index)}
          />
          <br />
          <label htmlFor={`${product.name}-unit`}>Unit:</label>
          <input
            id={`${product.name}-unit`}
            type="text"
            value={product.unit}
            onChange={(event) => this.handleUnitChange(event, index)}
          />
        </li>
      ))}
  </ul>
  <br />
  <label htmlFor="message">Customized Message:</label>
  <br />
  <textarea id="message" onChange={this.handleMessageChange} />
  <br />
  <button onClick={this.generatePDF}>Generate PDF</button>
</div>
  </script>
