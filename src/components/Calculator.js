import PropTypes from 'prop-types';
import ResultScreen from './ResultScreen';

const Calculator = (props) => {
  const { buttons } = props;
  return (
    <div className="calculator-wrapper">
      <ResultScreen />
      <Keypad buttons={buttons} />
    </div>
  );
};

Calculator.propTypes = {
  buttons: PropTypes.arrayOf.isRequired,
};

export default Calculator;
