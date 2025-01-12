import { StyleSheet, Text, TouchableOpacity, View, Image, ScrollView } from 'react-native';
import React from 'react';

const CardSlider = ({ navigation }) => {
  const handleAddToCart = () => {
    // Navigate to Cart screen when Add to Cart is clicked
    navigation.navigate('Cart');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.cardouthead}>Today's Special Food</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {/* Card 1 */}
        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('ProductScreen')}>
          {/* Image Section */}
          <View style={styles.imageCard}>
            <Image source={require('../Images/pizza1.jpg')} style={styles.cardimage} />
          </View>
          {/* Text Section */}
          <View style={styles.textCard}>
            <Text style={styles.cardin1txt}>Pizza</Text>
            <View style={styles.cardin2}>
              <Text style={styles.cardin2txt1}>Fast Food</Text>
              <Text style={styles.cardin2txt2}>
                Price - 
                <Text style={{ textDecorationLine: 'line-through' }}>100Rs </Text>
                <Text>90Rs</Text>
              </Text>
              <Text style={styles.cardin2txt3}>VEG</Text>
            </View>
            {/* Add to Cart Button */}
            <TouchableOpacity style={styles.cartButton} onPress={handleAddToCart}>
              <Text style={styles.cartButtonText}>Add to Cart</Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>

        {/* Card 2 */}
        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('ProductScreen')}>
          <View style={styles.imageCard}>
            <Image source={require('../Images/pizza2.jpg')} style={styles.cardimage} />
          </View>
          <View style={styles.textCard}>
            <Text style={styles.cardin1txt}>Pizza</Text>
            <View style={styles.cardin2}>
              <Text style={styles.cardin2txt1}>Fast Food</Text>
              <Text style={styles.cardin2txt2}>
                Price - 
                <Text style={{ textDecorationLine: 'line-through' }}>150Rs </Text>
                <Text>100Rs</Text>
              </Text>
              <Text style={styles.cardin2txt3}>VEG</Text>
            </View>
            <TouchableOpacity style={styles.cartButton} onPress={handleAddToCart}>
              <Text style={styles.cartButtonText}>Add to Cart</Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>

        {/* Card 3 */}
        <TouchableOpacity style={styles.card}>
          <View style={styles.imageCard}>
            <Image source={require('../Images/pizza3.jpg')} style={styles.cardimage} />
          </View>
          <View style={styles.textCard}>
            <Text style={styles.cardin1txt}>Pizza</Text>
            <View style={styles.cardin2}>
              <Text style={styles.cardin2txt1}>Fast Food</Text>
              <Text style={styles.cardin2txt2}>
                Price - 
                <Text style={{ textDecorationLine: 'line-through' }}>200Rs </Text>
                <Text>180Rs</Text>
              </Text>
              <Text style={styles.cardin2txt3}>VEG</Text>
            </View>
            <TouchableOpacity style={styles.cartButton} onPress={handleAddToCart}>
              <Text style={styles.cartButtonText}>Add to Cart</Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default CardSlider;

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  cardouthead: {
    fontSize: 20,
    fontWeight: '600',
    marginHorizontal: 10,
    paddingLeft: 5,
  },
  card: {
    width: 170,
    height: 260,
    marginLeft: 10,
    marginTop: 10,
    borderRadius: 15,
    backgroundColor: '#f8f9fa',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5,
  },
  imageCard: {
    height: '55%',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    overflow: 'hidden',
  },
  cardimage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  textCard: {
    flex: 1,
    padding: 8,
    backgroundColor: '#fff',
    justifyContent: 'space-between',
  },
  cardin1txt: {
    fontSize: 15,
    fontWeight: '700',
    marginBottom: 8,
    color: '#333',
  },
  cardin2: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  cardin2txt1: {
    fontSize: 13,
    fontWeight: '500',
    color: '#555',
  },
  cardin2txt2: {
    fontSize: 13,
    fontWeight: '500',
    color: '#555',
  },
  cardin2txt3: {
    height: 15,
    borderRadius: 10,
    backgroundColor: 'green',
    fontSize: 12,
    fontWeight: '600',
    color: 'white',
    textAlign: 'center',
    paddingHorizontal: 8,
  },
  cartButton: {
    marginTop: 8,
    backgroundColor: '#ff5722',
    paddingVertical: 6,
    borderRadius: 4,
    alignItems: 'center',
  },
  cartButtonText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 12,
  },
});
