import { TouchableOpacity, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './newRivals.style';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { COLORS } from '../assets/constants';

const NewRivals = () => {
  const navigation = useNavigation();

  return (
    <GestureHandlerRootView>
      <SafeAreaView styles={styles.container}>
        <View style={styles.wrapper}>
          <View style={styles.upperRow}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Ionicons name="arrow-back" color={COLORS.lightWhite} size={30} />
            </TouchableOpacity>
            <Text style={styles.heading}>Products</Text>
          </View>
        </View>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
};

export default NewRivals;
