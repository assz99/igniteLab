import { CheckCircle, Lock } from 'phosphor-react'
import { isPast, format } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

interface LessonProps {
  title: string
  slug: string
  availableAt: Date
  type: 'live' | 'class'
}

export default function Lesson (props: LessonProps) {
  const isLessoanAvailable = isPast(props.availableAt)
  const availableDateFormatted = format(
    props.availableAt,
    "EEEE' • ' d ' de 'MMMM ' • 'k'h'mm",
    { locale: ptBR }
  )

  return (
    <a>
      <span className='text-gray-300'>{availableDateFormatted}</span>

      <div className='rounded border border-gray-500 p-4 mt-2'>
        <header className='flex items-center justify-between'>
          {isLessoanAvailable ? (
            <span className='flex item-center gap-2 text-sm text-blue-500 font-medium'>
              <CheckCircle size={20} />
              Conteudo Liberado
            </span>
          ) : (
            <span className='flex item-center gap-2 text-sm text-orange-500 font-medium'>
              <Lock size={20} />
              Em breve
            </span>
          )}

          <span className='text-xs rounded py-[0.125rem] px-2 text-white border border-green-300 font-bold'>
            {props.type === 'live' ? 'AO VIVO' : 'AULA PRATICA'}
          </span>
        </header>
        <strong className='text-grey mt-5 block'>{props.title}</strong>
      </div>
    </a>
  )
}