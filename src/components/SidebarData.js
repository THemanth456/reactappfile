import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
//import * as  IoIosIcons from "react-icons/ioios"

export const SidebarData = [
    {
        title : 'Segments', 
        path: '/', 
        icon: <AiIcons.AiFillHome/>,
        cName:'nav-text'
    },
    {
        title : 'Create Segment', 
        path: '/reports', 
        icon: <IoIcons.IoIosCreate/>,
        cName:'nav-text'
    },
    {
        title : 'Segments Info', 
        path: '/products', 
        icon: <FaIcons.FaCartPlus/>,
        cName:'nav-text'
    },
    {
        title : 'Scheduled List', 
        path: '/team', 
        icon: <IoIcons.IoMdPeople/>,
        cName:'nav-text'
    },
    {
        title : 'Weekly Segment Info', 
        path: '/messages', 
        icon: <FaIcons.FaEnvelopeOpenText/>,
        cName:'nav-text'
    },
    {
        title : 'Segment Progress Info', 
        path: '/support', 
        icon: <IoIcons.IoMdHelpCircle/>,
        cName:'nav-text'
    }
]