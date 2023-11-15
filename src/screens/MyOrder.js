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
        {orderData && orderData.length > 0 ? (
          <p>Your Order is Loading... </p>)
          : (<p>No records Found.</p>)}
      </div>

      <Footer />
    </div>
  );
}
// const fetchMyOrder = async () => {
//   try {
//     const response = await fetch("https://go-food-backend-lgih.onrender.com/api/myOrderData", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         email: localStorage.getItem("userEmail"),
//       }),
//     });

//     if (response.ok) {
//       const data = await response.json();
//       // console.log(data);
//       await setOrderData(data);
//     } else {
//       console.log("Failed to fetch order data");
//     }
//   } catch (error) {
//     console.log("Error while fetching order data:", error);
//   }
// };
