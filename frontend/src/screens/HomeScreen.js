import React, { useEffect } from "react";
import Product from "../components/Product";
import LodingBox from "../components/LodingBox";
import MessageBox from "../components/MessageBox";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../actions/productActions";
import bgimage from "../image/bgimage.jpg";

export default function HomeScreen() {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;
  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);
  return (
    <div className="home_page">
      {loading ? (
        <LodingBox></LodingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <div>
          <div
            style={{ backgroundImage: `url(${bgimage})` }}
            className="bg_image"
          >
            <br /> <h4>T-shirt store</h4>
            <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />{" "}
            <br /> <br /> <br /> <br /> <br /> <br /> <br />
          </div>
          <div className="row center">
            {products.map((product) => (
              <Product key={product._id} product={product}></Product>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
