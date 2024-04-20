
import React, { useRef, useState } from 'react';
import type {PropsWithChildren} from 'react';
import {
  ImageSourcePropType,
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  Animated,
  Vibration,
} from 'react-native';


import DiceOne from '../assets/DiceOne.png'
import DiceTwo  from '../assets/DiceTwo.png'
import DiceThree  from '../assets/DiceThree.png'
import DiceFour  from '../assets/DiceFour.png'
import DiceFive  from '../assets/DiceFive.png'
import DiceSix  from '../assets/DiceSix.png'

type DiceProps = PropsWithChildren<{
  imageUrl: ImageSourcePropType
}>

const options = {
  enableVibrateFallback: true,
  ignoreAndroidSystemSettings: false,
};

const Dice = ({imageUrl}:DiceProps):JSX.Element =>{
  return(
    <View>
      <Image style={styles.diceImage} source={imageUrl} />
    </View>
  )
}

function App(): React.JSX.Element {
  const [diceImage, setDiceImage] = useState<ImageSourcePropType>(DiceOne)
  
  const animatedValue = useRef(new Animated.Value(0)).current;

  const rollDiceOnTap =() =>{
    let randomNumber = Math.floor(Math.random()*6 + 1)

    switch (randomNumber) {
      case 1:
        setDiceImage(DiceOne)
        break;
      case 2:
        setDiceImage(DiceTwo)
        break;
      case 3:
        setDiceImage(DiceThree)
        break;
      case 4:
        setDiceImage(DiceFour)
        break;
      case 5:
        setDiceImage(DiceFive)
        break;
      case 6:
        setDiceImage(DiceSix)
        break;
    
      default:
        setDiceImage(DiceOne)
        break;
    }

    animatedValue.setValue(0);
    Animated.timing(animatedValue, {
      toValue: 1, // Final value of the animation
      duration: 500, // Duration of the animation
      useNativeDriver: true, // Use native driver for performance
    }).start(); // Start the animation

    // Trigger haptic feedback
    Vibration.vibrate(1000)

  };
    
  return (
    <View style={styles.container}>
      <Animated.View style={[styles.diceContainer, { transform: [{ rotate: animatedValue.interpolate({ inputRange: [0, 1], outputRange: ['0deg', '360deg'] }) }] }]}>
        <Dice imageUrl={diceImage} />
      </Animated.View>
      <Pressable onPress={rollDiceOnTap} style={styles.diceContainer}>
        <Text style={styles.rollDiceBtnText}>Roll the Dice</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#FFF2F2'
  },
  diceContainer:{
    margin:12,
    backgroundColor:'#4ac2c4',
    borderRadius:8
  },
  diceImage:{
    width:200,
    height:200,
  },
  rollDiceBtnText:{
    paddingVertical:10,
    paddingHorizontal:40,
    borderWidth:2,
    borderRadius:8,
    borderColor:'#E5E0FF',
    fontSize:16,
    color:'white',
    fontWeight:'700',
    textTransform:'uppercase',
  }
});

export default App;
