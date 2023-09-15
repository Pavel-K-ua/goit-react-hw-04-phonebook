import PropTypes from 'prop-types';
export const ContactItem = ({ id, name, number, deleteContact }) => {
  return (
    <li>
      <p>
        {name}: <span>{number}</span>
      </p>
      <button onClick={() => deleteContact(id)}>delete</button>
    </li>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.string,
  deleteContact: PropTypes.func,
};
