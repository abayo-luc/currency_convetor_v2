import EStyleSheet from 'react-native-extended-stylesheet';
import { StyleSheet } from 'react-native';
const INPUT_HEIGHT = 48;
const BORDER_RADIUS = 4;
export default EStyleSheet.create({
  $buttonBackgroundColorBase: '$white',
  $buttonBackgroundColorModifier: 0.1,
  container: {
    backgroundColor: '$white',
    height: INPUT_HEIGHT,
    borderRadius: BORDER_RADIUS,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 11,
    width: '90%'
  },
  buttonContainer: {
    height: INPUT_HEIGHT,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '$white',
    borderTopLeftRadius: BORDER_RADIUS,
    borderBottomLeftRadius: BORDER_RADIUS
  },
  containerDisabled: {
    backgroundColor: '$lightGray'
  },
  buttonText: {
    fontSize: 20,
    fontWeight: '600',
    paddingHorizontal: 16,
    color: '$primaryBlue'
  },
  border: {
    height: INPUT_HEIGHT,
    width: StyleSheet.hairlineWidth,
    backgroundColor: '$border'
  },
  input: {
    flex: 1,
    height: INPUT_HEIGHT,
    fontSize: 18,
    paddingHorizontal: 8,
    color: '$inputText'
  },
  searchContainer: {
    flex: 1,
    flexDirection: 'row',
    marginVertical: 10,
    marginHorizontal: 20,
    borderRadius: 10,
    borderWidth: StyleSheet.hairlineWidth,
    justifyContent: 'center',
    alignItems: 'center'
  },
  searchInput: {
    flex: 1,
    backgroundColor: 'transparent',
    color: '$darkText',
    height: INPUT_HEIGHT * 0.8,
    fontSize: 18
  },
  searchIcon: {
    marginHorizontal: 5,
    marginTop: 2
  }
});
