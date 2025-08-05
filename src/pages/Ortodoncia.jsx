import React from "react";
import { Box, Typography, Container, Grid, Button } from "@mui/material";
import ortodonciaBanner from "../assets/imagenes/ortodoncia-banner2.jpg";
import ortodonciaDetalle from "../assets/imagenes/ortodoncia-banner.jpg"; 
import ortodonciaDetalle2 from "../assets/imagenes/ortodoncia-banner3.jpg"; 

function Ortodoncia() {
    return (
        <>
            {/* Banner */}
            <Box sx={{ width: "100%", position: "relative", height: "45vh", overflow: "hidden", mt: 2 }}>
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
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        zIndex: 2,
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        textAlign: "center",
                        backgroundColor: "rgba(0, 0, 0, 0.4)",
                        px: 2,
                        color: "common.white",
                    }}
                >
                    <Typography variant="h2" gutterBottom sx={{ fontWeight: "bold" }}>
                        Tratamiento de ortodoncia
                    </Typography>
                </Box>
            </Box>

            {/* Contenido principal */}
            <Container sx={{ py: 6 }}>
                <Grid container spacing={4}>
                    <Grid item xs={12} md={6}>
                        <Typography variant="h5" gutterBottom fontWeight="bold">
                            ¿Qué es la ortodoncia?
                        </Typography>
                        <Typography variant="body1" paragraph>
                            La ortodoncia es una especialidad de la odontología que se encarga del estudio, prevención, diagnóstico y tratamiento de las anomalías de forma, posición, relación y función de las estructuras dentomaxilofaciales.
                        </Typography>
                        <Typography variant="body1" paragraph>
                            Su objetivo es restablecer el equilibrio morfológico y funcional de la boca y la cara, mejorando también la estética facial.
                        </Typography>
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <Box
                            component="img"
                            src={ortodonciaDetalle}
                            alt="Paciente con ortodoncia"
                            sx={{
                                width: "70%",
                                borderRadius: 50,
                                boxShadow: 4,
                                objectFit: "cover",
                                maxHeight: 350,
                            }}
                        />
                    </Grid>
                     <Grid item xs={12} md={6}>
                        <Box
                            component="img"
                            src={ortodonciaDetalle2}
                            alt="Paciente con ortodoncia"
                            sx={{
                                width: "70%",
                                borderRadius: 50,
                                boxShadow: 4,
                                objectFit: "cover",
                                maxHeight: 350,
                            }}
                        />
                    </Grid>
                </Grid>

                {/* Tipos de ortodoncia */}
                <Box sx={{ mt: 6 }}>
                    <Typography variant="h5" gutterBottom fontWeight="bold">
                        Tipos de tratamientos
                    </Typography>
                    <Typography variant="body1" paragraph>
                        En nuestro consultorio trabajamos con distintas alternativas para cada necesidad:
                    </Typography>
                    <ul>
                        <li>
                            <Typography variant="body1">Ortodoncia con brackets metálicos.</Typography>
                        </li>
                        <li>
                            <Typography variant="body1">Brackets estéticos (cerámicos o zafiro).</Typography>
                        </li>
                        <li>
                            <Typography variant="body1">Ortodoncia invisible (alineadores transparentes).</Typography>
                        </li>
                        <li>
                            <Typography variant="body1">Ortodoncia interceptiva (niños en etapa de crecimiento).</Typography>
                        </li>
                    </ul>
                </Box>

                {/* CTA */}
                <Box sx={{ textAlign: "center", mt: 6 }}>
                    <Typography variant="h6" gutterBottom>
                        ¡Agendá tu consulta para evaluar el mejor tratamiento para vos!
                    </Typography>
                    <Button
                        variant="contained"
                        color="primary"
                        size="large"
                        sx={{ borderRadius: 2, mt: 2 }}
                    >
                        Solicitar turno
                    </Button>
                </Box>
            </Container>
        </>
    );
}

export default Ortodoncia;

