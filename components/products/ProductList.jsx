import { View, Text } from 'react-native';
import styles from './productList.style';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const ProductList = () => {
  return (
    <GestureHandlerRootView>
      <View>
        <Text>ProductList</Text>
      </View>
    </GestureHandlerRootView>
  );
};

export default ProductList;
