import './App.css';
import { Container, Typography, Button } from '@mui/material';
import { useState } from 'react';
import BasicDataGrid from './components/UI/Tables/DataGridCustom';
import Banner from './components/Banner';

function App() {

  const [ sub, setSub ] = useState([
    {
      name: 'Emmanuel Correa',
      email: 'ebcorreac@gmail.com',
      phone: '+56933329406',
      message: 'Hello World',
    }
  ]);

  const handleClick = () => {
    
    setSub([
      ...sub,
      {
        name: 'Emmanuel Correa',
        email: 'ebcorreac@gmail.com',
        phone: '+56933329406',
        message: 'Hello World',
      }
    ]);
    console.table(sub);
  }

  const columns =  [
    { field: 'name'},
    { field: 'code'},
    { field: 'population'},
    { field: 'size'},
    { field: 'density',},
  ];


  const rows = [
    { id: 1, name: 'India', code: 'IN', population: 1324171354, size: 3287263, density: 1 },
    { id: 2, name: 'China', code: 'CN', population: 1357003600, size: 9596961,  density: 1 },
    { id: 3, name: 'United States', code: 'US', population: 327167434, size: 9826634,  density: 1 },
    { id: 4, name: 'Indonesia', code: 'ID', population: 263991379, size: 1904569,  density: 1 },
    { id: 5, name: 'Brazil',   code: 'BR', population: 211085827, size: 8514750,  density: 1 },
    { id: 6, name: 'Pakistan', code: 'PK', population: 197015955, size: 7980339,  density: 1 },
  ];

  return (
    
    <>
        <Banner title={'titulo'} subtitle={'Texto de prueba'} />
        <Container>
          <Typography textAlign="center"><h1>Impulsando Negocios</h1></Typography>
          <Typography textAlign="left"><p>Bienvenido { sub[0].name }</p></Typography>
          <BasicDataGrid headersTable={columns} rows={rows} height={500} />
          <Button variant="contained" color="primary" onClick={handleClick}>Mostrar Nombre</Button>
          {/* <DialogInfo content={'Estas seguro de ejecutar esta tarea?'} /> */}
        </Container>
    </>
    
  )
}

export default App;