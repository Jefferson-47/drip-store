const Section = ({ title, titleAlign, link, children, titleSize, titleColor }) => {
  const align = titleAlign || 'left'
  const size = titleSize || 'text-2xl md:text-3xl'
  const color = titleColor || 'text-neutral-800'

  return (
    <section className="mb-12 px-4 md:px-8">
      <div className={`flex items-center mb-6 ${align === 'center' ? 'justify-center' : 'justify-between'}`}>
        <h2 className={`${size} font-semibold ${color} ${align === 'center' ? 'text-center w-full' : ''}`}>
          {title}
        </h2>
        {link && align !== 'center' && (
          <a href={link.href} className="flex items-center gap-1 text-pink-600 text-sm font-medium ml-auto">
            {link.text}
          </a>
        )}
      </div>
      <div>{children}</div>
    </section>
  )
}

export default Section