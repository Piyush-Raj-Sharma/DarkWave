import React from "react";
import { useNavigate } from "react-router-dom";

const products = [
  {
    name: "iPhone 15 Pro",
    description: "Apple’s latest flagship with A17 chip and titanium body.",
    icon: "📱",
  },
  {
    name: "MacBook Air M3",
    description: "Powerful and lightweight laptop for creatives and coders.",
    icon: "💻",
  },
  {
    name: "Sony WH-1000XM5",
    description: "Industry-leading noise-canceling wireless headphones.",
    icon: "🎧",
  },
  {
    name: "Samsung Galaxy Watch",
    description: "Smartwatch with advanced health tracking and AMOLED display.",
    icon: "⌚",
  },
];

const Product = () => {
    const navigate = useNavigate();
  // useNavigate is a hook from react-router-dom that allows you to programmatically navigate to different routes
  // It returns a function that you can call to navigate to a different route 

  const navigateHandler = (name) => {
    navigate(`details/${name}`); // Navigate to the product details page with the product name
    // Example: if name is "Product 1", it will navigate to /product/details/Product 1
    // You can also use a product ID or any other identifier as needed
  };
  return (
    <div
      style={{
        backgroundColor: "#1e1e2f",
        minHeight: "100vh",
        padding: "60px 20px",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        color: "#ffffff",
      }}
    >
      <h1
        style={{
          fontSize: "42px",
          fontWeight: "700",
          textAlign: "center",
          marginBottom: "40px",
          letterSpacing: "1px",
        }}
      >
        Featured Products
      </h1>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "30px",
        }}
      >
        {products.map((product, index) => (
          <div
            key={index}
            role="button"
            
            style={{
              backgroundColor: "#2a2a3d",
              padding: "30px",
              borderRadius: "12px",
              width: "280px",
              textAlign: "center",
              boxShadow: "0 6px 20px rgba(0, 0, 0, 0.3)",
              transition: "transform 0.3s ease",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            <div style={{ fontSize: "38px", marginBottom: "12px" }}>
              {product.icon}
            </div>
            <h2 style={{ fontSize: "20px", marginBottom: "10px" }}>{product.name}</h2>
            <p style={{ fontSize: "14px", color: "#cccccc" }}>{product.description}</p>
            <button
            onClick={() => navigateHandler(product)}
              style={{
                marginTop: "20px",
                backgroundColor: "#ffffff",
                color: "#1e1e2f",
                padding: "10px 20px",
                border: "none",
                borderRadius: "6px",
                cursor: "pointer",
                fontWeight: "600",
                fontSize: "14px",
                transition: "background-color 0.3s ease",
              }}
              onMouseOver={(e) => {
                e.target.style.backgroundColor = "#dddddd";
              }}
              onMouseOut={(e) => {
                e.target.style.backgroundColor = "#ffffff";
              }}
            >
              See Details →
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
