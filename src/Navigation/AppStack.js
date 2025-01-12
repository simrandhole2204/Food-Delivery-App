import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../MainScreens/HomeScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Ionicons from '@expo/vector-icons/Ionicons';
import ProductScreeen from '../MainScreens/ProductScreeen';
import UserCartScreen from '../MainScreens/UserCartScreen';
import TrackOrderScreen from '../MainScreens/TrackOrderScreen';
import UserProfile from '../MainScreens/UserProfile';
import AccountAndSettings from '../MainScreens/AccountAndSettings';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// HomeStack for nesting HomeScreen in a Stack navigator
const HomeStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} />
    <Stack.Screen name="ProductScreen" component={ProductScreeen} options={{ headerShown: false }} />
  </Stack.Navigator>
);

const AppStack = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarStyle: styles.tabbar,
          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = 'home-outline'; // Home icon
            } else if (route.name === 'Settings') {
              iconName = 'settings-outline'; // Settings icon
            } else if (route.name === 'Cart') {
              iconName = 'cart-outline'; // Cart icon
            } else if (route.name === 'TrackOrders') {
              iconName = 'location-outline'; // Location icon (alternative for tracking orders)
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarLabelStyle: styles.tabBarLabel,
        })}
      >
        {/* Home Tab with Stack Navigator */}
        <Tab.Screen name="Home" component={HomeStack} options={{ headerShown: false }} />
        {/* Other Tabs */}
        <Tab.Screen name="Cart" component={UserCartScreen} options={{ headerShown: false }} />
        
        <Tab.Screen name="TrackOrders" component={TrackOrderScreen} options={{ headerShown: false }} />
        <Tab.Screen name="Settings" component={AccountAndSettings} options={{ headerShown: false }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppStack;

const styles = StyleSheet.create({
  tabbar: {
    height: 50,
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderColor: 'grey',
  },
  tabBarLabel: {
    paddingBottom: 5,
  },
});
