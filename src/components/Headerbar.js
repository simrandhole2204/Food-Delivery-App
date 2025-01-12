import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';

const Headerbar = () => {
  return (
    <View style={styles.container}>
      {/* App Name Section */}
      <View style={styles.appNameContainer}>
        <Ionicons name="fast-food-outline" size={24} color="#FFFFFF" style={styles.icon} />
        <Text style={styles.appName}>Easy Eat</Text>
      </View>

      {/* Profile Icon */}
      <TouchableOpacity style={styles.profileIcon}>
        <Ionicons name="person-circle-outline" size={30} color="#FFFFFF" />
      </TouchableOpacity>
    </View>
  );
};

export default Headerbar;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 90,
    backgroundColor: '#FF3F00', // Primary color for header background
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderColor: '#FF6F3F', // Lighter orange for subtle border
    elevation: 4, // Adds shadow for Android
    shadowColor: '#000', // Shadow for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    paddingTop: 50,
  },
  appNameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    paddingRight: 8,
  },
  appName: {
    fontSize: 20, // Slightly larger font for prominence
    fontWeight: '700',
    color: '#FFFFFF', // White text for contrast against the orange background
  },
  profileIcon: {
    padding: 6,
  },
});
