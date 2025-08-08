import { Box, Typography, Container } from "@mui/material";
import protesisBanner from "../assets/imagenes/protesisBanner.jpg";
import protesisDetalle from "../assets/imagenes/protesisDetalle.jpeg";
import protesisDetalle1 from "../assets/imagenes/protesisDetalle1.jpg";
import WhatsAppButton from "../components/WhatsAppButton";

function Protesis() {
    return (
        <>
            {/* Banner */}
            <Box sx={{
                width: "100%",
                position: "relative",
                height: { xs: "25vh", sm: "40vh", md: "55vh" },
                mt: 2,
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
                backgroundColor: "rgba(0, 0, 0, 0.4)",
            }}>
                <Box
                    component="img"
                    src={protesisBanner}
                    alt="Prótesis dentales"
                    sx={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        zIndex: 1,
                    }}
                />
                <Box
                    sx={{
                        position: "relative",
                        zIndex: 2,
                        color: "common.white",
                        backgroundColor: "rgba(0, 0, 0, 0.5)",
                        px: 4,
                        py: 2,
                        maxWidth: { xs: "100%", md: "50%" },
                    }}
                >
                    <Typography variant="h2" gutterBottom sx={{ 
                        fontWeight: "bold",
                        fontSize: { xs: "2rem", sm: "2.2rem", md: "3rem" } }}>
                        Prótesis Dentales
                    </Typography>
                </Box>
            </Box>

            <Container sx={{ py: 8 }}>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: { xs: "column", md: "row" },
                        alignItems: "center",
                        gap: 4,
                        mb: 8,
                    }}
                >
                    <Box
                        component="img"
                        src={protesisDetalle}
                        alt="Implante dental"
                        sx={{
                            width: { xs: "100%", md: "50%" },
                            borderRadius: 3,
                            boxShadow: 4,
                            objectFit: "cover",
                            maxHeight: 350,
                        }}
                    />
                    <Box sx={{ width: { xs: "100%", md: "50%" } }}>
                        <Typography variant="h5" gutterBottom fontWeight="bold">
                            ¿Qué tipos de prótesis ofrecemos?
                        </Typography>
                        <ul>
                            <li><Typography variant="body1">Prótesis fijas (coronas y puentes).</Typography></li>
                            <li><Typography variant="body1">Prótesis removibles parciales o totales.</Typography></li>
                            <li><Typography variant="body1">Sobredentaduras sobre implantes.</Typography></li>
                        </ul>
                    </Box>
                </Box>
                    <Box
                    sx={{
                        display: "flex",
                        flexDirection: { xs: "column", md: "row-reverse" },
                        alignItems: "center",
                        gap: 4,
                    }}
                >
                    <Box
                        component="img"
                        src={protesisDetalle1}
                        alt="Beneficios de implantes"
                        sx={{
                            width: { xs: "100%", md: "50%" },
                            borderRadius: 3,
                            boxShadow: 4,
                            objectFit: "cover",
                            maxHeight: 350,
                        }}
                    />
                    <Box sx={{ width: { xs: "100%", md: "50%" } }}>
                        <Typography variant="h5" gutterBottom fontWeight="bold">
                            Ventajas de una prótesis bien diseñada
                        </Typography>
                        <Typography variant="body1">
                            Las prótesis bien adaptadas no solo restauran la masticación y fonación, sino que también mejoran tu autoestima al recuperar una sonrisa armónica.
                        </Typography>
                    </Box>
                </Box>

                <Box sx={{ textAlign: "center", mt: 8 }}>
                    <Typography variant="h6" gutterBottom>
                        Te acompañamos en cada etapa del tratamiento.
                    </Typography>
                    <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
                        <WhatsAppButton label="Reservar Turno" />
                    </Box>
                </Box>
            </Container >

            < WhatsAppButton floating />
        </>
    );
}

export default Protesis;
