import React, {Component} from 'react';
import{
    FlatList,
    Text
} from 'react-native';
import Layout from '../components/suggestioni-list-layout';
import Empty from '../components/empty';
import Separator from '../components/verticalSeparator';
import Suggestion from '../components/suggestion';

class SuggestionList extends Component{
    renderEmpty = () => <Empty text="No hay sugerencias :(  "/>
    itemSeparator = () => <Separator color='red' />
    renderItem = ({item}) =>{
        return(
            <Suggestion {...item}/>
        )
    }
    render(){
        const list = [
            {
                title:'Avengers',
                key:'1',
            },
            {
                title: 'Pokemon',
                key:'2',
            }
        ]
        return(       
            <Layout
                title ="Recomendado para ti"
                
            >
            <FlatList 
                data ={list}
                ListEmptyComponent = {this.renderEmpty}
                ItemSeparatorComponent={this.itemSeparator}
                renderItem={this.renderItem}
            />
            </Layout>     
        )
    }
}

export default SuggestionList;