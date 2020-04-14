
import React,{Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  Platform,  
} from 'react-native';
import Home from './src/screens/containers/home';
import Header from './src/sections/components/header';
import SuggestionList from './src/videos/containers/suggestion-list';
import API from './utils/api';
import CategoryList from './src/videos/containers/category-list.js';
class App extends Component{
  state ={
    suggestionList:[],
    categoryList:[]
  }
  async componentDidMount(){
    const movies = await API.getSuggestion(10);
    const categories = await API.getMovies();
    console.log(categories)
    this.setState({
      suggestionList :movies,
      categoryList : categories,
    })
  }
  render(){
  return (
    <Home>
      <Header>
        <Text>Hola q ase</Text>
      </Header> 
      <Text>Buscador</Text>
      <Text>Categorias</Text>
      <CategoryList 
      list={this.state.categoryList}
      />
      <SuggestionList 
      list={this.state.suggestionList}
      />
    </Home>
   );
  }
}



export default App;
