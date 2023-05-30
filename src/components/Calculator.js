const Calculator = ({ buttons }) => {
  return (
    <div className="calculator-wrapper">
      <Result />
      <Keypad buttons= {buttons}/>
    </div>,
  );
};

export default Calculator;