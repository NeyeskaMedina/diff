import React from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  IconButton,
  Button,
  Divider,
  Avatar,
  Container
} from "@mui/material";

import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteIcon from "@mui/icons-material/Delete";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import { useCart } from "../../../context/CartContext.jsx";
import { useNavigate } from "react-router-dom";

const CartDetail = () => {

  const { cartItems } = useCart();
  const navigate = useNavigate();

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  /* ------------------- CARRITO VACIO ------------------- */

  if (cartItems.length === 0) {
    return (

      <Box
        sx={{
          minHeight: "70vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          px: 2
        }}
      >

        <Card
          sx={{
            p: 5,
            borderRadius: 4,
            textAlign: "center",
            maxWidth: 420,
            width: "100%"
          }}
        >

          <ShoppingCartIcon
            sx={{
              fontSize: 60,
              color: "#ddd",
              mb: 2
            }}
          />

          <Typography variant="h6" mb={1}>
            Tu carrito está vacío
          </Typography>

          <Typography color="text.secondary" mb={3}>
            Parece que aún no has agregado productos.
          </Typography>

          <Button
            variant="contained"
            onClick={() => navigate("/")}
            sx={{
              borderRadius: 50,
              px: 4,
              background:
                "linear-gradient(90deg,#f6b1d2,#bde7b1)",
              color: "#333",
              fontWeight: 600
            }}
          >
            Ver productos
          </Button>

        </Card>

      </Box>

    );
  }

  /* ------------------- CARRITO NORMAL ------------------- */

  return (

    <Box sx={{ background:"#fafafa", minHeight:"100vh", py:{xs:3, md:6} }}>

      <Container maxWidth="lg">

        <Typography
          variant="h4"
          sx={{
            fontWeight:600,
            mb:4,
            textAlign:{xs:"center", md:"left"},
            background:"linear-gradient(90deg,#f6b1d2,#bde7b1)",
            WebkitBackgroundClip:"text",
            WebkitTextFillColor:"transparent"
          }}
        >
          Mi carrito
        </Typography>

        <Grid container spacing={4}>

          {/* PRODUCTOS */}
          <Grid item xs={12} md={8}>

            {cartItems.map((item)=>(
              
              <Card
                key={item.id}
                sx={{
                  mb:2,
                  borderRadius:4,
                  boxShadow:"0 5px 15px rgba(0,0,0,0.05)"
                }}
              >

                <CardContent>

                  <Grid
                    container
                    alignItems="center"
                    spacing={2}
                  >

                    <Grid item>
                      <Avatar
                        src={item.image}
                        variant="rounded"
                        sx={{ width:80, height:80 }}
                      />
                    </Grid>

                    <Grid item xs={12} sm>

                      <Typography fontWeight={600}>
                        {item.name}
                      </Typography>

                      <Typography color="text.secondary">
                        ${item.price}
                      </Typography>

                    </Grid>

                    <Grid item>

                      <Box
                        sx={{
                          display:"flex",
                          alignItems:"center",
                          border:"1px solid #eee",
                          borderRadius:50,
                          px:1
                        }}
                      >

                        <IconButton size="small">
                          <RemoveIcon fontSize="small"/>
                        </IconButton>

                        <Typography sx={{px:2}}>
                          {item.quantity}
                        </Typography>

                        <IconButton size="small">
                          <AddIcon fontSize="small"/>
                        </IconButton>

                      </Box>

                    </Grid>

                    <Grid item>

                      <Typography fontWeight={600}>
                        ${item.price * item.quantity}
                      </Typography>

                    </Grid>

                    <Grid item>

                      <IconButton
                        color="error"
                        sx={{background:"#fff3f3"}}
                      >
                        <DeleteIcon/>
                      </IconButton>

                    </Grid>

                  </Grid>

                </CardContent>

              </Card>

            ))}

          </Grid>

          {/* RESUMEN */}
          <Grid item xs={12} md={4}>

            <Card
              sx={{
                borderRadius:4,
                position:{md:"sticky"},
                top:20
              }}
            >

              <CardContent>

                <Typography variant="h6" mb={2}>
                  Resumen del pedido
                </Typography>

                <Box
                  sx={{
                    display:"flex",
                    justifyContent:"space-between",
                    mb:1
                  }}
                >
                  <Typography>Subtotal</Typography>
                  <Typography>${subtotal}</Typography>
                </Box>

                <Box
                  sx={{
                    display:"flex",
                    justifyContent:"space-between",
                    mb:2
                  }}
                >
                  <Typography>Envío</Typography>
                  <Typography>$0</Typography>
                </Box>

                <Divider sx={{mb:2}}/>

                <Box
                  sx={{
                    display:"flex",
                    justifyContent:"space-between",
                    mb:3
                  }}
                >

                  <Typography fontWeight={700}>
                    Total
                  </Typography>

                  <Typography fontWeight={700}>
                    ${subtotal}
                  </Typography>

                </Box>

                <Button
                  fullWidth
                  variant="contained"
                  sx={{
                    borderRadius:50,
                    py:1.5,
                    background:
                      "linear-gradient(90deg,#f6b1d2,#bde7b1)",
                    color:"#333",
                    fontWeight:600
                  }}
                >
                  Finalizar compra
                </Button>

              </CardContent>

            </Card>

          </Grid>

        </Grid>

      </Container>

    </Box>

  );
};

export default CartDetail;