import style from './Block.module.scss'
import { useState } from 'react'
import {data} from '/src/db/data.tsx'

function Block() {
  const [first, setFirst] = useState("Low")
  function btnChange(event) {
    setFirst(event.target.innerText)
  }

  return (
    <div className={style.app}>
      <div className={style.left}>
        {data.map(data => { 
          return <div key={data.id} onClick={btnChange} className={style.element}>{data.value}</div>
        })}
      </div>
      <div className={style.right}>{first}</div>
    </div>
  )
}

export default Block