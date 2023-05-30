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

export default Calculator;
