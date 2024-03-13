import { View, Text } from 'react-native';
import React from 'react';
import { StyleSheet } from 'react-native';
import { SliderBox } from 'react-native-image-slider-box';
import { COLORS } from '../../assets/constants';

const Carousel = () => {
  const slides = [
    'https://www.thespruce.com/thmb/2DdYHKJEIbqh34JJmSvG7gGeG9w=/fit-in/1500x2230/filters:no_upscale():max_bytes(150000):strip_icc()/spr-june-couches-test-crate-barrel-lounge-julia-warren-002-83e9ee0b19e54661a2b6aca94fe0c1d7.jpeg',
    'https://www.thespruce.com/thmb/2DdYHKJEIbqh34JJmSvG7gGeG9w=/fit-in/1500x2230/filters:no_upscale():max_bytes(150000):strip_icc()/spr-june-couches-test-crate-barrel-lounge-julia-warren-002-83e9ee0b19e54661a2b6aca94fe0c1d7.jpeg',
    'https://www.thespruce.com/thmb/2DdYHKJEIbqh34JJmSvG7gGeG9w=/fit-in/1500x2230/filters:no_upscale():max_bytes(150000):strip_icc()/spr-june-couches-test-crate-barrel-lounge-julia-warren-002-83e9ee0b19e54661a2b6aca94fe0c1d7.jpeg',
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
