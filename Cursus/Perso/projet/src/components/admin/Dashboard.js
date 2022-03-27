import React from "react";
import { DataGrid, GridRowsProp, GridColDef } from "@mui/x-data-grid";
import { Button, Container, ButtonGroup } from "@mui/material";
import { useEffect, useState } from "react";
import ProductServices from "../service/ProductServices";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const columns = [
  { field: "id", headerName: "ID" },
  { field: "nom", headerName: "Produit", width: 225 },
  { field: "prix", headerName: "Prix", width: 225 },
  { field: "avaible", headerName: "Disponibilité", width: 225 },
  { field: "image", headerName: "Image", width: 300 },
];

const Dash = () => {
  const navigate = useNavigate();
  const [displaye, setDisplaye] = useState("none");
  const [mod, setMod] = useState();
  const [selected, setSelected] = useState();

  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3002/products")
      .then((data) => data.json())
      .then((data) => setTableData(data));
  }, []);

  console.log(mod);

  return (
    <>
      <Container
        sx={{
          mt: 5,
          mb: 1,
          borderRadius: 5,
          textAlign: "center",
          display: "flex",
        }}
      >
        <Box
          sx={{
            width: "20%",
            display: "flex",
          }}
        >
          <Link to={'/AddProduct'}><Button variant="contained">Ajouter</Button></Link>
        </Box>
        <Box
          sx={{
            width: "80%",
            display: "flex",
            justifyContent: "end",
          }}
        >
          <Link  style={{ textDecoration: 'none' }} state={{ Produit: mod }} to={'/ModProduct'}><Button variant="contained" sx={{ display: displaye, mr:1 }} color="warning">Modifier</Button></Link>
          <Button onClick={() => {
            ProductServices.delProduct(selected[0])
            window.location.reload(); 
            }} variant="contained" sx={{ display: displaye }} color="error">
            Supprimer
          </Button>
        </Box>
      </Container>
      <Box
        sx={{ textAlign: "center", bgcolor: "#ffffff", mx:15 }}
      >
        <div style={{ height: 700, width: "100%" }}>
          <DataGrid
            sx={{
              "& .MuiDataGrid-row.Mui-selected": {
                backgroundColor: "gray",
              },
              "& .MuiDataGrid-row:hover": {
                backgroundColor: "gray",
              },
            }}
            rows={tableData}
            columns={columns}
            onSelectionModelChange={(props) => {
              setSelected(props)
              setDisplaye(true)
              fetch(`http://localhost:3002/products/${props}`)
              .then((data) => data.json())
              .then((data) => setMod(data));
            }}
          />
        </div>
      </Box>
    </>
  );
};
export default Dash;
