import Image from 'next/image';
import styles from './About.module.css';

export default function About() {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Sobre Nosotros</h1>
      <p>
        Somos una empresa de rop. nos especializamos en ofrecer ropa de alta calidad, diseñada para quienes buscan estilo, comodidad y sostenibilidad en su día a día. Nuestro objetivo es brindar prendas únicas que combinen diseño moderno con tejidos ecológicos, garantizando que cada pieza sea tanto elegante como responsable con el medio ambiente.
      </p>
      <p>Compra nuestra ropa</p>
      <ul className={styles.serviceList}>
        <li>-Eventos especiales: Encuentra atuendos elegantes y modernos para bodas, fiestas o cualquier ocasión importante.</li>
        <li>- Tu día a día: Ropa casual diseñada para mantenerte cómodo y con estilo en la oficina o en tus actividades cotidianas.</li>
        <li>- Actividades deportivas: Prendas deportivas que combinan rendimiento y moda, perfectas para cualquier actividad física</li>
        <li>  Viste comodo</li>
      </ul>

      {/* Agregar imagen */}
      <div className={styles.imageContainer}>
        <Image
          src="/images/image.png" // La ruta de la imagen en la carpeta public/images
          alt="Imagen de la página principal"
          width={500} // Ajusta el ancho deseado
          height={667} // Ajusta la altura deseada
          className={styles.image} // Aplica estilos si lo necesitas
        />
      </div>
    </div>
  );
}
