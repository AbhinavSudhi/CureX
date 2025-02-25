import React from 'react';
import {ImageBackground, StyleSheet,View} from "react-native";

function welcomeScreen(props) {
    return (
        <ImageBackground
            style={styles.background}
            source={require('../assets/favicon.png')}>
                <View style={{backgroundColor:'red',
                    height:100,
                    width:100,
                    justifyContent:'center',
                    alignItems:'center',
                }}>

                </View>
        </ImageBackground>
    );
}
const styles = StyleSheet.create({
    background:{
        flex:1
    }
})
export default welcomeScreen;