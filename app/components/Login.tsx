'use client';

import { signIn } from 'next-auth/react';

export default function Login() {
  return (
    <button
      className="uppercase text-lg text-slate-700 hover:text-slate-950"
      onClick={() => signIn()}>
      Log in
    </button>
  );
}
