"use client";  

import { useParams, useRouter } from 'next/navigation';  
import styles from './serviceDetail.module.css';

const serviceDetails = {
  '1': {
    name: 'Prenda Limited Edition: Poleron Feó',
    description: 'Un poleron horrible para los días de frío, con un diseño único y exclusivo. Precio: 100.000 CLP',
    image: '/images/poleronfeo.png', // Ruta de la imagen
  },
  '2': {
    name: 'Prenda Limited Edition: Pantalon Sucio',
    description: 'Un pantalón sucio para los días de calor, con un diseño único y exclusivo. Precio: 150.000 CLP',
    image: '/images/pantalonsucio.png', // Ruta de la imagen
  },
  '3': {
    name: 'Sexiest Line: Ropa interior sucia',
    description: 'Ropa interior sucia para los días de pasión, con un diseño único y exclusivo. Precio: 200.000 CLP',
    image: '/images/ropainterior.png', // Ruta de la imagen
  },
};

export default function ServiceDetail(): JSX.Element {
  const { id } = useParams();  // Usamos useParams para obtener el ID de la ruta
  const router = useRouter();   // Usamos useRouter de next/navigation para la navegación

  // Si el id no está disponible, muestra un mensaje de carga
  if (!id) {
    return <p>Cargando...</p>;
  }

  const service = serviceDetails[id as keyof typeof serviceDetails];

  if (!service) {
    return <p>Servicio {id} no encontrado.</p>;
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>{service.name}</h1>
      <img src={service.image} alt={service.name} className={styles.image} /> {/* Espacio para la imagen */}
      <p>{service.description}</p>
      <button className={styles.button} onClick={() => router.back()}>
        Volver a Servicios
      </button>
    </div>
  );
}
