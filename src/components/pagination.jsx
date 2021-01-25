import React, { Component,useContext } from 'react';
import {pageArrayData,setCPData} from './todoForm';

function Pagination( {CurrentPage}) {
    const pageArray = useContext( pageArrayData)
    const setCP = useContext( setCPData)

    return (<div>
      <nav className="todonav">
        <ul className="pagination page-todo">
          { pageArray.map((page, index) => (
            <li key={ index } className={ page === CurrentPage ? "page-item active" : "page-item" }>
              <button className="page-link" onClick={ () => setCP(page) }>
                { page }
              </button>
            </li>
          )) }
        </ul>
      </nav>
    </div>);
  }

  export default Pagination