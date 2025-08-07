import { Fab, Button } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const whatsappNumber = "5491151264089";
const message = "Hola, quiero sacar un turno con la Dra. Ronconi.";
const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`

const WhatsAppButton = ({
  floating = false,
  label = "",
  fullWidth = false,
}) => {
  if (floating) {
    return (
      <Fab
        color="success"
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        sx={{
          position: "fixed",
          bottom: 24,
          right: 24,
          zIndex: 1000,
          boxShadow: 6,
          width: 72,
          height: 72,
          borderRadius: "50%", 
        }}
      >
        <WhatsAppIcon sx={{ fontSize: 36 }} />
      </Fab>
    );
  }

  return (
    <a href={url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
      <Button
        variant="contained"
        color="success"
        size="large"
        fullWidth={fullWidth}
        sx={{
          px: 10,
          py: 1.5,
          fontSize: "1.1rem",
          borderRadius: "8px",
          textTransform: "none",
        }}
        startIcon={<WhatsAppIcon sx={{ fontSize: 28 }} />}
      >
        {label}
      </Button>
    </a>
  );
};

export default WhatsAppButton;