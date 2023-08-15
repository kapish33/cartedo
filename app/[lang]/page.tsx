import { Locale } from '@/i18n.config'
import { getDictionary } from '@/lib/dictionary'

export default async function Home({
  params: { lang }
}: {
  params: { lang: Locale }
}) {
  const { page } = await getDictionary(lang)

  return (
    <section className='py-24'>
      <div className='container'>
        <h1 className='text-3xl font-bold'>{page.home.title}</h1>
        <p className='text-primary-600'>{page.home.description}</p>
        <p className='display-1 font-Montserrat'>With Font font-Montserrat</p>

        <div className='display-1'>Display 1</div>

        <div className='display-2'>Display 2</div>

        <div className='display-3'>Display 3</div>

        <h1>Heading 1</h1>

        <h2>Heading 2</h2>

        <h3>Heading 3</h3>

        <h4>Heading 4</h4>

        <h5>Heading 5</h5>

        <h6>Heading 6</h6>

        <div className='grid grid-cols-4 gap-4'>
          <div className='bg-primary-100 lg-regular p-4'>Cell 1</div>

          <div className='bg-primary-100 lg-bold p-4'>Cell 2</div>

          <div className='bg-primary-100 lg-italic p-4'>Cell 3</div>

          <div className='bg-primary-100 lg-link p-4'>Cell 4</div>

          <div className='bg-primary-100 md-regular p-4'>Cell 5</div>

          <div className='bg-primary-100 md-bold p-4'>Cell 6</div>

          <div className='bg-primary-100 md-italic p-4'>Cell 7</div>

          <div className='bg-primary-100 md-link p-4'>Cell 8</div>

          <div className='bg-primary-100 sm-regular p-4'>Cell 9</div>

          <div className='bg-primary-100 sm-bold p-4'>Cell 10</div>

          <div className='bg-primary-100 sm-italic p-4'>Cell 11</div>

          <div className='bg-primary-100 sm-link p-4'>Cell 12</div>

          <div className='bg-primary-100 xs-regular p-4'>Cell 13</div>

          <div className='bg-primary-100 xs-bold p-4'>Cell 14</div>

          <div className='bg-primary-100 xs-italic p-4'>Cell 15</div>
        </div>
      </div>
    </section>
  )
}
