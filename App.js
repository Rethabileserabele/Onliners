import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

import { Fontisto, Entypo, AntDesign, Feather, MaterialIcons, Ionicons, FontAwesome} from '@expo/vector-icons';

export default function App() {
  return (
<View style={styles.BigContainer}>
  <View style={styles.header1}>
  <View style={styles.searchBox}>
  <TouchableOpacity style={styles.Encryption_icon}>
    <MaterialIcons name="enhanced-encryption" size={18} color="green" />
  </TouchableOpacity>
  <Text style={styles.search}>https://onliners.com/#home</Text>
  </View>
  <TouchableOpacity style={styles.TabButton}>
    <Ionicons name="ios-flame-outline" size={24} color="white" />
  </TouchableOpacity>
  <TouchableOpacity style={styles.TabButton}>
    <MaterialIcons name="tab" size={24} color="white" />
  </TouchableOpacity>
  <TouchableOpacity style={styles.TabButton}>
    <FontAwesome name="ellipsis-v" size={24} color="white" />
  </TouchableOpacity>
  </View>
  <ScrollView style={styles.scrollView}>
  <View style={styles.container}>    
    <View style={styles.course}>
      <View style={styles.courseBody}>
        <View style={styles.header2}>
          <Feather name="menu" size={24} color="black" />
          <View style={styles.ModuleDetails}>
          <Text style={styles.module}>Principles of Web Design</Text>
          <View style={{ flexDirection: 'row', marginLeft: 5, marginTop: -5 }}>
            <Text style={styles.date}>BSCSMY2S2</Text>                
          </View>
          </View>
          </View>
          <View style={styles.clickable}>
           <TouchableOpacity style={styles.clickableButton}>
            <MaterialIcons name="stream" size={24} color="black" />
            <Text style={styles.clickableText}>Stream</Text>
           </TouchableOpacity>
           <TouchableOpacity style={styles.middleButton}>
            <Entypo name="open-book" size={24} color="black" />
            <Text style={styles.middleText}>Classroom</Text>
           </TouchableOpacity>
           <TouchableOpacity style={styles.leftButton}>
            <Ionicons name="people" size={24} color='#9E9E9E'/>
            <Text style={styles.leftText}>Students</Text>
           </TouchableOpacity>
          </View>
        </View>
        <Image style={styles.courseImage}
          source={require('./assets/website.png')}/>
        <Text style={styles.Brief}>
          Web design encompasses a variety of disciplines and skills in the creation and 
          maintenance of web sites. These disciplines include web development, 
          graphic design, usability, and databases.
        </Text>        
      </View>    
    </View>
    <View style={styles.container}>    
      <View style={styles.course}>
        <View style={styles.courseBody}>
          <View style={styles.header2}>
           <Feather name="menu" size={24} color="black" />
           
           <View style={styles.ModuleDetails}>
            <Text style={styles.module}>Java Programming I</Text>
            <View style={{ flexDirection: 'row', marginLeft: 5, marginTop: -5 }}>
              <Text style={styles.date}>BSCSMY2S2</Text>                
            </View>
           </View>
          </View>
          <View style={styles.clickable}>
           <TouchableOpacity style={styles.clickableButton}>
            <MaterialIcons name="stream" size={24} color="black" />
            <Text style={styles.clickableText}>Stream</Text>
           </TouchableOpacity>
           <TouchableOpacity style={styles.middleButton}>
            <Entypo name="open-book" size={24} color="black" />
            <Text style={styles.middleText}>Classroom</Text>
           </TouchableOpacity>
           <TouchableOpacity style={styles.leftButton}>
            <Ionicons name="people" size={24} color='#9E9E9E'/>
            <Text style={styles.leftText}>Students</Text>
           </TouchableOpacity>
          </View>
        </View>
         <Image
          style={styles.courseImage}
          source={require('./assets/java.jpeg')}/>
         <Text style={styles.Brief}>
          Java is a high-level, class-based, object-oriented programming language 
          intended to let programmers write once, run on all platforms that support 
          Java without the need to recompile.
        </Text>       
      </View>    
  </View>
  <View style={styles.container}>    
    <View style={styles.course}>
      <View style={styles.courseBody}>
        <View style={styles.header2}>
          <Feather name="menu" size={24} color="black" />
          
          <View style={styles.ModuleDetails}>
          <Text style={styles.module}>Database Systems</Text>
          <View style={{ flexDirection: 'row', marginLeft: 5, marginTop: -5 }}>
            <Text style={styles.date}>BSCSMY2S2</Text>                
          </View>
          </View>
          </View>
          <View style={styles.clickable}>
           <TouchableOpacity style={styles.clickableButton}>
            <MaterialIcons name="stream" size={24} color="black" />
            <Text style={styles.clickableText}>Stream</Text>
           </TouchableOpacity>
           <TouchableOpacity style={styles.middleButton}>
            <Entypo name="open-book" size={24} color="black" />
            <Text style={styles.middleText}>Classroom</Text>
           </TouchableOpacity>
           <TouchableOpacity style={styles.leftButton}>
            <Ionicons name="people" size={24} color='#9E9E9E'/>
            <Text style={styles.leftText}>Students</Text>
           </TouchableOpacity>
          </View>
        </View>
        
        <Image
          style={styles.courseImage}
          source={require('./assets/database.jpg')}/>
        <Text style={styles.Brief}>
          Database Systems is software that caters to the collection of electronic and 
          digital records to extract useful information and store that information. 
        </Text>        
      </View>    
    </View>
    <View style={styles.container}>    
      <View style={styles.course}>
        <View style={styles.courseBody}>
          <View style={styles.header2}>
           <Feather name="menu" size={24} color="black" />
           
           <View style={styles.ModuleDetails}>
            <Text style={styles.module}>Data Com & Network</Text>
            <View style={{ flexDirection: 'row', marginLeft: 5, marginTop: -5 }}>
              <Text style={styles.date}>BSCSMY2S2</Text>                
            </View>
           </View>
          </View>
          <View style={styles.clickable}>
           <TouchableOpacity style={styles.clickableButton}>
            <MaterialIcons name="stream" size={24} color="black" />
            <Text style={styles.clickableText}>Stream</Text>
           </TouchableOpacity>
           <TouchableOpacity style={styles.middleButton}>
            <Entypo name="open-book" size={24} color="black" />
            <Text style={styles.middleText}>Classroom</Text>
           </TouchableOpacity>
           <TouchableOpacity style={styles.leftButton}>
            <Ionicons name="people" size={24} color='#9E9E9E'/>
            <Text style={styles.leftText}>Students</Text>
           </TouchableOpacity>
          </View>
        </View>
         <Image
          style={styles.courseImage}
          source={require('./assets/network.jpg')}/>
         <Text style={styles.Brief}>
          Data communications refers to the transmission of this digital data between two or more computers and 
          data network is a telecommunications network that allows computers to exchange data.
        </Text>       
      </View>    
  </View>
  </ScrollView>
</View>
  );
}

