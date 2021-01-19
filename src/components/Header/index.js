import React from 'react';
import { headerConst } from 'localization/components/Header';
import styles from './Header.module.scss';

Header.propTypes = {};

function Header(props) {
  return (
    <div className={styles.inventoryHeader}>
      <h5>{headerConst.title}</h5>
    </div>
  );
}

export default Header;
