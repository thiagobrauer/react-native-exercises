import React from 'react'
import { Text } from 'react-native'
import Padrao from '../styles/Padrao'

export default props => <Text style={[Padrao.ex]}>Arrow: {props.texto}</Text>;

// export default props => [
//     <Text key={1}>Arrow: {props.texto}</Text>,
//     <Text key={2}>Arrow: {props.texto}</Text>
// ]
    
// export default function (props) {
//     return <Text>{props.texto}</Text>
// }