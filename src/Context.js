import React from 'react'

const Context = React.createContext({
    closeModal: () => {},
    showModal: () => {},
    showDemo: ''
})

export default Context