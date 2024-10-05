import Image from 'next/image'; 
import Link from 'next/link';
import styles from './Home.module.css';

export default function Home() {
  return (
    <div>
      <nav className={styles.navContainer}>
        <ul className={styles.navList}>
          <li className={styles.navItem}><Link href="/">Inicio</Link></li>
          <li className={styles.navItem}><Link href="/about">Sobre Nosotros</Link></li>
          <li className={styles.navItem}><Link href="/services">Servicios</Link></li>
          <li className={styles.navItem}><Link href="/contact">Contacto</Link></li>
        </ul>
      </nav>
      <p>
                ¡Descubre nuestra tienda cerca del mar! Con un diseño innovador y vanguardista, te invitamos a visitarnos y aprovechar los mejores descuentos. ¡Te esperamos!
      </p>

      {/* Agregar imagen */}
      <div className={styles.imageContainer}>
        <Image
          src="/images/image2.png" 
          alt="Imagen de la página principal"
          width={900} 
          height={300} 
          className={styles.image} 
        />
      </div>
    </div>
  );
}

