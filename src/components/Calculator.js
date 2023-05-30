const Calculator = ({ buttons }) => {
  return (
    <div>
      <Result />
      <Keypad buttons= {buttons}/>
    </div>,
  );
};

export default Calculator;