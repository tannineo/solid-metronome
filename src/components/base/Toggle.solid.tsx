/** @jsxImportSource solid-js/h */
// cannot use content-[''] in unocss, which is different from tailwind
// see https://github.com/unocss/unocss/issues/124#issuecomment-981532905

const Toggle = (props: { checked: boolean; onChange: (toggle: boolean) => any }) => {
  return (
    <input
      class='appearance-none relative bg-shironeri w-10 h-5 rounded-full m-2 outline-none ring-none transition-colors ease-in-out duration-300 cursor-pointer'
      u-after='block content-empty z-[1] absolute top-[0.15rem] left-[0.175rem] w-4 h-4 bg-gray-400 rounded-full transition-colors transition-transform'
      u-checked='bg-byakuroku after:translate-x-[1.15rem] after:bg-ai'
      type='checkbox'
      role='switch'
      checked={props.checked}
      onChange={e => props.onChange(e.target.checked)}
    />
  )
}

export default Toggle
