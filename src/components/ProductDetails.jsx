import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const ProductDetails = () => {
  const navigate = useNavigate();
  const params = useParams(); // Extracting the product name from the URL parameters
  // Example: if the URL is /product/details/Product 1, params.name will be "Product 1"
  //params extracts the dynamic part of the URL, which is the product name in this case
  // You can also use params.id if you are using an ID instead of a name

  return (
    <div
      style={{
        backgroundColor: "#1e1e2f",
        minHeight: "100vh",
        padding: "40px 20px",
        color: "white",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1
        style={{
          fontSize: "48px",
          fontWeight: "700",
          marginBottom: "20px",
          textAlign: "center",
        }}
      >
        {params.name}
      </h1>

      <div
        style={{
          maxWidth: "800px",
          margin: "0 auto",
          backgroundColor: "#2a2a3d",
          borderRadius: "10px",
          padding: "30px",
          boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
        }}
      >
        <p style={{ fontSize: "20px", lineHeight: "1.6" }}>
          Here are the details for the selected product. This section can include
          specifications, pricing, availability, and more.
        </p>

        <button
          onClick={() => navigate(-1) }   // or onClick={() => navigate("/product")}, basically to go back to the previous page
          aria-label="Go back to previous page"
          style={{
            marginTop: "30px",
            backgroundColor: "#ffffff",
            color: "#1e1e2f",
            padding: "12px 24px",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
            fontWeight: "600",
            fontSize: "16px",
            transition: "all 0.3s ease",
          }}
          onMouseOver={(e) => {
            e.target.style.backgroundColor = "#dddddd";
          }}
          onMouseOut={(e) => {
            e.target.style.backgroundColor = "#ffffff";
          }}
        >
          ← Go Back
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
