import React from 'react';
import { 
    View,
    StyleSheet,
    TouchableHighlight,
 } from 'react-native';
 
 import Icon from 'react-native-elements';

 function FullScreen (props){
     return(
         <View>
             <TouchableHighlight
             onPress={props.onPress}
             style={styles.container}
             underlayColor='#25E030'
             >
                {
                    props.fullScreen ? 
                     <Icon name="compress" color="white" size={20}/> 
                     : <Icon name="md-expand" size={20} color="white" /> 
                }
             </TouchableHighlight>
         </View>
     )
 }

const styles = StyleSheet.create({
    container:{
        justifyContent: 'center',
        paddingHorizontal: 10,
        height: 25,
        marginRight: 10,
        marginVertical: 5,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: 'white',
        backgroundColor: 'green'
    }
})
 export default FullScreen;