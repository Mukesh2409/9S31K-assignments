import React from 'react';
import Navbar from './components/navbar/navbar';
import Card from './components/card/card';
import './App.css';
import Footer from './components/footer/footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="product-grid">
        <Card 
          image="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdCUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D"
          title="Product 1"
          description="This is the description for product 1."
          price="$19.99"
        />
        <Card 
          image="https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?cs=srgb&dl=pexels-madebymath-90946.jpg&fm=jpg"
          title="Product 2"
          description="This is the description for product 2."
          price="$29.99"
        />
        <Card 
          image="https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTExL3JtMzYyLTAxYS1tb2NrdXAuanBn.jpg"
          title="Product 3"
          description="This is the description for product 3."
          price="$39.99"
        />
         <Card 
          image="https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTExL3BmLXMxMDgtcG0tNDExMy1tb2NrdXAuanBn.jpg"
          title="Product 1"
          description="This is the description for product 1."
          price="$19.99"
        />
        <Card 
          image="https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?cs=srgb&dl=pexels-karolina-grabowska-4041392.jpg&fm=jpg"
          title="Product 2"
          description="This is the description for product 2."
          price="$29.99"
        />
        <Card 
          image="https://upload.wikimedia.org/wikipedia/commons/6/65/Product_Photography.jpg"
          title="Product 3"
          description="This is the description for product 3."
          price="$39.99"
        />
        <Card 
          image="https://upload.wikimedia.org/wikipedia/commons/6/65/Product_Photography.jpg"
          title="Product 3"
          description="This is the description for product 3."
          price="$39.99"
        />
      </div>
        <Footer />
    </div>
  );
}

export default App;
