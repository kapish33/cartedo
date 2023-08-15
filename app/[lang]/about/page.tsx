import { Locale } from '@/i18n.config'
import { getDictionary } from '@/lib/dictionary'
import Link from 'next/link'

export default async function About({
  params: { lang }
}: {
  params: { lang: Locale }
}) {
  const { page } = await getDictionary(lang)

  return (
    <section className='py-24'>
      <div className='container'>
        <h1 className='text-3xl font-bold'>{page.about.title}</h1>
        <p className='text-gray-500 my-2' >{page.about.description}</p>
        <Link className='btn secondary' href='mailto:kapishsingh2209@gmail.com'>
          {page.about['emial text']}
        </Link>
      </div>
    </section>
  )
}
