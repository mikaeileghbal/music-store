import React, { useState } from "react";

import "./Pager.scss";

export default function Pager({ pageCount }) {
  const [page, setPage] = useState(1);
  const pages = new Array(pageCount).fill(0);

  for (let i = 0; i < pages.length; i++) {
    pages[i] = i + 1;
  }

  const handlePrevious = () => {
    if (page > 1) setPage((page) => page - 1);
  };

  const handleNext = () => {
    if (page < pageCount) setPage((page) => page + 1);
  };

  return (
    <div>
      <PagerStatus page={page} pageCount={pageCount} />
      <PagerPages page={page} pages={pages} />
      <PagerButtons
        handleNext={handleNext}
        handlePrevious={handlePrevious}
        page={page}
        pageCount={pageCount}
      />
    </div>
  );
}

function PagerStatus({ page, pageCount }) {
  return (
    <div>
      {page} of {pageCount}
    </div>
  );
}

function PagerPages({ page, pages }) {
  return (
    <div>
      {pages.map((item) => (
        <Page key={item} current={item === page}>
          {item}
        </Page>
      ))}
    </div>
  );
}

function PagerButtons({ handleNext, handlePrevious, page, pageCount }) {
  return (
    <div>
      <button
        className="button"
        disabled={page === 1}
        type="button"
        onClick={handlePrevious}
      >
        Previous
      </button>
      <button
        className="button"
        disabled={page === pageCount}
        type="button"
        onClick={handleNext}
      >
        Next
      </button>
    </div>
  );
}

function Page({ children, current }) {
  const getCurrentPageClass = (current) => {
    return current ? "page current-page" : "page";
  };
  return <span className={getCurrentPageClass(current)}>{children}</span>;
}
