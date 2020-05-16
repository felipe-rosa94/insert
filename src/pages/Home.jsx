import React from 'react'
import { withRouter } from 'react-router-dom'
import Toolbar from '../components/Toolbar'
import ListaPodcasts from '../components/ListaPodcasts'
import ListaDevocionais from '../components/ListaDevocionais'
import Notificacoes from '../components/Notificacoes'
import MenuInferior from '../components/MenuInferior'
import { FormLabel } from '@material-ui/core'
import { isSafari } from "react-device-detect"
import '../styles/home.css'

class Home extends React.Component {
    render() {
        return (
            <div id="home">
                <Toolbar buttonBack={false} />
                <div id="div-home">
                    <FormLabel id="titulo-home">Podcasts</FormLabel>
                    <ListaPodcasts home={true} />
                </div>
                <div id="div-home">
                    <FormLabel id="titulo-home">Devocionais</FormLabel>
                    <ListaDevocionais home={true} />
                </div>
                {
                    !isSafari &&
                    <Notificacoes />
                }
                <MenuInferior pagina="home" />
            </div>
        )
    }
}

export default withRouter(Home)