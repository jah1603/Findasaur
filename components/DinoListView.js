import React, { Component } from 'react';
import ImageBackground from 'react-native';
import FitImage from 'react-native-fit-image';
import { Alert, Dimensions, FlatList, ScrollView, Image, TouchableHighlight, LayoutAnimation, StyleSheet, Text, TouchableOpacity, View, Modal, Platform } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { BallIndicator, BarIndicator, DotIndicator, MaterialIndicator, PacmanIndicator, PulseIndicator, SkypeIndicator, UIActivityIndicator, WaveIndicator } from 'react-native-indicators';
import { LinearGradient } from 'expo';
import _ from 'lodash';
import { MockRobotsList } from './FakerMocks';
import Pagination from 'react-native-pagination';
import AutoHeightImage from 'react-native-auto-height-image';
const { width, height } = Dimensions.get('window');
const ITEM_HEIGHT = 100;
import DinoListViewStyle from '../Stylesheets/DinoListViewStyle.js';
import Autocomplete from 'react-native-autocomplete-input';
import axios from 'axios';
import * as ImageFinder from './ImageFinder.js'
import * as Pronunciations from './Pronunciations.js'
import * as Meanings from './Meanings.js'
import * as Types from './Types.js'
import * as Lengths from './Lengths.js'
import { AsyncStorage } from "react-native"
import FossilMap from './FossilMap.js';

export default class DinoListView extends Component {
  _isMounted = false;

  constructor(props) {
    super(props);
    this.state = {
      dinosaurClicked: "",
      dinosaurTyped: "",
      dinosaurViewVisible: false,
      isLoading: false,
      activeId: null,
      activeItem: null,
      items: null,
      searchDataLoading: false,
      newFavouriteAdded: false,
      fossilMapVisible: false
    };
    this.toggleDinosaurView = this.toggleDinosaurView.bind(this);
    this.closeDinosaurView = this.closeDinosaurView.bind(this);
    this.retrieveSearchedDinosaurData = this.retrieveSearchedDinosaurData.bind(this);
    this.onAddressBookImageLoad = this.onAddressBookImageLoad.bind(this);
    this.processImageDimensions = this.processImageDimensions.bind(this);
    this.calculateImageDimensions = this.calculateImageDimensions.bind(this);
    this.retrieveImageUrl = this.retrieveImageUrl.bind(this);
    this.setDinoProfilePictureAsLoaded = this.setDinoProfilePictureAsLoaded.bind(this);
    this.setFossilMapVisible = this.setFossilMapVisible.bind(this);
    this.closeFossilMap = this.closeFossilMap.bind(this);
  }

  setFossilMapVisible(){
    this.setState({
      fossilMapVisible: true
    })
  }

  closeFossilMap(){
    this.setState({
      fossilMapVisible: false
    })
  }

  checkFavouriteStatus(clickedDinosaur) {
    try {
      AsyncStorage.getItem('dinosaur_favourites').then((dinosaurs) => {
        const dinos = dinosaurs ? JSON.parse(dinosaurs) : [];

        if (dinos.length > 0){
          var names = dinos.map((dino) => dino.name);

          if (names.includes(clickedDinosaur)){
            this.setState({clickedDinoAlreadyFavourite: true});
          }
          else {
            this.setState({clickedDinoAlreadyFavourite: false});
          }
        }
        else {
          this.setState({clickedDinoAlreadyFavourite: false});
        }
      }
    )
    }
      catch (error) {
        console.log(error);
    }
    }

