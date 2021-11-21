import axios from "axios";
import React, {  useEffect, useState } from "react";
import "../Asset/Admin.css";
import { Pie } from "react-chartjs-2";
import Button from "@restart/ui/esm/Button";
import { Modal } from "react-bootstrap";

const Product = (props) => {
  const [Product, setProduct] = useState([]);
  const [Electronic, setElectronic] = useState(0);
  const [Jewelery, setJewelery] = useState(0);
  const [mensCloth, setmensCloth] = useState(0);
  const [womensCloth, setwomensCloth] = useState(0);
  const [show, setShow] = useState(false);

  const handleClose = () => {
      setShow(false)

}
  const handleShow = () => {
    analyse()  
    setShow(true)}
  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((Response) => {
      setProduct(Response.data);
      // console.log(Response.data);
    });
  }, []);

  const analyse = () => {
    Product.map((dd, i) => {
      // console.log('cst',dd.category);
      if (dd.category == "electronics") {
        setElectronic((data) => {
          // console.log(data+1);
          return data + 1;
        });
      }
      if (dd.category == "jewelery") {
        setJewelery((data) => {
          // console.log(data+1);
          return data + 1;
        });
      }
      if (dd.category == "men's clothing") {
        setmensCloth((data) => {
          // console.log(data+1);
          return data + 1;
        });
      }
      if (dd.category == "women's clothing") {
        setwomensCloth((data) => {
          // console.log(data+1);
          return data + 1;
        });
      }
    });
  };
  const data = {
    labels: ["electronics", "jewelery", "men's clothing", "women's clothing"],
    datasets: [
      {
        data: [Electronic, Jewelery, mensCloth, womensCloth],
        backgroundColor: ["red", "green", "orange", "blue"],
      },
    ],
  };
  return (
    <div>
      <div className="d-flex justify-content-around flex-wrap">
        {Product.filter((val) => {
          if (props.Search == "") {
            return val;
          } else if (
            val.title.toLowerCase().includes(props.Search.toLowerCase())
          ) {
            return val;
          }
        }).map((dd, i) => {
          return dd.category == props.Cat || props.Cat == "true" ? (
              <div className="card col-11 col-sm-3 col-md-3  col-lg-2 my-5 mx-5   product_card " key={i}>
              <img src={dd.image} alt="" className="card-header product_img" />
              <div className="card-body">
                <span>Name: {dd.title}</span>
                <br />
                <span>Price: {dd.price}</span>
                <br />
                <span>description: {dd.description}</span>
                <br />
                <span>
                  rating: {dd.rating.rate}{" "}
                  <i className="fa fa-star text-warning" aria-hidden="true"></i>{" "}
                </span>
              </div>
            </div>
          ) : (
            ""
            );
          })}
      </div>
      <div>
        <div>
        <Button style={{position:'fixed',right:'2rem',bottom:'5rem'}}  variant="primary" className="btn btn-primary btn-lg" onClick={handleShow} >
        Analyse
      </Button>

      <Modal show={show} onHide={handleClose} >
        <Modal.Header closeButton>
          <Modal.Title>Categories in Catalogue</Modal.Title>
        </Modal.Header>
        <Modal.Body>

        <div className="w-100 mx-auto">
          <Pie data={data} />
        </div>
        </Modal.Body>
        <Modal.Footer>
         
         
        </Modal.Footer>
      </Modal>
        </div>
      </div>
    </div>
  );
};

export default Product;
