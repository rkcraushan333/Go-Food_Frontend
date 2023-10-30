import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function MyOrder() {
  const [orderData, setOrderData] = useState({});

  const fetchMyOrder = async () => {
    try {
      const response = await fetch("https://go-food-backend-lgih.onrender.com/api/myOrderData", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: localStorage.getItem("userEmail"),
        }),
      });

      if (response.ok) {
        const data = await response.json();
        // console.log(data);
        await setOrderData(data);
      } else {
        console.log("Failed to fetch order data");
      }
    } catch (error) {
      console.log("Error while fetching order data:", error);
    }
  };

  useEffect(() => {
    fetchMyOrder();
  }, []);

  return (
    <div>
      <Navbar />

      <div className="container">
        <div className="row"></div>
      </div>

      <Footer />
    </div>
  );
}
