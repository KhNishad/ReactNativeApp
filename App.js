
import { setStatusBarNetworkActivityIndicatorVisible } from 'expo-status-bar';
import React, { useState, useRef ,useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
  ActivityIndicator,
  View,
  TouchableOpacity,
  Text,
  BackHandler,
  Alert,
  Image
} from 'react-native';
import {WebView} from 'react-native-webview';


const App = () => {

  const webviewRef = useRef(null)

  const backButtonHandler = () => {
   
    if (webviewRef.current){
        webviewRef.current.goBack()
       
    }
    
   }
      const backAction = () => {
        Alert.alert("Exit App?", "Are you sure? you want to exit the app?", [
          {
            text: "Cancel",
            onPress: () => null,
            style: "cancel"
          },
          { text: "YES", onPress: () => BackHandler.exitApp() }
        ]);
        return true;
      };
    
      useEffect(() => {
        BackHandler.addEventListener("hardwareBackPress", backAction);
    
        return () =>
          BackHandler.removeEventListener("hardwareBackPress", backAction);
      }, []);
      

 
  return (
    <>
      <StatusBar barStyle='light-content' />
      <SafeAreaView style={styles.flexContainer} >
         {/* <View  style = {{justifyContent: 'center',alignItems:'center',backgroundColor:'#b43757'}}>
              <Image source = {{uri:'https://pbs.twimg.com/profile_images/486929358120964097/gNLINY67_400x400.png'}}
              style = {{ width: 100, height: 100}}
              />
         </View> */}
          <WebView
            source={{ uri: 'https://seller.ebhubon.com' }}
            startInLoadingState={true}
            renderLoading={() => (
              <ActivityIndicator
                color='black'
                size='large'
                style={styles.flexContainer}
              />
            )}
            ref={webviewRef}
          
          />
          
          <View style={styles.tabBarContainer}>
            <TouchableOpacity onPress={backButtonHandler}>
              <Text style={styles.button}>Go Back</Text>
            </TouchableOpacity>
          </View>
        
        
      </SafeAreaView>
    </>
  )
}

const styles = StyleSheet.create({
  flexContainer: {
    flex: 1
  },
  tabBarContainer: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#b43757'
  },
  button: {
    color: 'white',
    fontSize: 15 
  }
})

export default App
