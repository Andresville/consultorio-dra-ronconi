import {
    Box,
    Typography,
    Link,
    Stack,
    IconButton,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";

function Footer() {
    return (
        <Box
            component="footer"
            sx={{
                bgcolor: "primary.main",
                color: "primary.contrastText",
                display: "flex",
                justifyContent: "space-between",
                flexDirection: { xs: "column", md: "row" },
                px: { xs: 2, md: 8 },
                py: 4,
                gap: 4,
            }}
        >
            {/* Columna de texto (izquierda) */}
            <Box
                sx={{
                    flex: 1,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                }}
            >
                <Stack spacing={2}>
                    <Typography variant="h6">
                        Consultorio Dra. Mariela Ronconi
                    </Typography>

                    <Stack direction="row" spacing={1} justifyContent="center" alignItems="center">
                        <LocationOnIcon fontSize="small" />
                        <Link
                            href="https://maps.app.goo.gl/w4Vo9Nf58deZap4H9"
                            target="_blank"
                            rel="noopener noreferrer"
                            underline="hover"
                            color="inherit"
                            variant="body2"
                        >
                            Italia 1070 dpto. 1, San Antonio de Padua
                        </Link>
                    </Stack>

                    <Stack direction="row" spacing={1} justifyContent="center" alignItems="center">
                        <EmailIcon fontSize="small" />
                        <Typography variant="body2">consultorio@ejemplo.com</Typography>
                    </Stack>

                    <Stack direction="row" spacing={1} justifyContent="center">
                        <IconButton
                            color="inherit"
                            href="https://facebook.com"
                            target="_blank"
                        >
                            <FacebookIcon />
                        </IconButton>
                        <IconButton
                            color="inherit"
                            href="https://instagram.com"
                            target="_blank"
                        >
                            <InstagramIcon />
                        </IconButton>
                    </Stack>

                    <Typography variant="caption" color="inherit">
                        © {new Date().getFullYear()} Dra. Mariela Ronconi. Todos los derechos reservados.
                    </Typography>
                </Stack>
            </Box>

            {/* Columna de mapa (derecha) */}
            <Box
                sx={{
                    flex: 1,
                    height: 250,
                    borderRadius: 2,
                    overflow: "hidden",
                    boxShadow: 3,
                }}
            >
                <iframe
                    title="Mapa consultorio"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3282.366705233409!2d-58.70450292419951!3d-34.64478236021201!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcc486a9f7582b%3A0x3ad71364f91a716f!2sItalia%201070%2C%20San%20Antonio%20de%20Padua%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1691772219229!5m2!1ses!2sar"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                />
            </Box>
        </Box>
    );
}

export default Footer;
