import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity, Image, TextInput } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import React from 'react'
import Colors from '@/constants/Colors'
import { Link } from 'expo-router';

const SearchBar = () => (
    <View style={styles.searchContainer}>
        <View style={styles.searchSection}>
            <View style={styles.searchField}>
                <Ionicons style={styles.searchIcon} name="ios-search" size={20} color={Colors.medium} />
                <TextInput style={styles.input} placeholder="Restaurants, groceries, dishes" />
            </View>

            <Link href={'/'} asChild>
                <TouchableOpacity style={styles.optionButton}>
                <Ionicons name="options-outline" size={20} color={Colors.primary} />
                </TouchableOpacity>
            </Link>
        </View>
    </View>
)

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

      <SearchBar></SearchBar>
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

    searchContainer: {
        height: 60,
        backgroundColor: 'white'
    },

    searchSection: {
        flexDirection: 'row',
        gap: 10,
        flex: 1,
        paddingHorizontal: 20,
        alignItems: 'center',
    },
      
    searchField: {
        flex: 1,
        backgroundColor: Colors.lightGrey,
        borderRadius: 8,
        flexDirection: 'row',
        alignItems: 'center',
    },
      
    input: {
        padding: 10,
        color: Colors.mediumDark,
    },
      
    searchIcon: {
        paddingLeft: 10,
    },

    optionButton: {
        padding: 10,
        borderRadius: 50,
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