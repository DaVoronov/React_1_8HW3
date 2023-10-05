import { motion, AnimatePresence } from "framer-motion";
import styles from "./ContactList.module.css";

const ContactList = ({ contacts, deleteContact }) => {
  return (
    <ul>
      <AnimatePresence>
        {contacts.map((contact) => (
          <motion.li
            initial={{
              opacity: 0,
              translateX: "100%",
            }}
            animate={{
              opacity: 1,
              translateX: 0,
            }}
            exit={{
              opacity: 0,
              translateX: "-100%",
            }}
            transition={{
              duration: 0.3,
            }}
            key={contact.id}
          >
            {contact.name}: {contact.number}
            <div className={styles.actions}>
              <button type="button" onClick={() => deleteContact(contact.id)}>
                Delete
              </button>
            </div>
          </motion.li>
        ))}
      </AnimatePresence>
    </ul>
  );
};

export default ContactList;