  addDinosaurToFavourites = async() => {
    var name = this.returnClickedDinosaur()
    var pronunciation = Pronunciations.getPronunciation(name)
    var description = this.renderDescriptionElements(this.state.searchedDinosaurDescription)
    var meaning = Meanings.getNameMeaning(name)
    var length = Lengths.getLength(name)
    var type = Types.getType(name)
    var diet = this.state.searchedDinosaurData.diet
    var image = this.state.searchedDinosaurImage
    var era = this.props.eraName

    var dinosaur = {name: name, era: era, diet: diet, description: description, pronunciation: pronunciation, meaning: meaning, length: length, type: type, image: image}

    try {
      AsyncStorage.getItem('dinosaur_favourites').then((dinosaurs) => {
        console.log("DINOSAURS ARRAY?", JSON.parse(dinosaurs));
        const dinos = dinosaurs ? JSON.parse(dinosaurs) : [];
        console.log("DINOS BEFORE", dinos);

        if (dinos.length > 0){
          var names = dinos.map((dino) => dino.name);
          if (!names.includes(dinosaur.name)){
          dinos.push(dinosaur);
          AsyncStorage.setItem('dinosaur_favourites', JSON.stringify(dinos));
          this.setState({newFavouriteAdded: true}, function(){
            Alert.alert(
                   `Successfully added ${dinosaur.name} to your favourites!`
                )
          })
        }
        else {
          Alert.alert(
                 `${dinosaur.name} is already in your favourites!`
              )
        }
      }
        else {
          dinos.push(dinosaur);
          AsyncStorage.setItem('dinosaur_favourites', JSON.stringify(dinos));
          Alert.alert(
                 `Successfully added ${dinosaur.name} to your favourites!`
              )
        }
        console.log("DINOS AFTER", dinos);
  })}
    catch (error) {
      console.log(error);
    }
}

  componentDidMount(){
    this.setState({
      items: this.populateDinosaurs(this.props.allDinosaurs.concat(this.props.everySingleDinosaur))
    }, function(){
      this._isMounted = true;
    })
  }

  retrieveInitialImageLink(dinosaur){
    this.checkFavouriteStatus(this.state.clickedDinosaur)
    console.log("DINOSAUR NAME", dinosaur);
    const imageUrl = `https://en.wikipedia.org/w/api.php?action=query&titles=${dinosaur}&format=json&prop=pageimages&origin=*`

    axios.get(imageUrl).then( (response) => {

        this.retrieveImageUrl(response.data)

        })

    .catch(function(error){
      console.log(error);
      console.log("Error fetching dinosaur data.");
      Alert.alert(
    'Could not load dinosaur data 🦕',
    "Please check your internet connection and try again later"
    )
    })
  }

  onAddressBookImageLoad(){
    this.setState({
      addressBookImageLoading: false
    })
  }

  calculateImageDimensions(){
    var aspectRatio = this.state.width / this.state.height;

    if (this.state.height > Dimensions.get('window').height*0.55){

      var height = Dimensions.get('window').width*0.55;
      var width = height * aspectRatio;

      if (width > Dimensions.get('window').width){
      var width = Dimensions.get('window').width*0.90;
      var height = width / aspectRatio;
    }
    }

    else if (this.state.width > Dimensions.get('window').width*0.93){

      var width = Dimensions.get('window').width*0.90;
      var height = width / aspectRatio;

      if (height > Dimensions.get('window').height*0.55){
        var height = Dimensions.get('window').height*0.55;
        var width = height * aspectRatio;
      }
    }

    else {
      var width = Dimensions.get('window').width*0.90;
      var height = width / aspectRatio;

      if (height > Dimensions.get('window').height*0.55){
        var height = Dimensions.get('window').height*0.55;
        var width = height * aspectRatio;
      }
    }

    this.setState({
      addressBookImageHeight: height,
      addressBookImageWidth: width
    },
    function(){
      this.onAddressBookImageLoad();
    }
  )
  }

  processImageDimensions(){
    var uri = this.state.addressBookImage;

    try{

    Image.getSize(uri, (width, height) => {this.setState({width, height},

      function(){

        this.calculateImageDimensions();

      }
    )})
  }
    catch (error) {
      console.log(error);
      Alert.alert(
    'Could not load image.',
    "The image might be of an incompatible format."
    )
    }
  }

  returnImageUrl(){
    return `${this.state.searchedDinosaurImage}`
  }

