import styles from './ContactForm.module.css'
import {Button} from '../Button/Button'
import { MdOutlineMessage } from "react-icons/md";
import { IoIosCall } from "react-icons/io";
import { CiMail } from "react-icons/ci";
import Form from '../Form/Form';


export const ContactForm = () => {
  return (
    <section className={styles.container}>
        <div className={styles.contact_Form}>
          <div className={styles.top_btn}>

        <Button text="VIA SUPPORT CHAT" icon={<MdOutlineMessage  fontSize="24px"/>}/>
        <Button text="VIA CALL" icon={<IoIosCall  fontSize="24px"/>}/>
          </div>
          <Button isOutline={true} text="VIA EMAIL FORM" icon={<CiMail  fontSize="24px"/>}/>
          <Form/>

          
        </div>
        <div className={styles.contact_Image}></div>
       


    </section>
  )
}
