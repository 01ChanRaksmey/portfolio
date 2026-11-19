import { useState } from 'react'
import { FaCheckCircle } from 'react-icons/fa'
import { IoIosArrowRoundForward } from "react-icons/io";
import { MdErrorOutline } from 'react-icons/md'
import { IoMailOutline, IoLocationOutline, IoBriefcaseOutline } from 'react-icons/io5'
import { FaGithub, FaLinkedin } from 'react-icons/fa'


const ContactSection = () => {
    const [status, setStatus] = useState('')

    async function handleSubmit(event) {
      event.preventDefault()
      const form = event.currentTarget
      const messageField = form.elements.message
      const message = messageField.value.trim()

      if (!message) {
        setStatus('Please enter a message.')
        return
      }

      messageField.value = message
      setStatus('Sending...')

      try {
        const response = await fetch('https://formspree.io/f/mnpdzwaw', {
          method: 'POST',
          body: new FormData(form),
          headers: { Accept: 'application/json' },
        })

        if (response.ok) {
          form.reset()
          setStatus('Message sent! Thanks for reaching out.')
        } else {
          setStatus('Could not send your message. Please try again.')
        }
      } catch {
        setStatus('Could not send your message. Please try again.')
      }
    }
  return (
    <section id="contact" 
    className="grid place-items-center mx-auto w-full max-w-7xl px-6  py-8 sm:py-10 md:py-15 bg-Sage rounded-3xl scroll-mt-24 "
    >
      <article
        className="grid place-items-center gap-1.5 max-w-full mb-8 w-full pb-2.5"
      >
        <h3
          className="text-accent font-bold font-sans tracking-widest text-sm"
        >GET IN TOUCH</h3>
        <h1
          className="text-logo text-4xl md:text-5xl font-medium mb-3 font-display"
        >Let's talk.</h1>
        <p
          className="text-textMuted text-sm font-serif text-center tracking-wider md:tracking-widest"
        >Have a project in mind or want to collaborate?</p>
        <p
          className="text-textMuted text-sm font-serif text-center tracking-wider md:tracking-widest"
        >Send me a message and let’s create something useful.</p>
      </article>
      <article
        className="w-full grid sm:grid-cols-[1.4fr_0.8fr] mx-auto gap-3 border rounded-lg border-borderLine px-2 py-14"
      >
        <form action="https://formspree.io/f/mnpdzwaw" method="post" onSubmit={handleSubmit}
          className="px-4"
        >
          <label className="font-semibold text-textMain ">
            Your Name
            <input type="text" autoComplete="name" placeholder="Enter your name"
              name="name" 
              className="w-full rounded-lg border border-borderLine my-3 bg-bgPrimary px-4 py-3 text-textMain
               placeholder:text-textMuted focus:border-accent focus:outline-none " required
            />
          </label>
          <label className="font-semibold text-textMain ">
            Email address
            <input type="email" autoComplete="email" name="email" placeholder="Enter your Email" className="w-full rounded-lg border border-borderLine my-3 bg-bgPrimary px-4 py-3 text-textMain
               placeholder:text-textMuted focus:border-accent focus:outline-none " required />
          </label>
          <label className="font-semibold text-textMain " >
            Message
            <textarea name="message" maxLength={300} id="" placeholder="write your message..."
              className="w-full rounded-lg border border-borderLine bg-bgPrimary px-4 py-3 text-textMain
               placeholder:text-textMuted focus:border-accent focus:outline-none" required
            />
          </label>
          <button
            className="rounded-lg bg-accent px-5 py-3 font-semibold text-bgPrimary my-2 flex justify-center items-center gap-1"
            type="submit"
          >
            Send message <IoIosArrowRoundForward className=" text-2xl"/>
          </button>
          {status && (
            <p role="status" className="mt-3 text-center text-sm text-accent">
              <span className="inline-flex max-w-full items-start gap-1.5 text-left">
                {status.startsWith('Message sent') && (
                  <FaCheckCircle className="mt-0.5 shrink-0 text-green-600" aria-hidden="true" />
                )}
                {status.startsWith('Could not send') && (
                  <MdErrorOutline className="mt-0.5 shrink-0 text-red-500" aria-hidden="true" />
                )}
                <span className="min-w-0 wrap-break-word">{status}</span>
              </span>
            </p>
          )}
        </form>
        <article className="border-t border-borderLine pt-6 sm:border-l sm:border-t-0 sm:pt-0 sm:pl-6">
          <h2 className="mb-5 text-lg font-bold text-textMain">
            Connect with me
          </h2>

          <div className="space-y-5">
            <div className="flex items-start gap-3">
              <IoMailOutline className="mt-1 shrink-0 text-xl text-accent" />
              <div>
                <p className="text-sm text-textMuted">Email</p>
                <a
                  href="mailto:02chanraksmey@gmail.com"
                  className="break-all text-textMain hover:text-accent"
                >
                  02chanraksmey@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <IoLocationOutline className="mt-1 shrink-0 text-xl text-accent" />
              <div>
                <p className="text-sm text-textMuted">Location</p>
                <p className="text-textMain">Phnom Penh, Cambodia</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <IoBriefcaseOutline className="mt-1 shrink-0 text-xl text-accent" />
              <div>
                <p className="text-sm text-textMuted">Currently</p>
                <p className="text-textMain">Open to internships</p>
              </div>
            </div>
          </div>

          <div className="mt-6 flex gap-5">
            <a href="https://github.com/01ChanRaksmey" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-accent hover:underline">
              <FaGithub /> GitHub
            </a>
            <a href="https://www.linkedin.com/in/chan-raksmey-407243383" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-accent hover:underline">
              <FaLinkedin /> LinkedIn
            </a>
          </div>
        </article>
      </article>
    </section>
  )
}

export default ContactSection