  retrieveImageUrl(imageObject){
    var object = this.getImageAddress(imageObject);
    console.log("OBJECT IMAGE", object);
    const imgUrl = `https://en.wikipedia.org/w/api.php?action=query&titles=File:${object}&prop=imageinfo&iiprop=url&format=json&origin=*`

    axios.get(imgUrl).then( (response) => {

        this.setState({
          searchedDinosaurImage: this.handleImageUrl(response.data),
          addressBookImage: this.handleImageUrl(response.data),
          addressBookImageLoading: true
        }, function(){
          this.setState({
            searchDataLoading: false
          }, function(){
            if (this.state.addressBookImageLoading === true){
            this.processImageDimensions()
          }
          })
          console.log("STATE SEARCH IMAGE", this.state.searchedDinosaurImage);
        })
        })
    .catch(function(error){
      console.log(error);
      console.log("Error fetching dinosaur data.");
      Alert.alert(
    'Could not load data for dinosaur',
    "Please check your internet connection and try again later"
    )
    })
  }

  handleImageUrl(object) {
      if (object.query.pages["-1"].imageinfo === undefined) {
        // CURRENTLY REMOVING ALL DINOSAURS WITHOUT AN IMAGE IN THE WIKI API. COULD FIND SUITABLE 'NOT FOUND' IMAGE
         return 'https://www.buttonmuseum.org/sites/default/files/CA-no-dinosaurs-button_busy_beaver_button_museum.png';
         // objects.pop(object);
      }
      else {
        const url = object.query.pages["-1"].imageinfo[0].url;
        return url;
      }
  }

  getImageAddress(object) {
    const pageNumber = Object.keys(object.query.pages)[0];
    if (object.query.pages[`${pageNumber}`].pageimage){
      return object.query.pages[`${pageNumber}`].pageimage;
    }
      else {
        return [];
      }
    }

  retrieveDescription(dinosaur){
    var self = this;
    const url = `https://en.wikipedia.org/w/api.php?action=query&format=json&prop=extracts&titles=${dinosaur}&exintro=1&explaintext=1&exsectionformat=plain&origin=*`
    axios.get(url).then( (response) => {

      console.log("DESC RESP", response.data);

      this.setState({
        searchedDinosaurDescription: response.data
      }, function(){
        this.retrieveInitialImageLink(dinosaur);
      })

        })
    .catch(function(error){
      console.log(error);
      console.log("Error fetching dinosaur data.");
      Alert.alert(
    'Could not load dinosaur data 🦖',
    "Please check your internet connection and try again later"
    )
    })
  }

  toggleDinosaurView() {
    this.setState({
      dinosaurViewVisible: !this.state.dinosaurViewVisible,
      searchDataLoading: true,
      dinoModalProfilePictureLoading: true
    }, function(){
      this.retrieveSearchedDinosaurData(this.state.clickedDinosaur)
    });
  }

  closeDinosaurView(){
    this.setState({
      dinosaurViewVisible: false,
      dinosaurTyped: "",
      newFavouriteAdded: false
    });
  }

  searchBarPlaceholderText(){
    return `Search ${this.props.eraName} dinosaurs`
  }

  retrieveSearchedDinosaurData(dinosaur){
    for (dinosaur of this.state.items){
      if (dinosaur.name == this.state.clickedDinosaur){
        this.setState({
          searchedDinosaurData: dinosaur,
        },
        function(){
          console.log("Searched dinosaur data", this.state.searchedDinosaurData);
          this.retrieveDescription(this.state.clickedDinosaur)
      })
      }
    }
  }

  capitaliseDiet(diet){
    if (diet == "carnivore, omnivore" || diet == "carnivore, insectivore" || diet == "carnivore, piscivore" || diet == "piscivore, insectivore" || diet == "herbivore, omnivore"){
    return "Omnivore";
  }
    else if (diet == "carnivore" || diet == "omnivore" || diet == "herbivore"){
    return diet.charAt(0).toUpperCase() + diet.slice(1);
  }
    else {
      return "Diet unknown"
    }
  }

  buildDinosaurNameAndDietList(dinosaurs){

    return dinosaurs.map(dinosaur => {
        	if (!dinosaur.diet){
        		return `${dinosaur.name} (diet unknown)`;
        	} else {
        		return  `${dinosaur.name} (${dinosaur.diet})`;
        	}
        }
    )
  }

  buildDinosaurNameList(){
    dinosaurs = this.props.everySingleDinosaur;

    return dinosaurs.map(dinosaur => dinosaur.name
    )
  }

