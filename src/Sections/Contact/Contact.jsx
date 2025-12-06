import styles from "./Contact.module.css";
import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";

// Heading animation
const headingVariants = {
  hidden: { opacity: 0 },
  show: { 
    opacity: 1,
    transition: { 
      staggerChildren: 0.05,
      delayChildren: 0.1
    } 
  },
};

const letterVariants = {
  hidden: { opacity: 0, y: 50, rotateX: -90 },
  show: { 
    opacity: 1, 
    y: 0,
    rotateX: 0,
    transition: { 
      type: "spring",
      damping: 12,
      stiffness: 100
    } 
  },
};

// Form animation
const formVariants = {
  hidden: { opacity: 0, x: -60, scale: 0.95 },
  show: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 70,
      damping: 20,
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const inputVariants = {
  hidden: { opacity: 0, x: -30 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15
    }
  }
};

// Contact details animation
const detailsVariants = {
  hidden: { opacity: 0, x: 60, scale: 0.95 },
  show: {
    opacity: 1,
    x: 0,
    scale: 1,
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
  hidden: { opacity: 0, y: 30, scale: 0.9 },
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
  hidden: { opacity: 0, scale: 0 },
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
  const headingText = "LET'S CONNECT";
  const [copiedField, setCopiedField] = useState(null);

  const handleCopy = (text, field) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  return (
    <section className={styles.contactSection} id="contact">
      {/* Animated heading */}
      <div className={styles.headingWrapper}>
        <motion.h2
          className="sectionHeading"
          variants={headingVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.8 }}
          style={{ 
            display: 'inline-flex', 
            overflow: 'hidden',
            perspective: '1000px'
          }}
        >
          {headingText.split('').map((letter, index) => (
            <motion.span
              key={index}
              variants={letterVariants}
              style={{ 
                display: 'inline-block',
                transformOrigin: 'bottom'
              }}
            >
              {letter === ' ' ? '\u00A0' : letter}
            </motion.span>
          ))}
        </motion.h2>
        <motion.div 
          className={styles.headingUnderline}
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.8, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>

      <div className={styles.contactContainer}>
        {/* Animated form */}
        <motion.form 
          className={styles.form}
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
                placeholder="Your Name"
                whileFocus={{ scale: 1.02, borderColor: "#1a7dd4" }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              />
              <motion.input 
                className={styles.formInput} 
                placeholder="Your Email" 
                type="email"
                whileFocus={{ scale: 1.02, borderColor: "#1a7dd4" }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              />
            </motion.div>
            
            <motion.input 
              placeholder="Email Subject" 
              className={`${styles.formRowContainer} ${styles.formInput}`}
              variants={inputVariants}
              whileFocus={{ scale: 1.02, borderColor: "#1a7dd4" }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            />
            
            <motion.textarea 
              className={`${styles.formInput} ${styles.formRowContainer}`} 
              placeholder="Your Message" 
              rows={20}
              variants={inputVariants}
              whileFocus={{ scale: 1.02, borderColor: "#1a7dd4" }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            />
            
            <motion.button 
              className={`${styles.formButton} ${styles.formRowContainer}`}
              variants={inputVariants}
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 8px 25px rgba(14, 96, 179, 0.4)",
                transition: { type: "spring", stiffness: 400, damping: 10 }
              }}
              whileTap={{ scale: 0.95 }}
            >
              <span className={styles.sendBtnText}>
                <i className="fa fa-paper-plane" aria-hidden="true"></i>
                Send Message
              </span>
            </motion.button>
          </div>
        </motion.form>

        {/* Animated contact details */}
        <motion.div
          variants={reduceMotion ? {} : detailsVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2 
            className={`${styles.secondDivFirstHeading} title`}
            variants={detailItemVariants}
          >
            Get In Touch
          </motion.h2>

          <motion.div 
            className={styles.ContactDetailContainer}
            variants={detailItemVariants}
            whileHover={{ 
              scale: 1.03, 
              y: -5,
              boxShadow: "0 10px 30px rgba(14, 96, 179, 0.2)",
              transition: { type: "spring", stiffness: 400, damping: 15 }
            }}
          >
            <i className="material-icons">mail</i>
            <div>
              <div>Email</div>
              <a>uchenduuchenna7@gmail.com</a>
            </div>
            <motion.span 
              className="material-icons"
              onClick={() => handleCopy('uchenduuchenna7@gmail.com', 'email')}
              whileHover={{ scale: 1.2, rotate: 15 }}
              whileTap={{ scale: 0.9 }}
            >
              {copiedField === 'email' ? 'check' : 'content_copy'}
            </motion.span>
          </motion.div>

          <motion.div 
            className={styles.ContactDetailContainer}
            variants={detailItemVariants}
            whileHover={{ 
              scale: 1.03, 
              y: -5,
              boxShadow: "0 10px 30px rgba(14, 96, 179, 0.2)",
              transition: { type: "spring", stiffness: 400, damping: 15 }
            }}
          >
            <i className="material-icons">phone</i>
            <div>
              <div>Phone</div>
              <a>+234 - 9079116980</a>
            </div>
            <motion.span 
              className="material-icons"
              onClick={() => handleCopy('+234 - 9079116980', 'phone')}
              whileHover={{ scale: 1.2, rotate: 15 }}
              whileTap={{ scale: 0.9 }}
            >
              {copiedField === 'phone' ? 'check' : 'content_copy'}
            </motion.span>
          </motion.div>

          <motion.div 
            className={styles.ContactDetailContainer}
            variants={detailItemVariants}
            whileHover={{ 
              scale: 1.03, 
              y: -5,
              boxShadow: "0 10px 30px rgba(14, 96, 179, 0.2)",
              transition: { type: "spring", stiffness: 400, damping: 15 }
            }}
          >
            <i className="material-icons">location_on</i>
            <div>
              <div>Location</div>
              <a>Port Harcourt, Nigeria.</a>
            </div>
          </motion.div>

          <motion.h2 
            className="title"
            variants={detailItemVariants}
          >
            Socials
          </motion.h2>

          <motion.span 
            className={styles.socialIconsContainer}
            variants={detailItemVariants}
          >
            <motion.a 
              className={styles.socialIcon} 
              href="https://www.linkedin.com/in/uchenna-uchendu-b2a0a8307?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=andriod_app"
              variants={socialVariants}
              whileHover={{ scale: 1.2, rotate: 5, y: -5 }}
              whileTap={{ scale: 0.9 }}
            >
              <i className="fa-brands fa-linkedin-in fa-lg"></i>
            </motion.a>
            <motion.a 
              className={styles.socialIcon} 
              href="https://github.com/uchenna7-prog"
              variants={socialVariants}
              whileHover={{ scale: 1.2, rotate: 5, y: -5 }}
              whileTap={{ scale: 0.9 }}
            >
              <i className="fa-brands fa-github fa-lg"></i>
            </motion.a>
            <motion.a 
              className={styles.socialIcon} 
              href="https://x.com/?utm_source=homescreen&utm_medium=shortcut"
              variants={socialVariants}
              whileHover={{ scale: 1.2, rotate: 5, y: -5 }}
              whileTap={{ scale: 0.9 }}
            >
              <i className="fa-brands fa-x-twitter fa-lg"></i>
            </motion.a>
            <motion.a 
              className={styles.socialIcon} 
              href="https://www.facebook.com/uchenna.uchendu.383796"
              variants={socialVariants}
              whileHover={{ scale: 1.2, rotate: 5, y: -5 }}
              whileTap={{ scale: 0.9 }}
            >
              <i className="fa-brands fa-facebook fa-lg"></i>
            </motion.a>
            <motion.a 
              className={styles.socialIcon} 
              href="mailto:uchenduuchenna7@gmail.com"
              variants={socialVariants}
              whileHover={{ scale: 1.2, rotate: 5, y: -5 }}
              whileTap={{ scale: 0.9 }}
            >
              <i className="fa fa-envelope fa-lg" aria-hidden="true"></i>
            </motion.a>
          </motion.span>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;