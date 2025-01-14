import React, { useState } from 'react';

function Navbar({ onSearch }) {
  const [query, setQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(query); // Pass the search query to the parent
  };

  return (
    <>
      <div className="my">
        <nav
          className="navbar navbar-expand-lg fixed-top p-3"
          style={{ backgroundColor: '#eaf4f4', padding: '10px 20px' }}
        >
          <a
            className="navbar-brand"
            href="#"
            style={{ color: '#2b2b2b', fontWeight: 'bold' }}
          >
            Navbar
          </a>
          <div className="collapse navbar-collapse justify-content-center">
            <form
              className="d-flex"
              style={{ width: '50%' }}
              onSubmit={handleSearch}
            >
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                style={{ borderRadius: '20px', border: '1px solid #b5cda3' }}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              <button
                className="btn"
                type="submit"
                style={{
                  backgroundColor: '#d3e4cd',
                  color: '#2b2b2b',
                  border: 'none',
                  borderRadius: '20px',
                  padding: '8px 20px',
                  fontSize: '14px',
                }}
              >
                Search
              </button>
            </form>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