const styles = StyleSheet.create({
  BigContainer: {},
  header1: {
    marginTop: 20,
    flexDirection: 'row',
    backgroundColor: 'grey',
    borderColor: '#E0E0E0',
    borderWidth: 1,
    width: '100%',
    height: '10%',
    padding: 15,
    alignItems: 'center',
  },
  searchBox: {
    alignItems: 'center',
    marginTop: 15,
    padding: 10,
    flexDirection: 'row',
    flex: 1,
    backgroundColor: '#8C9EFF',
    borderColor: '#E0E0E0',
    borderWidth: 1,
    width: '88%',
    height: '100%',
    marginBottom: 20,
    borderWidth: 1,
    borderRadius: 5,
  },
  search:{
    alignItems: 'center',
  },
  Encryption_icon: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  TabButton: {
    marginBottom: 0,
    padding: 10,   
  },
  scrollView: {
    marginHorizontal: 2,
    marginVertical: 2
  },
  container: {
    marginTop: 2,
    flex: 1,
    backgroundColor: '#EEEEEE',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%'
  },
  Brief: {
    marginTop: 10,
    marginBottom: '5%',
  },
  course: {
    marginTop: 1,
    backgroundColor: '#fff',
    borderColor: '#E0E0E0',
    borderWidth: 1,
    width: '100%',
    height: '100%'
  },
  courseBody: {
    padding: 10,
  },

  ModuleDetails: {},
  header2: {
    flexDirection: 'row',
  },
  module: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 5,
    marginTop: -5, 
    //alignItems:'baseline',
  },
  date: {
    color: '#9E9E9E',
    marginRight: 5,
    fontSize: 13,
  },
  courseImage: {
    width: '100%',
    height: 200,
  },
  clickable: {
    flexDirection: 'row',
    height: 40,
    paddingLeft: 10,
    width: '100%',
    backgroundColor: '#ECEFF1',
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
    alignItems: 'center',
  },
  clickableButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  clickableText: {
    marginLeft: 5,
    color: '#9E9E9E',
    fontWeight: 'bold',
  },
  middleButton: {
    marginLeft: 30,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  middleText:{
    marginLeft: 5,
    color: '#9E9E9E',
    fontWeight: 'bold',
    marginRight: 30,
  },
  leftButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  leftText: {  
    marginLeft: 5,
    color: '#9E9E9E',
    fontWeight: 'bold',  
  }
});
