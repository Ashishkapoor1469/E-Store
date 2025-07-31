import React, { useState } from "react";
import  Navbar  from "../components/layout/navbar";
import  ProductList  from "../components/ui/productList";
import  Hero  from "../components/home/hero";
import  Footer  from "../components/home/footer";
import  ProfileDrawer  from "../components/shared/profiledrawer";
import  CartDrawer  from "../components/shared/carddrawer";
import products from "../data/product";
const App = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [cartItems, setCartItems] = useState([]);
  const [showProfile, setShowProfile] = useState(false);
  const [showCartDrawer, setShowCartDrawer] = useState(false);

  const handleAddToCart = (product) => {
    setCartItems((prev) => [...prev, product]);
  };

  const handleRemoveFromCart = (id) => {
    setCartItems((prev) => prev.filter((item, index) => index !== id));
  };

  const total = cartItems.reduce((acc, curr) => acc + curr.price, 0);

  const filteredProducts = products.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen min-w-screen g-gradient-to-br from-gray-50 to-blue-100">
      <div className="w-full sm:h-18 h-50"></div>
      <Navbar
        setSearchQuery={setSearchQuery}
        cartCount={cartItems.length}
        onProfileClick={() => setShowProfile(true)}
        onCartClick={() => setShowCartDrawer(true)}
      />
      
      <Hero />
      <div className="p-6">
        <ProductList products={filteredProducts} onAddToCart={handleAddToCart} />
      </div>
      <Footer />

      {showProfile && <ProfileDrawer onClose={() => setShowProfile(false)} />}
      {showCartDrawer && (
        <CartDrawer
          cartItems={cartItems}
          onRemove={handleRemoveFromCart}
          total={total}
          onClose={() => setShowCartDrawer(false)}
        />
      )}
    </div>
  );
}
export default App;