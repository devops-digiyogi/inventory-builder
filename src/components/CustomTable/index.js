import React from 'react';
import PropTypes from 'prop-types';

import TableHeader from './TableHeader';
import TableBody from './TableBody';
import styles from './CustomTable.module.scss';

CustomTable.propTypes = {
  columns: PropTypes.array,
  onToggleClick: PropTypes.func,
  dataSource: PropTypes.array,
  onDataChange: PropTypes.func,
  editId: PropTypes.string,
};

function CustomTable(props) {
  const { columns, onToggleClick, dataSource, onDataChange, editId } = props;

  return (
    <div className={styles.tableContainer} aria-label='Destinations'>
      <TableHeader columns={columns} />
      <TableBody
        dataSource={dataSource}
        columns={columns}
        onToggleClick={onToggleClick}
        onDataChange={onDataChange}
        editId={editId}
      />
    </div>
  );
}

export default CustomTable;
