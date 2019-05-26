import React from 'react';
import { View, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from './styles';
import { toRgba } from '../../utils/helpers';
import SearchIcon from './img/search.png';
const SearchInput = ({ bgColor, onChangeText }) => {
  const container = [styles.searchContainer];
  if (bgColor) {
    container.push({
      borderColor: bgColor,
      backgroundColor: toRgba(bgColor, 0.1)
    });
  }
  return (
    <View style={container}>
      <Ionicons
        name="ios-search"
        size={30}
        color={bgColor}
        style={styles.searchIcon}
      />
      <TextInput
        style={styles.searchInput}
        onChangeText={onChangeText}
        placeholder="Search..."
        autoCapitalize="characters"
      />
    </View>
  );
};

export default SearchInput;
