import PropTypes from 'prop-types';
import KeyBtn from './KeyBtn';

const KeyRow = (props) => {
  const { buttons } = props;
  const keys = buttons.map((btn) => (
    <KeyBtn button={btn} key={btn.id} />
  ));

  return (
    <div className="keyrow">{keys}</div>
  );
};

KeyRow.propTypes = {
  buttons: PropTypes.arrayOf(PropTypes.shape({
    category: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    row: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
  })).isRequired,
};

export default KeyRow;
