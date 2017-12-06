import React, { Component } from 'react';
import { View, Image } from 'react-native';

const logo = require('../../imgs/jokenpo.png');

class Topo extends Component {
    render() {
        return (
            <View >
                <Image source={logo} />
            </View>
        );
    }
}

export default Topo;
