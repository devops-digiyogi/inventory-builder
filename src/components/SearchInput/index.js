import React from 'react';
import { Input } from 'reactstrap';
import PropTypes from 'prop-types';
import cs from 'classnames';
import { searchInputConst } from 'localization/components/SearchInput';
import styles from './SearchInput.module.scss';

SearchInput.propTypes = {
  placeholderText: PropTypes.string,
  searchValue: PropTypes.string,
  onSearchValueChange: PropTypes.func,
};

SearchInput.defaultProps = {
  placeholderText: searchInputConst.placeholderText,
};

function SearchInput(props) {
  const { placeholderText, searchValue, onSearchValueChange } = props;

  const handleClearSearch = () => {
    onSearchValueChange('');
  };

  const handleInputChange = (event) => {
    const nextValue = event.target.value;
    onSearchValueChange(nextValue);
  };

  return (
    <div className={styles.searchInput}>
      <i
        className={cs(styles.searchIcon, 'fa fa-search')}
        onClick={handleClearSearch}
      />
      <Input
        type='text'
        placeholder={placeholderText}
        value={searchValue}
        onChange={handleInputChange}
      />
      <i
        className={cs(styles.clearBtn, 'fa fa-times-circle')}
        onClick={handleClearSearch}
      />
    </div>
  );
}

export default SearchInput;
