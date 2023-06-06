import PropTypes from 'prop-types';

const ResultScreen = ({ totalScreen }) => (
  <div className="screen-calc">
    { totalScreen.next || totalScreen.total || '0' }
  </div>
);

ResultScreen.propTypes = {
  totalScreen: PropTypes.shape({
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

export default ResultScreen;
