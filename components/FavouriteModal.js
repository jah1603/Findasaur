import React, { Component } from 'react'
import { Alert, Dimensions, FlatList, ScrollView, Image, TouchableHighlight, LayoutAnimation, StyleSheet, Text, TouchableOpacity, View, Modal } from 'react-native';
import { Font, LinearGradient  } from 'expo';
import DinoListViewStyle from '../Stylesheets/DinoListViewStyle.js';
import InfoModalStyle from '../Stylesheets/InfoModalStyle.js';
import AutoHeightImage from 'react-native-auto-height-image';
import * as ImageFinder from './ImageFinder.js'
import * as Pronunciations from './Pronunciations.js'
import * as Meanings from './Meanings.js'
import * as Types from './Types.js'
import * as Lengths from './Lengths.js'

export default class FavouriteModal extends Component {
  render() {

    var self = this;

    return (

      <View>
      <Modal
        animationType="slide"
        transparent={false}
        visible={this.props.favouriteModalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
        }}>
        <View>

      <LinearGradient
      colors={['black', '#1e932d']}
      style={{ padding: 25 }}>

        <View style={DinoListViewStyle.infoModal}>

        {

          this.props.clickedFavourite ? (

            <ScrollView>

            <View style={{alignItems: "center"}}>
            <TouchableHighlight
              onPress={() => {
                this.addDinosaurToFavourites();
                }}>
                  <Image source={require('../assets/icons/favourite.png')} style={{height: 25, width: 25, marginBottom: 10, position: 'relative'}}/>
            </TouchableHighlight>

            <AutoHeightImage
              width={300}
              source={{uri: `${this.props.clickedFavourite.image}`}}
            />

            {
              this.props.clickedFavourite.diet === require("../assets/icons/omnivore.png") ? (

                <View style={DinoListViewStyle.modalHeader}>

                <Text style={DinoListViewStyle.infoModalHeader}>{this.props.clickedFavourite.name}</Text>
                <Image source={ this.props.clickedFavourite.diet } style={{width: 65, height: 20, marginTop: 10, marginRight: 20}}/>
                </View>
            ) :

            <View style={DinoListViewStyle.modalHeader}>
            <Text style={DinoListViewStyle.infoModalHeader}>{this.props.clickedFavourite.name}</Text>
            <Image source={ this.props.clickedFavourite.diet } style={{width: 30, height: 20, marginTop: 10, marginRight: 20}}/>
            </View>

            }

            {

              this.props.clickedFavourite.pronunciation ? (

            <View style={DinoListViewStyle.modalHeader}>
            <Text style={DinoListViewStyle.modalPronunciation}>{this.props.clickedFavourite.pronunciation} | {this.props.clickedFavourite.meaning}</Text>
            </View>

          ) : null

          }

          {

            this.props.clickedFavourite.length ? (

          <View style={DinoListViewStyle.modalHeader}>
          <Text style={DinoListViewStyle.modalPronunciation}>Length: {this.props.clickedFavourite.length} | Type: {this.props.clickedFavourite.type}</Text>
          </View>

        ) : null

        }

            <Image style={{marginTop:20}} source={this.props.clickedFavourite.image}/>

            <Text style={DinoListViewStyle.infoModalText}>{this.props.clickedFavourite.description} </Text>

            </View>

              <TouchableHighlight
                onPress={() => {
                  this.props.toggleFavouriteModal();
                }}>
              <Image source={require('../assets/icons/close.png')} style={{height: 25, width: 25, marginBottom: 10, marginLeft: '50%'}}/>
              </TouchableHighlight>
              </ScrollView>
            ) : null

          }
            </View>
            </LinearGradient>
          </View>
        </Modal>
      </View>



    )
  }
}