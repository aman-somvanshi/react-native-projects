import {Image, StyleSheet, Text, View, ViewStyle} from 'react-native';
import React from 'react';

export default function FancyCard() {
  return (
    <View>
      <Text style={styles.headingText}>Trending Places</Text>
      <View style={[styles.card, styles.cardElevated]}>
        <Image
          source={{
            uri: 'https://i.pinimg.com/originals/f5/92/20/f59220a3cf0ca040643da92f5b471879.jpg',
          }}
          style={styles.cardImage}
        />
        <View style={styles.cardBody as ViewStyle}>
          <Text style={styles.cardTitle}>Eiffel Tower</Text>
          <Text style={styles.cardLabel}>Paris Night Life</Text>
          <Text style={styles.cardDescription}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex, fugit.
          </Text>
          <Text style={styles.cardFooter}>Not that close to India</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },
  card: {
    width: 390,
    // height:560,
    borderRadius: 8,
    marginVertical: 12,
    marginHorizontal: 10,
  },
  cardElevated: {
    backgroundColor: '#FFFFFF',
    elevation: 4,
    shadowOffset: {
      width: 1,
      height: 1,
    },
  },
  cardImage: {
    height: 720,
    marginBottom: 8,
    // borderRadius:5,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  cardBody: {
    color: '#000000',
    flex: 1,
    flexGrow: 1,
    paddingHorizontal: 12,
  },
  cardTitle: {
    color: '#000000',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  cardLabel: {
    color: '#000000',
    fontSize: 14,
    marginBottom: 6,
  },
  cardDescription: {
    color: '#242B2E',
    fontSize: 12,
    marginBottom: 12,
    marginTop: 6,
    flexShrink: 1,
  },
  cardFooter: {
    color: '#000000',
    textAlign:'right'
  },
});
