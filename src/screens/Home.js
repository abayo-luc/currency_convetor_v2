import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { StatusBar, KeyboardAvoidingView } from 'react-native';
import { Header } from '../components/Header';
import { Container } from '../components/Container';
import { Logo } from '../components/Logo';
import { InputWithButton } from '../components/TextInput';
import { ClearButton } from '../components/Buttons';
import { LastConverted } from '../components/Texts';
import {
  swapCurrency,
  changeCurrencyAmount,
  getInitialConversions
} from '../store/actions/currencies';

class Home extends Component {
  static propTypes = {
    navigation: PropTypes.object
  };

  componentWillMount() {
    this.props.getInitialConversions();
  }

  handlePressBaseCurrency = () => {
    const { navigation } = this.props;
    navigation.navigate('CurrencyList', {
      title: 'Base Currency',
      type: 'base'
    });
  };

  handlePressQuoteCurrency = () => {
    const { navigation } = this.props;
    navigation.navigate('CurrencyList', {
      title: 'Quote Currency',
      type: 'quote'
    });
  };
  handleTextChange = amount => {
    const { changeCurrencyAmount } = this.props;
    changeCurrencyAmount(amount);
  };

  handleSwapCurrency = () => {
    const { swapCurrency } = this.props;
    swapCurrency();
  };

  handleOptionsPress = () => {
    const { navigation } = this.props;
    navigation.navigate('Options');
  };
  render() {
    const {
      baseCurrency,
      quoteCurrency,
      amount,
      conversionRate,
      isFetching,
      date,
      primaryColor
    } = this.props;
    const quotePrice = isFetching
      ? '...'
      : (amount * conversionRate).toFixed(2);
    return (
      <Container bgColor={primaryColor}>
        <StatusBar translucent={false} barStyle="light-content" />
        <Header onPress={this.handleOptionsPress} />
        <KeyboardAvoidingView behavior="padding">
          <Logo tintColor={primaryColor} />
          <InputWithButton
            buttonText={baseCurrency}
            onPress={this.handlePressBaseCurrency}
            keyboardType="numeric"
            defaultValue={amount.toString()}
            onChangeText={this.handleTextChange}
            textColor={primaryColor}
          />
          <InputWithButton
            buttonText={quoteCurrency}
            editable={false}
            onPress={this.handlePressQuoteCurrency}
            value={quotePrice.toString()}
            textColor={primaryColor}
          />
          <LastConverted
            base={baseCurrency}
            quote={quoteCurrency}
            data={date}
            rate={conversionRate}
          />
          <ClearButton
            text="Reverse currencies"
            onPress={this.handleSwapCurrency}
          />
        </KeyboardAvoidingView>
      </Container>
    );
  }
}
const mapStateToProps = ({ currencies, themes }) => {
  const conversionSelector =
    currencies.conversions[currencies.baseCurrency] || {};
  const rates = conversionSelector.rates || {};
  return {
    ...currencies,
    conversionRate: rates[currencies.quoteCurrency] || 0,
    isFetching: conversionSelector.isFetching,
    date: conversionSelector.date
      ? new Date(conversionSelector.date)
      : new Date(),
    primaryColor: themes.primaryColor
  };
};

Home.propTypes = {
  baseCurrency: PropTypes.string,
  quoteCurrency: PropTypes.string,
  amount: PropTypes.number,
  conversionRate: PropTypes.number,
  isFetching: PropTypes.bool,
  date: PropTypes.object
};

export default connect(
  mapStateToProps,
  { swapCurrency, changeCurrencyAmount, getInitialConversions }
)(Home);
