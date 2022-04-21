import { Container, Typography } from "@mui/material";


interface Props {
    children: React.ReactNode;
}

function Footer() {
    //Footer with React and Material UI
    return (
        
        <footer>
            <Container maxWidth="lg">
            <Typography textAlign="center">Impulsado Negocios | 2022</Typography>
            </Container>
        </footer>
        
    );
}

export default Footer;