import React from 'react';
import PropTypes from 'prop-types';
import color from 'color';
import { View, Text, TouchableHighlight, TextInput } from 'react-native';
import styles from './styles';

const InputWithButton = props => {
  const { onPress, buttonText, editable = true } = props;
  const containerStyles = [styles.container];
  const underlayColor = color(styles.$buttonBackgroundColorBase).darken(
    styles.$buttonBackgroundColorModifier
  );

  if (!editable) {
    containerStyles.push(styles.containerDisabled);
  }
  return (
    <View style={containerStyles}>
      <TouchableHighlight
        underlayColor={underlayColor}
        onPress={onPress}
        style={styles.buttonContainer}
      >
        <Text style={styles.buttonText}>{buttonText}</Text>
      </TouchableHighlight>
      <View style={styles.border} />
      <TextInput style={styles.input} {...props} />
    </View>
  );
};
InputWithButton.propTypes = {
  onPress: PropTypes.func,
  buttonText: PropTypes.string,
  editable: PropTypes.bool
};
export default InputWithButton;
