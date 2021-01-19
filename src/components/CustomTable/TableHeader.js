import React from 'react';
import PropTypes from 'prop-types';
import cs from 'classnames';
import styles from './CustomTable.module.scss';

TableHeader.propTypes = {
  columns: PropTypes.array,
};

function TableHeader(props) {
  const { columns } = props;

  return (
    <div className={cs(styles.flexTable, styles.header)}>
      {columns.map((colum) => (
        <div className={styles.flexRow} key={colum.key}>
          {colum.headerRender ? colum.headerRender() : colum.title}
        </div>
      ))}
    </div>
  );
}

export default TableHeader;
