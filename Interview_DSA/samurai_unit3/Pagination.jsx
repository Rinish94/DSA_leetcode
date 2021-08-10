import React from 'react'
import {FcNext, FcPrevious} from "react-icons/fc"
import Styles from "./styles/Pagination.module.css"
const Pagination = ({page, prevPage, nextPage}) => {
    return (
        <div className={Styles.pagination}>
            <FcPrevious onClick={prevPage} style={{fontSize:"50px"}}/>
            <div className={Styles.no}>{page}</div>
            <FcNext onClick={nextPage} style={{fontSize:"50px"}}/>
        </div>
    )
}

export default Pagination
