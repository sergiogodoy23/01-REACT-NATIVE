import React from 'react'
import { StyleSheet, Text, View, TouchableNativeFeedback } from 'react-native';

export const BoxObjectModelScreen = () => {
  return (
    <View style={ styles.container }>
        <Text style={ styles.title }>Box Object Model</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: 'blue',
    },
    title: {
      paddingHorizontal: 100,
      paddingVertical: 20,
      marginHorizontal: 20,
      fontSize: 20,
      //width: 200,
      borderWidth: 10,
      //backgroundColor: 'red',
    }
});
