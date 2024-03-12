import { View, Text } from 'react-native';
import { SliderBox } from 'react-native-image-slider-box';
import { COLORS } from '../../assets/constants';
const Carousel = () => {
  const slides = [
    'https://google.com/image1.png',
    'https://google.com/image2.png',
    'https://google.com/image3.png',
  ];

  return (
    <View style={styles.carouselContainer}>
      <SliderBox
        images={slides}
        dotColor={COLORS.primary}
        inactiveDotColor={COLORS.secondary}
        ImageComponentStyle={{ borderRadius: 15, width: '93%', marginTop: 15 }}
        autoplay
        circleLoop
      />
    </View>
  );
};

export default Carousel;

const styles = StyleSheet.create({
  carouselContainer: {
    flex: 1,
    alignItems: 'center',
  },
});
