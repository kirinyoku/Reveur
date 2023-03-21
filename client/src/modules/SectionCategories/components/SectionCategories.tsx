import CategoryCard from './CategoryCard';

const SectionCategories = () => {
  return (
    <section className="grid gap-1 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 lg:h-[80svh]">
      <CategoryCard
        title="Sale"
        img="https://images.pexels.com/photos/818992/pexels-photo-818992.jpeg?auto=compress&cs=tinysrgb&w=1600"
      />
      <CategoryCard
        type="tall"
        title="Shoes"
        img="https://images.pexels.com/photos/1813947/pexels-photo-1813947.jpeg?auto=compress&cs=tinysrgb&w=1600"
      />
      <CategoryCard
        title="Women"
        img="https://images.pexels.com/photos/2036646/pexels-photo-2036646.jpeg?auto=compress&cs=tinysrgb&w=1600"
      />
      <CategoryCard
        title="Men"
        img="https://images.pexels.com/photos/1192609/pexels-photo-1192609.jpeg?auto=compress&cs=tinysrgb&w=1600"
      />
      <CategoryCard
        title="New Season"
        img="https://images.pexels.com/photos/2703202/pexels-photo-2703202.jpeg?auto=compress&cs=tinysrgb&w=1600"
      />
      <CategoryCard
        type="wide"
        title="Accessories"
        img="https://images.pexels.com/photos/1159670/pexels-photo-1159670.jpeg?auto=compress&cs=tinysrgb&w=1600"
      />
    </section>
  );
};

export default SectionCategories;
