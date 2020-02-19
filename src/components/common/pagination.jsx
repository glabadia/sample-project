import React from "react";
import _ from "lodash";
import GotoPage from "./gotoPage";

//
//  pagination width = 7
// paginationLength > 7 -> get currentPage, calculate the previous and nextpages, and the first and last page
// if paginationlength (4) - paginationlength < 0, []
// if firstpage (1) [1,2,3,4,5,ellipsis,last page]
// if lastpage(n) [1,ellipsis,n-4,n-3,n-2,n-1,n]
// if middle (n/2) [1,ellipsis,n/2  -1,n/2,n/2  +1,ellipsis,n]
// 3 => Math.floor(paginationWidth/2)
// if currentPage - firstPage > 3 = [1,ellipsis,], else [1,2,3,4,5,ellipsis,last]
// if 5 => [1,ellipsis,4,5,6,ellipsis,last]

// if lastPage - currentPage < 3

const Pagination = ({ itemsCount, pageSize, onPageChange, currentPage }) => {
  const pageItemClassName = page =>
    currentPage === page ? "page-item active" : "page-item";

  const pagesCount = Math.ceil(itemsCount / pageSize);

  const shortenedPagination = (pages, currentPage, paginationWidth) => {
    const firstPage = pages[0];
    const lastPage = pages[pages.length - 1];
    const midPoint = Math.floor(paginationWidth / 2);
    const left = "<<";
    const right = ">>";

    let shortenedPage = [];

    if (pages.length <= paginationWidth) {
      shortenedPage = pages;
    } else if (
      currentPage - firstPage > midPoint &&
      lastPage - currentPage > midPoint
    ) {
      shortenedPage = [
        firstPage,
        left,
        ..._.range(currentPage - 1, currentPage + 2),
        right,
        lastPage
      ];
    } else if (currentPage - firstPage <= midPoint) {
      shortenedPage = [
        ..._.range(firstPage, paginationWidth - 1),
        right,
        lastPage
      ];
    } else if (lastPage - currentPage <= midPoint) {
      shortenedPage = [firstPage, left, ..._.range(lastPage - 5, lastPage + 1)];
    }
    return shortenedPage;
  };

  if (pagesCount === 1) return null;

  // const pages = _.range(1, pagesCount + 1);
  const pages = shortenedPagination(_.range(1, pagesCount + 1), currentPage, 7);

  // if pages.length > 7

  return (
    <React.Fragment>
      <nav>
        <ul className="pagination pagination-sm">
          {pages.map(page => (
            <li key={page} className={pageItemClassName(page)}>
              <a onClick={() => onPageChange(page)} className="page-link">
                {page}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <GotoPage></GotoPage>
    </React.Fragment>
  );
};

export default Pagination;
