import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Button, ScrollView } from 'react-native';
import Header from '../../components/Header';
import Colors from '../../constants/Colors';
import Strings from '../../constants/Strings';
import { Search } from "lucide-react-native"
import ServiceBox from '../../components/Box/ServiceBox';
import PromoCard from '../../components/ScrollableBoxes1/PromoCard';
import ServiceCard from '../../components/ScrollableBoxes1/ServiceCard';
import SearchScreen from '../Maps/SearchScreen';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>

      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>Uber</Text>
        <TouchableOpacity
          style={styles.inputContainer}
          onPress={() => navigation.navigate('Search')}
        >
          <Search style={styles.icon} />
          <Text style={styles.input}>Where to ?</Text>
        </TouchableOpacity>
      </View>

      {/* Scrollable Content */}
      <ScrollView
        contentContainerStyle={{ paddingBottom: 0 }}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.content}>
          {/* Suggestion */}
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Suggestion</Text>
            <TouchableOpacity>
              <Text style={styles.sectionAction}>See all</Text>
            </TouchableOpacity>
          </View>

          <ServiceBox />


          <View style={{ marginTop: 20 }}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ paddingLeft: 10 }}>
              <PromoCard
                title="Enjoy 50% off select trips"
                image={require('../../assets/box/moto.webp')}
                backgroundColor="#E8F5E9"
              />
              <PromoCard
                title="Get ₹30 off on Autos"
                image={require('../../assets/box/auto.webp')}
                backgroundColor="#FFF3E0"
              />
              <PromoCard
                title="Flat ₹100 cashback on Intercity"
                image={require('../../assets/box/intercity.png')}
                backgroundColor="#E3F2FD"
              />
              <PromoCard
                title="Trip rewards await!"
                image={require('../../assets/box/trip.webp')}
                backgroundColor="#F3E5F5"
              />
            </ScrollView>
          </View>

          {/* More ways to use Uber */}
          <View style={{ marginTop: 20 }}>
            <Text style={{ fontSize: 18, fontWeight: 'bold', marginHorizontal: 10, color: "#cccccc" }}>More ways to use Uber</Text>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{ paddingHorizontal: 10, paddingTop: 10 }}
              snapToAlignment="start"
              decelerationRate="fast"
              snapToInterval={260} // Adjusted for card width + margin
            >
              <ServiceCard
                title="Send a package"
                description="On-demand delivery across town"
                image={require('../../assets/Moreways/scooter.jpeg')}
              />
              <ServiceCard
                title="Premium trips"
                description="Top-reated drivers, newer cars"
                image={require('../../assets/Moreways/Premium.jpeg')}
              />
              <ServiceCard
                title="Safety Toolkit"
                description="On-trip help with safety issues"
                image={require('../../assets/Moreways/Maps.jpeg')}
              />
            </ScrollView>
          </View>

          {/* Save every day */}
          <View style={{ marginTop: 20 }}>
            <Text style={{ fontSize: 18, fontWeight: 'bold', marginHorizontal: 10, color: "#cccccc" }}>Save every day</Text>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{ paddingHorizontal: 10, paddingTop: 10 }}
              snapToAlignment="start"
              decelerationRate="fast"
              snapToInterval={260} // Adjusted for card width + margin
            >
              <ServiceCard
                title="Auto rides"
                description="Upfront prices, doorstep pick-ups"
                image={require('../../assets/EveryDay/AutoRide.jpeg')}
              />
              <ServiceCard
                title="Uber Moto trips"
                description="Affordable motorcycle pick-ups"
                image={require('../../assets/EveryDay/Moto trip.jpeg')}
              />
            </ScrollView>
          </View>


          {/* Plan your next trip */}
          <View style={{ marginTop: 20 }}>
            <Text style={{ fontSize: 18, fontWeight: 'bold', marginHorizontal: 10, color: "#cccccc" }}>Plan your next trip</Text>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{ paddingHorizontal: 10, paddingTop: 10 }}
              snapToAlignment="start"
              decelerationRate="fast"
              snapToInterval={260} // Adjusted for card width + margin
            >
              <ServiceCard
                title="Rentals"
                description="Travel from 1 to 12 hours"
                image={require('../../assets/NextTrip/Rentals.jpeg')}
              />
              <ServiceCard
                title="Travel intercity"
                description="Get to remote locations with ease"
                image={require('../../assets/NextTrip/Intercity.jpeg')}
              />
            </ScrollView>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};


// Styles

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.black,
  },
  header: {
    backgroundColor: Colors.black,
    paddingTop: 40,
    paddingHorizontal: 15,
  },
  title: {
    color: Colors.white,
    fontSize: 50,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  inputContainer: {
    backgroundColor: "#1a1a1a",
    borderRadius: 20,
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
    marginBottom: 10,
  },
  icon: {
    color: "#a6a6a6",
    fontSize: 24,
  },
  input: {
    color: "#a6a6a6",
    fontSize: 18,
    marginLeft: 10,
    fontWeight: '600',
  },
  content: {
    paddingHorizontal: 10,
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: 'center',
    marginVertical: 15,
    paddingHorizontal: 5,
  },
  sectionTitle: {
    color: "#cccccc",
    fontSize: 18,
    fontWeight: '500',
  },
  sectionAction: {
    color: "#cccccc",
    fontWeight: '500',
  },
});


export default HomeScreen;