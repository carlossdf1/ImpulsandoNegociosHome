import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  makeStyles,
} from "@material-ui/core";
import { Link } from "react-router-dom";

const NavbarSimple = () => {
//   const styleNav = useStyles();

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h4" className="logo">
          Navbar
        </Typography>
          <div className="navbars">
            <Link to="/" className="links">
              Home
            </Link>
            <Link to="/about" className="links">
              About
            </Link>
            {/* <Link to="/contact" className={styleNav.link}>
              Contact
            </Link>
            <Link to="/faq" className={styleNav.link}>
              FAQ
            </Link> */}
          </div>
      </Toolbar>
    </AppBar>
  );
}

// const useStyles = makeStyles((theme) => ({
//     navlinks: {
//       marginLeft: theme.spacing(10),
//       display: "flex",
//     },
//     logo: {
//       flexGrow: "1",
//       cursor: "pointer",
//     },
//     link: {
//       textDecoration: "none",
//       color: "white",
//       fontSize: "20px",
//       marginLeft: theme.spacing(20),
//       "&:hover": {
//         color: "yellow",
//         borderBottom: "1px solid white",
//       },
//     },
//   }));

export default NavbarSimple;