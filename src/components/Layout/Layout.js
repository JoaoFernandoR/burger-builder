import React from 'react'
// Css
import './Layout.css'

const Layout = props => {

    const {children} = props
    
    return (
    <React.Fragment>
        <div>
            Toolbar, SideDrawer, Backdrop
        </div>
        <main>
            {children}
        </main>
    </React.Fragment>
    )
}

export default Layout