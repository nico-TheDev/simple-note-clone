import React,{ useContext } from 'react'
import Sidebar from './Sidebar';
import Search from '../Search';
import NotePreviewList from '../NotePreviewList';

export default function() {


    return (
        <Sidebar>
           <Search/>
           <NotePreviewList/>
        </Sidebar>
    )
}
