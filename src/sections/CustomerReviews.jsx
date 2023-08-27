import ReviewsCard from "../components/ReviewsCard";
import { reviews } from "../constants";

const CustomerReviews = () => {
  return (
    <section className="max-container">
      <h3 className="font-palanquin text-center text-4xl font-bold">
        What Our
        <span className="text-coral-red"> Customers </span>
        Say?
      </h3>
      <p className=" m-auto text-center info-text mt-4 max-w-lg ">
        Hear genuine stories from our satisfied customers about their
        exceptional experiences with us.
      </p>
      <div className=" mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14'">
        {reviews.map((review) => (
          <ReviewsCard
            key={review.customerName}
            customerName={review.customerName}
            imgUrl={review.imgURL}
            rating ={review.rating}
            feedback ={review.feedback}
          />
        ))}
      </div>
    </section>
  );
};

export default CustomerReviews;
