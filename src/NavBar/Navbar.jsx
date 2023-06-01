import './navbar.css';
import { Icon } from '@iconify/react';

export default function Navbar() {
  return (
    <nav>

        <div className='top-nav'>
            <div className='logo-txt'>Cart</div>
            <div className='nav-right'>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
                <div className='nav-cart'>
                    <Icon className='cart-logo' icon="teenyicons:cart-outline" />
                    <div className='cart-num'>0</div>
                </div>
            </div>
        </div>

        <div className='bottom-nav'>
            <div className='search-box'>
                <input type="search" />
                <Icon className='search-icon' icon="iconamoon:search-fill" />
            </div>
            <div className='search-num'>
                <Icon icon="gg:phone" />
                <div>+1 442-772-2342</div>
            </div>
            <div className='profile'>
                <Icon className='prof' icon="fluent-mdl2:contact" />
                <div className='prof'>Login</div>
            </div>
        </div>

    </nav>
  )
}
