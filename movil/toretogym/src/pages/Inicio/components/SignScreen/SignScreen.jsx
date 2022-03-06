import React from "react";
import { View, Image, StyleSheet } from 'react-native';
import Logo from '../../../../assets/images/toretoGYM.png';

const SignScreen = () => {
    return (
        <View style={styles.root}>
            <Image source={Logo} style={styles.logo}  />
        </View>
    )
};

const styles = StyleSheet.create({
    root :{
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        width: '100%',
        maxWidth: 450,
        height: 500,
        marginTop: 50,
    }
});

export default SignScreen;