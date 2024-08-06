import Button from "../Button/Button";
import styles from "./ContactForm.module.css";
import { MdMessage } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { MdMailOutline } from "react-icons/md";
import { useState } from "react";
const ContactForm = () => {
  const [name,setName] = useState("ljfdf")
  const [email,setEmail] = useState("abc@gmail.com")
  const [text,setText] = useState("ljfdf")

  const viaCallService = () => {
    console.log("Someone is calling you");
  };

  const onSubmit = (event) => {
    event.preventDefault();
setName(event.target[0].value)
setEmail(event.target[1].value)
setText(event.target[2].value)
   
    

    console.log("Name :", event.target[0].value);
    console.log("email :", event.target[1].value);
    console.log("Text :", event.target[2].value);
  };

  return (
    <section className={styles.container}>
      <div className={styles.contact_form}>
        <div className={styles.top_btn}>
          <Button
            text="VIA SUPPORT CHAT"
            icon={<MdMessage fontSize="24px" />}
          />
          <Button
            onClick={viaCallService}
            text="VIA CALL"
            icon={<FaPhoneAlt fontSize="24px" />}
          />
        </div>
        <Button
          isOutline={true}
          text="VIA MAIL"
          icon={<MdMailOutline fontSize="24px" />}
        />
        <form onSubmit={onSubmit} action="">
          <div className={styles.form_controler}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" />
          </div>
          <div className={styles.form_controler}>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" />
          </div>
          <div className={styles.form_controler}>
            <label htmlFor="text">Text</label>
            <textarea name="Text" rows={8} />
            <div
              style={{
                display: "flex",
                justifyContent: "end",
                marginTop: "15px",
              }}
            >
              <Button text="Submit Button" />
            </div>
          </div>
          <div>{name + " " + email + " " + text}</div>
        </form>
      </div>
      <div className={styles.contact_img}>
        <img src="./img/contactUs.svg" alt="" />
      </div>
    </section>
  );
};

export default ContactForm;
