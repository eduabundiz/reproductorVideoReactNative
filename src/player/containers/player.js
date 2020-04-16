import React,{Component} from 'react';

import Video from'react-native-video';
import {View,
    StyleSheet,
    ActivityIndicator,
    Text

} from 'react-native';
import Layout from '../components/layout';
import ControlLayout from '../components/control-layout'
import PlayPause from '../components/play-pause'
import ProgressBar from '../components/progressbar'
class Player extends Component{
    
    state ={
        loading:true,
        paused:false,
        progress: 0.0,
        duration: 0.00,
        currentTime: 0.00,   
    }
    onBuffer =(isBuffering) =>{
        this.setState({
            loading:isBuffering
        })
    }
    onLoad = () =>{
        this.setState({
            loading:false
        })
    }
    playPause =() =>{
        this.setState({
            paused : !this.state.paused
        })
    }
    onProgress = (playload) => {
        let currentTime = playload.currentTime / 60; //tiempo transcurrido en minutos
        let minutes = Math.floor(currentTime); //tiempo transcurrido sin decimales
        let seconds = currentTime % 1;
        seconds = (seconds * 60) / 1000;
        let time = (minutes + seconds * 10).toFixed(2); //toFixed(2) 2 decimales
        let duration = (playload.seekableDuration / 60).toFixed(2)//seekableDuration: duracion de todo el video
        this.setState({
            currentTime: time,
            progress: (playload.currentTime / playload.seekableDuration),
            duration: duration
    
        })        
      }
    render(){
        return(
        <Layout
        loading ={this.state.loading}
            video = {
                <Video 
                source ={{uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4'}}                
                style={styles.video }
                resizeMode="contain"
                onBuffer={this.onBuffer}
                onLoad ={this.onLoad}
                paused={this.state.paused}
                onProgress={this.onProgress}
                />
            }
            
            loader={
             <ActivityIndicator color="red"/>       
            }
            controls={
                <ControlLayout>
                    <PlayPause 
                    onPress={this.playPause}
                    paused={this.state.paused}
                    />
                    <ProgressBar
                        progress={this.state.progress}
                    />
                    <Text>time left</Text>
                    <Text>Fullscreen</Text>
                    
                </ControlLayout>
            }
        >
                      
        </Layout>
        )
    }
}
const styles = StyleSheet.create({
    video:{
        position:'absolute',
        left:0,
        right:0,
        bottom:0,
        top:0,
      }
})
export default Player;