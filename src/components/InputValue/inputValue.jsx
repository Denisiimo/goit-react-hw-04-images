import { InputVal } from './inputValue.styled';
import PropTypes from 'prop-types';

export const InputValue = ({ value, onChange }) => {
  return (
    <>
      <InputVal
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search images and photos"
        value={value}
        onChange={onChange}
      />
    </>
  );
};

InputValue.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};