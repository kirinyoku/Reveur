'use client';

import ky from 'ky';
import { toast } from '@/ui/toast';
import { Button } from '@/ui/Button';
import { FormEvent, useRef, useState } from 'react';

type Response = {
  email?: string;
  message?: string;
};

export default function Newsletter() {
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const emailRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    setLoading(true);
    e.preventDefault();
    if (emailRef.current?.value) {
      const email = emailRef.current.value;
      const res: Response = await ky.post('/api/newsletter', { json: email }).json();
      if (res?.email) {
        setMessage('');
        emailRef.current!.value = '';
        toast({
          type: 'success',
          message: 'Thank you',
        });
        setLoading(false);
      } else if (res?.message) {
        setMessage(res.message);
        toast({
          type: 'error',
          message: res.message,
        });
        setLoading(false);
      }
    }
  };

  return (
    <main className="mt-24 md:mt-48">
      <section className="p-4 md:p-28">
        <form className="grid max-w-2xl" onSubmit={handleSubmit}>
          <h2 className="uppercase text-lg md:text-2xl font-medium mb-2">newsletter</h2>
          <p className="text-slate-600 mb-8">
            Enter your email and get the latest news and trends every week.
          </p>
          <input
            className="border-b border-slate-500 placeholder:uppercase text-lg outline-none"
            type="email"
            placeholder="email"
            required
            ref={emailRef}
          />
          {message && <p className="text-red-500 text-sm mt-1">{message}</p>}
          <fieldset className="flex gap-2 items-center mt-2 mb-8">
            <input type="checkbox" id="privat-policy" required />
            <label htmlFor="privat-policy" className="text-sm">
              I accept the{' '}
              <a
                className="underline"
                href="https://static.zara.net/static/pdfs/CA/privacy-policy/privacy-policy-en_CA-20210801.pdf">
                privacy policy
              </a>
            </label>
          </fieldset>
          <Button variant="default" type="submit" isLoading={loading}>
            submit
          </Button>
        </form>
      </section>
    </main>
  );
}
