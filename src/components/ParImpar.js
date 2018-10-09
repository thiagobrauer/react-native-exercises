import React from 'react'
import { View, Text } from 'react-native'
import Padrao from '../styles/Padrao'
import If from './If'

function parOuImpar(num) {
    return num % 2 == 0
        ? <Text style={Padrao.ex}>Par</Text>
        : <Text style={Padrao.ex}>Impar</Text>
}

export default props =>
    <View>
        {/* <If test={props.numero % 2 == 0}>
            <Text style={Padrao.ex}>Par</Text>
        </If>
        <If test={props.numero % 2 == 1}>
            <Text style={Padrao.ex}>Impar</Text>
        </If> */}
        {/* {parOuImpar(props.numero)} */}
        {
            props.numero % 2 == 0
            ? <Text style={Padrao.ex}>Par</Text>
            : <Text style={Padrao.ex}>Impar</Text>
        }
    </View>