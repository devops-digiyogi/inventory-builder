import React from 'react';
import PropTypes from 'prop-types';
import { CustomInput } from 'reactstrap';
import cs from 'classnames';

import styles from './CustomTable.module.scss';

TableBody.propTypes = {
  columns: PropTypes.array,
  onToggleClick: PropTypes.func,
  dataSource: PropTypes.array,
  onDataChange: PropTypes.func,
};

function TableBody(props) {
  const { dataSource, columns, onToggleClick, onDataChange, editId } = props;

  const renderData = ({ data, catId, subCatId }) => {
    return (
      <>
        {columns.map((column) => {
          let dataToDisplay;

          if (column.isEdit && editId === data.sku_id) {
            dataToDisplay = column.renderEdit(data, column);
          } else if (column?.render) {
            dataToDisplay = column.render({
              data,
              isEdit: editId === data.sku_id,
              catId,
              subCatId,
            });
          } else {
            dataToDisplay = data[column.dataIndex] || '-';
          }

          return (
            <div className={styles.flexRow} key={column.key}>
              {dataToDisplay}
            </div>
          );
        })}
      </>
    );
  };

  const renderSubheader = (data, category = null) => {
    const handleToggler = () => {
      onToggleClick({ toggledItem: data.id, parentId: category?.id });
    };

    const handleSwitch = () => {
      onDataChange({
        key: 'isAvailable',
        updateValue: !data.isAvailable,
        itemId: data.id,
        parentId: category?.id,
      });
    };

    return (
      <div className={cs(styles.subHeader)}>
        <div className={cs()}>{data.name}</div>
        <div className={cs(styles.action)}>
          Availability
          <CustomInput
            type='switch'
            id={data.id}
            className={styles.switchBtn}
            name='customSwitch'
            onChange={handleSwitch}
            checked={data.isAvailable}
          />
          {
            <span onClick={handleToggler} className={styles.toggle}>
              {data?.isOpen ? '-' : '+'}
            </span>
          }
        </div>
      </div>
    );
  };

  return (
    <>
      {dataSource.map((data) => {
        return (
          <div key={data.cat_id} className={styles.category}>
            {renderSubheader(data)}
            {data?.isOpen && (
              <div className={styles.subcategory}>
                {data?.subcategories.map((subcategory) => (
                  <React.Fragment key={subcategory.id}>
                    {renderSubheader(subcategory, data)}
                    {subcategory?.isOpen && (
                      <div className={styles.subCatListContainer}>
                        {subcategory.items.map((item) => (
                          <div
                            className={cs(styles.flexTable, styles.subCatItem)}
                            key={item.sku_id}
                          >
                            {renderData({
                              data: item,
                              catId: data?.id,
                              subCatId: subcategory.id,
                            })}
                          </div>
                        ))}
                      </div>
                    )}
                  </React.Fragment>
                ))}
              </div>
            )}
          </div>
        );
      })}
    </>
  );
}

export default TableBody;
