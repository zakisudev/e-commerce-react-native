import { FlatList, View, Text } from 'react-native';
import styles from './productRow.style';
import { SIZES } from '../../assets/constants';
import ProductCardView from './ProductCardView';

const ProductRow = () => {
  const products = [1, 2, 3, 4, 5, 6];

  return (
    <View style={styles.container}>
      <FlatList
        date={products}
        renderItem={({ item }) => <ProductCardView />}
        horizontal
        contentContainerStyle={{ columnGap: SIZES.medium }}
      />
    </View>
  );
};

export default ProductRow;
