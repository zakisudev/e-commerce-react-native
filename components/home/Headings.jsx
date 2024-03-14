import { View, Text } from 'react-native';
import styles from './headings.style';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../../assets/constants';
import {
  GestureHandlerRootView,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

const Headings = () => {
  const navigation = useNavigation();

  return (
    <GestureHandlerRootView>
      <View style={styles.container}>
        <View style={styles.headers}>
          <Text style={styles.headerTitle}>New Rivals</Text>
          <TouchableOpacity onPress={() => navigation.navigate('ProductsList')}>
            <Ionicons name="grid" size={24} color={COLORS.primary} />
          </TouchableOpacity>
        </View>
      </View>
    </GestureHandlerRootView>
  );
};

export default Headings;
