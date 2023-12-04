import styles from './CustomH2.module.scss';

interface Props {
  children?: React.ReactNode;
}

function CustomH2({ children }: Props) {
  return <h2 className={styles.header}>{children}</h2>;
}

CustomH2.defaultProps = {
  children: null,
};

export default CustomH2;
