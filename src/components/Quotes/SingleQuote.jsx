import PropTypes from 'prop-types';

const SingleQuote = (props) => {
  const { itemQuote, itemAuthor } = props;

  return (
    <p>
      {itemQuote}
      <br />
      {`- by ${itemAuthor}`}
    </p>
  );
};

SingleQuote.propTypes = {
  itemQuote: PropTypes.string.isRequired,
  itemAuthor: PropTypes.string.isRequired,
};

export default SingleQuote;
