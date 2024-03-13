import { View, Text } from 'react-native';
import styles from './headings.style';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../../assets/constants';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Headings = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headers}>
        <Text style={styles.headerTitle}>New Rivals</Text>
        <TouchableOpacity>
          <Ionicons name="grid" size={24} color={COLORS.primary} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Headings;
