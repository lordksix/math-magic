import PropTypes from 'prop-types';
import calculate from 'logic/calculate';

const KeyBtn = (props) => {
  const {
    onClickSetCalculation,
    calculation,
    value,
    category,
  } = props;
  const classes = value === '0' ? `${category} keybtn double` : `${category} keybtn`;
  const handleClick = (e) => {
    onClickSetCalculation(calculate(calculation, e.target.textContent));
  };
  return (
    <button type="button" className={classes} onClick={handleClick}>
      {value}
    </button>
  );
};

KeyBtn.propTypes = {
  category: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
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

export default KeyBtn;
