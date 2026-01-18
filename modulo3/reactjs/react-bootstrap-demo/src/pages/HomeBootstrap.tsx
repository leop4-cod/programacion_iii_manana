import BsCarousel from "../components/bs/BsCarousel";
import BsHero from "../components/bs/BsHero";
import BsFeatures from "../components/bs/BsFeatures";
import BsNewsletter from "../components/bs/BsNewsletter";

export default function HomeBootstrap() {
    return (
        <>
            <BsCarousel />
            <BsHero />
            <BsFeatures />
            <BsNewsletter />
        </>
    );
}