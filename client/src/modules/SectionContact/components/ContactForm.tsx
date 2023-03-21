import { useRef } from 'react';

const ContactForm = () => {
  const input = useRef<HTMLInputElement | null>(null);

  const sumbitForm = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    console.log(input?.current?.value);
  };

  return (
    <form className="grid grid-flow-col">
      <input
        id="email"
        ref={input}
        type="email"
        name="email"
        placeholder="Enter your email"
        className="p-1 border-none text-black"
      />
      <label className="hidden" htmlFor="email">
        Email
      </label>
      <button
        type="submit"
        onClick={sumbitForm}
        className="bg-gray-800 px-4 uppercase hover:bg-gray-700 transition-colors">
        join us
      </button>
    </form>
  );
};

export default ContactForm;
