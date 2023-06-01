import PropTypes from 'prop-types';
import KeyRow from './KeyRow';
import BUTTONS from './keypadButtons';

const Keypad = ({ onClickSetCalculation, calculation }) => {
  const buttons1 = BUTTONS.filter((key) => key.row === 1);
  const buttons2 = BUTTONS.filter((key) => key.row === 2);
  const buttons3 = BUTTONS.filter((key) => key.row === 3);
  const buttons4 = BUTTONS.filter((key) => key.row === 4);
  const buttons5 = BUTTONS.filter((key) => key.row === 5);
  const buttonrows = [
    buttons1, buttons2, buttons3, buttons4, buttons5,
  ];
  const keypadRows = buttonrows.map((buttonrow) => (
    <KeyRow
      buttons={buttonrow}
      key={buttonrow[0].row}
      onClickSetCalculation={onClickSetCalculation}
      calculation={calculation}
    />
  ));

  return <>{keypadRows}</>;
};

Keypad.propTypes = {
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

export default Keypad;
