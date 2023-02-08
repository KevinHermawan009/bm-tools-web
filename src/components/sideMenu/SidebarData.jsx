import React from 'react'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import * as IoIcons from 'react-icons/io'
import * as RiIcons from 'react-icons/ri'
import Dummy from '../../views/Dummy'

export const SidebarData = [
    {
        title: 'Overview',
        path: '/Sidebar/Dashboard',
        icon: <AiIcons.AiFillHome/>,
        iconOpened: <RiIcons.RiArrowUpFill/>,
        iconClosed: <RiIcons.RiArrowDownFill/>,
        subNav: [
            {
                title: 'Dummy',
                path: '/Sidebar/Dashboard/Dummy',
                icon: <IoIcons.IoIosPaper/>,
            },
            {
                title: 'DummyShit',
                path: '/Sidebar/Dashboard/DummyShit',
                icon: <IoIcons.IoIosPaper/>
            }
        ]
    },
    {
        title: 'Items',
        path: '/items',
        icon: <AiIcons.AiFillHome/>,
        iconOpened: <RiIcons.RiArrowUpFill/>,
        iconClosed: <RiIcons.RiArrowDownFill/>,
        subNav: [
            {
                title: 'Reports',
                path: '/reports/reports1',
                icon: <IoIcons.IoIosPaper/>
            },
            {
                title: 'Reports 2',
                path: '/overview/reports 2',
                icon: <IoIcons.IoIosPaper/>
            }
        ]

    }
]