import React, { useState, useEffect} from 'react';
import AdminNav from '../../components/AdminNav';
import axios from 'axios';
import {Link} from 'react-router-dom'
import Card from '../../components/Card';
// import './product.css';




const AdminProduct = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState('');
  const [sortOrder, setSortOrder] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("");

  console.log("rendered");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/products`);
        setProducts(response.data);
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  },[]);

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase()) &&
    (selectedCategory === "" || product.category === selectedCategory)
  );

  const sortedProducts = filteredProducts.sort((a, b) => {
    if (sortOrder === 'asc') {
      return a.price - b.price;
    } else if (sortOrder === 'desc') {
      return b.price - a.price;
    }
    return 0;
  });

  const categories = [...new Set(products.map((product) => product.category))];

  return (
    
    <>
      <AdminNav/>

      <h1>Products</h1>

      <div className='filter'>
            <div className='search-bar'>
            <input
              type="text"
              placeholder='Search'
              value={search}
              onChange={(s) => setSearch(s.target.value)}
            />
            </div>


            <div className='category-dropdown'>
            <select
              
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className='categorymenu'
            >
              <option value="">All Categories</option>
              {categories.map((category) => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
            </div>


            <div className='sort-button'>
              <button
                onClick={() => setSortOrder(sortOrder === 'asc'? 'desc' : 'asc')}
              >
                Sort by price {sortOrder === 'asc'? '▲' : '▼'}
              </button>
            </div>
            <div>
              <Link to="addProduct"><button>Add Product</button></Link>
            </div>

      </div>


      {sortedProducts.length === 0? (
        <h1>No such products exist</h1>
      ) : (
        
        <div className='grid-container'>
          {sortedProducts.map((product) => (
              <Card
              key={product._id}
              product={product}
              />

          ))}

        </div>
        
      )}

    </>
  );
};

export default AdminProduct;