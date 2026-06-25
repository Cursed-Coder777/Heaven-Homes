"use client";

export default function ContactForm() {
  return (
    <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label
            htmlFor="name"
            className="mb-2 block text-xs tracking-[0.15em] text-white/30 uppercase"
          >
            Name
          </label>
          <input
            id="name"
            type="text"
            className="w-full border-b border-white/10 bg-transparent pb-3 text-lg font-light text-white transition-colors outline-none focus:border-white/50"
            placeholder="Your name"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="mb-2 block text-xs tracking-[0.15em] text-white/30 uppercase"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            className="w-full border-b border-white/10 bg-transparent pb-3 text-lg font-light text-white transition-colors outline-none focus:border-white/50"
            placeholder="your@email.com"
          />
        </div>
      </div>
      <div>
        <label
          htmlFor="subject"
          className="mb-2 block text-xs tracking-[0.15em] text-white/30 uppercase"
        >
          Subject
        </label>
        <input
          id="subject"
          type="text"
          className="w-full border-b border-white/10 bg-transparent pb-3 text-lg font-light text-white transition-colors outline-none focus:border-white/50"
          placeholder="Property inquiry"
        />
      </div>
      <div>
        <label
          htmlFor="message"
          className="mb-2 block text-xs tracking-[0.15em] text-white/30 uppercase"
        >
          Message
        </label>
        <textarea
          id="message"
          rows={5}
          className="w-full border-b border-white/10 bg-transparent pb-3 text-lg font-light text-white transition-colors outline-none focus:border-white/50"
          placeholder="Tell us about your requirements..."
        />
      </div>
      <button
        type="submit"
        className="inline-block rounded-full border border-white/20 px-12 py-4 text-sm tracking-[0.2em] uppercase transition-colors hover:border-white hover:text-white"
      >
        Send Inquiry
      </button>
    </form>
  );
}
