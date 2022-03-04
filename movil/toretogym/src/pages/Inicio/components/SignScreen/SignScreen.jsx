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
        padding: 1,
    },
    logo: {
        width: '100%',
        maxWidth: 450,
        marginTop: 35,
        height: 600,
    }
});

export default SignScreen;