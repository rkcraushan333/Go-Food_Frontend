import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import axios from "axios";

export default function MyOrder() {
  const [orderData, setOrderData] = useState({});

  const URL = "https://go-food-backend-lgih.onrender.com/api/myOrderData";

  const fetchMyOrder = async () => {
    // fetching the email from my localstorage
    const userEmail = localStorage.getItem('userEmail');

    await axios.post(URL, { email: userEmail })
      .then((response) => {
        if (response.status === 200) {
          const data = response.data;
          setOrderData(data);
        }
        else {
          console.log("failed to fetch the order");
        }
      }).catch((error) => {
        console.log("failed to fetch the order");
      })
  }


  useEffect(() => {
    fetchMyOrder();
  }, []);

  return (
    <div>
      <Navbar />

      <div className="container">
        <h1>My Orders</h1>
        {orderData && orderData.length > 0 ?
          (
            <p>
              Wait,Order Data is Loading...
              <br />
              (Total No. of Previous orders= {orderData.length})
            </p>
          )
          : (<p>No records Found.</p>)}
      </div>
      <Footer />
    </div>
  );
}