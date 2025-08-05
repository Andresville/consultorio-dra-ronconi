import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import { Link } from "react-router-dom";

const navItems = [
  { label: "Inicio", path: "/" },
  { label: "Sobre Nosotros", path: "/sobre-nosotros" },
  { label: "Especialidades", path: "/especialidades" },
  { label: "Contacto", path: "/contacto" },
];

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2, color: theme.palette.text.primary }}>
        Dra. Mariela Ronconi
      </Typography>
      <List>
        {navItems.map((item) => (
          <ListItem
            button
            key={item.label}
            component={Link}
            to={item.path}
            sx={{ color: theme.palette.text.primary }}
          >
            <ListItemText primary={item.label} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar
        position="static"
        sx={{
          backgroundColor: theme.palette.primary.main,
          color: theme.palette.text.primary,
          paddingX: { xs: 1, sm: 3, md: 16},
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component={Link}
            to="/"
            sx={{
              flexGrow: 1,
              textDecoration: "none",
              color: theme.palette.text.primary,
            }}
          >
            Dra. Mariela Ronconi
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <Button
                key={item.label}
                component={Link}
                to={item.path}
                sx={{ color: theme.palette.text.primary }}
              >
                {item.label}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="left"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{ display: { sm: "none" } }}
      >
        {drawer}
      </Drawer>
    </>
  );
}

export default Navbar;
