import ServicesCard from "../components/ServicesCard"
import { services } from "../constants"

const Services = () => {
  return (
    <section className=" flex max-container flex-wrap justify-center gap-9">
        {
            services.map((item)=>(
                <ServicesCard key={item.label} {...item} />
            ))
        }
    </section>
  )
}

export default Services