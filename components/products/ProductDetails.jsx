import { Text, View, Image, TouchableOpacity } from 'react-native';
import styles from './productDetails';
import {
  Ionicons,
  SimpleLineIcons,
  MaterialCommunityIcons,
  Fontisto,
} from '@expo/vector-icons';
import { COLORS, SIZES } from '../../assets/constants';
import { useState } from 'react';
import { useRoute } from '@react-navigation/native';

const ProductDetails = ({ navigation }) => {
  const route = useRoute();
  const { item } = route.params;
  const [count, setCount] = useState(1);

  const increment = () => setCount(count + 1);
  const decrement = () => count > 1 && setCount(count - 1);

  return (
    <View style={styles.container}>
      <View style={styles.upperRow}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back-icon" size={30} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {}}>
          <Ionicons name="chevron-back-icon" size={30} color={COLORS.primary} />
        </TouchableOpacity>
      </View>

      <Image
        source={{
          uri: item.imageUrl,
        }}
        style={styles.image}
      />

      <View style={styles.details}>
        <View style={styles.titleRow}>
          <Text style={styles.title}>{item.title}</Text>
          <View style={styles.priceWrapper}>
            <Text style={styles.price}>$ {item.price}</Text>
          </View>
        </View>

        <View style={styles.ratingRow}>
          <View style={styles.rating}>
            <TouchableOpacity onPress={() => decrement()}>
              <SimpleLineIcons name="minus" size={20} />
            </TouchableOpacity>

            <Text style={styles.ratingText}>{count}</Text>

            <TouchableOpacity onPress={() => increment()}>
              <SimpleLineIcons name="plus" size={20} />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.descriptionWrapper}>
          <Text style={styles.description}>
            <Text style={styles.descText}>{item.description}</Text>
          </Text>
        </View>

        <View style={{ marginBottom: SIZES.small }}>
          <View style={styles.location}>
            <View style={{ flexDirection: 'row' }}>
              <Ionicons name="location-outline" size={20} />
              <Text style={{}}>Addis Ababa</Text>
            </View>

            <View style={{ flexDirection: 'row' }}>
              <MaterialCommunityIcons name="truck-delivery-outline" size={20} />
              <Text style={{}}>Free delivery</Text>
            </View>
          </View>
        </View>

        <View style={styles.cartRow}>
          <TouchableOpacity onPress={() => {}} style={styles.cartBtn}>
            <Text style={styles.cartTitle}>BUY NOW</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => {}} style={styles.addBtn}>
            <Fontisto name="shopping-bag" size={22} color={COLORS.lightWhite} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ProductDetails;
