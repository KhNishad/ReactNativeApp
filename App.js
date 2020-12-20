
import {
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Text,
  BackHandler,
  Image,
  Button,
  StatusBar
} from 'react-native';
import React, { useState, useRef ,useEffect} from 'react';
import {WebView} from 'react-native-webview';


const App = () => {
  const webviewRef = useRef(null)
  const [webView, setwebView] = useState(true)

  const handlePress = () =>{
    setwebView(false)
 }


 const backAction = () => {
   if (webviewRef.current){
        webviewRef.current.goBack()
      }
   return true;
 };

 useEffect(() => {
   BackHandler.addEventListener("hardwareBackPress", backAction);

   return () =>
     BackHandler.removeEventListener("hardwareBackPress", backAction);
 }, []);
 
  return (
      <>
          <StatusBar />
          {webView?
            <SafeAreaView style={styles.flexContainer}>
              <TouchableOpacity>
                <Image
              
                  source={require("./assets/playstore.png")}
                  style={{ width: 200, height: 200}}
                />
                <Text style={styles.title}>Welcome to ebhubon!</Text>
                <Button
                  onPress={handlePress}
                  title="Go to seller Panel"
                  color="#D70022"
                  />
              </TouchableOpacity>
            
          </SafeAreaView>
          :
      
              <WebView
                source={{ uri: 'https://seller.ebhubon.com/user/login' }}
                startInLoadingState={true}
                ref={webviewRef}
            
            />
        
        
          }

      </>
    
  )
}

const styles = StyleSheet.create({
  flexContainer: {
    flex: 1,
    justifyContent:'center',
    alignItems:'center'
  },

  title:{
    fontSize:20,
    fontWeight: 'bold',
    marginBottom:10
},
  button: {
    color: 'white',
    fontSize: 15 
  }
})

export default App
