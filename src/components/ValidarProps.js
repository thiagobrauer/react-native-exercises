import React from 'react'
import PropTypes from 'prop-types'
import { Text } from 'react-native'

const ValidarProps = props => {
    return (
        <Text style={{ fontSize: 35 }} >
            {/* {props.label || 'Opa'} */}
            {props.label}
            {props.ano + 2000}
        </Text> 
    )
}

ValidarProps.defaultProps = {
    label: 'Ano: '
}

ValidarProps.propTypes = {
    ano: PropTypes.number.isRequired
}

export default ValidarProps