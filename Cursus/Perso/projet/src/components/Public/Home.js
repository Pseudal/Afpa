import React from "react";
import { Container, Box, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import ProductServices from "../service/ProductServices";
const Home = () => {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    ProductServices.getProducts2()
      .then((res) => res.data)
      .then((data) => setProducts(data))
      .catch((err) => console.error(err));
  }, []);
  console.log(products);

  return (
    <>
      <Grid className="mt-5 mb-5" container justifyContent="center">
        <Typography variant="h3" color="white">
          Lorem Site
        </Typography>
      </Grid>
      <Grid container spacing={2}>
        <Grid item={true} sx={{ mb: 5 }}  xs={8} >
          <Container sx={{borderRadius: 5, textAlign: 'center',display: 'flex', alignItems: 'center', height: '300px', width: '80%', bgcolor: '#ffffff' }}><Typography>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure non tempora debitis porro aliquam harum maiores est nostrum nihil quos, repudiandae praesentium corporis dolore dolores. Aliquam itaque incidunt modi sapiente?</Typography></Container>
        </Grid>
        <Grid item={true} xs={4}>
          <Container sx={{borderRadius: 5, textAlign: 'center',display: 'flex', alignItems: 'center', height: '300px' }}> <img style={{borderRadius: '5%'}} src="https://picsum.photos/1000" alt="" width={300} /> </Container>
        </Grid>
        <Grid item={true} sx={{ mb: 5, mt:5 }} xs={4}>
          <Container sx={{flexDirection: 'row-reverse',borderRadius: 5, textAlign: 'center',display: 'flex', alignItems: 'center', height: '300px' }}> <img style={{borderRadius: '5%'}} src="https://picsum.photos/1001" alt="" width={300} /> </Container>
        </Grid>
        <Grid item={true} sx={{ mb: 5, mt:5 }}  xs={8} >
          <Container sx={{borderRadius: 5, textAlign: 'center',display: 'flex', alignItems: 'center', height: '300px', width: '80%', bgcolor: '#ffffff' }} ><Typography>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure non tempora debitis porro aliquam harum maiores est nostrum nihil quos, repudiandae praesentium corporis dolore dolores. Aliquam itaque incidunt modi sapiente?</Typography></Container>
        </Grid>
        <Grid item={true} sx={{ mb: 5, mt:5 }}  xs={8} >
          <Container sx={{borderRadius: 5, textAlign: 'center',display: 'flex', alignItems: 'center', height: '300px', width: '80%', bgcolor: '#ffffff' }}><Typography>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure non tempora debitis porro aliquam harum maiores est nostrum nihil quos, repudiandae praesentium corporis dolore dolores. Aliquam itaque incidunt modi sapiente?</Typography></Container>
        </Grid>
        <Grid item={true} sx={{ mb: 10, mt:5 }} xs={4}>
          <Container sx={{borderRadius: 5, textAlign: 'center',display: 'flex', alignItems: 'center', height: '300px' }}> <img style={{borderRadius: '5%'}} src="https://picsum.photos/1002" alt="" width={300} /> </Container>
        </Grid>
      </Grid>
    </>
  );
};

export default Home;