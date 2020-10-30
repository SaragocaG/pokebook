import React from 'react';
import styles from './Loading.module.scss';

const Loading = () => {
  return (
    <div className={styles.container}>
      <img
        src="/assets/icons/pokeball.svg"
        className={styles.loader}
      />
    </div>
  );
};

export default Loading;
