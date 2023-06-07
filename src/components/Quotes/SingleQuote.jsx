import PropTypes from 'prop-types';

const SingleQuote = (props) => {
  const { itemKey, itemQuote, itemAuthor } = props;

  return (
    <p key={itemKey}>
      {itemQuote}
      <br />
      {`- by ${itemAuthor}`}
    </p>
  );
};

SingleQuote.propTypes = {
  itemKey: PropTypes.string.isRequired,
  itemQuote: PropTypes.string.isRequired,
  itemAuthor: PropTypes.string.isRequired,
};

export default SingleQuote;
