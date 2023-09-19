/** @jsxImportSource solid-js/h */
import clsx from 'clsx'

import styles from './BlockRadioWithImage.module.css'

const BlockRadioWithImage = (props: {
  name: string
  value: string
  imageURL: string
  checked?: boolean
  onClick?: () => any
}) => {
  return (
    <input
      type='radio'
      name={props.name}
      value={props.value}
      class={clsx(
        'appearance-none w-12 h-12 m-1 bg-shironeri rounded-md outline-none cursor-pointer transition-all duration-300 ease-in-out after:block',
        styles.radio,
      )}
      u-flex='~ items-center justify-center'
      u-checked='bg-byakuroku'
      checked={props.checked}
      onClick={props.onClick}
      style={`--content-image: url('${props.imageURL}')`}
    />
  )
}

export default BlockRadioWithImage
