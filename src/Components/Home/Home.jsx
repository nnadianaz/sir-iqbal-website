import Newhero from "./Herosection/Newhero";
import TopCategories from "./Categories/TopCategories";
import Features from "./Features/Features";
import Localoffers from "./Localoffers/Localoffers";
import Buynow from "./Buynow/Buynow";
import Destination from "./Destination/Destination"
import Testimonial from "./Testimonials/Testimonial";

import Popularmakes from "./PopularMakes/Popularmakes";

export default function Home() {

    return (
        <>
        <div>
           
            
        <Newhero />
      <TopCategories />
      <Features />
      <Localoffers />
      <Buynow />
      <Destination />
      <Testimonial />
      <Popularmakes />
      
        </div>
        </>
    )
}