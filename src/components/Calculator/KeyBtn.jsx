import PropTypes from 'prop-types';
import calculate from 'logic/calculate';

const KeyBtn = (props) => {
  const { button, onClickSetCalculation, calculation } = props;
  const classes = button.value === '0' ? `${button.category} keybtn double` : `${button.category} keybtn`;
  const handleClick = (e) => {
    onClickSetCalculation(calculate(calculation, e.target.textContent));
  };
  return (
    <button type="button" className={classes} onClick={handleClick}>
      {button.value}
    </button>
  );
};

KeyBtn.propTypes = {
  button: PropTypes.shape({
    category: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    row: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
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
