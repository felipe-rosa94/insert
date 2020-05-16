import React from 'react'
import { withRouter } from 'react-router-dom'
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core'
import { HomeRounded as HomeRoundedIcon, ContactlessRounded as ContactlessRoundedIcon, ImportContactsRounded as ImportContactsRoundedIcon } from '@material-ui/icons'
import '../styles/menuInferior.css'

class MenuInferior extends React.Component {

    handleChange = (event, index) => {
        let pagina = this.props.history
        switch (index) {
            case 0:
                pagina.push('/')
                break
            case 1:
                pagina.push('/podcasts')
                break
            case 2:
                pagina.push('/devocionais')
                break
            default:
                break
        }
    }

    render() {
        let { pagina } = this.props
        return (
            <div>
                <BottomNavigation id="menu-footer" showLabels={true} onChange={this.handleChange}>
                    <BottomNavigationAction
                        label="Home" style={pagina === 'home' ? { color: '#fd9718' } : { color: 'white' }}
                        icon={<HomeRoundedIcon id="icons" style={pagina === 'home' ? { color: '#fd9718' } : { color: 'white' }} />} />
                    <BottomNavigationAction
                        label="Podcasts"
                        style={pagina === 'podcasts' ? { color: '#82af69' } : { color: 'white' }}
                        icon={<ContactlessRoundedIcon id="icons" style={pagina === 'podcasts' ? { color: '#82af69' } : { color: 'white' }} />} />
                    <BottomNavigationAction
                        label="Devocionais"
                        style={pagina === 'devocionais' ? { color: '#009688' } : { color: 'white' }}
                        icon={<ImportContactsRoundedIcon id="icons" style={pagina === 'devocionais' ? { color: '#009688' } : { color: 'white' }} />} />
                </BottomNavigation>
            </div>
        )
    }
}

export default withRouter(MenuInferior)