import React from 'react';
import { NavLink } from 'react-router-dom';

class NavBar extends React.Component {

  render() {
    const { navTitles, page } = this.props;
    return(
      <div className="navbar">
        <ul>
          {
            navTitles.map((title, idx) => (
              <li key={idx}>
                <NavLink
                  to ={`/${page}/${title.toLowerCase().replace(/ /g,"_")}`}>
                  {title}
                </NavLink>
              </li>
            ))
          }
        </ul>
      </div>
    );
  }
}

export default NavBar;
