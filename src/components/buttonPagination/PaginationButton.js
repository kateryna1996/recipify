import React from 'react';
import "./PaginationButton.css"

function PaginationButton({page, setPage}) {

    function nextPage() {
        setPage(prevPage => prevPage + 1)
    }

    function previousPage() {
        setPage(prevPage => prevPage - 1);
    }

    return (
        <article className="navigation-wrapper">
                <button
                    type="button"
                    onClick={previousPage}
                    className="buttons-page"
                    disabled={!page}
                >
                    Previous Page
                </button>

            <button
                type="button"
                onClick={nextPage}
                className="buttons-page"
            >
                Next Page
            </button>
        </article>
    );
}

export default PaginationButton;