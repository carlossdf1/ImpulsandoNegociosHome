import { DataGrid, GridToolbar } from '@mui/x-data-grid';

interface Dict<T = any> {
    [key: string]: T;
  }
  
  interface Props {
    rows: Dict[],
    headersTable: any[],
    // titleTable?: string,
    // title?: string,
    height?: number,

  }

export default function BasicDataGrid({ headersTable, rows, height = 400 }: Props) {

  return (
    <div style={{ height, width: '100%' }}>
      <DataGrid  columns={headersTable} rows={rows}  components={{ Toolbar: GridToolbar }} />
    </div>
  );
}