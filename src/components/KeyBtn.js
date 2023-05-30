import PropTypes from 'prop-types';

const KeyBtn = (props) => {
  const { button } = props;
  const classes = `${button.category} ${button.value === '0' && 'double'}`;
  return (
    <div className={classes}>{button.value}</div>
  );
};

KeyBtn.propTypes = {
  button: PropTypes.objectOf.isRequired,
};

export default KeyBtn;
