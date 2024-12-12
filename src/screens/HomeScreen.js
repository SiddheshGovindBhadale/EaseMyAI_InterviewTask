import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import SearchBar from '../components/SearchBar';
import CategorySection from '../components/CategorySection';
import CardContainer from '../components/CardContainer';
import axios from 'axios';

const HomeScreen = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [page, setPage] = useState(1);
  const [category, setCategory] = useState('manga');
  const [loading, setLoading] = useState(false);
  const [initialLoading, setInitialLoading] = useState(true);
  const [searchValue, setSearchText] = useState('');
  const [hasMoreData, setHasMoreData] = useState(true);

  const loadData = async () => {
    if (loading || !hasMoreData) return;
    setLoading(true);
    try {
      const response = await axios.get(
        `https://api.jikan.moe/v4/top/manga?type=${category}&page=${page}&limit=10`
      );
      const newData = response.data.data;
      setData(prevData => [...prevData, ...newData]);
      setHasMoreData(newData.length > 0);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
      setInitialLoading(false);
    }
  };

  useEffect(() => {
    setData([]);
    setPage(1);
    setInitialLoading(true);
    setHasMoreData(true);
    setSearchText('')
    loadData();
  }, [category]);

  useEffect(() => {
    loadData();
  }, [page]);

  const handleCategoryChange = (selectedCategory) => {
    setCategory(selectedCategory);
  };

  const handleLoadMore = () => {
    if (!loading && hasMoreData && filteredData.length === data.length) {
      setPage(prevPage => prevPage + 1);
    }
  };

  const filterData = (searchValue) => {
    if (searchValue === '') {
      setFilteredData(data);
    } else {
      const filtered = data.filter(item => {
        return item.title.toLowerCase().includes(searchValue.toLowerCase());
      });
      setFilteredData(filtered);
    }
  };

  useEffect(() => {
    filterData(searchValue);
  }, [searchValue, data]);

  return (
    <View style={styles.Container}>
      {initialLoading ? (
        <View style={styles.initialLoadingContainer}>
          <ActivityIndicator size="large" color="#FFFFFF" />
        </View>
      ) : (
        <>
          <SearchBar setSearchText={setSearchText} searchValue={searchValue} />
          <CategorySection selectedCategory={category} handleCategoryChange={handleCategoryChange} />
          <FlatList
            data={filteredData}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => <CardContainer item={item} />}
            contentContainerStyle={styles.listContainer}
            onEndReached={handleLoadMore}
            onEndReachedThreshold={0.5}
            ListFooterComponent={
              loading ? (
                <View style={styles.paginationLoading}>
                  <ActivityIndicator size="small" color="#FFFFFF" />
                </View>
              ) : null
            }
            ListEmptyComponent={
              <View style={styles.emptyResultContainer}>
                <Text style={styles.emptyResultText}>No results found.</Text>
              </View>
            }
            showsVerticalScrollIndicator={false}
          />
        </>
      )}
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#7d6af0',
    paddingTop: 30,
  },
  initialLoadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#7d6af0',
  },
  listContainer: {
    paddingBottom: 20,
    gap: 16,
    paddingHorizontal: 16,
  },
  paginationLoading: {
    marginVertical: 10,
    alignItems: 'center',
  },
  emptyResultContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 100
  },
  emptyResultText: {
    color: '#FFFFFF'
  }
});
