import React, { useState } from 'react';

import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

function App(): React.JSX.Element {
  const [randomBackground, setRandomBackground] = useState("#ffffff");
  const [squareColor, setSquareColor] = useState("#000000")
  const [rectangleColor, setRectangleColor] = useState("#000000")
  const [circleColor, setCircleColor] = useState("#000000")
  const [triangleColor, setTriangleColor] = useState("#000000")

  const generateColor = ()=>{
    const hexRange="0123456789ABCDEF"
    let color = "#"
    let sqColor = "#"
    let rectColor = "#"
    let cColor="#"
    let triColor="#"

    for (let i = 0; i < 6; i++) {
      color += hexRange[Math.floor(Math.random() * 16)] //Math.floor(Math.random() * 16) generates a value between 0 and 16
      sqColor += hexRange[Math.floor(Math.random() * 16)]
      rectColor += hexRange[Math.floor(Math.random() * 16)]
      cColor += hexRange[Math.floor(Math.random() * 16)]
      triColor += hexRange[Math.floor(Math.random() * 16)]
    }
    setRandomBackground(color)
    setSquareColor(sqColor)
    setRectangleColor(rectColor)
    setCircleColor(cColor)
    setTriangleColor(triColor)


  }

  return (
    <>
    <StatusBar backgroundColor={randomBackground}/>

    <View style={[styles.container, {backgroundColor: randomBackground}]}>
      <View style={styles.firstTwoPoly}>

      <View style={[styles.square, {backgroundColor:squareColor}]}>
      </View>

      <View style={[styles.rectangle, {backgroundColor:rectangleColor}]}>
      </View>

      </View>

      <TouchableOpacity onPress={generateColor} style={styles.touchable}>
        <View style={styles.actionBtn}>
          <Text style={styles.actionBtnText}>Mix it Up!!</Text>
        </View>
      </TouchableOpacity>

      <View style={styles.LastTwoPoly}>
        <View style={[styles.circle, {backgroundColor: circleColor}]}></View>
        <View style={[styles.triangle,{borderBottomColor: triangleColor} ]}></View>
      </View>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:"center",
    justifyContent:"center"
  },
  touchable:{
    margin:20,
  },
  actionBtn:{
    borderRadius:12,
    backgroundColor:"#6A1B4D",
    paddingVertical: 10,
    paddingHorizontal: 40,
  },
  actionBtnText:{
    fontSize:24,
    color:'#FFFFFF',
    textTransform:'uppercase'
  },
  firstTwoPoly:{
    flexDirection:'row',
    marginBottom:80,    
  },
  square:{
    borderRadius: 5,
    width:50,
    height:50,
    borderStyle:'solid',
    borderColor:'#000000',
    borderWidth:2,
    marginHorizontal:50,
  }, 
  rectangle:{
    borderRadius: 5,
    width:50,
    height:35,
    borderStyle:'solid',
    borderColor:'#000000',
    borderWidth:2,
    marginTop: 17,
    marginHorizontal:50
  }, 
  LastTwoPoly:{
    flexDirection:'row',
    marginTop:80,
  },
  circle:{
    width:50,
    height:50,
    borderStyle:'solid',
    borderColor:'#000000',
    borderWidth:2,
    borderRadius:25,
    marginTop: 17,
    marginHorizontal:50
  },
  triangle:{
    borderStyle: 'solid',
    borderLeftWidth: 50, 
    borderRightWidth: 50, 
    borderBottomWidth: 100, 
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
  }
});

export default App;
