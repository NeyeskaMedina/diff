import React from "react";
import { Box, InputBase, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const SearchBar = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        width: "100%",
        maxWidth: 500,
        borderRadius: "50px",
        overflow: "hidden",
        bgcolor: "#fff",
        boxShadow: 1,
      }}
    >
      {/* Input */}
      <InputBase
        placeholder="Buscar productos..."
        sx={{
          flex: 1,
          px: 2,
          py: 0.5,
        }}
      />

      {/* Botón con lupa */}
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
  );
};

export default SearchBar;
