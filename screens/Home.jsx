import { Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './home.style';
import { Ionicons } from '@expo/vector-icons';
import Welcome from '../components/home/Welcome';
import { ScrollView } from 'react-native-gesture-handler';
import Carousel from 'react-native-snap-carousel';
import Headings from '../components/home/Headings';
import ProductRow from '../components/products/ProductRow';

const Home = () => {
  return (
    <SafeAreaView>
      <View style={styles.appBarHorizontal}>
        <View style={styles.appBar}>
          <Ionicons name="menu" size={24} color="black" />
          <Text style={styles.location}>Addis Ababa</Text>
          <Ionicons name="search" size={24} color="black" />
          <View style={{ alignItems: 'flex-end' }}>
            <View style={styles.cartCount}>
              <Text style={styles.cartNumber}>3</Text>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
              <Ionicons name="cart" size={24} color="black" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <ScrollView>
        <Welcome />
        <Carousel />
        <Headings />
        <ProductRow />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
