import React, { useState } from 'react'

function ReadMore({children}) {
    const text=children
    const [isTruncated,setIsTruncated]=useState(true)
    const textTruncated=(isTruncated)?text.slice(0,100):text
       
     
    return (
        <p>
         {textTruncated}     
         <span className="btn btn-default text-info" onClick={()=>setIsTruncated(!isTruncated)}>read more</span>
        </p>
    )
}


     
export default ReadMore
