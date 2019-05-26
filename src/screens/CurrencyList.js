import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Currencies from '../data/currencies';
import { FlatList, View, StatusBar } from 'react-native';
import { ListItem, Separator } from '../components/List';
import { changeCurrency } from '../store/actions/currencies';

class CurrencyList extends Component {
  handlePress = currency => {
    const { navigation, changeCurrency } = this.props;
    const { type = 'base' } = navigation.state.params;
    changeCurrency(type, currency);
    navigation.goBack(null);
  };

  render() {
    const {
      baseCurrency,
      quoteCurrency,
      navigation: { state },
      primaryColor
    } = this.props;
    const currentCurrency =
      state.params.type == 'base' ? baseCurrency : quoteCurrency;

    return (
      <View style={{ flex: 1 }}>
        <StatusBar barStyle="default" translucent={false} />
        <FlatList
          data={Currencies}
          renderItem={({ item }) => (
            <ListItem
              text={item}
              selected={item === currentCurrency}
              onPress={() => this.handlePress(item)}
              iconBg={primaryColor}
            />
          )}
          keyExtractor={item => item}
          ItemSeparatorComponent={Separator}
        />
      </View>
    );
  }
}

CurrencyList.propTypes = {
  navigation: PropTypes.object,
  changeCurrency: PropTypes.func,
  primaryColor: PropTypes.string
};

const mapStateToProps = ({ currencies, themes }) => ({
  ...currencies,
  primaryColor: themes.primaryColor
});
export default connect(
  mapStateToProps,
  { changeCurrency }
)(CurrencyList);
