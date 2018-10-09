import React from 'react'
import { createDrawerNavigator } from 'react-navigation'

import Simples from './components/Simples'
import ParImpar from './components/ParImpar'
import { Inverter, MegaSena } from './components/Multi'
import Contador from './components/Contador'
import Plataformas from './components/Plataformas'
import ValidarProps from './components/ValidarProps'
import Evento from './components/Evento'
import { Avo } from './components/ComunicacaoDireta'
import TextoSincronizado from './components/ComunicacaoIndireta'
import ListaFlex from './components/ListaFlex'
import Flex from './components/Flex'

export default createDrawerNavigator({
    Flex: {
        screen: () => <Flex />
    },
    ListaFlex: {
        screen: () => <ListaFlex />
    },
    TextoSincronizado: { 
        screen: () => <TextoSincronizado />
    },
    Avo: { 
        screen: () => <Avo nome='João' sobrenome='Silva'/>
    },
    Evento: { 
        screen: () => <Evento />
    },
    ValidarProps: {
        screen: () => <ValidarProps label={'Teste: '} ano={18}></ValidarProps>
    },
    Plataformas: {
        screen: () => <Plataformas></Plataformas>
    },
    Contador: {
        screen: () => <Contador numeroInicial={100}></Contador>
    },
    MegaSena: {
        screen: () => <MegaSena numeros={8}></MegaSena>
    },
    Inverter: {
        screen: () => <Inverter texto='React Nativo!'></Inverter>
    },
    ParImpar: {
        screen: () => <ParImpar numero={30}></ParImpar>,
        navigationOptions: { title: 'Par & Impar' }
    },
    Simples: {
        screen: () => <Simples texto='Flexível!!'></Simples>
        // screen: () => Simples
    }
})