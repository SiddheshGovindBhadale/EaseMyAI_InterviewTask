import React, { memo } from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { formatDate } from '../utils/Utils';

const CardContainer = ({ item }) => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('DetailScreen', { data: item });
  };

  const categorys = item?.genres.slice(0, 3).map(genre => genre.name).join(", ");

  return (
    <TouchableOpacity style={styles.cardContainer} onPress={handlePress}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{ uri: item?.images?.jpg?.image_url }}
          defaultSource={require('../assets/images/test.png')}
        />
      </View>

      <View style={styles.cardContent}>
        <View style={styles.topContent}>
          <Text style={styles.cardTitle}>{item?.title}</Text>
          <Text style={styles.cardTime}>{formatDate(item?.published?.from)}</Text>
          <Text style={styles.categoryText}>{categorys}</Text>
        </View>

        <View style={styles.bottomContent}>
          <View style={styles.ratingWrapper}>
            <Image
              style={styles.starIcon}
              source={require('../assets/images/Star.png')}
            />
            <View style={styles.ratingTextContainer}>
              <Text style={styles.ratingText}>{item?.score}</Text>
              <Text style={styles.ratingText}>/</Text>
              <Text style={styles.totalRating}>10</Text>
            </View>
          </View>
          <Text style={styles.reviewStats}>{item?.members} members | {item?.favorites} favorites</Text>

          <View style={styles.rankWrapper}>
            <View style={styles.rankBadge}>
              <Text style={styles.rankText}>{item?.rank}</Text>
            </View>
            <Text style={styles.categoryText}>Rank</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default memo(CardContainer);

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#9683f5',
    flexDirection: 'row',
    borderRadius: 8,
    overflow: 'hidden',
    minHeight: 208,
    maxHeight: 220
  },
  imageContainer: {
    width: 140,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 8,
  },
  cardContent: {
    flex: 1,
    padding: 15,
    justifyContent: 'space-between',
  },
  topContent: {
    gap: 2,
  },
  cardTitle: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: '600',
    letterSpacing: 0.2,
  },
  cardTime: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '600',
  },
  categoryText: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: '400',
  },
  bottomContent: {
    gap: 3,
  },
  ratingWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  starIcon: {
    width: 20,
    height: 20,
    marginRight: 5,
    tintColor: '#FFFFFF'
  },
  ratingTextContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  ratingText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '600',
  },
  totalRating: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '600',
  },
  reviewStats: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '600',
  },
  rankWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  rankBadge: {
    backgroundColor: '#F8E71C',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 5,
    borderRadius: 4,
  },
  rankText: {
    fontSize: 11,
    fontWeight: '600',
    color: '#3C4150'
  },
});
