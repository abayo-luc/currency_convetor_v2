import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';
import moment from 'moment';
import styles from './styles';

const LastConverted = ({ data, base, quote, rate }) => (
  <Text style={styles.smallText}>
    1 {base} = {rate} {quote} as of {moment(data).format('MMMM D, YY')}
  </Text>
);
LastConverted.propTypes = {
  date: PropTypes.object,
  base: PropTypes.string,
  quote: PropTypes.string,
  rate: PropTypes.number
};
export default LastConverted;
