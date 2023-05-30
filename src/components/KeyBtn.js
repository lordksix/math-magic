import PropTypes from 'prop-types';

const KeyBtn = (props) => {
  const { button } = props;
  const classes = button.value === '0' ? `${button.category} keybtn double` : `${button.category} keybtn`;
  return (
    <div className={classes}>
      <span>{button.value}</span>
    </div>
  );
};

KeyBtn.propTypes = {
  button: PropTypes.objectOf.isRequired,
};

export default KeyBtn;
