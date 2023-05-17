import { View, Text , SafeAreaView, StyleSheet, TouchableOpacity} from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';

export default function HomeScreen (){
    return(
      <SafeAreaView style={styles.container} >
         <Text style={{ left:25, fontWeight:200, }}>ЛХА,5capын 17 </Text>
         <View> 
         <Ionicons name="md-sunny-sharp"
         size={25}
         color= 'green'
         left={9}
         
         />
         
         <Ionicons ios="md-sunny-sharp" android="md-sunny-sharp" />
            <Text style={{left: 40, fontWeight: 700, bottom :35,  }}>Өдрийн мэнд</Text>
            <Text style={{left:20 ,top: 5.1, fontWeight :'bold' }}>Өнөөдөр</Text>
            <Text style={{left: 300, bottom: 10, fontWeight: 200}}> Долоо хоног </Text>
            <Ionicons name="arrow-forward-outline"
            size={17}
            left={378}
            bottom={26}
            ></Ionicons>
             </View>
             <View
             style={{
                width: 390,
                height: 200,
                paddingHorizontal: 10,
                paddingVertical: 9,
                borderRadius: 7,
                backgroundColor: 'white',
                alignSelf: 'flex-start',
                marginHorizontal: '2%',
                marginBottom: 20,
                minWidth: '48%',
                left: 5,
                right: 5,
                bottom: 18,

                

             }}
             />
             <View style={{
                widht: 2,
                height: 0.1,
                backgroundColor: 'red',
             }} />
             <Text style={{
                bottom: 20,
                left: 364,
                fontWeight: 200

             }}
             >бүгд</Text>
             <Ionicons name="arrow-forward-outline"
            size={17}
            left={390}
            bottom={35}
            ></Ionicons>
             <View style={{
                width: 390 ,
                height: 100,
                backgroundColor:'white',
                paddingHorizontal: 10,
                paddingVertical: 9,
                borderRadius: 7,
                backgroundColor: 'white',
                alignSelf: 'flex-start',
                marginHorizontal: '2%',
                marginBottom: 20,
                minWidth: '48%',
                left: 5,
                right: 5,
                bottom: 14,
             }} />
             <Text style={{
                left:20,
                fontWeight: 900,
                bottom: 10
        
             }}>Уусан ус</Text>
             <Text style={{
                bottom :25,
                left: 350,
                fontWeight: 200
             }}>Анализ</Text>
             <Ionicons name="arrow-forward-outline"
            size={17}
            left={390}
            bottom={40}
            ></Ionicons>
             <View style={{
                width: 390,
                height:300,
                paddingHorizontal: 10,
                paddingVertical: 9,
                borderRadius: 7,
                backgroundColor: 'white',
                alignSelf: 'flex-start',
                marginHorizontal: '2%',
                marginBottom: 20,
                minWidth: '48%',
                left: 5,
                right: 5,
                bottom: 30,
             }}/>
             
             

      </SafeAreaView>
      
    );
  }
  const styles = StyleSheet.create({
    container: {
     flex: 1,
      backgroundColor: '#f5f5f5',
    
    },
  });
  
  
  