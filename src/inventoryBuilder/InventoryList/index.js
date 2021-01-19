import React from 'react';
import PropTypes from 'prop-types';
import styles from './InventoryList.module.scss';
import CustomTable from 'components/CustomTable';

InventoryList.propTypes = {
  columns: PropTypes.array,
  handleToggler: PropTypes.func,
  dataSource: PropTypes.array,
  onDataChange: PropTypes.func,
  editId: PropTypes.string,
};

function InventoryList(props) {
  const { dataSource, handleToggler, onDataChange, columns, editId } = props;
  return (
    <div className={styles.inventoryList}>
      <CustomTable
        columns={columns}
        dataSource={dataSource}
        onToggleClick={handleToggler}
        onDataChange={onDataChange}
        editId={editId}
      />
    </div>
  );
}

export default InventoryList;
