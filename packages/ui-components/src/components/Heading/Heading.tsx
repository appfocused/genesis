import * as React from 'react';
import clsx from 'clsx';

import { useStyles } from './Heading.style';

export interface Props {
  level?: number;
  className?: string;
  children?: any;
}

const Heading: React.FunctionComponent<Props> = props => {
  const { level = 2, className = '', children } = props;
  const tag = level < 6 ? `h${level}` : 'h2';

  const styles = useStyles(props);
  const headingProps = {
    className: clsx(styles.root, className)
  };

  return React.createElement(tag, headingProps, children);
};

export default Heading;
