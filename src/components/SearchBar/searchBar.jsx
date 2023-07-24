import { toast } from 'react-toastify';
import { ButtonSearch } from 'components/Button/buttonSearch';
import { SearchBar, SearchForm } from './searchBar.styled';
import { InputValue } from 'components/InputValue/inputValue';
import { useState } from 'react';
import PropTypes from 'prop-types';

export const Searchbar = ({ searchByQuery }) => {
  const [query, setQuery] = useState('');

  const onInputChange = e => {
    const { value } = e.currentTarget;
    setQuery(value.toLowerCase());
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    if (query.trim() === '') {
      toast.error('Nothing to search😉🐷', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
      return;
    }
    searchByQuery(query);
    setQuery('');
  };

  return (
    <>
      <SearchBar>
        <SearchForm onSubmit={handleSubmit}>
          <ButtonSearch />
          <InputValue onChange={onInputChange} value={query} />
        </SearchForm>
      </SearchBar>
    </>
  );
};

Searchbar.propTypes = {
  searchByQuery: PropTypes.func.isRequired,
};