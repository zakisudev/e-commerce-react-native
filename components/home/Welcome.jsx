import { View, Text, SafeAreaView } from 'react-native';
import styles from './welcome.style';
import { COLORS, SIZES } from '../../assets/constants';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { Feather, Ionicons } from '@expo/vector-icons';

const Welcome = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.welcomeTxt(COLORS.black, SIZES.xLarge)}>
          Find your best
        </Text>
        <Text style={styles.welcomeTxt(COLORS.primary, 0)}>Product yet</Text>
      </View>

      <View style={styles.searchContainer}>
        <TouchableOpacity>
          <Feather name="search" size={24} style={styles.searchIcon} />
        </TouchableOpacity>

        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            value=""
            onPressIn={() => navigation.navigate('Search')}
            placeholder="What you are looking for"
          />
        </View>

        <View>
          <TouchableOpacity style={styles.searchBtn}>
            <Ionicons
              name="camera-outline"
              size={SIZES.xLarge}
              color={COLORS.offwhite}
            />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Welcome;
