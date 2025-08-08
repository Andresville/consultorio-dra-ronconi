import { Box, Typography, Container } from "@mui/material";
import esteticaBanner from "../assets/imagenes/esteticaDentalBanner.jpg";
import esteticaDetalle from "../assets/imagenes/esteticaDentalDetalle.jpg";
import esteticaDetalle2 from "../assets/imagenes/esteticaDentalDetalle1.jpg";
import WhatsAppButton from "../components/WhatsAppButton";

function EsteticaDental() {
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
                    src={esteticaBanner}
                    alt="Estética dental"
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
                    <Typography
                        variant="h2"
                        gutterBottom
                        sx={{
                            fontWeight: "bold",
                            fontSize: { xs: "2rem", sm: "2.2rem", md: "3rem" },
                        }}
                    >
                        Estética Dental
                    </Typography>
                </Box>
            </Box>

            {/* Contenido principal */}
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
                        src={esteticaDetalle}
                        alt="Blanqueamiento dental"
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
                            ¿Qué es la estética dental?
                        </Typography>
                        <Typography variant="body1">
                            La estética dental se enfoca en mejorar la apariencia de tu sonrisa a través de diferentes tratamientos personalizados que respetan la armonía facial, sin dejar de lado la funcionalidad bucal.
                        </Typography>
                        <Typography variant="body1" sx={{ mt: 1 }}>
                            Gracias a la tecnología actual, es posible lograr cambios notorios, naturales y duraderos en tus dientes y encías.
                        </Typography>
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
                        src={esteticaDetalle2}
                        alt="Diseño de sonrisa"
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
                            Tratamientos de estética dental
                        </Typography>
                        <Typography variant="body1">
                            En nuestro consultorio ofrecemos distintas alternativas según tus necesidades:
                        </Typography>
                        <ul>
                            <li>
                                <Typography variant="body1">
                                    Blanqueamiento dental profesional.
                                </Typography>
                            </li>
                            <li>
                                <Typography variant="body1">
                                    Carillas estéticas de porcelana o resina.
                                </Typography>
                            </li>
                            <li>
                                <Typography variant="body1">
                                    Diseño de sonrisa digital.
                                </Typography>
                            </li>
                            <li>
                                <Typography variant="body1">
                                    Contorneado dental (micro desgaste estético).
                                </Typography>
                            </li>
                        </ul>
                    </Box>
                </Box>

                {/* Llamado a la acción */}
                <Box sx={{ textAlign: "center", mt: 8 }}>
                    <Typography variant="h6" gutterBottom>
                        Consultanos para evaluar el tratamiento estético más adecuado para vos.
                    </Typography>
                    <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
                        <WhatsAppButton label="Reservar Turno" />
                    </Box>
                </Box>
            </Container>

            <WhatsAppButton floating />
        </>
    );
}

export default EsteticaDental;
