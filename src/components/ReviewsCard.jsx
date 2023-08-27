import { star } from "../assets/icons"

const ReviewsCard = ({key, imgUrl, customerName,rating,feedback}) => {
  return (
    <section key={key} className=" flex flex-col justify-center items-center ">
       <img src={imgUrl} className="w-[120px] h-[120px] rounded-full object-cover"/>
       <p className='mt-6 max-w-sm text-center info-text'>{feedback}</p>

       <div className=" flex justify-center items-center gap-2 mt-4">
         <img src={star} className="w-[24px] h-[24px] object-contain"/>
         <p className=" font-montserrat text-slate-gray text-xl">({rating})</p>
       </div>
       <h3 className='mt-1 font-palanquin text-3xl text-center font-bold'>{customerName}</h3>
    </section>
  )
}

export default ReviewsCard