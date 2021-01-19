import React from 'react';
import styles from './Layout.module.scss';

Layout.propTypes = {};

function Layout(props) {
  return <div className={styles.inventoryLayout}>{props.children}</div>;
}

export default Layout;
