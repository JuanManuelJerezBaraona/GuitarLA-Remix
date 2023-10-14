import imagen from '../../public/img/nosotros.jpg'
import styles from '~/styles/nosotros.css'

export function meta() {
  return [
      {
          title: 'GuitarLA - Sobre Nosotros',
          description: 'Venta de guitarras, blog de música'
      }
  ]
}

export function links() {
  return [
    {
      rel: 'stylesheet',
      href: styles
    },
    {
      rel: 'preload',
      href: imagen,
      as: 'image'
    }
  ]
}

function Nosotros() {
  return (
    <main className="contenedor nosotros">
      <h2 className="heading">Nosotros</h2>

      <div className="contenido">
        <img src={imagen} alt="imagen sobre nosotros" />

        <div>
          <p>Donec maximus ac sem vitae scelerisque. Proin bibendum a urna sit amet scelerisque. Quisque nec sem convallis, aliquet turpis eget, dapibus ligula. Aenean elementum nulla ac erat vestibulum sollicitudin ac ut nibh.</p>
          
          <p>Donec maximus ac sem vitae scelerisque. Proin bibendum a urna sit amet scelerisque. Quisque nec sem convallis, aliquet turpis eget, dapibus ligula. Aenean elementum nulla ac erat vestibulum sollicitudin ac ut nibh.</p>
        </div>
      </div>
    </main>
  )
}

export default Nosotros