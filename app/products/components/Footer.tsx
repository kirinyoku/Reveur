'use client';

import ky from 'ky';
import React from 'react';
import Button from '@/ui/Button';
import { FormEvent, useRef, useState } from 'react';

export default function Footer() {
  const [message, setMessage] = useState('');
  const emailRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (emailRef.current?.value) {
      const email = emailRef.current.value;
      const res: any = await ky.post('/api/newsletter', { json: email }).json();
      if (res?.email) {
        setMessage('');
        emailRef.current!.value = '';
      } else {
        setMessage(res.message);
      }
    }
  };

  return (
    <footer className="pb-4 pt-8 px-8">
      <section className="flex flex-col justify-between h-64 md:h-72">
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <label htmlFor="email" className="uppercase text-xl font-semibold">
            sign up for our newsletter
          </label>
          <input
            type="email"
            id="email"
            placeholder="enter your email here"
            className="text-black placeholder-slate-400 text-lg border-b border-slate-400 outline-none py-2 uppercase max-w-sm"
          />
          {message && <p className="text-red-500 text-sm mt-1">{message}</p>}
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
