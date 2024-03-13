import { COLORS, SIZES } from '../../assets/constants';

const styles = {
  container: {
    marginTop: SIZES.medium,
    marginBottom: -SIZES.xSmall,
    marginHorizontal: 12,
  },
  headers: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerTitle: {
    fontFamily: 'semiBold',
    fontSize: SIZES.xLarge - 2,
  },
};

export default styles;
