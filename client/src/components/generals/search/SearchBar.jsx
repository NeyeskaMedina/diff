import React, { useState, useContext } from "react";
import {
  Box,
  InputBase,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  Typography,
  Avatar
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { ProductContext } from "../../../context/ProductContext.jsx";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const { productItems } = useContext(ProductContext);
  const [searchText, setSearchText] = useState("");
  const [filteredItems, setFilteredItems] = useState([]);
  const navigate = useNavigate();

  const handleSearch = (text) => {
    setSearchText(text);

    if (!text.trim()) {
      setFilteredItems([]);
      return;
    }

    const filtered = productItems.filter((item) =>
      item.name.toLowerCase().includes(text.toLowerCase())
    );

    setFilteredItems(filtered);
  };

  const handleSelectProduct = (product) => {
    setSearchText("");
    setFilteredItems([]);
    navigate(`/producto/${product.id}`);
  };

  return (
    <Box sx={{ position: "relative", width: "100%", maxWidth: 500 }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          borderRadius: "50px",
          overflow: "hidden",
          bgcolor: "#fff",
          boxShadow: 1,
        }}
      >
        <InputBase
          placeholder="Buscar productos..."
          value={searchText}
          onChange={(e) => handleSearch(e.target.value)}
          sx={{ flex: 1, px: 2, py: 0.5 }}
        />

        <IconButton
          sx={{
            bgcolor: "var(--search-bg)",
            borderRadius: 0,
            borderTopRightRadius: "50px",
            borderBottomRightRadius: "50px",
            color: "var(--search-color)",
            px: 2,
            "&:hover": { bgcolor: "var(--search-hover)" },
          }}
        >
          <SearchIcon />
        </IconButton>
      </Box>

      {filteredItems.length > 0 && (
        <List
          sx={{
            position: "absolute",
            top: "100%",
            left: 0,
            right: 0,
            bgcolor: "#fff",
            boxShadow: 2,
            borderRadius: 2,
            mt: 0.5,
            maxHeight: 250,
            overflowY: "auto",
            zIndex: 10,
          }}
        >
          {filteredItems.map((item) => (
            <ListItem key={item.id} disablePadding>
              <ListItemButton
                onClick={() => handleSelectProduct(item)}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 2
                }}
              >
                <Avatar
                  src={item.image}
                  alt={item.name}
                  sx={{
                    width: 40,
                    height: 40,
                    borderRadius: 2
                  }}
                />

                <Typography variant="body2">
                  {item.name}
                </Typography>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      )}
    </Box>
  );
};

export default SearchBar;