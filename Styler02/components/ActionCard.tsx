import {StyleSheet, Text, View, Linking, Image, TouchableOpacity} from 'react-native';
import React from 'react';

export default function ActionCard() {
  function openWebsite(websiteLink: string) {
    Linking.openURL(websiteLink);
  }
  return (
    <View>
      <Text style={styles.headingText}>Blog Card</Text>
      <View style={[styles.card, styles.elevatedCard]}>
        <View style={styles.headingContainer}>
          <Text style={styles.headerText}>
            The Haunting of Hill House
          </Text>
        </View>
        <Image
          source={{
            uri: 'https://wildcatchronicle.org/wp-content/uploads/2022/03/horror-architecture-haunting-hill-house-2-900x521.jpg',
          }}
          style={styles.cardImage}
        />
        <View style={styles.bodyContainer}>
            <Text numberOfLines={4}>The Haunting of Hill House is a show unlike any other. With its thrilling and psychological take on the Crain family over the course of several years, and its exquisite approach to detail, the storyline of the show itself really surpasses viewers' initial expectations.</Text>
        </View>
        <View style={styles.footerContainer}>
            <TouchableOpacity style={styles.button1} onPress={()=>openWebsite('https://wildcatchronicle.org/8523/reviews/the-haunting-of-hill-house-is-a-spooky-must-watch/')}>
                <Text style={styles.buttonText} >Read More</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button2} onPress={()=>openWebsite('https://www.linkedin.com/in/aman--somvanshi/')}>
                <Text style={styles.buttonText} >My LinkedIn Profile</Text>
            </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize:24,
    fontWeight:'bold',
    paddingHorizontal:8,
  },
  card: {
    width: 370,
    height:430,
    borderRadius: 6,
    marginVertical: 12,
    marginHorizontal: 10,
    marginBottom:20
  },
  elevatedCard: {
    backgroundColor: '#EAF0F1',
    elevation: 4,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor:'#333',
    shadowOpacity:0.4
  },
  headingContainer: {
    height:40,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
  },
  headerText: {
    fontSize:16,
    fontWeight:'600',
    color:'black',
  },
  cardImage: {
    height: 250,
    marginBottom: 8,
    // borderRadius:5,
    // borderTopLeftRadius: 8,
    // borderTopRightRadius: 8,
  },
  bodyContainer:{
    flex:1,
    flexGrow:1,
    paddingHorizontal: 12,
    marginBottom:5,
  },
  footerContainer: {
    alignItems: 'center',
    justifyContent: 'space-evenly',
    padding: 1,
    flexDirection:'row',
  },
  button1: {
    backgroundColor: '#30336B',
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderRadius: 4,
    elevation:8,
  },
  button2: {
    backgroundColor: '#333945',
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderRadius: 4,
    margin:10,
    elevation:8
  },
  buttonText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 16,
  },
  
});
