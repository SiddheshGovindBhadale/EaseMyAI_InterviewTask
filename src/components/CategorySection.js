import React, { memo } from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const categories = ['manga', 'novel', 'lightnovel', 'oneshot', 'doujin', 'manhwa', 'manhua'];

const CategorySection = ({ selectedCategory, handleCategoryChange }) => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.categorySection} horizontal>
        {categories.map(category => (
          <TouchableOpacity
            key={category}
            style={styles.categoryButton}
            onPress={() => handleCategoryChange(category)}>
            <View style={styles.categoryWrapper}>
              {selectedCategory === category && (
                <Image
                  style={styles.arrowImage}
                  source={require('../assets/images/rightArrow.png')}
                />
              )}
              <Text
                style={[
                  styles.categoryButtonText,
                  selectedCategory === category && styles.selectedText,
                ]}>
                {category}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default memo(CategorySection);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 15,
  },
  categorySection: {
    gap: 35,
    paddingHorizontal: 16
  },
  categoryWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  categoryButton: {
    // paddingHorizontal: 10,
    paddingVertical: 5,
  },
  categoryButtonText: {
    color: '#FFFFFF',
    fontWeight: '500',
    fontSize: 14,
    textTransform: 'capitalize',
  },
  selectedText: {
    color: '#FFD700',
    fontWeight: 'bold',
  },
  arrowImage: {
    width: 17,
    height: 12,
    marginRight: 5,
  },
});