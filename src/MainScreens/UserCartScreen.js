import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

const UserCartScreen = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Pizza', price: 100, quantity: 2, image: require('../Images/pizza1.jpg') },
    { id: 2, name: 'Pizza', price: 100, quantity: 1, image: require('../Images/pizza1.jpg') },
    { id: 3, name: 'Pizza', price: 100, quantity: 1, image: require('../Images/pizza1.jpg') },
  ]);

  const deleteItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const changeQuantity = (id, type) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === id
          ? {
              ...item,
              quantity: type === 'increase' ? item.quantity + 1 : Math.max(1, item.quantity - 1),
            }
          : item
      )
    );
  };

  const calculateTotal = () => {
    const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const tax = subtotal * 0.05; // 5% tax
    const total = subtotal + tax;
    return { subtotal, tax, total };
  };

  const { subtotal, tax, total } = calculateTotal();

  return (
    <View style={styles.mainContainer}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Cart</Text>
      </View>

      {/* Cart Items */}
      <ScrollView style={styles.cartContainer}>
        {cartItems.map((item) => (
          <View key={item.id} style={styles.cartItem}>
            <Image source={item.image} style={styles.cartItemImage} />
            <View style={styles.cartItemDetails}>
              <Text style={styles.cartItemName}>{item.name}</Text>
              <Text style={styles.cartItemPrice}>₹{item.price} x {item.quantity}</Text>
              <Text style={styles.cartItemTotal}>₹{item.price * item.quantity}</Text>

              {/* Quantity Controls */}
              <View style={styles.quantityContainer}>
                <TouchableOpacity onPress={() => changeQuantity(item.id, 'decrease')}>
                  <Ionicons name="remove-circle-outline" size={20} color="#FF3F00" />
                </TouchableOpacity>
                <Text style={styles.quantityText}>{item.quantity}</Text>
                <TouchableOpacity onPress={() => changeQuantity(item.id, 'increase')}>
                  <Ionicons name="add-circle-outline" size={20} color="#FF3F00" />
                </TouchableOpacity>
              </View>
            </View>
            <TouchableOpacity onPress={() => deleteItem(item.id)}>
              <Ionicons name="trash-outline" size={18} color="#FF3F00" />
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>

      {/* Summary */}
      <View style={styles.summaryContainer}>
        <View style={styles.summaryRow}>
          <Text style={styles.summaryLabel}>Subtotal:</Text>
          <Text style={styles.summaryValue}>₹{subtotal.toFixed(2)}</Text>
        </View>
        <View style={styles.summaryRow}>
          <Text style={styles.summaryLabel}>Tax (5%):</Text>
          <Text style={styles.summaryValue}>₹{tax.toFixed(2)}</Text>
        </View>
        <View style={styles.summaryRow}>
          <Text style={styles.summaryLabel}>Total:</Text>
          <Text style={styles.summaryValue}>₹{total.toFixed(2)}</Text>
        </View>
      </View>

      {/* Buttons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.checkoutButton}>
          <Text style={styles.checkoutButtonText}>Checkout</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.continueShoppingButton}>
          <Text style={styles.continueShoppingButtonText}>Continue Shopping</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default UserCartScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    padding: 15,
    backgroundColor: '#FF3F00',
    alignItems: 'center',
    paddingTop:40
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  cartContainer: {
    flex: 1,
    padding: 15,
  },
  cartItem: {
    flexDirection: 'row',
    marginBottom: 15,
    padding: 10,
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    elevation: 3,
    alignItems: 'center',
  },
  cartItemImage: {
    width: 70,
    height: 70,
    borderRadius: 10,
  },
  cartItemDetails: {
    flex: 1,
    marginLeft: 15,
  },
  cartItemName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  cartItemPrice: {
    fontSize: 14,
    color: '#666',
    marginVertical: 5,
  },
  cartItemTotal: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#FF3F00',
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    backgroundColor: '#f1f1f1',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
  },
  quantityText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginHorizontal: 10,
    color: '#333',
  },
  summaryContainer: {
    padding: 15,
    borderTopWidth: 1,
    borderColor: '#ddd',
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  summaryLabel: {
    fontSize: 16,
    color: '#666',
  },
  summaryValue: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  buttonContainer: {
    padding: 10,
    borderTopWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#f9f9f9',
  },
  checkoutButton: {
    backgroundColor: '#FF3F00',
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 10,
  },
  checkoutButtonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
  continueShoppingButton: {
    backgroundColor: '#fff',
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#FF3F00',
  },
  continueShoppingButtonText: {
    color: '#FF3F00',
    fontSize: 14,
    fontWeight: 'bold',
  },
});
