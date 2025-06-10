import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, SafeAreaView, Image } from 'react-native';
import { Ionicons, FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';
import { useAuth } from '../../AuthContext/AuthContext';
import { useNavigation, useRouter } from 'expo-router';
import { ALERT_TYPE, Toast } from 'react-native-alert-notification';




export default function AccountScreen() {
    const { logOut } = useAuth()
    const router = useRouter();
    const handleLogout = async () => {
        try {
            await logOut()
            Toast.show({
                type: ALERT_TYPE.SUCCESS,
                title: 'Logout Successful',
                textBody: 'You have been logged out.',
            });
            router.replace('/Login');
        } catch (error) {

        }
    }
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <View>
                    <Text style={styles.name}>Anonyms</Text>
                    <View style={styles.ratingContainer}>
                        <FontAwesome5 name="star" size={14} color="white" />
                        <Text style={styles.ratingText}>5.0</Text>
                    </View>
                </View>
                <MaterialCommunityIcons name='avtar' />
                <Image style={{ width: 50, height: 50, borderRadius: 100 }} source={require("../../assets/avtar.webp")} />
            </View>

            <ScrollView style={styles.scroll}>
                <View style={styles.topRow}>
                    <OptionTile icon="help-circle-outline" label="Help" />
                    <OptionTile icon="wallet-outline" label="Wallet" notification />
                    <OptionTile icon="ios-document-text-outline" label="Activity" />
                </View>

                <View style={styles.card}>
                    <Text style={styles.cardTitle}>Rider insurance</Text>
                    <Text style={styles.cardText}>₹10L cover for ₹3/trip</Text>
                </View>
                <View style={styles.card}>
                    <Text style={styles.cardTitle}>Privacy check-up</Text>
                    <Text style={styles.cardText}>Take an interactive tour of your privacy settings</Text>
                </View>


                {[
                    { icon: 'umbrella', label: 'Setting' },
                    { icon: 'umbrella', label: 'Rider insurance' },
                    { icon: 'email', label: 'Message' },
                    { icon: 'gift', label: 'Send a gift' },
                    { icon: 'car', label: 'Earn by driving or delivering' },
                    { icon: 'account-group', label: 'Saved groups' },
                    { icon: 'briefcase-account', label: 'Set up your business profile' },
                    { icon: 'account-cog', label: 'Manage Uber account' },
                    { icon: 'information-outline', label: 'Legal' },
                ].map((item, idx) => (
                    <SettingItem key={idx} icon={item.icon} label={item.label} />
                ))}

                <View>
                    <TouchableOpacity onPress={handleLogout} style={{ flexDirection: 'row', alignItems: 'center', padding: 5, paddingTop: 8 }}>
                        <MaterialCommunityIcons name="logout" size={20} color="white" style={{ marginRight: 8, color: "red" }} />
                        <Text style={[{ fontSize: 15, paddingtop: 8, color: "red" }]}>Log out</Text>
                    </TouchableOpacity>
                </View>
                <Text style={styles.version}>v4.579.10001</Text>



            </ScrollView>
        </SafeAreaView>
    );
}

function OptionTile({ icon, label, notification }) {
    return (
        <TouchableOpacity style={styles.tile}>
            <Ionicons name={icon} size={24} color="white" />
            <Text style={styles.tileText}>{label}</Text>
            {notification && <View style={styles.dot} />}
        </TouchableOpacity>
    );
}

function SettingItem({ icon, label }) {
    return (
        <TouchableOpacity style={styles.settingRow}>
            <MaterialCommunityIcons name={icon} size={20} color="white" style={{ width: 30 }} />
            <Text style={styles.settingText}>{label}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        paddingHorizontal: 16,
    },
    header: {
        paddingTop: 40,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 40,

    },
    name: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'white',
    },
    ratingContainer: {
        marginTop: 4,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#1f1f1f',
        paddingHorizontal: 6,
        paddingVertical: 2,
        borderRadius: 6,
        alignSelf: 'flex-start',
    },
    ratingText: {
        color: 'white',
        marginLeft: 4,
        fontSize: 14,
    },
    avatar: {
        width: 44,
        height: 44,
        backgroundColor: '#2a2a2a',
        borderRadius: 22,
    },
    topRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 12,
    },
    tile: {
        backgroundColor: '#1e1e1e',
        flex: 1,
        alignItems: 'center',
        padding: 16,
        borderRadius: 12,
        marginHorizontal: 4,
        position: 'relative',
    },
    tileText: {
        color: 'white',
        marginTop: 6,
        fontSize: 12,
    },
    dot: {
        width: 8,
        height: 8,
        backgroundColor: 'blue',
        borderRadius: 4,
        position: 'absolute',
        top: 8,
        right: 8,
    },
    card: {
        backgroundColor: '#1e1e1e',
        borderRadius: 12,
        padding: 14,
        marginVertical: 6,
    },
    cardTitle: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 14,
        marginBottom: 4,
    },
    cardText: {
        color: '#ccc',
        fontSize: 12,
    },
    scroll: {
        marginTop: 10,
    },
    settingRow: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 12,
        borderBottomColor: '#333',
        borderBottomWidth: 1,
    },
    settingText: {
        color: 'white',
        fontSize: 14,
        width: "100%"
    },
    version: {
        color: '#888',
        textAlign: 'center',
        marginTop: 16,
        marginBottom: 20,
        fontSize: 12,
    }
});
