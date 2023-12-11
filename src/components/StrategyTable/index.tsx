import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/system';
import CustomButton from 'components/CustomButton';
import styles from './StrategyTable.module.scss';

interface Props {
  parentClasses: string;
}

const HeaderTableCell = styled(TableCell)({
  fontFamily: 'YS Text , Arial, sans-serif',
  color: styles.primaryFontColor,
  fontWeight: 500,
  padding: '12px 8px 16px 8px',
  lineHeight: '20px',
  '&:first-of-type, &:last-of-type': {
    borderBottom: 'none',
  },
  '&:first-of-type': {
    width: '75px',
  },
  '&:nth-of-type(2)': {
    width: '230px',
  },
  '&:nth-of-type(3)': {
    width: '190px',
  },
  '&:nth-of-type(4)': {
    width: '130px',
  },
  '&:nth-of-type(5)': {
    width: '90px',
  },
  boxSizing: 'border-box',
});

const BodyTableCell = styled(TableCell)({
  padding: '20px 8px 20px 8px',
});

function createData(
  id: number,
  course: string,
  duration: string,
  status: string,
  button: string
) {
  return { id, course, duration, status, button };
}

const rows = [
  createData(1, 'Дизайн IT', '1 месяц', 'Завершил', 'Учиться'),
  createData(2, 'Дизайн презентаций', '1 месяц', 'В процессе', 'Учиться'),
  createData(3, 'Дизайнер интерфейсов плюс', '3 месяца', 'Не начал', 'Учиться'),
];

function StrategyTable({ parentClasses }: Props) {
  return (
    <div className={parentClasses}>
      <div
        style={{ boxShadow: '0px 4px 6px 0px #B0BEC54D', borderRadius: '5px' }}
      >
        <TableContainer
          component={Paper}
          sx={{
            padding: '16px 16px 0 16px',
            boxShadow: '0px 8px 24px 0px #B0BEC54D',
            boxSizing: 'border-box',
            borderRadius: '5px',
            margin: '0 0 20px 0',
          }}
        >
          <Table>
            <TableHead>
              <TableRow>
                <HeaderTableCell>#</HeaderTableCell>
                <HeaderTableCell>Курс</HeaderTableCell>
                <HeaderTableCell>Длительность</HeaderTableCell>
                <HeaderTableCell>Статус</HeaderTableCell>
                <HeaderTableCell />
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.id} sx={{ '& td, & th': { border: 0 } }}>
                  <BodyTableCell component="th" scope="row">
                    {row.id}
                  </BodyTableCell>
                  <BodyTableCell>{row.course}</BodyTableCell>
                  <BodyTableCell>{row.duration}</BodyTableCell>
                  <BodyTableCell>{row.status}</BodyTableCell>
                  <BodyTableCell>
                    <CustomButton variant="small">{row.button}</CustomButton>
                  </BodyTableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}

export default StrategyTable;
