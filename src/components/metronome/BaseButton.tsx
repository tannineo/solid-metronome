import clsx from 'clsx'
import { ComponentProps, ParentProps, children } from 'solid-js'

const BaseButton = ({
  onClick,
  mini,
  ...props
}: ParentProps<{ onClick?: () => any; mini?: boolean }>) => {
  const c = children(() => props.children)

  return (
    <button
      class={clsx(
        'rounded-full bg-shironeri m-4 overflow-hidden text-byakuroku hover:text-ai',
        mini ? 'w-10 h-10' : 'w-20 h-20',
      )}
      u-flex='~ items-center justify-center'
      onClick={onClick}
    >
      {c()}
    </button>
  )
}

export default BaseButton
