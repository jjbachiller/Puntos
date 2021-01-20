import React from 'react'
import { StyleSheet, Dimensions, Button, View } from 'react-native';

export default ({ onPressLeft, textLeft }) => {
  return (
    <View style={styles.panel}>
      <Button title={textLeft} onPress={onPressLeft}/>
      <Button title="Mostrar/Ocultar" />
    </View>
  )
}

const styles = StyleSheet.create({
  panel: {
    width: Dimensions.get('window').width,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  }
})
