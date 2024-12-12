import { Image, StyleSheet, Text, TextInput, View } from 'react-native';
import React, { memo } from 'react';

const SearchBar = ({ setSearchText, searchValue }) => {
  return (
    <View style={styles.searchContainer}>
      <TextInput
        style={styles.searchInput}
        value={searchValue}
        onChangeText={setSearchText}
        placeholder="Movie. Actors. Directors…"
        placeholderTextColor={'#687189'}
      />
      <View style={styles.searchIconContainer}>
        <Image
          style={styles.searchIcon}
          source={require('../assets/images/Search.png')}
        />
      </View>
    </View>
  );
};

export default memo(SearchBar);

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#FFFFFF',
    borderRadius: 7,
    paddingHorizontal: 16,
    marginHorizontal: 16,
  },
  searchInput: {
    fontSize: 12,
    color: '#687189',
    flex: 1,
    paddingVertical: 8
  },
  searchIconContainer: {
    height: 16,
    width: 16,
  },
  searchIcon: {
    height: '100%',
    width: '100%',
    resizeMode: 'contain',
  },
});
