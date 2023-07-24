import customer1Image from './assets/customer1.jpg';
import customer2Image from './assets/customer2.jpg';
import customer3Image from './assets/customer3.jpg';
import customer4Image from './assets/customer4.jpg';
import './Testimonials.css';
import TestimonialCard from './TestimonialCard';

const customers = [
  {
    fullName: 'Rino Kitimbo',
    image: customer1Image,
    rating: [1, 1, 1, 1, 0.5],
    says: `Seriously cannot stop thinking about the Turkish Mac n' Cheese!!`,
  },
  {
    fullName: 'Brandon Elijah',
    image: customer2Image,
    rating: [1, 1, 1, 1, 1],
    says: `We had such a great time celebrating my grandmothers birthday!`,
  },
  {
    fullName: 'Daniel Okello',
    image: customer3Image,
    rating: [1, 1, 1, 1, 0.5],
    says: `Seriously cannot stop thinking about the Turkish Mac n' Cheese!!`,
  },
  {
    fullName: 'Samuel Okwalinga',
    image: customer4Image,
    rating: [1, 1, 1, 1],
    says: `Best Feta Salad in town. Flawless every time!`,
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="container grid">
        <h2>What our customers say</h2>
        {customers.map((customer, index) =>
          <TestimonialCard key={index} customer={customer} />
        )}
      </div>
    </section>
  );
};

export default Testimonials;
