import Link from 'next/link';
import Image from 'next/image';
import FullPageScroll from './components/FullPageScroll';
import FooterSlide from './components/FooterSlide';

export default function Home() {
  const slides = [
    {
      img: '/slides/1.webp',
      title: 'new season',
      url: '/new-season',
    },
    {
      img: '/slides/2.webp',
      title: 'trending',
      url: '/trending',
    },
    {
      img: '/slides/3.webp',
      title: 'featured',
      url: '/featured',
    },
  ];

  const content = slides.map((slide, index) => (
    <Link key={index} href={slide.url} className="w-full relative">
      <Image
        src={slide.img}
        className="w-full h-screen object-cover hover:scale-105 transition-transform"
        alt={`${index} slide`}
        width={1920}
        height={1080}
        priority={true}
      />
      <h2 className="absolute z-50 bottom-10 right-[50%] translate-x-[50%] bg-white uppercase tracking-widest py-2 px-4">
        {slide.title}
      </h2>
    </Link>
  ));

  content.push(<FooterSlide key={content.length} />);

  return (
    <main className="relative w-screen overflow-x-hidden">
      <FullPageScroll>{content}</FullPageScroll>
    </main>
  );
}
