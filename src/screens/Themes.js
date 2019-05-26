import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { View, ScrollView, StatusBar } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { ListItem, Separator } from '../components/List';
import { changePrimaryColor } from '../store/actions/themes';
const styles = EStyleSheet.create({
  $blue: '$primaryBlue',
  $green: '$primaryGreen',
  $orange: '$primaryOrange',
  $purple: '$primaryPurple',
  $dark: '$primaryDark'
});
const capitalize = (value = '') =>
  value
    .split('')
    .map((value, index) => (index === 0 ? value.toUpperCase() : value))
    .join('');

class Themes extends Component {
  handleThemePress = color => {
    const { navigation, changePrimaryColor } = this.props;
    changePrimaryColor(color);
    navigation.goBack(null);
  };
  render() {
    return (
      <ScrollView>
        <StatusBar translucent={false} barStyle="default" />
        {Object.keys(styles).map(key => (
          <View key={key}>
            <ListItem
              text={capitalize(key.replace('$', ''))}
              onPress={() => this.handleThemePress(styles[key])}
              checkMark={false}
              selected
              iconBg={styles[key]}
            />
            <Separator />
          </View>
        ))}
      </ScrollView>
    );
  }
}

const mapStateToProps = ({ themes }) => ({ ...themes });

Themes.propTypes = {
  changePrimaryColor: PropTypes.func
};

export default connect(
  mapStateToProps,
  { changePrimaryColor }
)(Themes);
