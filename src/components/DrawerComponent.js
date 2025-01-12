import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const DrawerComponent = ({ navigation }) => {
  return (
    <View style={styles.drawerContainer}>
      <TouchableOpacity
        style={styles.drawerItem}
        onPress={() => navigation.navigate('TrackOrders')}  // Ensure 'TrackOrder' matches your screen name
      >
        <Text style={styles.drawerText}>Track Order</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.drawerItem}
        onPress={() => navigation.navigate('Cart')}  // Ensure 'UserCart' matches your screen name
      >
        <Text style={styles.drawerText}>User Cart</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.drawerItem}
        onPress={() => navigation.navigate('Profile')}  // Ensure 'UserProfile' matches your screen name
      >
        <Text style={styles.drawerText}>User Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DrawerComponent;

const styles = StyleSheet.create({
  drawerContainer: {
    flex: 1,
    backgroundColor: '#FFF',
    padding: 20,
    elevation: 5,
  },
  drawerItem: {
    paddingVertical: 15,
    borderBottomWidth: 0.5,
    borderBottomColor: '#ccc',
  },
  drawerText: {
    fontSize: 16,
    color: '#333',
  },
});
