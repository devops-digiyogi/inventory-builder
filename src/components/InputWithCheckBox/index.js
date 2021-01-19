import React from 'react';
import PropTypes from 'prop-types';
import { Input, Label, FormFeedback, FormGroup } from 'reactstrap';

import styles from './InputWithCheckBox.module.scss';

InputWithCheckBox.propTypes = {
  inputPlaceholder: PropTypes.string,
  inputValue: PropTypes.string,
  onInputValueChange: PropTypes.func,
  checkBoxLabel: PropTypes.string,
  isChecked: PropTypes.bool,
  onCheckBoxToggle: PropTypes.func,
};

function InputWithCheckBox(props) {
  const {
    inputPlaceholder,
    inputValue,
    onInputValueChange,
    checkBoxLabel,
    isChecked,
    isValid,
    onCheckBoxToggle,
  } = props;

  const handleInputValueChange = (e) => onInputValueChange(e.target.value);

  const handleCheckBoxToggle = () => onCheckBoxToggle(!isChecked);

  return (
    <div className={styles.inputWithCheckBoxContainer}>
      <FormGroup className='mb-0'>
        <Input
          invalid={isValid}
          type='text'
          className={styles.numberInput}
          placeholder={inputPlaceholder}
          value={inputValue}
          onChange={handleInputValueChange}
        />
        <FormFeedback>Invalid Data</FormFeedback>
      </FormGroup>
      <Label check>
        <Input
          type='checkbox'
          onChange={handleCheckBoxToggle}
          checked={isChecked}
        />
        {checkBoxLabel || 'unlimited'}
      </Label>
    </div>
  );
}

export default InputWithCheckBox;
