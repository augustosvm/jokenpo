import React, { Component } from 'react';
import { Text, View, StyleSheet, AppRegistry, Button } from 'react-native';
import Topo from './src/components/topo';
import Icone from './src/components/icone';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = { escolhaUsuario: '', escolhaComputador: '', resultado: '' };
    }

    jokenpo(escolhaUsuario) {
        const numAleatorio = Math.floor(Math.random() * 3);

        let escolhaComputador = '';

        switch (numAleatorio) {

            case 0 : escolhaComputador = 'pedra';
            break;

            case 1 : escolhaComputador = 'papel';
            break;

            case 2 : escolhaComputador = 'tesoura';
            break;

            default: escolhaComputador = '';
            break;
        }

        let resultado = '';

        if (escolhaUsuario === escolhaComputador) {
            resultado = 'Empate';
        }
        if (escolhaUsuario === 'pedra' && escolhaComputador === 'tesoura') {
            resultado = 'Você ganhou';
        } else if (escolhaUsuario === 'pedra' && escolhaComputador === 'papel') {
            resultado = 'Você perdeu';
        }

        if (escolhaUsuario === 'papel' && escolhaComputador === 'pedra') {
            resultado = 'Você ganhou';
        } else if (escolhaUsuario === 'papel' && escolhaComputador === 'tesoura') {
            resultado = 'Você perdeu';
        }

        if (escolhaUsuario === 'tesoura' && escolhaComputador === 'papel') {
            resultado = 'Você ganhou';
        } else if (escolhaUsuario === 'tesoura' && escolhaComputador === 'pedra') {
            resultado = 'Você perdeu';
        }

        this.setState({ escolhaUsuario, escolhaComputador, resultado });
    }

    render() {
        return (
            <View >
                <Topo />
                <View style={styles.painelAcoes}>
                    <View style={styles.btnEscolha}>
                        <Button title={'Pedra'} onPress={() => { this.jokenpo('pedra'); }} />
                    </View>
                    <View style={styles.btnEscolha}>
                        <Button title={'Papel'} onPress={() => { this.jokenpo('papel'); }} />
                    </View>
                    <View style={styles.btnEscolha}>
                        <Button title={'Tesoura'} onPress={() => { this.jokenpo('tesoura'); }} />
                    </View>
                </View>
                <View style={styles.palco}>
                    <Text style={styles.txtResultado}>{this.state.resultado}</Text>
                    <Icone escolha={this.state.escolhaUsuario} jogador='Você' />
                    <Icone escolha={this.state.escolhaComputador} jogador='Computador' />
                </View>
            </View>
        );
    }
}


const styles = StyleSheet.create({

    btnEscolha: {
        width: 90
    },
    painelAcoes: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 10
    },
    palco: {
        marginTop: 10,
        alignItems: 'center'
    },
    txtResultado: {
        fontSize: 25,
        fontWeight: 'bold',
        color: 'red',
        height: 60
    },
});

AppRegistry.registerComponent('teste', () => App);
