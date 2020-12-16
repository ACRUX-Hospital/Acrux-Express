import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
export default function Home(props) {
  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 18, marginLeft: 18, marginTop: 20
        }}
        onPress={() => props.navigation.replace("Signup")}
      >dont have a account ?</Text>      </View>



  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
