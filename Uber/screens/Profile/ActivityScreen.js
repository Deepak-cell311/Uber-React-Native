import { LocationEdit } from "lucide-react-native";
import React from "react";
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";

export default function ActivityScreen() {

    // Past activity array
    const pastUberActivity = [
        {
            id: 'ride_001',
            type: 'Ride',
            status: 'Completed',
            pickup: 'Kanpur Central Railway Station',
            dropoff: 'Z Square Mall',
            date: '2024-05-28',
            time: '14:30',
            fare: '₹180.50',
            image: 'https://source.unsplash.com/random/900×700/?car'
        },
        {
            id: 'ride_002',
            type: 'Ride',
            status: 'Completed',
            pickup: 'Govindpuri Railway Station',
            dropoff: 'IIT Kanpur',
            date: '2024-05-27',
            time: '09:15',
            fare: '₹250.00',
            image: 'https://source.unsplash.com/random/900×700/?fruit'
        },
        {
            id: 'ride_003',
            type: 'Ride',
            status: 'Completed',
            pickup: 'Z Square Mall',
            dropoff: 'Green Park Stadium',
            date: '2024-05-25',
            time: '19:00',
            fare: '₹145.00',
            image: 'https://source.unsplash.com/random/900×700/?fruit'
        },
        {
            id: 'ride_004',
            type: 'Ride',
            status: 'Cancelled by Rider',
            pickup: 'Kanpur Airport Chakeri',
            dropoff: 'Jhakarkati Bus Stand',
            date: '2024-05-23',
            time: '11:45',
            fare: '₹50.00 (Cancellation Fee)',
            image: 'https://source.unsplash.com/random/900×700/?fruit'
        },
        {
            id: 'ride_005',
            type: 'Ride',
            status: 'Completed',
            pickup: 'Moti Jheel',
            dropoff: 'Kanpur University (CSJM University)',
            date: '2024-05-20',
            time: '10:00',
            fare: '₹210.75',
            image: 'https://source.unsplash.com/random/900×700/?fruit'
        },
        {
            id: 'ride_006',
            type: 'Ride',
            status: 'Completed',
            pickup: 'Panki Temple',
            dropoff: 'Kanpur Central Railway Station',
            date: '2024-05-18',
            time: '16:10',
            fare: '₹230.00',
            image: 'https://source.unsplash.com/random/900×700/?fruit'
        },
        {
            id: 'ride_007',
            type: 'Ride',
            status: 'Completed',
            pickup: 'Kidwai Nagar Market',
            dropoff: 'Allen Forest Zoo',
            date: '2024-05-15',
            time: '13:00',
            fare: '₹195.50',
            image: 'https://source.unsplash.com/random/900×700/?fruit'
        }
    ];

    console.log(pastUberActivity);

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.header}>Activity</Text>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Text style={styles.title}>Past Rides</Text>
                <View style={styles.pastRidesContainer}>
                    {pastUberActivity.map(ride => (
                        <View key={ride.id} style={styles.rideCard}>
                            <View style={styles.rideImageContainer}>
                                {/* <Image source={{ uri: ride.image }} style={styles.rideImage} onError={(e) => console.log('Image failed to load:', e.nativeEvent.error)} /> */}
                                <LocationEdit  style={{color: "#cccccc"}}/>
                            </View>
                            <View style={styles.rideDetails}>
                                <Text style={styles.rideLocation}>{ride.pickup} to {ride.dropoff}</Text>
                                <Text style={styles.rideDateTime}>{ride.date} at {ride.time}</Text>
                                <Text style={styles.rideStatus}>Status: {ride.status}</Text>
                            </View>
                            <View style={styles.rideFareContainer}>
                                <Text style={styles.rideFare}>{ride.fare}</Text>
                            </View>
                        </View>
                    ))}
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        padding: 20,
        paddingTop: 60
    },
    header: {
        fontSize: 30,
        color: "#cccccc",
        marginBottom: 20,
    },
    title: {
        color: "white",
        fontSize: 25,
        marginTop: 20,
        marginBottom: 15,
        fontWeight: 'bold',
    },
    pastRidesContainer: {
        gap: 12,
        marginBottom: 20,
    },
    rideCard: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#1e1e1e',
        padding: 15,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#444',
        justifyContent: "space-between",
    },
    rideImageContainer: {
        marginRight: 15,
    },
    rideImage: {
        width: 60,
        height: 60,
        borderRadius: 8,
        resizeMode: 'cover',
    },
    rideDetails: {
        flex: 1,
        marginRight: 10,
    },
    rideLocation: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
        marginBottom: 4,
    },
    rideDateTime: {
        color: '#ccc',
        fontSize: 12,
        marginBottom: 2,
    },
    rideStatus: {
        fontSize: 12,
        fontWeight: '500',
        color: '#fff', // Default color, can be adjusted based on status
    },
    rideFareContainer: {
        marginLeft: 'auto',
    },
    rideFare: {
        color: 'rgb(66, 245, 96)',
        fontSize: 16,
        fontWeight: 'bold',
    },
});
