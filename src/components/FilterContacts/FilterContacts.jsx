import React from 'react';
import PropTypes from 'prop-types';

// import {} from ""

export const FilterContacts = ({ takeData, filterValue }) => {
  return (
    <form>
      <input onChange={takeData} type="text" />
    </form>
  );
};

export default FilterContacts;

FilterContacts.propTypes = {
  takeData: PropTypes.func,
  filterValue: PropTypes.string,
};
