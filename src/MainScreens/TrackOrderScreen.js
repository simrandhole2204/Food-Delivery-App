import { StyleSheet, Text, View, FlatList, Image, ScrollView, TouchableOpacity } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';

const orderDetails = {
  orderId: '4455545ad',
  time: '4:10 AM',
  items: [
    { id: '1', name: 'Pizza', price: 150, qty: 1, image: require('../Images/pizza1.jpg') },
    { id: '2', name: 'Pizza Samosa', price: 350, qty: 1, image: require('../Images/pizza1.jpg') },
    { id: '3', name: 'Pizza with no Pizza', price: 500, qty: 1, image: require('../Images/pizza1.jpg') },
  ],
  total: 1000,
};

const TrackOrderScreen = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <View style={styles.itemCard}>
      <Image source={item.image} style={styles.itemImage} />
      <View style={styles.itemDetails}>
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.itemPrice}>Price: ₹{item.price}</Text>
        <Text style={styles.itemQty}>Qty: {item.qty} unit</Text>
      </View>
    </View>
  );

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>My Orders</Text>
      </View>

      {/* Close Button */}
      <View style={styles.closeButtonContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.closeButton}>
          <Ionicons name="close" size={24} color="#000" />
        </TouchableOpacity>
      </View>

      {/* Order Card */}
      <View style={styles.orderCard}>
        <Text style={styles.orderId}>Order ID: {orderDetails.orderId}</Text>
        <Text style={styles.orderTime}>Time: {orderDetails.time}</Text>

        <FlatList
          data={orderDetails.items}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          scrollEnabled={false} // Disable scrolling within FlatList as the parent ScrollView handles it
        />

        <View style={styles.totalContainer}>
          <Text style={styles.totalText}>Total: ₹{orderDetails.total}</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default TrackOrderScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: '#ff4500',
    paddingVertical: 15,
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  headerText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  closeButtonContainer: {
    alignItems: 'flex-start',
    marginTop: 10,
    marginLeft: 10,
  },
  closeButton: {
    backgroundColor: '#fff',
    borderRadius: 50,
    padding: 5,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  orderCard: {
    backgroundColor: '#fff',
    margin: 15,
    padding: 15,
    borderRadius: 8,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  orderId: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  orderTime: {
    fontSize: 14,
    color: 'gray',
    marginBottom: 15,
  },
  itemCard: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    padding: 10,
    elevation: 1,
  },
  itemImage: {
    width: 60,
    height: 60,
    borderRadius: 8,
    marginRight: 15,
  },
  itemDetails: {
    flex: 1,
  },
  itemName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  itemPrice: {
    fontSize: 14,
    color: 'gray',
    marginBottom: 3,
  },
  itemQty: {
    fontSize: 14,
    color: 'gray',
  },
  totalContainer: {
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    paddingTop: 15,
    marginTop: 15,
    alignItems: 'flex-end',
  },
  totalText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
