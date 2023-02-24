import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const FlexScreen = () => {
  return (
    <View style={ styles.container }>
        <Text style={ styles.Caja1 }>Caja 1</Text>
        <Text style={ styles.Caja2 }>Caja 2</Text>
        <Text style={ styles.Caja3 }>Caja 3</Text>
    </View>
  )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        // height: 500,
        backgroundColor: '#28C4D9',
    },
    Caja1: {
        borderWidth: 2,
        borderColor: 'white',
        fontSize: 30,
        alignSelf: 'center'
    },
    Caja2: {
        borderWidth: 2,
        borderColor: 'white',
        fontSize: 30
    },
    Caja3: {
        borderWidth: 2,
        borderColor: 'white',
        fontSize: 30
    },
});
