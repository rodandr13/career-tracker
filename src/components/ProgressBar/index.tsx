import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { useState } from 'react';
import styles from './ProgressBar.module.scss';

function ProgressBar() {
  const [selected, setSelected] = useState([3, 6]);

  const handleSelection = (newValue) => {
    if (newValue !== null) {
      setSelected(newValue);
    }
  };

  const toggleButtonGroup = {
    '& .MuiToggleButtonGroup-grouped': {
      borderRadius: '50%',
      width: '30px',
      height: '30px',
      border: 'none',
      '&.Mui-selected': {
        backgroundColor: styles.fillGreen,
        color: 'white',
        '&:hover': {
          backgroundColor: 'darkblue',
        },
      },
      '&:not(:last-of-type)': {
        borderRadius: '50px',
        border: 'none',
      },
      ':not(:first-of-type)': {
        marginLeft: '3px',
        borderRadius: '50px',
        border: 'none',
      },
      ':disabled': {
        color: styles.primaryFontColor,
      },
      '&.Mui-selected:disabled': {
        color: 'white',
      },
    },
  };

  const toggleButton = {
    fontFamily: 'YS Text , Arial, sans-serif',
  };

  return (
    <ToggleButtonGroup
      sx={toggleButtonGroup}
      value={selected}
      onChange={handleSelection}
      disabled
    >
      {[...Array(11).keys()].map((number) => (
        <ToggleButton sx={toggleButton} key={number} value={number}>
          {number}
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
  );
}

export default ProgressBar;
