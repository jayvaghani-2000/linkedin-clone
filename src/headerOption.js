import { Avatar } from '@material-ui/core'
import React from 'react'
import "./headerOption.css"

const headerOption = ({avatar,Icon,title}) => {
  return (
    <div className="headerOption">
        {avatar && <Avatar src={avatar} alt="me" className={'headerOption-avatar'}/>}
        {Icon && <Icon className="headerOption-icon"/>}
        <h3 className="headerOption-title">{title}</h3>
    </div>
  )
}

export default headerOption