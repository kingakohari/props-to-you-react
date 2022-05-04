import React, { useState, useEffect } from "react";


function Counter() {

/*  const [active, setActive] = useState("false")
    const [count, setCount] = useState(0) */

    let count = 0

    const handleClick = () => {
        count += 1
        console.log(count);
    }

    useEffect (() => {
        count += 1

    },[])

/*     useEffect (() => {
        setTimeout(() => {
            setCount(count+1)
            console.log(count);
        }, 1000)

    },[])
 */

    return (
        <div onClick={handleClick}>{count}</div>
    )
}

export default Counter