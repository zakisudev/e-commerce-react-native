import { Text, View, Image, TouchableOpacity } from 'react-native';
import styles from './productCardView.style';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../../assets/constants';
import { useNavigation } from '@react-navigation/native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const ProductCardView = ({ item }) => {
  const navigation = useNavigation();

  return (
    <GestureHandlerRootView>
      <TouchableOpacity
        onPress={() => navigation.navigate('ProductDetails', { item })}
      >
        <View style={styles.container}>
          <View style={styles.imageContainer}>
            <Image
              source={{
                uri: item.imageUrl,
              }}
              style={styles.image}
            />
          </View>

          <View style={styles.details}>
            <Text style={styles.title} numberOfLines={1}>
              {item.title}
            </Text>
            <Text style={styles.supplier} numberOfLines={1}>
              {item.supplier}
            </Text>
            <Text style={styles.price}>${item.price}</Text>
          </View>

          <TouchableOpacity style={styles.addBtn}>
            <Ionicons name="add-circle" size={35} color={COLORS.primary} />
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </GestureHandlerRootView>
  );
};

export default ProductCardView;
