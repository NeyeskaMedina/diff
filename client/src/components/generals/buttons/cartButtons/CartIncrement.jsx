import React, { useState } from "react";
import { Box, IconButton, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const CartIncrement = ({ stock = 10, onChange }) => {
  const [quantity, setQuantity] = useState(1);

  const handleChange = (newValue) => {
    // Aseguramos que sea número y cumpla regex (1 a stock)
    const regex = new RegExp(`^(?:[1-9]|${stock > 9 ? `[1-9][0-9]{0,${String(stock).length - 1}}` : ""})$`);
    if (regex.test(newValue) && newValue <= stock) {
      setQuantity(newValue);
      if (onChange) onChange(newValue);
    }
  };

  const increment = () => {
    if (quantity < stock) {
      handleChange(quantity + 1);
    }
  };

  const decrement = () => {
    if (quantity > 1) {
      handleChange(quantity - 1);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 1,
        border: "1px solid #ddd",
        borderRadius: "50px",
        padding: "4px 10px",
        backgroundColor: "#fff",
        boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
        width: "fit-content",
      }}
    >
      <IconButton
        onClick={decrement}
        disabled={quantity <= 1}
        size="small"
        sx={{
          backgroundColor: "var(--productIncrement-cart)",
          color: "#fff",
          "&:hover": { backgroundColor: "var(--product-btn-addToCart)" },
          width: 30,
          height: 30,
        }}
      >
        <RemoveIcon fontSize="small" />
      </IconButton>

      <Typography
        variant="body1"
        sx={{
          minWidth: 25,
          textAlign: "center",
          fontWeight: "bold",
          color: "#000",
        }}
      >
        {quantity}
      </Typography>

      <IconButton
        onClick={increment}
        disabled={quantity >= stock}
        size="small"
        sx={{
          backgroundColor: "var(--productIncrement-cart)",
          color: "#fff",
          "&:hover": { backgroundColor: "var(--product-btn-addToCart)" },
          width: 30,
          height: 30,
        }}
      >
        <AddIcon fontSize="small" />
      </IconButton>
    </Box>
  );
};

export default CartIncrement;
