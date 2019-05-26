import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  ImageBackground,
  Text,
  Keyboard,
  Animated,
  Platform
} from 'react-native';
import ImageContainer from './images/background.png';
import LogoIcon from './images/logo.png';
import styles from './styles';

const ANIMATION_DURATION = 250;
class Logo extends Component {
  constructor(props) {
    super(props);
    this.containerImageWidth = new Animated.Value(styles.$largeContainerSize);
    this.imageWidth = new Animated.Value(styles.$largeImageSize);
  }
  componentDidMount() {
    const isAndroid = Platform.OS === 'android';
    this.KeyboardShowListener = Keyboard.addListener(
      isAndroid ? 'keyboardDidShow' : 'keyboardWillShow',
      this.keyboardShow
    );
    this.keyboardHideListener = Keyboard.addListener(
      isAndroid ? 'keyboardDidHide' : 'keyboardWillHide',
      this.keyboardHide
    );
  }

  componentWillUnmount() {
    this.keyboardHideListener.remove();
    this.KeyboardShowListener.remove();
  }

  keyboardShow = () => {
    Animated.parallel([
      Animated.timing(this.containerImageWidth, {
        toValue: styles.$smallContainerSize,
        duration: ANIMATION_DURATION
      }),
      Animated.timing(this.imageWidth, {
        toValue: styles.$smallImageSize,
        duration: ANIMATION_DURATION
      })
    ]).start();
  };
  keyboardHide = () => {
    Animated.parallel([
      Animated.timing(this.containerImageWidth, {
        toValue: styles.$largeContainerSize,
        duration: ANIMATION_DURATION
      }),
      Animated.timing(this.imageWidth, {
        toValue: styles.$largeImageSize,
        duration: ANIMATION_DURATION
      })
    ]).start();
  };
  render() {
    const imageContainerStyle = [
      styles.imageContainer,
      { width: this.containerImageWidth, height: this.containerImageWidth }
    ];
    const imageStyle = [
      styles.image,
      { width: this.imageWidth },
      this.props.tintColor && { tintColor: this.props.tintColor }
    ];
    return (
      <View style={styles.container}>
        <Animated.View style={imageContainerStyle}>
          <ImageBackground
            resizeMode="contain"
            source={ImageContainer}
            style={styles.imageBackground}
          >
            <Animated.Image
              source={LogoIcon}
              style={imageStyle}
              resizeMode="contain"
            />
          </ImageBackground>
        </Animated.View>
        <Text style={styles.text}>Currency Convertor</Text>
      </View>
    );
  }
}

Logo.propTypes = {
  tintColor: PropTypes.string
};
export default Logo;
