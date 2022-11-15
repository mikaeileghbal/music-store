import React, { useState } from "react";
import "./Pager.scss";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

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

  const handleSelectPage = (index) => {
    console.log(index);
    setPage(index);
  };

  return (
    <div className="page__container">
      <div className="page__controls">
        <button
          className="page__button previous"
          disabled={page === 1}
          type="button"
          onClick={handlePrevious}
        >
          <MdKeyboardArrowLeft size={24} />
        </button>
        <PagerPages page={page} pages={pages} onSelect={handleSelectPage} />
        <button
          className="page__button next"
          disabled={page === pageCount}
          type="button"
          onClick={handleNext}
        >
          <MdKeyboardArrowRight size={24} />
        </button>
      </div>
      <PagerStatus page={page} pageCount={pageCount} />
    </div>
  );
}

function PagerStatus({ page, pageCount }) {
  return (
    <div className="page__status">
      {page} of {pageCount}
    </div>
  );
}

function PagerPages({ page, pages, onSelect }) {
  return (
    <div>
      {pages.map((item) => (
        <Page
          key={item}
          current={item === page}
          onSelect={() => onSelect(item)}
        >
          {item}
        </Page>
      ))}
    </div>
  );
}

function Page({ children, current, onSelect }) {
  const getCurrentPageClass = (current) => {
    return current ? "page current-page" : "page";
  };
  return (
    <span onClick={onSelect} className={getCurrentPageClass(current)}>
      {children}
    </span>
  );
}
