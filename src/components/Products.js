import React, { Fragment, useState, useEffect } from "react";
import Product from "./Product";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

const Products = ({
  products,
  obtenerProducto,
  productousuario,
  titulo,
  twoCollumns,
}) => {
  let xs;
  let spacing;

  if (twoCollumns) {
    xs = 6;
    spacing=8;
  } else {
    xs = 3;
    spacing=1;
  }

  return (
    <Fragment>
      <h1 style={{ textAlign: "center" }}>{titulo}</h1>

      <Container fixed>
        <hr style={{ backgroundColor: "#8383ea", height: ".3rem" }} />
        <Grid container spacing={spacing} justifyContent="space-between">
          {
            products.length === 0 
            
            ? 
            
            <div style={{ margin: "9rem auto", backgroundColor: '#badaff' , padding:'1rem  3rem', color: 'white' }} >No hay productos en el carrito</div>
            :
            products.map((product) => (
            <Grid container item xs={6} sm={xs} spacing={1}>
              <Product
                key={product.id}
                nombre={product.nombre}
                precio={product.precio}
                description={product.description}
                extra={product.extra}
                image={product.image}
                obtenerProducto={obtenerProducto}
                productousuario={productousuario}
                twoCollumns={twoCollumns}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Fragment>
  );
};

export default Products;
