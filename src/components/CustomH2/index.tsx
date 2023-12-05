import styles from './CustomH2.module.scss';
import clsx from 'clsx';

interface Props {
  children?: React.ReactNode;
  parentClasses?: string;
}

function CustomH2({ children, parentClasses }: Props) {
  const h2ClassName = clsx(styles.header, parentClasses);

  return <h2 className={h2ClassName}>{children}</h2>;
}

CustomH2.defaultProps = {
  children: null,
  parentClasses: '',
};

export default CustomH2;
