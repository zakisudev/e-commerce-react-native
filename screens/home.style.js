import { StyleSheet } from 'react-native';
import { COLORS, SIZES } from '../assets/constants';
const styles = StyleSheet.create({
  textStyle: {
    fontFamily: 'bold',
    fontSize: 40,
  },
  appBarHorizontal: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    alignItems: 'center',
    padding: SIZES.padding,
  },
  appBar: {
    flexDirection: 'row',
    alignContent: 'center',
    padding: SIZES.padding,
    gap: SIZES.large,
  },
  location: {
    fontFamily: 'semiBold',
    fontSize: SIZES.medium,
    color: COLORS.gray,
    flexDirection: 'row',
    alignItems: 'center',
  },
  cartCount: {
    position: 'absolute',
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 999,
  },
  cartNumber: {
    fontFamily: 'regular',
    fontWeight: '600',
    fontSize: 10,
    color: COLORS.lightWhite,
  },
});

export default styles;
