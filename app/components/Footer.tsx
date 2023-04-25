import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="py-8">
      <section className="flex flex-col justify-between h-64 md:h-72">
        <h2 className="text-2xl bg-black w-full  text-white text-center p-2">
          <Link href="/newsletter">SIGN UP FOR OUR NEWSLETTER</Link>
        </h2>
        <ul className="flex flex-wrap justify-center gap-4 text-sm md:text-lg uppercase">
          <li>
            <a href="https://www.tiktok.com" target="_blank">
              tiktok
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com" target="_blank">
              instagram
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com">facebook</a>
          </li>
          <li>
            <a href="https://twitter.com" target="_blank">
              twitter
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com" target="_blank">
              youtube
            </a>
          </li>
        </ul>
      </section>
    </footer>
  );
}
