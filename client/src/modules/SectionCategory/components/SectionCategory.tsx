import List from './CardList';
import { useParams } from 'react-router-dom';

const SectionCategory = () => {
  const categoryId = parseInt(useParams().id as string);

  return (
    <section className="grow-[4] px-3 shrink basis-0">
      <img
        className="hidden md:inline w-full h-[25vh] object-cover mb-8"
        src="https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600"
        alt=""
      />
      <List categoryId={categoryId} />
    </section>
  );
};

export default SectionCategory;
