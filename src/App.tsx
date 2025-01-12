import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProductCard from './components/ProductCard';
import CategoryCard from './components/CategoryCard';

function App() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <div className="relative h-[400px] bg-cover bg-center" style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1549465220-1a8b9238cd48?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80")'
      }}>
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">Find the Perfect Gift</h1>
            <p className="text-xl mb-8">Discover thoughtful presents for every occasion</p>
            <button className="bg-[#e31837] text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-[#c41830] transition-colors">
              Shop Now
            </button>
          </div>
        </div>
      </div>

      {/* Popular Categories */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-8">Popular Categories</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <CategoryCard
            title="Birthday"
            image="https://images.unsplash.com/photo-1464349153735-7db50ed83c84?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
          />
          <CategoryCard
            title="Anniversary"
            image="https://images.unsplash.com/photo-1518199266791-5375a83190b7?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
          />
          <CategoryCard
            title="Wedding"
            image="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
          />
          <CategoryCard
            title="Holiday"
            image="https://images.unsplash.com/photo-1512474932049-78ac69ede12c?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
          />
        </div>
      </section>

      {/* Featured Products */}
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Trending Gifts</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <ProductCard
              title="Personalized Photo Frame"
              price={39.99}
              image="https://images.unsplash.com/photo-1581591524425-c7e0978865fc?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
              rating={4.5}
            />
            <ProductCard
              title="Luxury Gift Basket"
              price={89.99}
              image="https://images.unsplash.com/photo-1607344645866-009c320b63e0?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
              rating={4.8}
            />
            <ProductCard
              title="Custom Name Necklace"
              price={49.99}
              image="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
              rating={4.7}
            />
            <ProductCard
              title="Gourmet Chocolate Box"
              price={29.99}
              image="https://images.unsplash.com/photo-1549007994-cb92caebd54b?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
              rating={4.6}
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default App;