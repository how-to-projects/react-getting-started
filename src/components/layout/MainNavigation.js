import { useContext } from 'react';
import { Link } from 'react-router-dom';
import FavoritesContext from '../../store/favorites-context';

/**
 * 'classes' is a Javascript object, where all the CSS 
 * classes will be properties of this object
 * 
 * behind the scenes naming will be relevant to this component only - shadow
 * */
import classes from './MainNavigation.module.css';

function MainNavigation() {

    const favoritesCtx = useContext(FavoritesContext);

    return (
        <header className={ classes.header }>
            <div className={ classes.logo }>React Meetups</div>
            <nav>
                <ul>
                    <li>
                        <Link to='/'>All Meetups</Link>
                        <Link to='/new-meetup'>New Meetup</Link>
                        <Link to='/favorites'>
                            Favorites
                            <span className= { classes.badge }>{ favoritesCtx.totalFavorites }</span>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default MainNavigation;