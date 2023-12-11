import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useState } from 'react';
import styles from './CurrentProfession.module.scss';

function CurrentProfession() {
  const [direction, setDirection] = useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setDirection(event.target.value);
  };

  return (
    <section className={styles.currentProfession}>
      <FormControl
        sx={{
          width: '350px',
          position: 'relative',
        }}
      >
        <InputLabel
          id="select-age-label"
          sx={{
            fontFamily: 'YS Text , Arial, sans-serif',
            '&.Mui-focused, &.MuiInputLabel-shrink': {
              transform: 'translate(0, -20px)',
              fontSize: '13px',
              fontWeight: '500',
              lineHeight: '16px',
            },
          }}
        >
          Направление
        </InputLabel>
        <Select
          labelId="select-age-label"
          id="select-age"
          value={direction}
          onChange={handleChange}
          displayEmpty
        >
          <MenuItem value="1">Дизайн</MenuItem>
        </Select>
      </FormControl>
    </section>
  );
}

export default CurrentProfession;
