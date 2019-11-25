import React from "react"
import {Link} from 'gatsby';

const Header = ({showBackButton}) => (
    <header className="page-heading-section">
        <h2 className="page-heading">Articles by Mofope Ojosh</h2>
        <p className="page-subheading">Experience. Insight. Discovery. Playground.</p>
        <br/>
        <small className="socials">
            Twitter | Medium | Github | LinkedIn
        </small>
        { showBackButton ?
        <div>
            <br/>
            <Link to="/" style={{textDecoration: 'none'}}>&larr; Back Home</Link>
        </div> : '' }
    </header>
)


export default Header
