import PropTypes from 'prop-types';
import KeyRow from './KeyRow';

const Keypad = (props) => {
  const { keypad } = props;
  const buttons1 = keypad.filter(keypad.row === 1);
  const buttons2 = keypad.filter(keypad.row === 2);
  const buttons3 = keypad.filter(keypad.row === 3);
  const buttons4 = keypad.filter(keypad.row === 4);
  const buttons5 = keypad.filter(keypad.row === 5);
  const buttonrows = [
    buttons1, buttons2, buttons3, buttons4, buttons5,
  ];
  const keypadRows = buttonrows.map((buttonrow) => (
    <KeyRow buttons={buttonrow} key={buttonrow[0].row} />
  ));

  return <>{keypadRows}</>;
};

Keypad.propTypes = {
  keypad: PropTypes.arrayOf.isRequired,
};

export default Keypad;
