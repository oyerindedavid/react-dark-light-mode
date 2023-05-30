import './Navbar.css';
import logo from '../../../src/logo.svg'

export default function Navbar(props){
    return (
        <nav className='navbar'>
            <div className='logo-info'>
                <img width="60px" className='logo' src={logo} alt="logo" />
                <span>ReactFacts</span>
            </div>
            <div className='mode-wrapper'>
                {props.theme.backgroundColor === "white" ? <b>Light</b> : "Light"} 
                <span onClick={props.switchTheme} className='screen-mode'>
                    {props.theme.color === "white" 
                    ? <i className="fa fa-toggle-on"></i> 
                    : <i className="fa fa-toggle-off"></i>}
                </span>
                {props.theme.backgroundColor === "black" ? <b>Dark</b> : "Dark"} 
            </div>

        </nav>
    )
}