import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, Image } from 'react-native';
import styles from './styles';
import CheckIcon from './images/check.png';
const Icon = ({ checkMark, visible, iconBg }) => {
  const iconStyle = [styles.icon];
  if (visible) {
    iconStyle.push(styles.iconVisible);
  }
  if (iconBg) {
    iconStyle.push({ backgroundColor: iconBg });
  }
  return (
    <View style={iconStyle}>
      {checkMark && (
        <Image
          source={CheckIcon}
          style={styles.checkIcon}
          resizeMode="contain"
        />
      )}
    </View>
  );
};

Icon.propTypes = {
  checkMark: PropTypes.bool,
  visible: PropTypes.bool,
  iconBg: PropTypes.string
};

export default Icon;
