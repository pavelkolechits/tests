import { FC } from "react"
import styles from './homePage.module.scss'
import photo from './img/avatar.jpg'

export const HomePage: FC = () => {

  
  
  
  return   (
    <div className={styles['sv-container']}>
        <img className={styles.photo} src={photo} alt="" />
    </div>
  )
 
}


