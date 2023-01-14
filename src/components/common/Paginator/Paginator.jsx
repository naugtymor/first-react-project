import s from "./Paginator.module.css";
import React from "react";

export const Paginator = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let currentPage = props.currentPage;
    let currentPageFirst = ((currentPage - 5) < 0 ? 0 : currentPage - 5);
    let currentPageLast = currentPage + 4;
    let slicedPages = pages.slice(currentPageFirst, currentPageLast);

    return (
        <div className={s.pageSelector}>
            {slicedPages.map((p, index) => <span key={index}
                                                 className={props.currentPage === p ? s.selectedPage : undefined}
                                                 onClick={() => {
                                                     props.onPageChange(p)
                                                 }}>{p + " "}</span>)}
            ...
        </div>
    )
}