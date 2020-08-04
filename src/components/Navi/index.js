import React,{ useContext } from 'react'
import Nav from './Nav'
import Navlinks from './Navlinks'
import Icon from '../shared/Icon';
import iconDir from '../icon.svg';
import { Link } from 'react-router-dom';
import Taglist from '../Taglist';
import { AppContext } from '../../contexts/AppContext';
import { ThemeContext } from '../../contexts/ThemeContext';

export default function () {
    const { state } = useContext(AppContext);
    const { darkMode } = useContext(ThemeContext);
    return (
        <Nav open={state.navbarOpen} darkMode={darkMode}>
            <div className="">
                <Link to='/'>
                    <Navlinks>
                        <Icon>
                            <use href={iconDir + '#icon-note'}></use>
                        </Icon>
    
                        All Notes
                    </Navlinks>
                </Link>
                <Link to='/trash'>
                    <Navlinks>
                        <Icon>
                            <use href={iconDir + '#icon-delete1'}></use>
                        </Icon>
    
                        Trash
                    </Navlinks>
                </Link>
            </div>

            <Taglist/>
        </Nav>
    )
}
