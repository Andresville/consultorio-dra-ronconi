import { Box, Typography, Container } from "@mui/material";
import ortodonciaBanner from "../assets/imagenes/ortodoncia-banner2.jpg";
import ortodonciaDetalle from "../assets/imagenes/ortodoncia-banner.jpg";
import ortodonciaDetalle2 from "../assets/imagenes/ortodoncia-banner3.jpg";
import WhatsAppButton from "../components/WhatsAppButton";

function Ortodoncia() {
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
                    src={ortodonciaBanner}
                    alt="Ortodoncia"
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
                        Tratamiento de ortodoncia
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
                        src={ortodonciaDetalle}
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
                            ¿Qué es la ortodoncia?
                        </Typography>
                        <Typography variant="body1">
                            La ortodoncia es una especialidad de la odontología que se encarga del estudio, prevención, diagnóstico y tratamiento de las anomalías de forma, posición, relación y función de las estructuras dentomaxilofaciales.
                        </Typography>
                        <Typography variant="body1">
                            Su objetivo es restablecer el equilibrio morfológico y funcional de la boca y la cara, mejorando también la estética facial.
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
                        src={ortodonciaDetalle2}
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
                            Tipos de tratamientos
                        </Typography>
                        <Typography variant="body1">
                            En nuestro consultorio trabajamos con distintas alternativas para cada necesidad:
                        </Typography>
                        <ul>
                            <li><Typography variant="body1">Ortodoncia con brackets metálicos.</Typography></li>
                            <li><Typography variant="body1">Brackets estéticos (cerámicos o zafiro).</Typography></li>
                            <li><Typography variant="body1">Ortodoncia invisible (alineadores transparentes).</Typography></li>
                            <li><Typography variant="body1">Ortodoncia interceptiva (niños en etapa de crecimiento).</Typography></li>
                        </ul>
                    </Box>
                </Box>

                <Box sx={{ textAlign: "center", mt: 8 }}>
                    <Typography variant="h6" gutterBottom>
                        ¡Agendá tu consulta para evaluar el mejor tratamiento para vos!
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

export default Ortodoncia;

