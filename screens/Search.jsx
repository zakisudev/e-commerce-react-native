import { Text, TextInput, View } from 'react-native';
import {
  GestureHandlerRootView,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import { COLORS } from '../assets/constants';
import styles from './search.style';
import { SafeAreaView } from 'react-native-safe-area-context';

const Search = () => {
  return (
    <GestureHandlerRootView>
      <SafeAreaView>
        <View style={styles.searchContainer}>
          <TouchableOpacity>
            <Feather name="search" size={24} style={styles.searchIcon} />
          </TouchableOpacity>

          <View style={styles.searchWrapper}>
            <TextInput
              style={styles.searchInput}
              value=""
              onPressIn={() => {}}
              placeholder="Search what you are looking for"
            />
          </View>

          <View>
            <TouchableOpacity style={styles.searchBtn}>
              <Feather name="search" size={24} color={COLORS.offwhite} />
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
};

export default Search;
