import React from 'react'
import { useState } from 'react'
import { View, SafeAreaView, Image, Text, StyleSheet, ScrollView } from 'react-native'



   export default function ChatScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
      <ScrollView horizontal={true} >

        <View style={styles.img}>
          <Image
            style={{
              height: 250, width: '90%', marginLeft: 20
            }}
            source={require('./img/0.png')}
          />

          <Image
            style={{ height: 250, width: '90%', marginLeft: 20 }}
            source={require('./img/1.png')}
          />
          <Image
            style={{ height: 250, width: '90%', marginLeft: 20 }}
            source={require('./img/2.png')}
          />
        </View>
      </ScrollView>
      <ScrollView horizontal={true}>

      <View style={styles.img2}>

      
      <Image
        style={{ height: 100, width: 150, marginLeft: 20 }}
        source={require('./img/3.png')}
      />

      <Image
        style={{ height: 100, width: 150, marginLeft: 20 }}
        source={require('./img/4.png')}
      />
      <Image
        style={{ height: 100, width: 150, marginLeft: 20 }}
        source={require('./img/5.png')}

      />
      <Image
        style={{ height: 100, width: 150, marginLeft: 20 }}
        source={require('./img/6.png')}
      />
       </View>
      </ScrollView>
      <ScrollView horizontal={true}>
      <View style={styles.img3}>
      <Image 
        style={{ height: 100, width: 150, marginLeft: 20 }}
        source={require('./img/11.png')}
      />
       <Image
        style={{ height: 100, width: 150, marginLeft: 20 }}
        source={require('./img/8.png')}
      />
      <Image
        style={{ height: 100, width: 150, marginLeft: 20 }}
        source={require('./img/9.png')}
      />
      </View>
      </ScrollView>
      <ScrollView horizontal={true}>
        <View style={styles.img4}>

      <Image
        style={{ height: 250, width: '90%', marginLeft: 20 }}
        source={require('./img/7.png')}
      />
      <Image
        style={{ height: 250, width: '90%', marginLeft: 20 }}
        source={require('./img/10.png')}
      />
       </View>
      </ScrollView>
    </ScrollView>
</SafeAreaView >
)
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#f5f5f5',

  },
  img: {
    flexDirection: 'row',
    
  },
  img2: {
    flexDirection : 'row' ,
  },
  img3 :{
    flexDirection : 'row',
  },
  img4 :{flexDirection :'row',

  }
  

  
},
);