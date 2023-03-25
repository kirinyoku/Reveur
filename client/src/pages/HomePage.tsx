import Slider from '../modules/Slider';
import SectionProducts from '../modules/SectionProducts';
import SectionCategories from '../modules/SectionCategories';
import SectionContact from '../modules/SectionContact/inedx';

const HomePage = () => {
  return (
    <main>
      <Slider />
      <SectionProducts type="featured" />
      <SectionCategories />
      <SectionProducts type="trending" />
      <SectionContact />
    </main>
  );
};

export default HomePage;
