import React from 'react'

const HomeButton = ({onClick}) => {

    return(
        <div className="topnav">
          <button onClick={onClick}>Home</button>
        </div>
    )

}

export default HomeButton