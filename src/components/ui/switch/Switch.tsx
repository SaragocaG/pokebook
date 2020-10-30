import React from 'react';
import styles from './Switch.module.scss';

interface ComponentProps {
  value: boolean;
  onClick: Function;
}

const Switch = ({ value, onClick }: ComponentProps) => {
  return (
    <span onClickCapture={() => { onClick(); }} className={value ? styles.activeSwitch : styles.switch}>
      <span className={styles.slider} />
    </span>
  );
};

export default Switch;
