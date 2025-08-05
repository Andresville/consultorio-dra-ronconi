// src/components/Footer.jsx
import { Box, Typography, Link, Stack, IconButton } from "@mui/material";
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
                py: 4,
                mt: 4,
            }}
        >
            <Stack spacing={2} alignItems="center">
                <Typography variant="h6">
                    Consultorio Dra. Mariela Ronconi
                </Typography>

                <Stack direction="row" spacing={1} alignItems="center">

                    <Link
                        href="https://maps.app.goo.gl/w4Vo9Nf58deZap4H9"
                        target="_blank"
                        rel="noopener noreferrer"
                        underline="hover"
                        color="inherit"
                        variant="body2"
                    >
                        <LocationOnIcon fontSize="small" />
                        Italia 1070 dpto. 1, San Antonio de Padua
                    </Link>
                </Stack>
                <Stack direction="row" spacing={1} alignItems="center">
                    <EmailIcon fontSize="small" />
                    <Typography variant="body2">consultorio@ejemplo.com</Typography>
                </Stack>

                <Stack direction="row" spacing={1}>
                    <IconButton color="inherit" href="https://facebook.com" target="_blank">
                        <FacebookIcon />
                    </IconButton>
                    <IconButton color="inherit" href="https://instagram.com" target="_blank">
                        <InstagramIcon />
                    </IconButton>
                </Stack>

                <Typography variant="caption" color="inherit">
                    © {new Date().getFullYear()} Dra. Mariela Ronconi. Todos los derechos reservados.
                </Typography>
            </Stack>
        </Box>
    );
}

export default Footer;
