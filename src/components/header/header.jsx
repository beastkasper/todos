import styles from "./header.module.css"

export const Header = ({ title = "Список дел", count=0  }) => {
  return <div className={styles.header_wrap} > 
    <span>{title}</span>
    <span>{count}</span>
   </div>
}

