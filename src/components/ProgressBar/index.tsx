import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import React, { useState } from 'react';
import styles from './ProgressBar.module.scss';

interface Props {
  disabled?: boolean;
  exclusive?: boolean;
}

function ProgressBar({ disabled, exclusive }: Props) {
  const [selected, setSelected] = useState<number[] | number>([3, 6]);

  const handleSelection = (
    event: React.SyntheticEvent<HTMLElement, Event>,
    newSelectedValues: number[]
  ) => {
    setSelected(newSelectedValues);
    console.log(event);
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
        '& + .MuiToggleButtonGroup-grouped.Mui-selected': {
          marginLeft: '3px',
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
      disabled={disabled}
      exclusive={exclusive}
    >
      {[...Array(11).keys()].map((number) => (
        <ToggleButton sx={toggleButton} key={number} value={number}>
          {number}
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
  );
}

ProgressBar.defaultProps = {
  disabled: false,
  exclusive: true,
};

export default ProgressBar;
