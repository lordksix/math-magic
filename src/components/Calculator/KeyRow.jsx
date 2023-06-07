import PropTypes from 'prop-types';
import KeyBtn from './KeyBtn';

const KeyRow = (props) => {
  const { buttons, onClickSetCalculation, calculation } = props;
  const keys = buttons.map((btn) => (
    <KeyBtn
      button={btn}
      key={btn.id}
      onClickSetCalculation={onClickSetCalculation}
      calculation={calculation}
    />
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
    id: PropTypes.string.isRequired,
  })).isRequired,
  onClickSetCalculation: PropTypes.func.isRequired,
  calculation: PropTypes.shape({
    total: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.oneOf([null]),
    ]),
    next: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.oneOf([null]),
    ]),
    operation: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.oneOf([null]),
    ]),
  }).isRequired,
};

export default KeyRow;
