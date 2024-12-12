import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

const DetailScreen = ({ route }) => {
  const { data } = route?.params;
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.imageContainer}>
        <Image
          source={{
            uri: data?.images?.jpg?.image_url,
          }}
          style={styles.image}
        />
        <View style={styles.overlay}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => {
              navigation.goBack();
            }}
          >
            <Image
              style={styles.backImage}
              source={require('../assets/images/backButton.png')}
            />
          </TouchableOpacity>
          <View style={styles.metaContainer}>
            <Text style={styles.metaScore}>{data?.score}</Text>
            <Text style={styles.metaReviews}>Score</Text>
            <Text style={styles.metaCount}>
              {data?.scored_by} Users Scored
            </Text>
          </View>
        </View>
      </View>

      <View style={styles.detailsContainer}>
        <View style={styles.ratingContainer}>
          <Text style={styles.ratingText}>{data?.status}</Text>
        </View>

        <Text style={styles.movieTitle}>{data?.title}</Text>
        <Text style={styles.movieYear}>
          Published: {data?.published?.string}
        </Text>

        <View style={styles.tagsContainer}>
          {data?.title_synonyms.map((tag, index) => (
            <Text key={index} style={styles.tag}>
              #{tag}
            </Text>
          ))}
        </View>

        <Text style={styles.duration}>
          Popularity: {data?.popularity} | Favorites: {data?.favorites}
        </Text>
      </View>

      <View style={styles.synopsisContainer}>
        <Text style={styles.sectionTitle}>SYNOPSIS</Text>
        <Text style={styles.synopsisText}>
          {data?.synopsis}
        </Text>
      </View>

      <Text style={styles.producerText}>
        Type: {data?.type} | Volumes: {data?.volumes ?? 'N/A'}
      </Text>
      <Text style={styles.producerText}>
        Chapters: {data?.chapters ?? 'N/A'}
      </Text>

      <View style={styles.titlesContainer}>
        <Text style={styles.sectionTitle}>TITLES</Text>
        {data?.titles.map((titleObj, index) => (
          <View key={index} style={styles.titleItem}>
            <Text style={styles.titleText}>{titleObj?.type}</Text>
            <Text style={styles.subtitleText}>{titleObj?.title}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  imageContainer: {
    height: 300,
    position: 'relative',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 20,
  },
  backButton: {
    width: 40,
    height: 40,
    backgroundColor: '#000000aa',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backImage: {
    width: 16,
    height: 14,
  },
  metaContainer: {
    backgroundColor: '#000000aa',
    borderRadius: 8,
    padding: 8,
    alignItems: 'center',
  },
  metaScore: {
    color: '#ffffff',
    fontSize: 24,
    fontWeight: '600',
  },
  metaReviews: {
    color: '#ffffff',
    fontSize: 14,
  },
  metaCount: {
    color: '#cccccc',
    fontSize: 12,
  },
  detailsContainer: {
    padding: 16,
  },
  ratingContainer: {
    backgroundColor: '#f5c518',
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 4,
    alignSelf: 'flex-start',
  },
  ratingText: {
    color: '#000000',
    fontSize: 12,
    fontWeight: '600',
  },
  movieTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: '#000000',
    marginTop: 8,
  },
  movieYear: {
    fontSize: 16,
    color: '#555555',
    marginBottom: 8,
  },
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  tag: {
    backgroundColor: '#e0e0e0',
    color: '#000000',
    fontSize: 12,
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 4,
  },
  duration: {
    marginTop: 8,
    color: '#555555',
  },
  synopsisContainer: {
    marginTop: 16,
    paddingHorizontal: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000000',
    marginBottom: 8,
  },
  synopsisText: {
    fontSize: 14,
    color: '#333333',
    lineHeight: 20,
  },
  readMore: {
    color: '#007bff',
    fontSize: 14,
    fontWeight: '600',
  },
  producerText: {
    fontSize: 12,
    color: '#555555',
    marginHorizontal: 16,
    marginTop: 4,
  },
  titlesContainer: {
    marginTop: 16,
    paddingHorizontal: 16,
  },
  titleItem: {
    marginBottom: 16,
  },
  titleText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#000000',
  },
  subtitleText: {
    fontSize: 14,
    color: '#555555',
  },
});

export default DetailScreen;
