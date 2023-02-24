import React, { useState } from 'react';
import './pagination.css';

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];
  const [currentPage, setCurrentPage] = useState(0);

  const int = Math.ceil(totalPosts / postsPerPage)
  if (int === 1 ) return null 
  for (let i = 1; i<= int; i++) {
    pageNumbers.push(i) 
  }

  return (
    <nav style={{backgroundColor:'white', width: '100%'}}>
      <ul className='pagination'>
        {pageNumbers.includes(currentPage - 1) && 
          <button className="prev page-link" onClick={() => {
             setCurrentPage(currentPage - 1);
             paginate(currentPage - 1); }}
          >
          Previous
          </button>
        }  
        {pageNumbers.map(number => (
          <li key={number} className='page-item'>
            <a onClick={() => { paginate(number); setCurrentPage(number)}} className='page-link'>
              {number}
            </a>
          </li>
        ))}
        {pageNumbers.includes(currentPage + 1) &&
          <button className="prev page-link" onClick={() => {
                    setCurrentPage(currentPage + 1);
                    paginate(currentPage + 1);
                }}> Next </button>}
      </ul>
    </nav>
  );
};

export default Pagination;