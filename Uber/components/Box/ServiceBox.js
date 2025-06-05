import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";


const ServiceBox = () => {

    return (
        <View style={styles.boxContainer}>
            <TouchableOpacity style={styles.boxItem}>
                <Text style={{ color: "#cccccc", backgroundColor: 'green', borderRadius: 10, paddingRight: 10, paddingLeft: 10, marginTop: -10 }}>Promo</Text>
                <Image source={require("../../assets/box/trip.webp")} style={{
                    width: 70,
                    height: 70,
                    resizeMode: 'contain',
                }} />
                <Text style={styles.boxLabel}>Trip</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.boxItem}>
                <Image source={require("../../assets/box/auto.webp")} style={styles.boxImage} />
                <Text style={styles.boxLabel}>Auto</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.boxItem}>
                <Image source={require("../../assets/box/moto.webp")} style={styles.boxImage} />
                <Text style={styles.boxLabel}>Moto</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.boxItem}>
                <Image source={require("../../assets/box/intercity.png")} style={styles.boxImage} />
                <Text style={styles.boxLabel}>Intercity</Text>
            </TouchableOpacity>
        </View>

    )
}

const styles = StyleSheet.create({
    boxContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',

        // padding: 10,
        borderRadius: 10,
        margin: 5,
        gap: 10
    },
    boxItem: {
        backgroundColor: '#060606',
        alignItems: 'center',
        marginVertical: 10,
        padding: 5,
        borderRadius: 10,
        // margin: 2

    },
    boxImage: {
        width: 70,
        height: 70,
        resizeMode: 'contain',
        marginVertical: 5,
    },
    boxLabel: {
        fontSize: 16,
        color: "#cccccc",
    },
})

export default ServiceBox