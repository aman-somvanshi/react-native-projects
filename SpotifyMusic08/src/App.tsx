import React from 'react';
import {
  ActivityIndicator,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { useState, useEffect } from 'react';
import { setupPlayer, addTrack } from '../musicPlayerServices';

function App(): React.JSX.Element {
  const [isPlayerReady, setIsPlayerReady] = useState(false)

  async function setup(){
    let isSetup = await setupPlayer()

    if (isSetup) {
      await addTrack()
    }
    setIsPlayerReady(isSetup)
  }

  useEffect(() => {
    setup()
  }, [])
  
  if (!isPlayerReady){
    return(
      <SafeAreaView>
        <ActivityIndicator/>
      </SafeAreaView>
    )
  }
  
  return (
    <SafeAreaView >
      <StatusBar
        
      />
      <Text>Testing seems oka</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
  },
});

export default App;
