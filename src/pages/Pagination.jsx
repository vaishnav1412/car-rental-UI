import React from "react";

const Paginationn = ({ itemsPerPage, totalpages, paginate, currentpage }) => {
  let pages = [];

  for (let i = 1; i <= Math.ceil(totalpages / itemsPerPage); i++) {
    pages.push(i);
  }

  const next = () => {
    if (currentpage === pages.length) return;
    paginate(currentpage + 1);
  };

  const prev = () => {
    if (currentpage === 1) return;
    paginate(currentpage - 1);
  };

  return (
    <div className="pagination">
        <div>
      <button onClick={prev} disabled={currentpage === 1} className="paginationButton">
        back
      </button>
      {pages.map((pageNumber, index) => {
        return (
          <button
            key={index}
            className={currentpage === pageNumber ? "filled" : "text"}
            onClick={() => paginate(pageNumber)}
            style={{ margin: '0 6px' }}
            id="pages"
          >
            {pageNumber}
          </button>
        );
      })}
      <button onClick={next} disabled={currentpage === pages.length} className="paginationButton">
        next
      </button>
    </div>
    </div>
  );
};

export default Paginationn;