  buildDinosaurDietList(){
    dinosaurs = this.props.everySingleDinosaur;

    return dinosaurs.map(dinosaur => dinosaur.diet
    )
  }

  returnClickedDinosaur(){
    return this.state.clickedDinosaur;
  }

  addPrecedingDash(diet){
      return "- ";
  }

  getDescriptionText(object) {
    const newArray = [];
      const pageNumber = Object.keys(object.query.pages)[0];
      if (object.query.pages[`${pageNumber}`].extract){
      newArray.push(object.query.pages[`${pageNumber}`].extract);
    }
    if (newArray.length === 0){
      return "Sorry, for some dinosaurs (such as this one) records are partial, incomplete or non-existent. Therefore Findasaur can't provide a description, needless to say it was probably not the kind of thing you would want to meet in a dark alley on a dark night..."
    }
    else {
      return newArray;
    }
  }

  renderDescriptionElements(object){

    return this.getDescriptionText(object);
  }

  renderMatches(dinosaurs, dinosaursAndDiets){
    return dinosaursAndDiets.map((dinosaurAndDiet, i) =>
      <TouchableOpacity onPress={() => this.setState({clickedDinosaur: dinosaurs[i].name}, function(){ this.toggleDinosaurView() })} key={i}>
      <Text style={{color: 'white', fontSize: 16, paddingTop: 10, paddingBottom: 10, fontFamily: 'PoiretOne-Regular'}} key={i}>{dinosaurAndDiet}</Text>
      </TouchableOpacity>
    )
  }

  setDinoProfilePictureAsLoaded(){
    this.setState({
      dinoModalProfilePictureLoading: false
    })
  }

  getDietTextColor(diet){
    if (diet === "carnivore"){
      return 'red';
    }
    if (diet === "herbivore"){
      return 'limegreen';
    }
    else {
      return 'skyblue';
    }
  }

  removeNonAlphanumeric(string){
    return string.replace(/\W/g, '');
  }

  findDinosaur(query, diet) {

  var sanitizedQuery = this.removeNonAlphanumeric(query);

   if (sanitizedQuery === '') {
     return [];
   }

   if (diet){
     var dinosaurs = this.props.allDinosaurs.concat(this.props.everySingleDinosaur);
   }
   else {
     var dinosaurs = this.props.allDinosaurs.concat(this.props.everySingleDinosaur);
   }

   const regex = new RegExp(`${sanitizedQuery.trim()}`, 'i');
   return dinosaurs.filter(dinosaur => dinosaur.name.search(regex) >= 0);
 }

  populateDinosaurs(dinosaurs){

    return new _.times(dinosaurs.length, (i) => ({
      id: i,
      index: i,
      key: i,
      name: dinosaurs[i].name,
      avatar: '',
      group: _.sample([
        'Work',
        'Friend',
        'Acquaintance',
        'Other'
      ]),
      email: 'Ha',
      coords: dinosaurs[i].coords,
      diet: dinosaurs[i].diet
  }))
}

  returnImageFromStored(){
    console.log("IMAGES", this.props.images);
    return this.props.images[0][this.state.activeItem.index];
  }

  getFlatListItems = () => {
    this.setState({ isLoading: true });
    LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
    setTimeout(() => {
      this.setState({
        isLoading: false
      });
    }, 2000);
  };

  setItemAsActive(activeItem) {
      if (this._isMounted) {
    this.setState({ scrollToItemRef: activeItem });
    this.setState({
      activeId: activeItem.index,
      activeItem: activeItem.item,
      addressBookImageLoading: true
    }, function(){
          /* IMAGE LOADING METHOD TO RETRIEVE IMAGE FOR DINOSAURS (CURRENTLY ALL; ORIGINALLY JUST 18) */
          this.setState({clickedDinosaur: this.state.activeItem.name}, function(){ this.toggleDinosaurView() })
    })
  }
  }

