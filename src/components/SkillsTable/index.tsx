import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/system';
import ProgressBar from 'components/ProgressBar';
import CustomH2 from 'components/CustomH2';
import CustomButton from 'components/CustomButton';
import styles from './SkillsTable.module.scss';

interface Props {
  parentClasses: string;
}

const HeaderTableCell = styled(TableCell)({
  fontFamily: 'YS Text, Arial, sans-serif',
  color: styles.primaryFontColor,
  fontWeight: 500,
  padding: '0 0 0 12px',
  lineHeight: '20px',
  boxSizing: 'border-box',
  borderBottom: 'none',
  '&:first-of-type': {
    width: '188px',
  },
  '&:nth-of-type(2)': {
    width: '188px',
  },
  '&:nth-of-type(3)': {
    width: '352px',
  },
});

const BodyTableCell = styled(TableCell)({
  fontFamily: 'YS Text, Arial, sans-serif',
  padding: '5px 12px',
  backgroundColor: '#F1F6FF',
  borderBottom: 0,
});

function createData(chapter: string, skills: string, progress: string) {
  return { chapter, skills, progress };
}

const rows = [
  createData('Дизайн', 'Основы композиции', '1 месяц'),
  createData('Исследования', 'А/B тестирования', '1 месяц'),
  createData('Софт-скиллы', 'CJM', '3 месяца'),
];

function SkillsTable({ parentClasses }: Props) {
  return (
    <div className={parentClasses}>
      <CustomH2 parentClasses={styles.skillsTable__subtitle}>Мои навыки</CustomH2>
      <TableContainer
        component={Paper}
        sx={{
          padding: '0 16px 0 16px',
          boxShadow: '0px 8px 24px 0px #B0BEC54D',
          boxSizing: 'border-box',
          borderRadius: '5px',
          margin: '0 0 20px 0',
        }}
      >
        <Table sx={{ borderSpacing: '0 20px', borderCollapse: 'separate' }}>
          <TableHead>
            <TableRow>
              <HeaderTableCell>Раздел</HeaderTableCell>
              <HeaderTableCell>Навык</HeaderTableCell>
              <HeaderTableCell>Мой прогресс</HeaderTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.chapter}>
                <BodyTableCell>{row.chapter}</BodyTableCell>
                <BodyTableCell>{row.skills}</BodyTableCell>
                <BodyTableCell>
                  <ProgressBar />
                </BodyTableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <CustomButton variant="primary">Скорректировать свои навыки</CustomButton>
    </div>
  );
}

export default SkillsTable;
