import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/Card";
import axios from "axios";

export default function Home() {
  const [search, setsearch] = useState('');
  const [foodCat, setfoodCat] = useState([]);
  const [foodItems, setfoodItems] = useState([]);

  const URL_foodData = "https://go-food-backend-lgih.onrender.com/api/foodData";

  const loadData = async () => {
    await axios.post(URL_foodData)
      .then((response) => {
        // on succefull fetching
        const [fooditems, foodcat] = response.data;
        setfoodItems(fooditems);
        setfoodCat(foodcat);

      }).catch((error) => {
        console.log("error loading data");
      })
  }

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div>
      <div> <Navbar /> </div>
      <div>
        <div
          id="carouselExampleFade"
          className="carousel slide carousel-fade"
          data-bs-ride="carousel"
          style={{ objectFit: "contain !important" }}
        >
          <div className="carousel-inner" id="carousel">
            <div className="carousel-caption" style={{ zIndex: "10" }}>
              <div className="d-flex justify-content-center">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  value={search}
                  onChange={(e) => { setsearch(e.target.value) }}
                />
                {/* <button
                className="btn btn-outline-success text-white bg-success"
                type="submit"
              >
                Search
              </button> */}
              </div>
            </div>
            <div className="carousel-item active">
              <img
                src="https://source.unsplash.com/random/900×700/?burger"
                className="d-block w-100"
                style={{ filter: "brightness(60%)" }}
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://source.unsplash.com/random/900×700/?pastry"
                className="d-block w-100"
                style={{ filter: "brightness(30%)" }}
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://source.unsplash.com/random/900×700/?barbeque"
                className="d-block w-100"
                style={{ filter: "brightness(30%)" }}
                alt="..."
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <div className="container">
        {
          foodCat.length !== 0 ? foodCat.map((data) => {
            return (
              <div className="row mb-3">
                <div key={data._id} className="fs-3 m-3">
                  {data.CategoryName}
                </div>
                <hr />
                {
                  foodItems.filter((items) => (items.CategoryName === data.CategoryName) && (items.name.toLowerCase().includes(search.toLocaleLowerCase()))).map((filterItems) => {
                    return (
                      <div key={filterItems._id} className="col-12 col-md-6 col-lg-3">
                        <Card
                          options={filterItems.options[0]}
                          foodItem={filterItems}
                        >
                        </Card>
                      </div>
                    )
                  })
                }
              </div>
            )
          })
            : ""
        }
      </div>
      <div>
        {" "}
        <Footer />{" "}
      </div>
    </div>
  );
}

// const loadData = async () => {
//   let response = await fetch(URL_foodData, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//   });
//   response = await response.json();
//   setfoodItems(response[0]);
//   setfoodCat(response[1]);
//   // console.log(response[0], response[1]);
// };
