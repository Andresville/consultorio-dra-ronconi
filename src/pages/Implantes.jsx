import { Box, Typography, Container } from "@mui/material";
import implantesBanner from "../assets/imagenes/implantesBanner.jpg";
import implantesDetalle from "../assets/imagenes/implantesDetalle1.jpg";
import implantesDetalle1 from "../assets/imagenes/implantesDetalle2.jpg";
import WhatsAppButton from "../components/WhatsAppButton";

function Implantes() {
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
                    src={implantesBanner}
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
                        fontSize: { xs: "2rem", sm: "2.2rem", md: "3rem" }
                    }}>
                        Implantes dentales
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
                        src={implantesDetalle}
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
                            ¿Qué es un implante dental?
                        </Typography>
                        <Typography variant="body1">
                            Los implantes dentales son estructuras de titanio que se insertan en el hueso maxilar para reemplazar raíces dentales perdidas.
                        </Typography>
                        <Typography variant="body1">
                            Proveen una base sólida para colocar coronas, puentes o prótesis, restaurando tanto la estética como la funcionalidad de la boca.
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
                        src={implantesDetalle1}
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
                            Beneficios de los implantes dentales
                        </Typography>
                        <Typography variant="body1">
                            Evaluamos cada caso en particular para definir el tratamiento adecuado. Las opciones incluyen:
                        </Typography>
                        <ul>
                            <li><Typography variant="body1">Estabilidad y durabilidad a largo plazo.</Typography></li>
                            <li><Typography variant="body1">Evitan la pérdida ósea.</Typography></li>
                            <li><Typography variant="body1">Mejoran la estética y la función masticatoria.</Typography></li>
                        </ul>
                    </Box>
                </Box>

                <Box sx={{ textAlign: "center", mt: 8 }}>
                    <Typography variant="h6" gutterBottom>
                        Agendá tu consulta y comenzá tu tratamiento con nosotros.
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

export default Implantes;
