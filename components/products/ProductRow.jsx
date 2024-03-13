import { FlatList, View, Text, ActivityIndicator } from 'react-native';
import styles from './productRow.style';
import { COLORS, SIZES } from '../../assets/constants';
import ProductCardView from './ProductCardView';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { useEffect, useState } from 'react';
import axios from 'axios';
import useFetch from './../../hook/useFetch';

const ProductRow = () => {
  const { data, isLoading, error, refetch } = useFetch();

  return (
    <GestureHandlerRootView>
      <View style={styles.container}>
        {isLoading ? (
          <ActivityIndicator size={SIZES.large} color={COLORS.primary} />
        ) : error ? (
          <Text>{error?.message}</Text>
        ) : (
          data && (
            <FlatList
              date={data}
              keyExtractor={(item) => item._id}
              renderItem={({ item }) => <ProductCardView item={item} />}
              horizontal
              contentContainerStyle={{ columnGap: SIZES.medium }}
            />
          )
        )}
      </View>
    </GestureHandlerRootView>
  );
};

export default ProductRow;
