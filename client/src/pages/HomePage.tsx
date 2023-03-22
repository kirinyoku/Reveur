import Slider from '../modules/Slider';
import SectionProducts from '../modules/SectionProducts';
import { data } from '../utils/data';
import SectionCategories from '../modules/SectionCategories';
import SectionContact from '../modules/SectionContact/inedx';

const HomePage = () => {
  return (
    <main>
      <Slider />
      <SectionProducts type="featured" items={data} />
      <SectionCategories />
      <SectionProducts type="trending" items={data} />
      <SectionContact />
    </main>
  );
};

export default HomePage;
