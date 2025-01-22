import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function App() {

  const [ count, setCount ] = useState(10)

  return (
    <View style={styles.container}>
      <Text style={styles.textHuge}>{ count }</Text>
        <Pressable
          style={styles.floatingButton}
          onPress={()=> setCount(count + 1) }
          onLongPress={()=>setCount(0)}
        >
          <Text style={{ color: 'white'}}>
            +1
          </Text>
        </Pressable>
      <StatusBar style="dark"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textHuge:{
      fontSize: 120,
      fontWeight: '100'
  },
  floatingButton: {
    position: 'absolute',
    bottom: 50, 
    right: 50, 
    backgroundColor: '#65658f', 
    padding: 20, 
    borderRadius:15,
    shadowColor: '#000', 
    shadowOffset:{
      width: 0,
      height: 4
    }, 
    shadowOpacity: 0.3, 
    elevation: 3,
    shadowRadius: 4
  }
});
