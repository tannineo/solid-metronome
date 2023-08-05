import clsx from 'clsx'
import { ComponentProps, ParentProps, children } from 'solid-js'

const BaseButton = (props: ParentProps<{ onClick?: () => any; mini?: boolean }>) => {
  const c = children(() => props.children)

  return (
    <button
      class={clsx(
        'rounded-full bg-shironeri m-4 overflow-hidden text-byakuroku hover:text-ai',
        props.mini ? 'w-10 h-10' : 'w-20 h-20',
      )}
      u-flex='~ items-center justify-center'
      u-active='transition-all ease-in-out duration-100 ring-ai ring-offset-6 ring-offset-transparent ring-4'
      onClick={props.onClick}
    >
      {c()}
    </button>
  )
}

export default BaseButton
