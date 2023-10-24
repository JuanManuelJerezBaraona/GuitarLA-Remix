import { useLoaderData } from '@remix-run/react'
import { getGuitarra } from '~/models/guitarras.server'

export function meta({data}) {
  return [
    {
        title: `GuitarLA - ${data.data[0].attributes.nombre}`,
        description: `Guitarras, venta de guitarras, guitarra ${data.data[0].attributes.nombre}`
    }
]
}

export async function loader({params}) {
    const { guitarraUrl } = params
    const guitarra = await getGuitarra(guitarraUrl)
    return guitarra
}

function Guitarra() {
    const guitarra = useLoaderData()
    const { nombre, descripcion, imagen, precio } = guitarra.data[0].attributes

  return (
    <div className='guitarra'>
        <img className='imagen' src={imagen.data.attributes.url} alt={`Imagen de la guitarra ${nombre}`} />

        <div className='contenido'>
          <h3>{nombre}</h3>
          <p className='texto'>{descripcion}</p>
          <p className='precio'>${precio}</p>
        </div>
    </div>
  )
}

export default Guitarra