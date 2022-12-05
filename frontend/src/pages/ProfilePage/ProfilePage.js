import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";

import axios from "axios";

const ProfilePage = () => {
  // The "user" value from this Hook contains the decoded logged in user information (username, first name, id)
  // The "token" value is the JWT token that you will send in the header of any request requiring authentication
  //TODO: Add an AddCars Page to add a car for a logged in user's garage
  const [user, token] = useAuth();
  const [customers, setCustomers] = useState([]);
  // const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        let response = await axios.get("http://127.0.0.1:8000/api/customers/", {
          headers: {
            Authorization: "Bearer " + token,
          },
        });
        setCustomers(response.data);
      } catch (error) {
        console.log(error.response.data);
      }
    };
    fetchCustomers();
    // const fetchProducts = async () => {
    //   try {
    //     let response = await axios.get("http://127.0.0.1:8000/api/products/all/", {
    //     });
    //     setProducts(response.data);
    //   } catch (error) {
    //     console.log(error.response.data);
    //   }
    // };
    // fetchProducts();
  }, [token]);
  return (
    <div className="container">
      <h1>{user.username}'s Profile</h1>
      {customers &&
        customers.map((customers) => (
          <p key={customers.id}>
          {customers.first_name} {customers.last_name} {customers.email} {customers.address} {customers.city} {customers.zip_code} {customers.state} {customers.mobile_number}
          </p>
        ))}
    </div>
  );
};

export default ProfilePage;
