import Button from '@mui/material/Button';
import styles from './CustomButton.module.scss';

interface Props {
  variant?: string;
  children?: React.ReactNode;
}

function CustomButton({ variant, children }: Props) {
  const basicStyle = {
    fontFamily: 'YS Text , Arial, sans-serif',
    color: styles.blueMain,
    textTransform: 'initial',
    backgroundColor: '#ffffff',
    borderRadius: '6px',
    padding: '10px 20px 10px 20px',
    fontSize: '14px',
    fontWeight: '500',
    lineHeight: '20px',
    letterSpacing: 0,
    boxSizing: 'border-box',
    boxShadow: 'none',
    '&:hover': {
      backgroundColor: styles.blueMain,
      color: '#ffffff',
    },
  };
  const outlineButton = {
    ...basicStyle,
    border: `1px solid ${styles.blueMain}`,
  };

  const smallButton = {
    ...basicStyle,
    color: styles.primaryFontColor,
    backgroundColor: styles.tableLinkColor,
    padding: '3px 13px',
    '&:hover': {
      backgroundColor: styles.blueMain,
      color: '#ffffff',
    },
  };

  let selectedStyle = basicStyle;
  if (variant === 'outline') {
    selectedStyle = outlineButton;
  } else if (variant === 'small') {
    selectedStyle = smallButton;
  }
  return <Button sx={selectedStyle}>{children}</Button>;
}

CustomButton.defaultProps = {
  variant: 'basic',
  children: null,
};

export default CustomButton;
