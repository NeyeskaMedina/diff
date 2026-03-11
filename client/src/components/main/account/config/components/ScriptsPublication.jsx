import React, { useState } from "react";
import { Box, Typography, Paper, TextField, Button } from "@mui/material";

const ScriptsPublication = () => {
  const [scripts, setScripts] = useState([]);
  const [newScript, setNewScript] = useState("");

  const handleAddScript = () => {
    if (!newScript.trim()) return alert("El script no puede estar vacío.");
    if (scripts.length >= 6) return alert("Máximo de 6 scripts.");

    setScripts([...scripts, newScript]);
    setNewScript("");
  };

  const handleDeleteScript = (index) => {
    setScripts(scripts.filter((_, i) => i !== index));
  };

  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        📜 Publicación de Scripts
      </Typography>

      {scripts.map((script, index) => (
        <Paper key={index} sx={{ p: 2, mb: 1, borderLeft: "4px solid #673ab7" }}>
          <Typography variant="body2" sx={{ whiteSpace: "pre-wrap" }}>
            {script}
          </Typography>
          <Button
            variant="outlined"
            color="error"
            size="small"
            sx={{ mt: 1 }}
            onClick={() => handleDeleteScript(index)}
          >
            Eliminar
          </Button>
        </Paper>
      ))}

      <Typography variant="body1" fontWeight={500} sx={{ mb: 1 }}>
        Agregar nuevo Script (máximo 6)
      </Typography>

      <TextField
        fullWidth
        multiline
        rows={4}
        label="Pega aquí el script…"
        value={newScript}
        onChange={(e) => setNewScript(e.target.value)}
      />

      <Button
        variant="contained"
        color="secondary"
        sx={{ mt: 2 }}
        onClick={handleAddScript}
        disabled={scripts.length >= 6}
      >
        Publicar Script
      </Button>
    </Box>
  );
};

export default ScriptsPublication;
