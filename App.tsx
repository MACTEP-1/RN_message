import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import UserInfo from './components/UserInfo';
import React, { useEffect, useState } from 'react';
import Chat from './components/Chat';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function App() {
  const storUsernameKey = "cht-username";
  const storImageKey = "cht-image";

  const [username, setUserame] = useState("");
  const [image, setImage] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const getUserInfo = async() => {
    try {
      const storedName = await AsyncStorage.getItem(storUsernameKey);
      const storedImage = await AsyncStorage.getItem(storImageKey);
      // let username = storedName == null ? "" : storedName;
      // let image = storedImage == null ? "" : storedImage;
      setUserame(storedName || "");
      setImage(storedImage || "");
    } catch (error) {
      console.error('Problem retrieving info: ', error);
    } finally {
      setIsLoading(false);
    }
  };

  const LoggedIn = async (name: string, image: string) => {
    setUserame(name);
    await AsyncStorage.setItem(storUsernameKey, name);
    setImage(image);
    await AsyncStorage.setItem(storImageKey, image);
  };

  // useEffect(() => {
  //   const loadData = async () => {
  //     await getUserInfo();
      
  //     // Fake pause to ensure the splash screen is visible
  //     setTimeout(() => {
  //       setIsLoading(false);
  //     }, 10000);
  //   };

  //   loadData();
  // }, []);

  useEffect(() => {
    getUserInfo();
  }, []);

  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <Text>Loading...</Text>
      </View>
    );
  }

  let active = username != "" ? (
    <Chat username={username} image={image}/>
  ) : (
    <UserInfo onClose={LoggedIn}/>
  )
  return (
    <SafeAreaView style={styles.container}>
      {active}
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
