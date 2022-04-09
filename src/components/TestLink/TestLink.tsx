import { FC } from 'react'
import { Link } from 'react-router-dom'
import style from './testLink.module.scss'

interface TextLinkProps {
    children: string;
    id?: string
}



export const TestLink: FC<TextLinkProps> = ({children, id}) => {
  return (
    <Link  className={style.link} to={`/test/${id}`}>{children}</Link>
  )
}
