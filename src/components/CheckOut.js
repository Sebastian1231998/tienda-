import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import Products from "./Products";
import Grid from "@material-ui/core/Grid";
import accounting from "accounting";
import Payment from "./Payment";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
const CheckOut = ({ productosusuario }) => {
  let twoCollumns = true;
  let suma;

  if (productosusuario.length >= 1) {
    suma = productosusuario.reduce((sumaPrecio, producto) => {
      sumaPrecio += producto.precio;
      return sumaPrecio;
    }, 0);
  }






  let [mostraPayment, actualizarPayment] = useState(false);




  return (
    <Router>
      <div style={{ maxWidth: "1300px", margin: "0 auto" }}>
        <Grid container spacing={4} justifyContent="space-between">
          <Grid item xs={6}>
            <Products
              products={productosusuario}
              titulo="Tu Carrito"
              twoCollumns={twoCollumns}
            />
          </Grid>

          {productosusuario.length === 0 ? (
            <Grid item xs={6}>
              <h2 style={{ textAlign: "center" }}>
                CheckOut inhabilitado por que no hay compras
              </h2>
            </Grid>
          ) : (
            <Grid item xs={6}>
              <h2 style={{ textAlign: "center" }}>CheckOut</h2>

              <div style={{ padding: "2rem" }}>
                <p style={{ textAlign: "center" }}>
                  <span>Total Items: {productosusuario.length} </span>
                </p>
                <p style={{ textAlign: "center" }}>
                  <span> Total Compra: {accounting.formatMoney(suma)} </span>
                </p>
              </div>

              <div style={{ textAlign: "center" }}>
                <a href="/payment"
                  style={{
                    textAlign: "center",
                    backgroundColor: "rgb(36 90 134)",
                    color: "white",
                    padding: "1rem 3rem",
                    textDecoration: "none",
                    marginBottom: "1rem",
                    borderRadius: "5px",
                    cursor: "pointer",
                  }}
               
                  to="/payment"
                >
                  Check Out
                </a>
              </div>
            </Grid>
          )}
        </Grid>
      </div>

    </Router>
  );
};

export default CheckOut;
