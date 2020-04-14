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
    keyExtractor = item =>item.id.toString()
    renderEmpty = () => <Empty text="No hay sugerencias :(  "/>
    itemSeparator = () => <Separator color='red' />
    renderItem = ({item}) =>{
        return(
            <Suggestion {...item}/>
        )
    }
    render(){

        return(       
            <Layout
                title ="Recomendado para ti"
                
            >
            <FlatList 
                keyExtractor={this.keyExtractor}
                data ={this.props.list}
                ListEmptyComponent = {this.renderEmpty}
                ItemSeparatorComponent={this.itemSeparator}
                renderItem={this.renderItem}
            />
            </Layout>     
        )
    }
}

export default SuggestionList;