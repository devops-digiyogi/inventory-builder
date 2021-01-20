import React, { useState } from 'react';

import SearchInput from 'components/SearchInput';
import InventoryList from 'inventoryBuilder/InventoryList';


import styles from './InventoryContainer.module.scss';
import TableData, { data } from './Partials';
import { Button } from 'reactstrap';
import { isNumeric } from 'utility/DataUtils';

InventoryContainer.propTypes = {};

function InventoryContainer(props) {
  const [dataSource, setDataSource] = useState(data || []);
  const [searchValue, setSearchValue] = useState('');
  const [stockValue, setStock] = useState('');
  const [isUnlimited, setIsUnlimited] = useState(false);
  const [editDetails, setEditDetails] = useState(null);
  const [isValid, setIsValid] = useState(false);

  const resetEditField = () => {
    setStock('');
    setIsUnlimited(false);
    setEditDetails(null);
  };

  const handleToggler = ({ toggledItem, parentId }) => {
    resetEditField();
    const tempDataList = [...dataSource];
    tempDataList.forEach((tempData) => {
      if (parentId) {
        tempData.subcategories.forEach((subcategory) => {
          if (subcategory.id === toggledItem) {
            subcategory.isOpen = !subcategory.isOpen;
          }
        });
      } else if (tempData.id === toggledItem) {
        tempData.isOpen = !tempData.isOpen;
      }
    });
    setDataSource(tempDataList);
  };

  const handleSearch = () => {
    resetEditField();
    if (searchValue) {
      const updatedData = dataSource.filter((category) => {
        return setDataSource(dataSource);
      });
      setSearchValue(updatedData);
    }
  };

  const handleStockValueChange = (value) => {
    setStock(value);

    if (value && !isNumeric(value)) {
      return setIsValid(true);
    }
    return setIsValid(false);
  };

  const handleDataChange = ({ key, updateValue, itemId, parentId }) => {
    resetEditField();
    const tempDataList = [...dataSource];
    tempDataList.forEach((tempData) => {
      if (parentId) {
        tempData.subcategories.forEach((subcategory) => {
          if (subcategory.id === itemId) {
            subcategory[key] = updateValue;
          }
        });
      } else if (tempData.id === itemId) {
        tempData[key] = updateValue;
      }
    });
    setDataSource(tempDataList);
  };

  const handleSave = () => {
    if (!stockValue && !isUnlimited) {
      return setIsValid(true);
    }

    if (!isValid) {
      const updateValue = isUnlimited ? 'Unlimited' : stockValue;
      const tempDataList = [...dataSource];
      const { editId, catId, subCatId } = editDetails;
      tempDataList.forEach((tempData) => {
        if (tempData.id === catId) {
          tempData.subcategories.forEach((subcategory) => {
            if (subcategory.id === subCatId) {
              subcategory.items.forEach((item) => {
                if (item.sku_id === editId) item.stocks = updateValue;
              });
            }
          });
        }
      });
      setDataSource(tempDataList);

      resetEditField();
    }
  };

  return (
    <div className={styles.inventoryContainer}>
      <div className={styles.searchContainer}>
        <SearchInput
          onSearchValueChange={setSearchValue}
          searchValue={searchValue}
          placeholderText={'Search by Item Name, SKU id..s'}
        />
        <Button
          color='primary'
          className={styles.searchBtn}
          onClick={handleSearch}
        >
          search
        </Button>
      </div>

      <InventoryList
        columns={TableData({
          handleSave: handleSave,
          stockValue,
          setStock: handleStockValueChange,
          isUnlimited,
          setIsUnlimited,
          isValid,
          setEditDetails,
        })}
        editId={editDetails?.editId || ''}
        dataSource={dataSource}
        handleToggler={handleToggler}
        onDataChange={handleDataChange}
      />
    </div>
  );
}

export default InventoryContainer;
