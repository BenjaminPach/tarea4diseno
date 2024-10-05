import Link from 'next/link';
import styles from './Service.module.css';

const services = [
  { id: '1', name: 'Poleron Feó' },
  { id: '2', name: 'Pantalon Sucio' },
  { id: '3', name: 'Ropa interior sucia' },
];

export default function Services():JSX.Element {
  return (
    <div className={styles.container}>
      <h1>Nuestras principales prendas</h1>
      <ul>
        {services.map(service => (
          <li key={service.id}>
            <Link href={`/services/${service.id}`}>{service.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
