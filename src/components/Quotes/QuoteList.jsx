import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import SingleQuote from './SingleQuote';

const QuoteList = (props) => {
  const { data } = props;
  const dataList = data.map((item) => (
    <SingleQuote key={uuidv4()} itemQuote={item.quote} itemAuthor={item.author} />
  ));

  return (
    <>
      {data[0]?.category.includes('Error') ? <><p>Unable to fetch date</p></> : <></>}
      {dataList}
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
