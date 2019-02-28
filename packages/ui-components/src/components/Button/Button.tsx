import * as React from 'react';
import * as styles from './Button.module.css';

interface Props {
  buttonText: string;
}

export const Button = (props: Props) => {
  return <button className={styles.button}>{props.buttonText}</button>;
};
