import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => (
        <View style={styles.containerStyle}>
            {props.children}
        </View>
    );

const styles = {
    containerStyle: {
        borderBottomWidth: 1,
        padding: 5,
        backgroundColor: 'bisque',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        borderColor: 'white',
        position: 'relative'
    }
};

export default CardSection;
