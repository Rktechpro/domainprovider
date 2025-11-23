import ClientTestimonials from "../ClientTestimonials";
import DomainPage from "../DomainPage";
import Hero from "../Hero";
import Secondhero from "../Secondhero";
import SuccessStories from "../SuccessStories";

const Home = () => {
  return (
    <div>
      <Hero />
      <div>
        <Secondhero />
      </div>
      <div>
        <DomainPage />
      </div>
      <div>
        <SuccessStories />
      </div>
      <div>
        <ClientTestimonials />
      </div>
    </div>
  );
};

export default Home;
