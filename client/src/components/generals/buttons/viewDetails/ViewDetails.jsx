import {
  Box,
} from "@mui/material";


const ViewDetails = ({ sx, text, onClick, icon, bg = "#fcb900", fullWidth = false }) => (
  <Box
    component="button"
    onClick={onClick}
    style={{
      width: fullWidth ? "100%" : "auto",
      height: '80%',
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 8,
      background: bg,
      color: "#ffffffff",
      padding: "17px",
      borderRadius: 20,
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