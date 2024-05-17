import style from './Block.module.scss'
import { useState } from 'react'
import {data} from '../db/data'

function Block() {
  const [first, setFirst] = useState("Low")
  function btnChange(event: any) {
    setFirst(event.target.innerText)
  }
  return (
    <div className={style.app}>
      <div className={style.left}>
        {data.map((data: any) => { 
          return <div key={data.id} onClick={btnChange} className={style.element}>{data.value}</div>
        })}
      </div>
      <div className={style.right}>{first}</div>
    </div>
  )
}

export default Block