  renderItem = (o, i) => {
    return (
      <View
        style={{
          margin: 5,
          marginTop: 25,
          flex: 1,
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
        }}
      >
        <TouchableOpacity
          onPress={() => this.setItemAsActive(o)}
          style={[
            s.renderItem,
            this.state.activeId === _.get(o, 'item.id', false)
              ? { backgroundColor: 'black', borderRadius: 5, marginBottom: 0 }
              : { backgroundColor: 'black', marginBottom: 0 }
          ]}
        >
          <Text
            style={[
              s.name2,
              this.state.activeId === o.item.id
                ? {
                  flex: 1,
                  justifyContent: 'flex-start',
                  alignItems: 'flex-start',
                  fontFamily: 'PoiretOne-Regular',
                  fontSize: 23,
                  color: 'limegreen',
                  marginLeft: 20,
                  paddingLeft: 30,
                  }
                : {
                  flex: 1,
                  justifyContent: 'flex-start',
                  alignItems: 'flex-start',
                  fontFamily: 'PoiretOne-Regular',
                  fontSize: 23,
                  color: 'white',
                  marginLeft: 20,
                  paddingLeft: 30,
                  }
            ]}
          >
                  <AutoHeightImage
                  width={ Dimensions.get('window').width*0.060 }
                  source={ require('../assets/icons/footprint.png')}
                  />
            {o.item.name ? o.item.name : 'Unknown'}
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  clearList() {
    this.setState({ items: [] });
  }
  onEndReached(o) {
    console.log(' reached end: ', o);
  }

  onViewableItemsChanged = ({ viewableItems }) =>
    this.setState({ viewableItems });

  render() {

    const self = this;

    const query = this.state.dinosaurTyped;
    const dinosaurs = this.findDinosaur(query, false);
    const dinosaursAndDiets = this.buildDinosaurNameAndDietList(this.findDinosaur(query, true));
    const comp = (a, b) => a.toLowerCase().trim() === b.toLowerCase().trim();

    const ListEmptyComponent = () => (
      <View
        style={{
          flex: 1,
          height,
          width,
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <TouchableOpacity onPress={() => this.getFlatListItems()}>
          <Text
            style={{
              color: 'rgba(0,0,0,0.5)',
              fontSize: 20,
              textAlign: 'center',
              margin: 10
            }}
          >
            Nothing is Here!
          </Text>
          <Text
            style={{
              color: 'rgba(0,0,0,0.5)',
              fontSize: 15,
              textAlign: 'center'
            }}
          >
            Try Again?
          </Text>
        </TouchableOpacity>
      </View>
    );
    return (
       <View style={[s.container]}>
          <View style={s.innerContainer}>
            {!this.state.activeItem && (
              <View
                style={{
                  alignItems: 'center',
                  backgroundColor: 'black',
                  flex: 1,
                  flexDirection: 'column',
                  marginTop: 50,
                  marginLeft: 10,
                  marginRight: 10,
                  marginBottom: 0,
                }}
              >
              <TouchableHighlight
                onPress={() => {
                  this.props.returnToErasPage();
                }}>
                <Text
                  style={{
                    color: 'limegreen',
                    fontWeight: '600',
                    fontSize: 20,
                    fontFamily: 'PoiretOne-Regular',
                    textAlign: 'center',
                  }}
                >BACK{"\n"}
               </Text>
              </TouchableHighlight>
              <Text
                style={{
                  color: 'white',
                  fontWeight: '400',
                  fontSize: 20,
                  fontFamily: 'PoiretOne-Regular',
                  textAlign: 'center',
                }}
              >
               Scroll through the {this.props.eraName} dinosaurs & tap a name for more information
              </Text>
              <Image source={require('../assets/icons/downscroll.gif')} style={{height: 75, width: 100, marginTop: 2}}/>
            </View>
          )}


          {this.state.activeItem && (
            <View
              style={{
                alignItems: 'center',
                backgroundColor: 'black',
                flex: 1,
                flexDirection: 'column',
                marginTop: 50,
                marginLeft: 10,
                marginRight: 10,
                marginBottom: 0,
              }}
            >
            <TouchableHighlight
              onPress={() => {
                this.props.returnToErasPage();
              }}>
              <Text
                style={{
                  color: 'limegreen',
                  fontWeight: '600',
                  fontSize: 20,
                  fontFamily: 'PoiretOne-Regular',
                  textAlign: 'center',
                }}
              >BACK{"\n"}
             </Text>
            </TouchableHighlight>
            <Text
              style={{
                color: 'white',
                fontWeight: '400',
                fontSize: 20,
                fontFamily: 'PoiretOne-Regular',
                textAlign: 'center',
              }}
            >
             Scroll through the {this.props.eraName} dinosaurs & tap a name for more information
            </Text>
            <Image source={require('../assets/icons/downscroll.gif')} style={{height: 75, width: 100, marginTop: 2}}/>
          </View>
          )}

        </View>

        <View style={{ flex: 1, height: height, width, marginTop: 50}}>
          <FlatList
          style={{marginBottom: -(height*0.08)}}
            ListEmptyComponent={ListEmptyComponent}
            //  initialNumToRender={5}
            vertical
            ref={r => (this.refs = r)}
            getItemLayout={(data, index) => ({
              length: ITEM_HEIGHT,
              offset: ITEM_HEIGHT * index,
              index
            })}
            //onEndReached={this._onEndReached}
            onRefresh={o => alert('onRefresh:', o)}
            initialScrollIndex={0}
            refreshing={this.state.isLoading}
            onEndReached={o => this.onEndReached}
            keyExtractor={(o, i) => o.key.toString()}
            data={this.state.items}
            scrollRenderAheadDistance={width * 2}
            renderItem={this.renderItem}
            onViewableItemsChanged={this.onViewableItemsChanged}
          />

{/* PAGINATION 'DOTS' ACROSS BOTTOM/TO RIGHT OF DINO-LIST PAGE, */}
        {
          this.state.items ? (
          <Pagination
            vertical
            debugMode={true}
            listRef={this.refs} //to allow React Native Pagination to scroll to item when clicked  (so add "ref={r=>this.refs=r}" to your list
            /*
            startDotIconFamily="Ionicons"
            startDotIconName="md-arrow-round-down"
            startDotIconColor="black"
            startDotIconSize={25}

            endDotIconFamily="Ionicons"
            endDotIconName="md-arrow-round-up"
            endDotIconColor="black"
            endDotIconSize={25}

            dotIconNameActive={'checkbox-blank-circle'}
            dotIconColorActive={'black'}
            dotIconNameNotActive={'checkbox-blank-circle-outline'}
            dotIconColorNotActive={'black'}
            dotIconNameEmpty={'black'}
            dotTextHide={true}
            dotTextColor={'black'}
            dotIconSizeNotActive={15}
            dotIconSizeActive={15}
            dotIconSizeEmpty={15}
            */
            paginationVisibleItems={this.state.viewableItems} //needs to track what the user sees
            paginationItems={this.state.items} //pass the same list as data
            paginationItemPadSize={3}
          />
        ) : null
      }
        </View>

        {/* SEARCH BAR Section */}
              {/*<View style={{position: 'absolute', top: height*0.04, marginLeft: 15, marginRight: 15 }}>
              <Autocomplete
                autoCapitalize="none"
                autoCorrect={false}
                containerStyle={{width: Dimensions.get('window').width*0.71}}
                data={this.buildDinosaurNameList().length === 1 && comp(query, this.buildDinosaurNameList()[0]) ? [] : dinosaurs}
                defaultValue={query}
                inputContainerStyle={{flex: 1}}
                onChangeText={dinosaur => this.setState({ dinosaurTyped: dinosaur })}
                placeholder={this.searchBarPlaceholderText()}
                placeholderTextColor="white"
                placeholderTextFontFamily='PoiretOne-Regular'
                renderItem={({ dinosaur }) => (
                  <TouchableOpacity onPress={() => this.setState({ dinosaurTyped: `${dinosaur}` })}>
                  </TouchableOpacity>
                )}
              />

                {dinosaurs.length > 5 ? (
                  <View style={{backgroundColor: 'black', borderBottomWidth: 0.5, borderRightWidth: 0.5, borderLeftWidth: 0.5, borderColor: 'white', height: height*0.42, paddingLeft: 10}}>
                  <ScrollView style={{flex: 1, flexWrap: 'wrap'}}>
                  {this.renderMatches(dinosaurs, dinosaursAndDiets)}
                  </ScrollView>
                  </View>
                ) : (
                  <View style={{backgroundColor: 'black', borderBottomWidth: 0.5, borderRightWidth: 0.5, borderLeftWidth: 0.5, borderColor: 'white', paddingLeft: 10}}>
                  <ScrollView>
                  {this.renderMatches(dinosaurs, dinosaursAndDiets)}
                  </ScrollView>
                  </View>
                )}
            </View>*/}
        {/* End of SEARCH BAR Section */}


          {
            self.state.searchedDinosaurData ? (

          <View>
          <Modal
            animationType="slide"
            transparent={false}
            visible={this.state.dinosaurViewVisible}
            onRequestClose={() => {
              Alert.alert('Modal has been closed.');
            }}>
            <View>

          <LinearGradient
          colors={['black', 'black']}
          style={{ padding: 25, height: Dimensions.get('window').height }}>

            <View style={DinoListViewStyle.infoModal}>

                <ScrollView>

                {
                  self.state.searchDataLoading || !self.state.searchedDinosaurImage ? (
                    <View style={{height: Dimensions.get('window').height}}>
                      < BallIndicator count={7} size={80} color={'limegreen'} style={{backgroundColor: 'transparent'}} />
                    </View>
                ) :

                <View style={{alignItems: "center", marginBottom: 15}}>

                {this.state.newFavouriteAdded || this.state.clickedDinoAlreadyFavourite === true ? (

                <View style={{borderRadius: 25, justifyContent: 'center', flexDirection: 'row', backgroundColor: 'transparent', marginBottom: 10}}>
                <Text style={{paddingTop: 15, fontSize: 22, marginRight: 15, color: 'yellow', fontFamily: 'PoiretOne-Regular', padding: 10}}>Favourite</Text>
                <TouchableHighlight
                  onPress={() => {
                    this.addDinosaurToFavourites();
                    }}>
                      <Image source={require('../assets/icons/star.png')} style={{height: 30, width: 30, marginRight: 7, marginBottom: 10, marginTop: 10, position: 'relative'}}/>
                </TouchableHighlight>
                </View>
/* Results Modal, ADD TO FAVE's section */
              ) :
              <View style={{borderRadius: 25, justifyContent: 'center', flexDirection: 'row', backgroundColor: 'transparent', marginBottom: 10}}>
              <Text
                style={{
                  paddingTop: 15,
                  fontSize: 22,
                  marginRight: 15,
                  color: 'limegreen',
                  fontFamily: 'PoiretOne-Regular',
                  padding: 10,
                  paddingTop: 20 }}
                  >Add to Favourites
              </Text>
              <TouchableHighlight
                onPress={() => {
                  this.addDinosaurToFavourites();
                  }}>
                    <Image
                    source={require('../assets/icons/grey_star.png')} style={{
                      height: 30,
                      width: 30,
                      marginRight: 7,
                      marginBottom: 10,
                      marginTop: 10,
                      position: 'relative'
                  }}/>
              </TouchableHighlight>
              </View>
            }

                {

                  self.state.addressBookImage && self.state.addressBookImageWidth && self.state.addressBookImageHeight ? (

/* Results Modal, Dino image */
                <Image
                  style={{width: this.state.addressBookImageWidth, height: this.state.addressBookImageHeight}}
                  source={{uri: `${this.state.addressBookImage}`}}
                />

                ) : null
              }

                {
                  ImageFinder.getDietImage(this.state.searchedDinosaurData.diet) === require("../assets/icons/omnivore.png") ? (

/* Results Modal, Dino image */
                    <View style={DinoListViewStyle.modalHeader}>
                      <Text style={[DinoListViewStyle.infoModalHeader, {fontFamily: 'PoiretOne-Regular'}]}>{this.returnClickedDinosaur()}</Text>
                    </View>
                ) :

/* Results Modal, Dino name */
                <View style={DinoListViewStyle.modalHeader}>
                  <Text style={[DinoListViewStyle.infoModalHeader, {fontFamily: 'PoiretOne-Regular'}]}>Name: {this.returnClickedDinosaur()}
                  </Text>
                </View>
                }

/* Results Modal, Dino diet icon */
                <View style={DinoListViewStyle.modalHeader}>
                  <Text style={[DinoListViewStyle.modalDietIcon, {fontFamily: 'PoiretOne-Regular'}]}>Diet:  <Image source={ImageFinder.getDietImage(this.state.searchedDinosaurData.diet)} style={{ }}/>
                  </Text>

                </View>

{/* Results Modal, Fossil Map Link*/}
                <View style={DinoListViewStyle.modalHeader}>
                  <Text onPress={this.setFossilMapVisible} style={[DinoListViewStyle.modalMapLink, {fontFamily: 'PoiretOne-Regular'}]}>Fossil Map: 🌎<Image source={"./assets/icons/fossil.png"} style={{width: 30, height: 30 }}/>
                  </Text>
                </View>

                {
/* Results Modal, Dino Pronunciation & Meaning (text) */
              Pronunciations.getPronunciation(this.returnClickedDinosaur()) ? (

                <View style={DinoListViewStyle.modalHeader}>
                  <Text style={[DinoListViewStyle.modalPronunciation, {fontFamily: 'PoiretOne-Regular'}]}>Pronunciation: {Pronunciations.getPronunciation(this.returnClickedDinosaur())}
                  </Text>
                  <Text style={[DinoListViewStyle.modalPronunciation, {fontFamily: 'PoiretOne-Regular'}]}>Meaning: {Meanings.getNameMeaning(this.returnClickedDinosaur())}
                  </Text>
                </View>

              ) : null
              }

              {
/* Results Modal, Dino Length & Type (Text)*/
              Lengths.getLength(this.returnClickedDinosaur()) ? (

              <View style={DinoListViewStyle.modalHeader}>
                  <Text style={[DinoListViewStyle.modalLength, {fontFamily: 'PoiretOne-Regular'}]}>Length: {Lengths.getLength(this.returnClickedDinosaur())}
                  </Text>{"\n"}
                  <Text style={[DinoListViewStyle.modalLength, {fontFamily: 'PoiretOne-Regular'}]}>Type:
                  {Types.getType(this.returnClickedDinosaur())}
                  </Text>
              </View>



            ) : null

            }

            {
              ImageFinder.findSizeComparisonImage(this.returnClickedDinosaur()) ? (

/* Results Modal, Dino Length (Image/Graphic)*/
            <AutoHeightImage width={Dimensions.get('window').width*1.0} style={{marginTop:20}} source={ImageFinder.findSizeComparisonImage(this.returnClickedDinosaur())}/>

          ) : null

        }

        {this.state.searchedDinosaurData != null ? (

          <FossilMap mappedDinosaur={this.state.searchedDinosaurData} fossilMapVisible={this.state.fossilMapVisible} closeFossilMap={this.closeFossilMap} dinosaur={this.state.dinosaurClicked} />

        ) : null

      }

            {
              self.state.searchedDinosaurDescription ? (

/* Results Modal, Dino Description */
          <View style={DinoListViewStyle.modalHeader}>
            <Text style={[DinoListViewStyle.infoModalText, {fontFamily: 'PoiretOne-Regular'}]}>Description: {this.renderDescriptionElements(this.state.searchedDinosaurDescription)}
            </Text>
          </View>

              ) : null
            }

              </View>

            }

      <TouchableHighlight
          onPress={() => {
              this.closeDinosaurView();
              }}>
                <Image source={require('../assets/icons/back3.png')} style={{height: 25, width: 25, marginBottom: 10, marginLeft: '50%'}}/>
      </TouchableHighlight>
    </ScrollView>
  </View>
</LinearGradient>
</View>
</Modal>
</View>

        ) : null
      }

      </View>
    );
  }
}
const s = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1,
    backgroundColor: 'black',
    paddingTop: 0,
    paddingBottom:0,
    marginTop: 0,
    marginBottom: 0,
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',

  },
  innerContainer: {
    flex: 0.2,
    height: 20,
    paddingTop: 5,
    paddingBottom:5,
    marginTop: 5,
    marginBottom: 5,
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    // This is the grey background on top 1/2 of the screen
  },
});
