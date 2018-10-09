import React from 'react'
import { View, Text } from 'react-native'

const fonte = { style: { fontSize: 30 } }

export const Filho = props => 
    <View>
        <Text {...fonte}>Filho: {props.nome} {props.sobrenome}</Text>
    </View>

function filhosComProps(props) {
    return React.Children.map(props.children,
        c => React.cloneElement(c, { ...props, ...c.props }))
}

export const Pai = props => 
    <View>
        <Text {...fonte}>Pai: {props.nome} {props.sobrenome}</Text>
        {/* {props.children} */}
        {filhosComProps(props)}
    </View>


export const Avo = props => 
    <View>
        <Text {...fonte}>Avô: {props.nome} {props.sobrenome}</Text>
        <Pai nome='André' sobrenome={props.sobrenome}>
            <Filho nome='Ana'></Filho>
            <Filho nome='Gui'></Filho>
            <Filho nome='Davi'></Filho>
        </Pai>
        <Pai {...props} nome='Pedro'>
            <Filho nome='Rebeca'></Filho>
            <Filho nome='Renato'></Filho>
        </Pai>
    </View>
