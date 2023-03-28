import useFetch from '../../../hooks/useFetch';
import CardList from './CardList';
import { UPLOAD_IMG_URL } from '../../../utils/constants';
import { IProduct } from '../../../types/CardProps';

const SectionCategory = (props: { categoryId: number }) => {
  const { data } = useFetch<IProduct[]>(
    `/categories?populate=*&[filters][id][$eq]=${props.categoryId}`,
  );

  return (
    <section className="grow-[4] px-3 shrink basis-0">
      {data && (
        <img
          className="hidden md:inline w-full h-[25vh] object-cover object-top mb-8"
          src={UPLOAD_IMG_URL + data[0].attributes.img.data.attributes.url}
          alt={data[0].attributes.title}
        />
      )}
      <CardList categoryId={props.categoryId} />
    </section>
  );
};

export default SectionCategory;
