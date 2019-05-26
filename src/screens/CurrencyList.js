import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Currencies from '../data/currencies';
import { FlatList, View, StatusBar } from 'react-native';
import { ListItem, Separator } from '../components/List';
import { changeCurrency } from '../store/actions/currencies';
import { SearchInput } from '../components/TextInput';
import { filterCurrencies } from '../utils/helpers';

class CurrencyList extends Component {
  state = {
    allCurrencies: Currencies,
    filteredCurrencies: Currencies
  };
  handlePress = currency => {
    const { navigation, changeCurrency } = this.props;
    const { type = 'base' } = navigation.state.params;
    changeCurrency(type, currency);
    navigation.goBack(null);
  };
  handleSearch = text => {
    const { allCurrencies } = this.state;
    const query = text.toString().toUpperCase();
    const currencies = filterCurrencies(allCurrencies, query);
    this.setState({
      filteredCurrencies: currencies
    });
  };
  render() {
    const {
      baseCurrency,
      quoteCurrency,
      navigation: { state },
      primaryColor
    } = this.props;
    const { filteredCurrencies } = this.state;
    const currentCurrency =
      state.params.type == 'base' ? baseCurrency : quoteCurrency;

    return (
      <View style={{ flex: 1 }}>
        <StatusBar barStyle="default" translucent={false} />
        <FlatList
          data={filteredCurrencies}
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
          ListHeaderComponent={
            <SearchInput
              bgColor={primaryColor}
              onChangeText={this.handleSearch}
            />
          }
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
