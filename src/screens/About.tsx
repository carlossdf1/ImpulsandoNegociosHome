import { Container, Typography } from "@mui/material";

function About() {
  return (
    <>
      <Container className="" >
      <Typography
            variant="h4"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
            ABOUT
          </Typography>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Donec euismod, nisl eget consectetur congue, nisl nunc
            consectetur nunc, eget aliquet nisl nunc eget nisl.
            Pellentesque habitant morbi tristique senectus et netus et
            malesuada fames ac turpis egestas.
        </p>
      </Container>

    </>
  );
}

export default About;