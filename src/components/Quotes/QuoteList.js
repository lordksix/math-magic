import PropTypes from 'prop-types';
import SingleQuote from './SingleQuote';

const QuoteList = (props) => {
  const { data } = props;

  return (
    <>
      {data[0]?.category.includes('Error') ? <><p>Unable to fetch date</p></> : <></>}
      {data.map((item) => (
        <>
          <SingleQuote itemKey={item.quote} itemQuote={item.quote} itemAuthor={item.author} />
        </>
      ))}
    </>
  );
};

QuoteList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    quote: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  })).isRequired,

};

export default QuoteList;
