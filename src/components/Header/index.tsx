import React from 'react';

import styles from './Header.module.css';

function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles['title-h1']}>Toodos</h1>
    </header>
  );
}

export default Header;
