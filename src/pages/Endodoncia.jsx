import { Box, Typography, Container } from "@mui/material";
import endodonciaBanner from "../assets/imagenes/endodonciaBanner.jpg";
import endodonciaDetalle from "../assets/imagenes/endodonciaDetalle.jpg";
import endodonciaDetalle1 from "../assets/imagenes/endodonciaDetalle1.jpg";
import WhatsAppButton from "../components/WhatsAppButton";

function Endodoncia() {
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
                    src={endodonciaBanner}
                    alt="Endodoncia"
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
                    <Typography variant="h3" sx={{ fontWeight: "bold", fontSize: { xs: "1.8rem", sm: "2.5rem", md: "3rem" } }}>
                        Tratamientos de Endodoncia
                    </Typography>
                </Box>
            </Box>

            {/* Contenido */}
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
                        src={endodonciaDetalle}
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
                            ¿Qué es una endodoncia?
                        </Typography>
                        <Typography variant="body1">
                            Es un tratamiento que permite conservar piezas dentales afectadas por caries profundas o traumatismos que han dañado la pulpa dental (el nervio).
                        </Typography>
                        <Typography variant="body1">
                            Consiste en eliminar el tejido afectado, limpiar y sellar los conductos para evitar infecciones, permitiendo mantener el diente en boca.
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
                        src={endodonciaDetalle1}
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
                                ¿Cuándo se necesita una endodoncia?
                            </Typography>
                            <ul>
                                <li><Typography variant="body1">Dolor persistente o espontáneo.</Typography></li>
                                <li><Typography variant="body1">Sensibilidad al frío o calor.</Typography></li>
                                <li><Typography variant="body1">Inflamación o fístulas.</Typography></li>
                            </ul>
                        </Box>
                </Box>

                <Box sx={{ textAlign: "center", mt: 8 }}>
                    <Typography variant="h6" gutterBottom>
                        No postergues tu salud bucal. Consultanos.
                    </Typography>
                    <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
                        <WhatsAppButton label="Solicitar turno" />
                    </Box>
                </Box>
            </Container>

            <WhatsAppButton floating />
        </>
    );
}

export default Endodoncia;
