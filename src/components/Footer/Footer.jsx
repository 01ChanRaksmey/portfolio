

const Footer = () => {
  return (
    <footer className="border-t border-borderLine bg-bgPrimary">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-6 text-sm text-textMuted sm:flex-row lg:px-12">
        <p>© {new Date().getFullYear()} Chan Raksmey</p>
        <a href="#home" className="font-medium text-accent transition-colors hover:text-accentHover">
          Back to top ↑
        </a>
      </div>
    </footer>
  )
}

export default Footer
