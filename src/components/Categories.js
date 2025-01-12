import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';

const Categories = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.head}>Categories</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <TouchableOpacity style={[styles.box, { backgroundColor: '#d3f8f5' }]}>
          <Image source={require('../Images/icon_1.png')} style={styles.image} />
          <Text style={styles.text}>Pizza</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.box, { backgroundColor: '#f4e1ff' }]}>
          <Image source={require('../Images/icon_2.png')} style={styles.image} />
          <Text style={styles.text}>Burger</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.box, { backgroundColor: '#e1f2ff' }]}>
          <Image source={require('../Images/icon_3.png')} style={styles.image} />
          <Text style={styles.text}>Drinks</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.box, { backgroundColor: '#e9fde0' }]}>
          <Image source={require('../Images/icon_4.png')} style={styles.image} />
          <Text style={styles.text}>Noodles</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginVertical: 10,
    paddingHorizontal: 16,
  },
  head: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  box: {
    flexDirection: 'row',
    marginHorizontal: 8,
    marginBottom: 10,
    paddingVertical: 12,
    paddingHorizontal: 18,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3,
    backgroundColor: '#fff',
    height: 45,
    width: 110,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  image: {
    width: 30,
    height: 30,
  },
  text: {
    marginLeft: 10,
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
  },
});
