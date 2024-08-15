import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity, Image } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import React from 'react'
import Colors from '@/constants/Colors'

const CustomHeader = () => {
  return (
    <SafeAreaView style={{ flex: 1}}>
      <View style={styles.container}>
        <TouchableOpacity>
            <Image style={styles.bike} source={require('@/assets/images/bike.png')} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.titleContainer}>
            <Text style={styles.title}>Delivery . Now</Text>
            <View style={{ flexDirection: 'row'}}>
                <Text style={styles.subtitle}>Maseru, LS</Text>
                <Ionicons name='chevron-down' size={20} color={Colors.primary}></Ionicons>
            </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.profileButton}>
            <Ionicons name='person-outline' size={20} color={Colors.primary}></Ionicons>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
        height: 60,
        paddingHorizontal: 20,
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 20,
    },

    bike: {
       width: 30,
       height: 30 
    },

    titleContainer: {
        flex: 1
    },

    title: {
        fontSize: 14,
        color: Colors.medium
    },

    subtitle: {
        fontSize: 18,
        fontWeight: 'bold'
    },

    profileButton: {
        backgroundColor: Colors.lightGrey,
        padding: 10,
        borderRadius: 50
    }
})

export default CustomHeader