import * as React from 'react';
import clsx from 'clsx';

import { useStyles } from './Heading.style';

export interface Props {
  level?: number;
  className?: string;
  children?: any;
}

const Heading: React.FunctionComponent<Props> = props => {
  const { level = 2, className: classNameProp = '', children } = props;
  const tag = level < 6 ? `h${level}` : 'h2';

  const classes = useStyles(props);

  const className = clsx(
    classes.root,
    {
      [classes.h1]: level === 1,
      [classes.h2]: level === 2,
      [classes.h3]: level === 3
    },
    classNameProp
  );

  const headingProps = {
    className
  };

  return React.createElement(tag, headingProps, children);
};

export default Heading;
