import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const AccountAndSettings = ({ navigation }) => {
  const [profileImage, setProfileImage] = useState(require('../Images/profile.png')); // Placeholder image

  const handleAddImage = () => {
    // Logic for adding/changing profile image goes here
    console.log('Add Image button clicked');
  };

  return (
    <ScrollView contentContainerStyle={styles.mainContainer}>
      <View style={styles.container}>
        <Text style={styles.title}>Account & Settings</Text>

        {/* Profile Section */}
        <View style={styles.profileSection}>
          <Image source={profileImage} style={styles.profileImage} />
          <TouchableOpacity style={styles.addImageButton} onPress={handleAddImage}>
            <Ionicons name="camera-outline" size={20} color="#FF3F00" />
            <Text style={styles.addImageText}>Add/Change Image</Text>
          </TouchableOpacity>
        </View>

        {/* User Information */}
        <View style={styles.inputSection}>
          <Text style={styles.label}>Full Name</Text>
          <TextInput style={styles.input} placeholder="John Doe" />

          <Text style={styles.label}>Email</Text>
          <TextInput style={styles.input} placeholder="johndoe@example.com" keyboardType="email-address" />

          <Text style={styles.label}>Phone Number</Text>
          <TextInput style={styles.input} placeholder="+1234567890" keyboardType="phone-pad" />

          <Text style={styles.label}>Password</Text>
          <TextInput style={styles.input} placeholder="********" secureTextEntry={true} />
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Save Profile</Text>
          </TouchableOpacity>
          
        </View>

        {/* Settings Section */}
        <Text style={styles.subTitle}>Settings</Text>
        <View style={styles.settingsSection}>
          

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Orders</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Address Book</Text>
          </TouchableOpacity>
        </View>

        {/* Logout Button */}
        <TouchableOpacity style={styles.logoutButton}>
          <Text style={styles.logoutButtonText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default AccountAndSettings;

const styles = StyleSheet.create({
  mainContainer: {
    flexGrow: 1,
    backgroundColor: '#fff',
    paddingBottom: 20,
  },
  container: {
    padding: 40,
    alignItems: 'center',
    width: '100%',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  profileSection: {
    alignItems: 'center',
    marginBottom: 30,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 60,
    marginBottom: 10,
    borderWidth: 2,
    borderColor: '#FF3F00',
  },
  addImageButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  addImageText: {
    marginLeft: 8,
    fontSize: 14,
    fontWeight: '600',
    color: '#FF3F00',
  },
  inputSection: {
    width: '100%',
    marginBottom: 10,
  },
  label: {
    fontSize: 14,
    color: '#333',
    fontWeight: '600',
    marginBottom: 1,
  },
  input: {
    width: '100%',
    padding: 12,
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    marginBottom: 15,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  subTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 15,
    color: '#333',
    alignSelf: 'flex-start',
  },
  settingsSection: {
    width: '100%',
    marginBottom: 20,
  },
  button: {
    width: '100%',
    paddingVertical: 15,
    backgroundColor: '#FF3F00',
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 15,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  logoutButton: {
    width: '100%',
    paddingVertical: 15,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#FF3F00',
    borderRadius: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  logoutButtonText: {
    color: '#FF3F00',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
