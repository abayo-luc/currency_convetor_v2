import React from 'react';
import PropTypes from 'prop-types';
import { SafeAreaView, Image, TouchableOpacity } from 'react-native';
import Icon from './images/gear.png';
import styles from './styles';

const Header = ({ onPress }) => {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Image source={Icon} style={styles.icon} />
      </TouchableOpacity>
    </SafeAreaView>
  );
};
Header.propTypes = {
  onPress: PropTypes.func
};
export default Header;
