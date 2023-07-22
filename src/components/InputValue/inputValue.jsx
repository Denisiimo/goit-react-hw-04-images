import { InputVal } from './inputValue.styled';

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