import { motion, useReducedMotion } from "framer-motion";
import { useState, useEffect,useRef } from "react";
import emailjs from "@emailjs/browser"
import styles from "./Contact.module.css";
import SectionHeading from "../../Components/SectionHeading/SectionHeading";
import { useNotification } from "../../Context/NotificationContext";

const getFormVariants = (isMobile) => ({
  hidden: {
    opacity: 0,
    scale: isMobile ? 0.9 : 0.95,
    y: isMobile ? 30 : 60 
  },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 70,
      damping: 20,
      staggerChildren: isMobile ? 0.08 : 0.1,
      delayChildren: 0.2
    }
  }
});

const getInputVariants = (isMobile) => ({
  hidden: {
    opacity: 0,
    scale: isMobile ? 0.95 : 0.98,
    y: isMobile ? 15 : 20 
  },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: "spring", 
      stiffness: isMobile ? 150 : 120, 
      damping: isMobile ? 18 : 15 
    }
  }
});

const detailsVariants = {
  hidden: { 
    opacity: 0, 
    x: 60, 
    scale: 0.95 
  },
  show: { 
    opacity: 1, 
    x: 0, scale: 1, 
    transition: { 
      type: "spring",
      stiffness: 70, 
      damping: 20, 
      staggerChildren: 0.15, 
      delayChildren: 0.3 
    } 
  }
};

const detailItemVariants = {
  hidden: { 
    opacity: 0, 
    y: 30, 
    scale: 0.9 
  },
  show: { 
    opacity: 1, 
    y: 0, 
    scale: 1, 
    transition: { 
      type: "spring", 
      stiffness: 100, 
      damping: 15 
    } 
  }
};

const socialVariants = {
  hidden: { 
    opacity: 0, 
    scale: 0 
  },
  show: { 
    opacity: 1, 
    scale: 1, 
    transition: { 
      type: "spring", 
      stiffness: 200, 
      damping: 15 
    } 
  }
};

function Contact() {

  const reduceMotion = useReducedMotion();
  const [isMobile, setIsMobile] = useState(false);
  const formRef = useRef()
  const nameRef = useRef()
  const {notify} = useNotification()
  
  const socialIcons = [
    { 
      link: "https://www.linkedin.com/in/uchenna-uchendu-b2a0a8307", 
      iconClass: "fa-brands fa-linkedin-in fa-lg" 
    },
    { link: "https://github.com/uchenna7-prog", 
      iconClass: "fa-brands fa-github fa-lg" 
    },
    { 
      link: "https://x.com/?utm_source=homescreen&utm_medium=shortcut", 
      iconClass: "fa-brands fa-x-twitter fa-lg" 
    },
    { 
      link: "https://www.facebook.com/uchenna.uchendu.383796", 
      iconClass: "fa-brands fa-facebook fa-lg" 
    },
    { 
      link: "", 
      iconClass: "fa-brands fa-whatsapp fa-lg" 
    }
  ];
  
  const sendEmail = (e)=>{
    e.preventDefault()
    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      formRef.current,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
    .then(
      (response)=>{
        if(response.text === "OK"){
          notify(`✅Thanks ${nameRef.current.value} for reaching out! I have received your message and will get back to you soon.`,"success")
        }
        formRef.current.reset()
      },(error)=>{
          notify(`Failed to send message`,"success") 
          
      }
    )
  }

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const formVariants = getFormVariants(isMobile);
  const inputVariants = getInputVariants(isMobile);

  return (
    <section className={styles.contactSection} id="Contact">
      <SectionHeading headingText="LET'S CONNECT" />
      <div className={styles.contactContainer}>
        <motion.form
          className={styles.form}
          ref={formRef}
          onSubmit={sendEmail}
          variants={reduceMotion ? {} : formVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div>
            <motion.div 
              className={`${styles.formRow1Container} ${styles.formRowContainer}`} 
              variants={inputVariants}
            >
              <motion.input 
                className={styles.formInput}
                ref={nameRef}
                type="text" 
                placeholder="Your Name" 
                name="user_name"
                required
              />
              <motion.input 
                className={styles.formInput}
                type="email"
                placeholder="Your Email" 
                name="user_mail"
                required
              />
            </motion.div>
            <motion.input 
              placeholder="Email Subject" 
              className={`${styles.formRowContainer} ${styles.formInput}`} 
              name="email_subject"
              variants={inputVariants} 
              required
            />
            <motion.textarea 
              className={`${styles.formInput} ${styles.formRowContainer}`} 
              placeholder="Your Message" rows={20} 
              name="message"
              variants={inputVariants} 
              required
            />
            <motion.button 
              type="submit" 
              className={`${styles.formButton} ${styles.formRowContainer}`} 
              variants={inputVariants}
            >
              <motion.span 
                className={styles.sendBtnText}>
                <i className="fa fa-paper-plane" aria-hidden="true"></i> Send Message
              </motion.span>
            </motion.button>
          </div>
        </motion.form>

        <motion.div variants={reduceMotion ? {} : detailsVariants} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }}>
          <motion.h2 className={`${styles.secondDivFirstHeading} title`} variants={detailItemVariants}>
            Get In Touch
          </motion.h2>

          <motion.div className={styles.ContactDetailContainer} variants={detailItemVariants}>
            <i className="material-icons">mail</i>
            <div>
              <div>Email</div>
              <a>uchenduuchenna7@gmail.com</a>
            </div>
          </motion.div>

          <motion.div className={styles.ContactDetailContainer} variants={detailItemVariants}>
            <i className="material-icons">phone</i>
            <div>
              <div>Phone</div>
              <a>+234 - 9079116980</a>
            </div>
          </motion.div>

          <motion.div className={styles.ContactDetailContainer} variants={detailItemVariants}>
            <i className="material-icons">location_on</i>
            <div>
              <div>Location</div>
              <a>Port Harcourt, Nigeria.</a>
            </div>
          </motion.div>

          <motion.h2 className="title" variants={detailItemVariants}>Socials</motion.h2>
          <motion.span className={styles.socialIconsContainer} variants={detailItemVariants}>
            {socialIcons.map((icon, index) => (
              <motion.a className={styles.socialIcon} key={index} href={icon.link} variants={socialVariants} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <i className={icon.iconClass}></i>
              </motion.a>
            ))}
          </motion.span>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;
