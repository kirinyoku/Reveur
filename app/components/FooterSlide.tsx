import Link from 'next/link';

export default function FooterSlide() {
  return (
    <section className="flex flex-col items-center gap-12 md:gap-36 uppercase font-thin w-full translate-y-[50%]">
      <h2 className="text-2xl bg-black w-full  text-white text-center p-2">
        <Link href="/newsletter">SIGN UP FOR OUR NEWSLETTER</Link>
      </h2>
      <ul className="flex flex-wrap justify-center gap-4 text-sm md:text-lg">
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
      <ul className="flex flex-wrap justify-center gap-4 text-sm">
        <li>
          <a href="/">cookies settings</a>
        </li>
        <li>
          <a href="/">privacy and cookies policy</a>
        </li>
        <li>
          <a href="/">terms of use</a>
        </li>
      </ul>
    </section>
  );
}
