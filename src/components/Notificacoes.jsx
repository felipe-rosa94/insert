import React from 'react'
import { Button, Dialog, DialogContent, DialogActions, DialogTitle, DialogContentText } from '@material-ui/core/'
import firebase from '../firebase'
import usuario from '../usuario.json'

class Notificacoes extends React.Component {

    state = {
        open: false
    }

    onClick = () => {
        this.setState({ open: false })
        this.permissao()
    }

    closeDialog = () => {
        localStorage.setItem('insert:token', 1)
        this.setState({ open: false })
    }

    permissao = async () => {
        try {
            const messaging = firebase.messaging()
            await messaging.requestPermission()
            const token = await messaging.getToken()
            this.token(token)
            return token
        } catch (error) {
            console.error(error);
        }
    }

    token = (token) => {
        let tokenOld = localStorage.getItem('insert:token')
        if (token !== tokenOld) {
            let key = this.key()
            let json = {
                key: key,
                token: token
            }
            localStorage.setItem('insert:token', token)
            firebase.database().ref('tokens/' + key).set(json)
        }
    }

    key = () => {
        var hora = new Date()
        return hora.getTime()
    }

    autenticacao = () => {
        firebase.auth().signInWithEmailAndPassword(usuario.email, usuario.senha)
    }

    verificaToken = () => {
        let token = localStorage.getItem(`insert:token`)
        if (token === null || token === 'novamente') {
            this.setState({ open: true })
        } else {
            token = parseInt(localStorage.getItem(`insert:token`))
            if (Number.isInteger(token)) {
                if (--token <= 0) {
                    localStorage.setItem(`insert:token`, 'novamente')
                    return
                } else {
                    localStorage.setItem('insert:token', token)
                }
            }
        }
    }

    componentDidMount() {
        this.autenticacao()
        this.verificaToken()
    }

    render() {
        const { open } = this.state
        return (
            <div>
                <Dialog open={open} onClose={this.closeDialog} aria-labelledby="form-dialog-title">
                    <DialogContent>
                        <DialogTitle>Notificações</DialogTitle>
                        <DialogContentText>Ative as notificações para saber cada novidade, prometemos não ficar sendo chatões.</DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.closeDialog} color="primary">Não</Button>
                        <Button onClick={this.onClick} color="primary">Sim</Button>
                    </DialogActions>
                </Dialog>
            </div>
        )
    }
}

export default Notificacoes