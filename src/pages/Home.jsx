import { Box, Typography, Button, Grid, Card, CardContent } from "@mui/material";
import bannerImage from "../assets/images/foto-banner.jpg";

const servicios = [
    { nombre: "Odontología general" },
    { nombre: "Ortodoncia" },
    { nombre: "Implantes" },
    { nombre: "Estética dental" },
    { nombre: "Endodoncia" },
    { nombre: "Prótesis" },
];

function Home() {
    return (
        <>
            {/* Banner Hero con texto centrado */}
            <Box sx={{ width: "100%", position: "relative", height: "70vh", overflow: "hidden", mt: 2 }}>
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
                        Bienvenidos al consultorio de la Dra. Mariela Ronconi
                    </Typography>
                    <Typography variant="h5">
                        Atención odontológica integral.
                    </Typography>
                    <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold" }}>
                        Calidez, Tecnología y Compromiso.
                    </Typography>
                </Box>
            </Box>

            <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
                <Button
                    variant="contained"
                    size="large"
                    sx={{
                        width: "50%",
                        maxWidth: 400,
                        borderRadius: 2,
                        color: "text.primary",
                    }}
                >
                    Reservar Turno
                </Button>
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
            <Box sx={{ p: 6, bgcolor: "background.paper" }}>
                <Typography variant="h4" gutterBottom textAlign="center">
                    Nuestros servicios
                </Typography>
                <Grid container spacing={4} justifyContent="center" sx={{ mt: 2 }}>
                    {servicios.map((servicio) => (
                        <Grid item xs={12} sm={6} md={4} key={servicio.nombre}>
                            <Card sx={{ p: 2, textAlign: "center", borderRadius: 3, boxShadow: 2 }}>
                                <CardContent>
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
                <Button 
                variant="contained" 
                size="large"
                sx={{
                        width: "50%",
                        maxWidth: 400,
                        borderRadius: 2,
                        color: "text.primary",
                    }}>
                    Contactanos
                </Button>
            </Box>
        </>
    );
}

export default Home;
