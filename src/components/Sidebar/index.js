import React,{ useContext } from 'react'
import Sidebar from './Sidebar';
import Search from '../Search';
import NotePreviewList from '../NotePreviewList';
import { AppContext } from '../../contexts/AppContext';


export default function() {

    const { state } = useContext(AppContext);

    return (
        <Sidebar navbarOpen={state.navbarOpen}>
           <Search/>
           <NotePreviewList/>
        </Sidebar>
    )
}
