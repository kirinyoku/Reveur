import React from 'react';

export default function Footer() {
  return (
    <footer className="pb-4 pt-8 px-8">
      <section className="flex flex-col justify-between h-64 md:h-72">
        <form className="flex flex-col gap-4">
          <label htmlFor="email" className="uppercase text-xl font-semibold">
            sign up for our newsletter
          </label>
          <input
            type="email"
            id="email"
            placeholder="enter your email here"
            className="text-black placeholder-slate-400 text-lg border-b border-slate-400 outline-none py-2 uppercase max-w-sm"
          />
        </form>
        <ul className="flex flex-wrap justify-center md:justify-start gap-4 text-sm md:text-lg uppercase">
          <li>
            <a href="/" target="_blank">
              tiktok
            </a>
          </li>
          <li>
            <a href="/" target="_blank">
              instagram
            </a>
          </li>
          <li>
            <a href="/">facebook</a>
          </li>
          <li>
            <a href="/" target="_blank">
              twitter
            </a>
          </li>
          <li>
            <a href="/" target="_blank">
              youtube
            </a>
          </li>
        </ul>
      </section>
    </footer>
  );
}
