import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';
import PinterestIcon from '@mui/icons-material/Pinterest';
import ContactForm from './ContactForm';

const SectionContact = () => {
  return (
    <section className="grid place-items-center place-content-center gap-4 md:gap-12 md:grid-flow-col py-4 my-8 bg-blue-500 text-white">
      <h2 className="uppercase text-lg font-medium">be in touch with us</h2>
      <ContactForm />
      <ul className="flex gap-2">
        <li>
          <a href="/">
            <FacebookIcon />
          </a>
        </li>
        <li>
          <a href="/">
            <InstagramIcon />
          </a>
        </li>
        <li>
          <a href="/">
            <TwitterIcon />
          </a>
        </li>
        <li>
          <a href="/">
            <GoogleIcon />
          </a>
        </li>
        <li>
          <a href="/">
            <PinterestIcon />
          </a>
        </li>
      </ul>
    </section>
  );
};

export default SectionContact;
