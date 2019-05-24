import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from './styles';
import Icon from './images/icon.png';
const ClearButton = ({ text, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View style={styles.wrapper}>
        <Image source={Icon} style={styles.icon} resizeMode="contain" />
        <Text style={styles.text}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

ClearButton.propTypes = {
  text: PropTypes.string,
  onPress: PropTypes.func
};
export default ClearButton;
