import PropTypes from 'prop-types';

export const block = PropTypes.shape({
  action_mroot: PropTypes.string.isRequired,
  block_num: PropTypes.number.isRequired,
  confirmed: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
  new_producers: PropTypes.string,
  previous: PropTypes.string.isRequired,
  producer: PropTypes.string.isRequired,
  producer_signature: PropTypes.string.isRequired,
  ref_block_prefix: PropTypes.number.isRequired,
  schedule_version: PropTypes.number.isRequired,
  timestamp: PropTypes.string.isRequired,
  transaction_mroot: PropTypes.string.isRequired
});

export const blocks = PropTypes.arrayOf(block);

export default { blocks };
