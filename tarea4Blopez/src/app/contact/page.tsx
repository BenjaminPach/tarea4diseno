import styles from './Contact.module.css';

export default function Contact(): JSX.Element {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Contacto</h1>
      <form className={styles.form}>
        <label htmlFor="name">Nombre:</label>
        <input type="text" id="name" name="name" required className={styles.inputField} />

        <label htmlFor="email">Correo Electrónico:</label>
        <input type="email" id="email" name="email" required className={styles.inputField} />

        <label htmlFor="message">Mensaje:</label>
        <textarea id="message" name="message" required className={styles.textareaField}></textarea>

        <button type="submit" className={styles.button}>Enviar</button>
      </form>
    </div>
  );
}
