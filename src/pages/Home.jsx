import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Box, Typography, Grid, Card, CardContent } from "@mui/material";
import { Link } from "react-router-dom";
import bannerImage from "../assets/imagenes/foto-banner.jpg";
import servicios from "../data/servicios";
import WhatsAppButton from "../components/WhatsAppButton";


function Home() {

    const location = useLocation();

    useEffect(() => {
        if (location.hash === "#especialidades") {
            const element = document.getElementById("especialidades");
            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({ behavior: "smooth" });
                }, 100); // pequeño delay para asegurar renderizado
            }
        }
    }, [location]);

    return (
        <>
            {/* Banner Hero con texto centrado */}
            <Box
                sx={{
                    width: "100%",
                    position: "relative",
                    height: { xs: "25vh", sm: "40vh", md: "55vh" },
                    mt: 2,
                    bgcolor: "background.default",
                }}
            >
                {/* Imagen de fondo */}
                <Box
                    component="img"
                    src={bannerImage}
                    alt="Consultorio odontológico"
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

                {/* Overlay de color oscuro */}
                <Box
                    sx={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        backgroundColor: "rgba(0, 0, 0, 0.4)",
                        zIndex: 2,
                    }}
                />

                {/* Texto centrado */}
                <Box
                    sx={{
                        position: "relative",
                        zIndex: 3,
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        textAlign: "center",
                        px: 2,
                        color: "common.white",
                    }}
                >
                    <Box display={{ xs: "none", sm: "block" }}>
                        <Typography
                            variant="h2"
                            gutterBottom
                            sx={{
                                fontWeight: "bold",
                                fontSize: { sm: "2.2rem", md: "3rem" },
                            }}
                        >
                            Bienvenidos al consultorio de la Dra. Mariela Ronconi
                        </Typography>
                    </Box>

                    {/* Título corto (solo visible en xs) */}
                    <Box display={{ xs: "block", sm: "none" }}>
                        <Typography
                            variant="h2"
                            gutterBottom
                            sx={{
                                fontWeight: "bold",
                                fontSize: "1.8rem",
                            }}
                        >
                            Dra. Mariela Ronconi
                        </Typography>
                    </Box>
                    <Typography
                        variant="h5"
                        sx={{
                            fontSize: { xs: "1rem", sm: "1.4rem", md: "1.8rem" },
                            py: 2,
                        }}
                    >
                        Atención odontológica integral.
                    </Typography>
                    <Typography
                        variant="h4"
                        gutterBottom
                        sx={{
                            fontWeight: "bold",
                            fontSize: { xs: "1.4rem", sm: "1.8rem", md: "2.2rem" },
                        }}
                    >
                        Calidez, Tecnología y Compromiso.
                    </Typography>
                </Box>
            </Box>


            <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
                <WhatsAppButton label="Reservar Turno" />
            </Box>


            {/* Bienvenida */}
            <Box sx={{ p: 6, bgcolor: "background.default", textAlign: "center" }}>
                <Typography variant="h4" gutterBottom>
                    Cuidamos tu sonrisa, cuidamos tu bienestar
                </Typography>
                <Typography variant="body1" maxWidth="md" mx="auto">
                    En nuestro consultorio combinamos tecnología de última generación con un trato humano y cercano.
                    Nuestro objetivo es que disfrutes tu visita y salgas con una sonrisa sana y feliz.
                </Typography>
            </Box>

            {/* Servicios */}
            <Box id="especialidades" sx={{ p: 6, bgcolor: "background.paper" }}>
                <Typography variant="h4" gutterBottom textAlign="center">
                    Nuestras especialidades
                </Typography>
                <Grid container spacing={4} justifyContent="center" sx={{ mt: 2 }}>
                    {servicios.map((servicio) => (
                        <Grid item xs={12} sm={6} md={4} key={servicio.nombre}>
                            <Card
                                component={Link}
                                to={servicio.path}
                                sx={{
                                    height: "100%",
                                    width: 200,
                                    textDecoration: "none",
                                    color: "inherit",
                                    borderRadius: 3,
                                    boxShadow: 6,
                                    transition: "all 0.3s ease-in-out",
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    "&:hover": {
                                        boxShadow: 10,
                                        transform: "scale(1.03)",
                                    },
                                }}
                            >
                                <CardContent
                                    sx={{
                                        width: "100%",
                                        display: "flex",
                                        flexDirection: "column",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        textAlign: "center",
                                        p: 3,
                                    }}
                                >
                                    <Box sx={{ mb: 2 }}>
                                        <Box
                                            component="img"
                                            src={servicio.icon}
                                            alt={servicio.nombre}
                                            sx={{ width: 60, height: 60 }}
                                        />
                                    </Box>
                                    <Typography variant="h6">{servicio.nombre}</Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>


            {/* Sección destacada */}
            <Box sx={{ p: 6, bgcolor: "secondary.main", textAlign: "center" }}>
                <Typography variant="h5" maxWidth="md" mx="auto">
                    “Una sonrisa sana es el reflejo de una vida saludable.”
                </Typography>
            </Box>

            {/* Llamado final */}
            <Box sx={{ p: 6, bgcolor: "background.default", textAlign: "center" }}>
                <Typography variant="h4" gutterBottom>
                    ¿Listo para tu próxima consulta?
                </Typography>
                <WhatsAppButton label="Contactanos" />
            </Box>

            <WhatsAppButton floating />


        </>
    );
}

export default Home;
