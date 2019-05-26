import React from 'react';
import PropTypes from 'prop-types';
import { View, Keyboard, TouchableWithoutFeedback } from 'react-native';
import styles from './styles';

const Container = ({ children, bgColor }) => {
  const containerStyles = [styles.container];
  if (bgColor) {
    containerStyles.push({ backgroundColor: bgColor });
  }
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={containerStyles}>{children}</View>
    </TouchableWithoutFeedback>
  );
};

Container.propTypes = {
  children: PropTypes.any
};
export default Container;
