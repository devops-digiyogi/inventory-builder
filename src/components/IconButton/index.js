import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';

import styles from './IconButton.module.scss';

IconButton.propTypes = {
  onButtonClick: PropTypes.func,
  iconClass: PropTypes.string,
  btnLabel: PropTypes.string,
};

function IconButton(props) {
  const { onButtonClick, iconClass, btnLabel } = props;
  return (
    <Button
      color='primary'
      onClick={onButtonClick}
      className={styles.iconButton}
    >
      {btnLabel} <i className={iconClass}></i>
    </Button>
  );
}

export default IconButton;
