import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Headerbar from '../components/Headerbar';
import AntDesign from '@expo/vector-icons/AntDesign';
import Categories from '../components/Categories';
import OfferSlider from '../components/OfferSlider';
import CardSlider from '../components/CardSlider';
import DrawerComponent from '../components/DrawerComponent';

const HomeScreen = ({ navigation }) => {
  const [showDrawer, setShowDrawer] = useState(false);

  return (
    <View style={styles.mainContainer}>
      <StatusBar backgroundColor="#FF3F00" />

      <Headerbar />

      <View style={styles.searchBarContainer}>
        <TouchableOpacity
          style={styles.drawerToggle}
          onPress={() => setShowDrawer(!showDrawer)}
        >
          <AntDesign name="menu-fold" size={24} color="#FF3F00" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.searchbox}>
          <AntDesign name="search1" size={20} color="#FF3F00" />
          <Text style={styles.input}>Search for delicious food...</Text>
        </TouchableOpacity>
      </View>

      {showDrawer && <DrawerComponent navigation={navigation} />}

      {!showDrawer && (
        <ScrollView contentContainerStyle={styles.contentContainer}>
          <Categories />
          <OfferSlider />
          <CardSlider navigation={navigation} />
        </ScrollView>
      )}
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    height: '100%',
    backgroundColor: '#f4f4f4',
  },
  searchBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    marginHorizontal: 16,
  },
  drawerToggle: {
    padding: 8,
    marginRight: 10,
  },
  searchbox: {
    borderRadius: 20,
    flexDirection: 'row',
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    padding: 6,
    elevation: 3,
  },
  input: {
    marginLeft: 10,
    fontSize: 14,
    color: '#333',
    fontWeight: '500',
  },
  contentContainer: {
    paddingBottom: 20,
  },
});
