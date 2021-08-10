import React, {useState} from 'react'
import data from "../data.json"
import GroceryData from './GroceryData'
import Styles from "./styles/Container.module.css"
import Pagination from "./Pagination"

const Container = () => {
    const [page, setPage] = useState(1)
    let per_page = 4
    let len = data.length
    const display_card = () => {
        let start = (page - 1) * per_page;
        let end = start + per_page
        return data.slice(start, end)
    }
    const nextPage = () => {
        if(page < Math.ceil(len)/per_page){
            setPage(page => page+1)
        }
    }
    const prevPage = () => {
        if(page > 1){
            setPage(page => page-1)
        }  
    }
   
    return (
        <>
        <div className={Styles.container}>
            {display_card()?.map(item => <GroceryData key={item.id} {...item}/>)}
        </div>
            <Pagination page={page} len={len} nextPage={nextPage} prevPage={prevPage}/>
        </>
    )
}

export default Container
