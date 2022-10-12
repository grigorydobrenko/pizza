import React from 'react';
import ReactPaginate from 'react-paginate';
import styles from './Pagination.module.scss'

const Pagination = ({setCurrentPage, categoryId}) => {
    return (
        <ReactPaginate
            className={styles.root}
            breakLabel="..."
            nextLabel=">"
            onPageChange={(event) => setCurrentPage(event.selected + 1)}
            pageRangeDisplayed={8}
            pageCount={categoryId === 0 ? 3 : 1}
            previousLabel="<"
            renderOnZeroPageCount={null}
        />
    );
};

export default Pagination;