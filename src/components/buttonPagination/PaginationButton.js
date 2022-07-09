import React from 'react';
import "./PaginationButton.css"

function PaginationButton({page, setPage, recipes, totalResults}) {

    function nextPage() {
        setPage(prevPage => prevPage + 1)
    }

    function previousPage() {
        setPage(prevPage => prevPage - 1);
    }

    const lastPage = Math.ceil(totalResults / 9);

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
                disabled={page === lastPage}
            >
                Next Page
            </button>
        </article>
    );
}

export default PaginationButton;