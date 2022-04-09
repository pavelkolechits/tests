import  { FC } from 'react'
import style from './test.module.scss'
import { useTypedSelector } from '../../hooks/useTypesSelector'





export const Test: FC = () => {
const test = useTypedSelector(i => i.manageTestsReducer)

  return (

    <div className={style.container}>
      
      

    </div>

  )
}
