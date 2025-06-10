import React, { useState } from "react";
import { View, TextInput, Text, Button, FlatList, StyleSheet, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { GO_MAP_PRO_API_KEY } from '@env';
import ServiceCard from "../components/Box/ServiceBox";
import PromoCard from "../components/ScrollableBoxes1/PromoCard";

export default function ServicesScreen() {


    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.header}>Services</Text>
            <View >
                <Text style={styles.title}> Go anywhere, get anything</Text>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    <PromoCard
                        title="Enjoy 50% off select trips"
                        image={require('../assets/box/moto.webp')}
                        backgroundColor="#E8F5E9"
                    />
                    <PromoCard
                        title="Get ₹30 off on Autos"
                        image={require('../assets/box/auto.webp')}
                        backgroundColor="#FFF3E0"
                    />
                    <PromoCard
                        title="Flat ₹100 cashback on Intercity"
                        image={require('../assets/box/intercity.png')}
                        backgroundColor="#E3F2FD"
                    />
                </ScrollView>
                <ServiceCard />
            </View>
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: 'black',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
        color: 'white',
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 20,
        paddingHorizontal: 10,
    },
    button: {
        marginTop: 10,
    },
    listItem: {
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    header: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'white',
        marginBottom: 20,
    },
})


