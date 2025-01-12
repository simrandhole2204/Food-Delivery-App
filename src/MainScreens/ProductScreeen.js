import React, { useRef } from 'react';
import { 
  Animated, 
  ScrollView, 
  StyleSheet, 
  Text, 
  TouchableOpacity, 
  View, 
  SafeAreaView, 
  Dimensions, 
  Image 
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { FontAwesome } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window');

const ProductScreeen = () => {
  const fadeAnim = useRef(new Animated.Value(0)).current; // For fade-in animation
  const slideAnim = useRef(new Animated.Value(-200)).current; // For sliding animation

  // Start animations on mount
  React.useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();

    Animated.timing(slideAnim, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim, slideAnim]);

  return (
    <SafeAreaView style={styles.safeContainer}>
      <ScrollView style={styles.container}>
        <StatusBar backgroundColor="#FF3F00" />
        <Animated.View style={[styles.header, { transform: [{ translateY: slideAnim }] }]}>
          <TouchableOpacity>
            <Text style={styles.closeText}>Close</Text>
          </TouchableOpacity>
        </Animated.View>

        <Animated.View style={[styles.content, { opacity: fadeAnim }]}>
          {/* Restaurant and Product Header */}
          <View style={styles.restaurantHeader}>
            <Text style={styles.restaurantName}>Suruchi</Text>
            <Text style={styles.restaurantLocation}>📍 123 Food Street, Gourmet City</Text>
          </View>

          <View style={styles.productHeader}>
            <View style={styles.foodNameContainer}>
              <Text style={styles.foodName}>Pizza</Text>
              <View style={styles.vegIndicator}>
                <View style={styles.greenDot} />
                <Text style={styles.vegText}>VEG</Text>
              </View>
            </View>
            <Text style={styles.foodPrice}>₹100</Text>
          </View>

          {/* Product Image */}
          <View style={styles.imageContainer}>
            <Image source={require('../Images/pizza1.jpg')} style={styles.cardImage} />
          </View>

          <View style={styles.detailsContainer}>
            {/* Product Info */}
            <Text style={styles.foodDescription}>
              A delicious cheese-loaded pizza topped with fresh vegetables and your choice of sauce.
            </Text>

            {/* Additional Info */}
            <View style={styles.additionalInfo}>
              <Text style={styles.additionalInfoText}>⭐ 4.5 (200 Reviews)</Text>
              <Text style={styles.additionalInfoText}>🔥 250 Calories</Text>
              <Text style={styles.additionalInfoText}>⏱️ Delivery in 30 mins</Text>
            </View>

            {/* Offers */}
            <View style={styles.offerSection}>
              <FontAwesome name="tag" size={20} color="green" />
              <Text style={styles.offerText}>Use code PIZZA50 to get 50% off!</Text>
            </View>

            {/* Ingredients */}
            <Text style={styles.sectionHeader}>Ingredients</Text>
            <Text style={styles.sectionContent}>Cheese, Tomato Sauce, Bell Peppers, Olives, Onions</Text>

            {/* Reviews */}
            <Text style={styles.sectionHeader}>Reviews</Text>
            <View style={styles.reviewContainer}>
              <Text style={styles.reviewText}>"The pizza was amazing! Fresh ingredients and great taste."</Text>
              <Text style={styles.reviewerName}>- John Doe</Text>
            </View>
            <View style={styles.reviewContainer}>
              <Text style={styles.reviewText}>"Perfect crust and generous toppings. Loved it!"</Text>
              <Text style={styles.reviewerName}>- Jane Smith</Text>
            </View>
          </View>

          {/* Action Button */}
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.buyButton}>
              <Text style={styles.buyButtonText}>BUY NOW</Text>
            </TouchableOpacity>
          </View>
        </Animated.View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProductScreeen;

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: '#FF3F00',
    paddingVertical: 15,
    paddingHorizontal: 15,
    alignSelf: 'flex-start',
    marginTop: 20,
    borderRadius: 5,
  },
  closeText: {
    color: 'white',
    fontSize: 16,
  },
  content: {
    flex: 1,
    backgroundColor: '#ebebeb',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingTop: 10,
  },
  restaurantHeader: {
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  restaurantName: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
  },
  restaurantLocation: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
  productHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  foodNameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  foodName: {
    fontSize: 22,
    fontWeight: 'bold',
    marginRight: 10,
  },
  vegIndicator: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  greenDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: 'green',
    marginRight: 5,
  },
  vegText: {
    fontSize: 14,
    color: 'green',
  },
  foodPrice: {
    fontSize: 18,
    color: '#333',
  },
  imageContainer: {
    width: '100%',
    height: height * 0.3,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  detailsContainer: {
    width: '100%',
    padding: 20,
    backgroundColor: '#ebebeb',
  },
  foodDescription: {
    fontSize: 14,
    color: '#666',
    marginVertical: 10,
  },
  additionalInfo: {
    marginVertical: 10,
  },
  additionalInfoText: {
    fontSize: 14,
    color: '#444',
  },
  offerSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  offerText: {
    marginLeft: 10,
    fontSize: 14,
    color: 'green',
    fontWeight: 'bold',
  },
  sectionHeader: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  sectionContent: {
    fontSize: 14,
    color: '#555',
  },
  reviewContainer: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 5,
    marginVertical: 5,
  },
  reviewText: {
    fontSize: 14,
    color: '#444',
  },
  reviewerName: {
    fontSize: 12,
    color: '#666',
    marginTop: 5,
    fontStyle: 'italic',
  },
  buttonContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  buyButton: {
    backgroundColor: '#FF3F00',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buyButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
