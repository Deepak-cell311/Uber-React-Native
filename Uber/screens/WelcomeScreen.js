import React, { useState } from "react";
import Colors from "../constants/Colors";
import { KeyboardAvoidingView, Platform, StyleSheet, Text, View, Pressable, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Navigation } from "lucide-react-native";
import { useNavigation } from "expo-router";

export default function WelcomeScreen() {
    const [isPressed, setIsPressed] = useState(false);
    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={styles.keyboardView}
            >
                <View style={styles.header}>
                    <Text style={styles.heading}>Welcome To</Text>
                    <Text style={styles.title}>Uber</Text>
                    <Image source={require("../assets/uber.png")} />
                </View>
                <Pressable
                    onPressIn={() => setIsPressed(true)}
                    onPressOut={() => setIsPressed(false)}
                    onPress={() => navigation.navigate('Login')}
                    style={{
                        alignSelf: 'center',
                        backgroundColor: isPressed ? "gray" : Colors.white,
                        paddingVertical: 12,
                        paddingHorizontal: 24,
                        borderRadius: 10,

                    }}
                >
                    <Text style={{ color: Colors.black, fontSize: 16, width: "100" }}>Start Here</Text>
                </Pressable>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.black,
        color: Colors.white,
    },
    keyboardView: {
        flex: 1,
    },

    heading: {
        fontSize: 50,
        marginTop: 150,
        color: Colors.white,
        textAlign: 'center',
    },
    title: {
        color: Colors.white,
        fontFamily: 'Poppins-SemiBold',
        fontSize: 80,
        textAlign: 'center',
    },
    btn: {
        marginTop: 30,
        alignSelf: 'center',
        color: Colors.black,
    }
})