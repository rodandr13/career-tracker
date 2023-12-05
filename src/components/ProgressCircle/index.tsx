import CircularProgress, {
  CircularProgressProps,
} from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import styles from './ProgressCircle.module.scss';

function CircularProgressWithLabel(
  props: CircularProgressProps & { value: number }
) {
  return (
    <Box
      sx={{
        position: 'relative',
        display: 'inline-flex',
      }}
    >
      <div>
        <CircularProgress
          variant="determinate"
          value={100}
          size={135}
          thickness={2}
          sx={{ color: styles.backgroundSecondary }}
        />
        <CircularProgress
          size={135}
          thickness={2}
          sx={{
            color: styles.blueMainActive,
            position: 'absolute',
            left: 0,
            top: 0,
          }}
          variant="determinate"
          {...props}
        />
      </div>
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography
          variant="caption"
          component="div"
          sx={{
            color: styles.primaryFontColor,
            fontFamily: 'YS Display, Arial, sans-serif',
            fontSize: '34px',
            letterSpacing: '-0.9px',
          }}
        >{`${Math.round(props.value)}%`}</Typography>
      </Box>
    </Box>
  );
}
function ProgressCircle() {
  return (
    <section className={styles.progressCircle}>
      <CircularProgressWithLabel value={50} />
    </section>
  );
}

export default ProgressCircle;
