import {
  Box,
} from "@mui/material";


<<<<<<< HEAD
const ViewDetails = ({ sx, text, onClick, icon, bg = "#fcb900", fullWidth = false }) => (
=======
const ViewDetails = ({ text, onClick, icon, bg = "#fcb900", fullWidth = false }) => (
>>>>>>> main
  <Box
    component="button"
    onClick={onClick}
    style={{
      width: fullWidth ? "100%" : "auto",
<<<<<<< HEAD
      height: '80%',
=======
>>>>>>> main
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 8,
      background: bg,
<<<<<<< HEAD
      color: "#ffffffff",
      padding: "17px",
      borderRadius: 20,
=======
      color: "#fff",
      padding: "12px 20px",
      borderRadius: 10,
>>>>>>> main
      border: "none",
      cursor: "pointer",
      fontWeight: 700,
      transition: "transform .15s ease, box-shadow .15s ease",
      boxShadow: "0 6px 16px rgba(0,0,0,.1)",
    }}
    onMouseDown={(e) => (e.currentTarget.style.transform = "translateY(1px)")}
    onMouseUp={(e) => (e.currentTarget.style.transform = "translateY(0)")}
  >
    {icon}
    {text}
  </Box>
);

export default ViewDetails;