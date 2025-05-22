import { useState } from "react"
import { Header } from "../../components/header/header"
import styles from "./login.module.css"
const Login = () => {

  const [ isPassword, setIsPassword ] = useState("password")

  // useState
  // useEffect 

  

  // isPassword = password


  function handleIsShowPassword() {
    if(isPassword === "password") {
      setIsPassword("text")
      // isPassword = text
    } else {
      setIsPassword("password")
      // isPassword = passowrd
    }
  }


  return (
    <>
     <Header title="Зарегистрироваться" count={""} />
      <div className={styles.wrap}  >
        <input className={styles.input} type="text" />
        <div className={styles.block_for_password}>
          <input className={styles.input} type={isPassword} />
          <span onClick={handleIsShowPassword} className={styles.show_password}>показать</span>
        </div>
        <input className={styles.btn} type="submit" />
      </div>
    </>
  )
}

export default Login