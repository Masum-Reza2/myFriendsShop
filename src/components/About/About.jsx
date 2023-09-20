import './about.css'
import { FcContacts } from 'react-icons/fc';
import { BsFillTelephoneFill, BsFacebook, BsWhatsapp } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="py-5 px-2 space-y-5 aboutContainer text-white">

      <div>
        <h1 className="text-center font-bold text-2xl underline">About Us</h1>
        <p>At Rahul Digital Studio, we are more than just a shop; we are your trusted partner for all your stationery, mobile accessories, and photography needs. With a passion for quality and a commitment to excellence, we have been serving our community for more than 7 years.</p>
      </div>

      <div>
        <h1 className="text-center font-bold text-2xl underline">What We Offer</h1>

        <div className="space-y-2">
          <div>
            <p><span className="underline font-bold">Stationery Wonderland:</span> Explore our wide range of stationery supplies, from pens and pencils to notebooks and erasers. Whether you're a student, an artist, or a professional, we have the perfect tools to fuel your creativity and productivity.</p>
          </div>

          <div>
            <p><span className="underline font-bold">Mobile Accessories: :</span> Stay connected and charged on-the-go with our selection of mobile accessories, including chargers and other essential gadgets. We understand the importance of keeping your devices running smoothly, and we've got you covered.</p>
          </div>

          <div>
            <p><span className="underline font-bold">Photocopy Services: </span> Need high-quality photocopies for your documents or projects? Look no further! Our state-of-the-art photocopy services ensure crisp and clear reproductions in various sizes, all with a quick turnaround.</p>
          </div>

          <div>
            <p><span className="underline font-bold">Capturing Memories:  </span> Our photography services shine bright on your special occasions. As experienced photographers, we specialize in capturing the moments that matter most. Whether it's a wedding, a family gathering, or a corporate event, we'll create memories you'll cherish forever.</p>
          </div>

          <div>
            <p><span className="underline font-bold">Photo Frames:   </span> Turn your favorite moments into art with our exquisite photo frames. We offer a variety of styles and sizes to suit your unique taste and make your memories even more beautiful.</p>
          </div>
        </div>



      </div>

      <div>
        <h1 className="text-center font-bold text-2xl underline">Why Choose Us</h1>

        <div className="space-y-2">
          <div>
            <p><span className="underline font-bold">Quality Assurance:</span> We take pride in offering products and services of the highest quality, ensuring your satisfaction with every purchase.</p>
          </div>

          <div>
            <p><span className="underline font-bold">Friendly Service:</span> Our team is dedicated to providing you with personalized assistance and a warm, welcoming atmosphere.</p>
          </div>

          <div>
            <p><span className="underline font-bold">Competitive Prices: </span>  We believe in affordability without compromising on quality. You'll find competitive prices on all our products and services.</p>
          </div>

          <div>
            <p><span className="underline font-bold">Community Involvement:  </span> We are proud to be a part of the community and actively participate in making special occasions memorable through our photography services.</p>
          </div>
        </div>



      </div>

      <div>
        <h1 className="text-center font-bold text-2xl underline">Visit Us Today</h1>
        <p>We invite you to explore our shop and discover the wide array of products and services we offer. Whether you need stationery supplies, mobile accessories, photocopies, photography services, or beautiful photo frames, [Your Shop Name] is your one-stop destination.</p>
        <p className="font-semibold mt-2">Thank you for considering us as your trusted partner. We look forward to serving you and helping you create beautiful memories, one purchase at a time.</p>
      </div>

      <div className="space-y-2">
        <div className='flex items-center gap-2'>
          <h3 className="font-bold text-2xl">Connect With Us </h3>
          <FcContacts className='text-3xl' />
        </div>
        <p>Stay updated with the latest offers, product launches, and photography samples by following us on social media:</p>
        <ul className='space-y-1'>
          <div className='flex items-center gap-2'>
            <li>Phone Number : 01756154620</li>
            <BsFillTelephoneFill className='text-3xl' />
          </div>

          <div className='flex items-start md:items-center gap-2'>
            <BsFacebook className='text-6xl md:text-2xl' />
            <Link to={'https://www.facebook.com/profile.php?id=100090280965455'}>Facebook: https://www.facebook.com/profile.php?id=100090280965455</Link>
          </div>

          <div className='flex items-center gap-2'>
            <BsWhatsapp className='text-2xl' />
            <li>Whatsapp: 01756154620</li>
          </div>
        </ul>
      </div>

    </div>
  )
}

export default About