import { FC } from 'react'
import { Link } from 'react-router-dom'
import style from './testLink.module.scss'

interface TextLinkProps {
    children: string;
    id: string;
    onClick: () => void
}



export const TestLink: FC<TextLinkProps> = ({children, id, onClick}) => {
  return (
    <Link onClick={onClick} className={style.link} to={`/test/${id}`}>{children}</Link>
  )
}
