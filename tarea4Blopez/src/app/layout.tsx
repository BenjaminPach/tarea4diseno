import './globals.css';

import { ReactNode } from 'react';

export default function RootLayout({ children }: { children: ReactNode }):JSX.Element {
  return (
    <html lang="es">
      <body>
        <header >
          <nav >
            <ul>
            </ul>
          </nav>
        </header>
        <main >{children}</main>
        <footer >
          <p>© ropa, mas comoda!.</p>
        </footer>
      </body>
    </html>
  );
}

