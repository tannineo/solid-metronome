import clsx from 'clsx'

const PlayerIndicator = (props: { highlight?: boolean }) => {
  return (
    <div
      class={clsx(
        'w-full max-w-[5rem] h-2 m-1 rounded-full',
        props.highlight ? 'bg-ai' : 'bg-byakuroku',
      )}
    ></div>
  )
}

export default PlayerIndicator
