import  { useState, createContext, useEffect } from "react";
import productsData from "../../json/fetchProducts.json"; 
import PropTypes from 'prop-types';
export const Context = createContext();

export const Provider = ({ children }) => {
  const [select, setSelect] = useState("");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const [isCartVisible, setIsCartVisible] = useState(null);

  const loadProducts = async () => {
    setLoading(true);
    try {
      const products = productsData;
      setProducts(products);
    } catch (error) {
      console.error('Erro ao carregar produtos:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadProducts();
  }, []);

  const value = {
    select,setSelect,
    products,setProducts,
    loading,setLoading,
    isOpen,setIsOpen,
    cartItems,setCartItems,
    isCartVisible, setIsCartVisible,
  };

  return (
    <Context.Provider value={value}>
      {children}
    </Context.Provider>
  );
};

Provider.propTypes = {
  children: PropTypes.array.isRequired
}
