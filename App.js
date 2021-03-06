import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';

export default function App() {
    return ( 
    <View style={styles.container} >
        <Header headerText={'Albums!'} />
        <AlbumList />          
        <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
container: {
    flex: 1,
    backgroundColor: 'pink',
},
});
