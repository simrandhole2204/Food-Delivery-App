import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'

const LoginScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
        <StatusBar backgroundColor='#FF3F00'/>
        <View style={{paddingVertical: 12, width:'95%', alignSelf:'center', marginBottom: 10}}>
        <Text style={{ alignSelf:'center', fontSize: 18, fontWeight: 700,  }}>Login</Text>

        </View>
    <TextInput
    placeholder='Email'
    keyboardType='email-address'
    style={styles.input}
    />

<TextInput
    placeholder='Password'
    style={styles.input}
    />

    <TouchableOpacity style={styles.loginbutton} onPress={() => alert("Login Successful")}>
        <Text style={styles.loginbuttonTxt}>Login</Text>
    </TouchableOpacity>

   <View style={{marginTop: 15, width:'93%', alignSelf:'center', flexDirection:'row', justifyContent:"space-between",}}>
    <View style={{paddingLeft: 10}}> 
        <TouchableOpacity>
        <Text> Don't have an account?</Text>
        </TouchableOpacity>
    </View>
    <View style={{backgroundColor:'#FF3F00',
        borderRadius: 25,
        //width: '95%',
        alignSelf:'center',
        padding: 10,
        elevation: 2,}}>

        <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
            <Text style={{fontSize: 17,
        fontWeight:'600',
        color:'white',
        alignSelf:'center',
        paddingHorizontal: 10,
        }}>Sign Up</Text>
        </TouchableOpacity>
    </View>
   </View>
    </View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:'center',
        //backgroundColor:'green',
        width:'100%',
    },

    input: {
        borderColor:'grey',
        borderWidth: 1,
        borderRadius:25,
        marginBottom: 10,
        width: '95%',
        alignSelf:'center',
    },
    loginbutton:{
        backgroundColor:'#FF3F00',
        borderRadius: 25,
        width: '95%',
        alignSelf:'center',
        padding: 10,
        elevation: 2,

    },
    loginbuttonTxt: {
        fontSize: 17,
        fontWeight:'600',
        color:'white',
        alignSelf:'center',
    }

})