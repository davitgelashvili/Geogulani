import React from "react";
import "./pagination.scss";

const Pagination = ({currentPage, totalPages, onPageChange}) => {

    const getPages = () => {
        const pages = [];

        let start = Math.max(1, currentPage - 2);
        let end = Math.min(totalPages, currentPage + 2);

        if (start > 1) {
            pages.push(1);
            if (start > 2) pages.push("...");
        }

        for (let i = start; i <= end; i++) {
            pages.push(i);
        }

        if (end < totalPages) {
            if (end < totalPages - 1) pages.push("...");
            pages.push(totalPages);
        }

        return pages;
    };

    return (
        <div className="pagination-wrapper">

            <button
                className="page-btn"
                disabled={currentPage === 1}
                onClick={() => onPageChange(currentPage - 1)}
            >
                ◀
            </button>

            {getPages().map((page, index) => {

                if (page === "...") {
                    return (
                        <span
                            key={index}
                            className="page-dots"
                        >
                            ...
                        </span>
                    );
                }

                return (
                    <button
                        key={index}
                        className={`page-number ${page === currentPage ? "active" : ""}`}
                        onClick={() => onPageChange(page)}
                    >
                        {page}
                    </button>
                );
            })}

            <button
                className="page-btn"
                disabled={currentPage === totalPages}
                onClick={() => onPageChange(currentPage + 1)}
            >
                ▶
            </button>

        </div>
    );
};

export default Pagination;
