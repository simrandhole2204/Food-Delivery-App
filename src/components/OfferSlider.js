import { StyleSheet, View, Image,Text } from 'react-native';
import React from 'react';
import Swiper from 'react-native-swiper';

const OfferSlider = () => {
  return (
    <View style={styles.container}>
      <Swiper
        autoplay={true}
        autoplayTimeout={3}
        showsButtons={true}
        removeClippedSubviews={false}
        dotColor='rgba(255, 255, 255, 0.5)' // Subtle inactive dot color
        activeDotColor='#FF3F00' // Vibrant active dot color
        paginationStyle={{ bottom: 10 }} // Align dots at the bottom
        prevButton={<Text style={styles.navButton}>‹</Text>}
        nextButton={<Text style={styles.navButton}>›</Text>}
      >
        <View style={styles.slide}>
          <Image source={require('../Images/sampleImg1.jpeg')} style={styles.image} />
        </View>
        <View style={styles.slide}>
          <Image source={require('../Images/sampleImg2.jpeg')} style={styles.image} />
        </View>
        <View style={styles.slide}>
          <Image source={require('../Images/sampleImg3.jpeg')} style={styles.image} />
        </View>
      </Swiper>
    </View>
  );
};

export default OfferSlider;

const styles = StyleSheet.create({
  container: {
    width: '95%',
    height: 120, // Reduced height for a smaller slider
    alignSelf: 'center',
    borderRadius: 15, // Slightly rounded corners for a cleaner look
    overflow: 'hidden',
    marginVertical: 10,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 15,
    resizeMode: 'cover',
  },
  slide: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  navButton: {
    color: '#FF3F00',
    fontSize: 30,
    fontWeight: '700',
    padding: 10,
  },
});
