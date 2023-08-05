import clsx from 'clsx'

const PlayerIndicator = (props: { highlight?: boolean }) => {
  return (
    <div
      class={clsx(
        'w-full max-w-[5rem] h-2 m-1 rounded-full duration-[200ms] east-in-out',
        props.highlight ? 'bg-ai transition-none' : 'bg-byakuroku transition-colors',
      )}
    ></div>
  )
}

export default PlayerIndicator
