import { motion } from "framer-motion";

const ContactList = ({ contacts, deleteContact }) => {
  return (
    <ul>
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
            duration: 0.5,
          }}
          key={contact.id}
        >
          {contact.name}: {contact.number}
          <button type="button" onClick={() => deleteContact(contact.id)}>
            Delete
          </button>
        </motion.li>
      ))}
    </ul>
  );
};

export default ContactList;
