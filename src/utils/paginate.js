import { useState, useEffect } from "react"

export const paginate = ({
    total,
    current,
    size,
  }) => {
    // calculate total pages
    let pages = Math.ceil(total / size)
  
    // ensure current page isn't out of range
    if (current < 1) {
        current = 1
    } else if (current > pages) {
        current = pages
    }
  
    // calculate start and end item indexes
    let start = (current - 1) * size
    let end = Math.min(start + size - 1, total - 1);
  
    // return object with all pager properties required by the view
    return {
        start,
        end
    }
}

const usePagination = ({ items, size = 10 }) => {
    const [currentPage, setCurrentPage] = useState(1)
    const [displayItems, setDisplayItems] = useState([])
    const [totalPages, setTotalPages] = useState(Math.ceil(items.length / size))

    useEffect(() => {
        setTotalPages(Math.ceil(items.length/size))
        const { start, end } = paginate({ total: items.length, current: currentPage, size })
        const display = items.slice(start, end + 1)

        setDisplayItems(display)
    }, [currentPage, items, size])

    return {
        current: currentPage,
        display: displayItems,
        pages: totalPages,
        next: () => setCurrentPage(currentPage + 1),
        previous: () => setCurrentPage(currentPage - 1),
        first: () => setCurrentPage(1),
        last: () => setCurrentPage(Math.ceil(items.length / size)),
        set: num => setCurrentPage(num)
    }
}

export default usePagination