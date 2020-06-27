import React from 'react' 

const Button = ({name,onClick,classname}) => {
    return(
        <div className={classname}>
            <button onClick={onClick}>{name}</button>
        </div>
    )
}

export default Button