import Navbar from "./components/Navbar"
import { Hero } from "./sections"
import CustomerReviews from "./sections/CustomerReviews"
import Footer from "./sections/Footer"
import PopularProducts from "./sections/PopularProducts"
import SepecialOffer from "./sections/SepecialOffer"
import Services from "./sections/Services"
import Subscribe from "./sections/Subscribe"
import SuperQuality from "./sections/SuperQuality"

function App() {

  return (
    <main className=" relative">
      <Navbar/>
      <section className="xl:padding-l wide:padding-r padding-b ">
        <Hero/>
      </section>
      <section className="padding">
         <PopularProducts/>
      </section>
      <section className="padding">
         <SuperQuality/>
      </section>
      <section className="padding-x py-10">
         <Services/>
      </section>
      <section className="padding">
         <SepecialOffer/>
      </section>
      <section className="bg-pale-blue padding">
         <CustomerReviews/>
      </section>
      <section className="padding-x sm:py-32 py-16 w-full">
         <Subscribe/>
      </section>
      <section className=" bg-black padding-x padding-t pb-8">
         <Footer/>
      </section>
    </main>
  )
}

export default App
