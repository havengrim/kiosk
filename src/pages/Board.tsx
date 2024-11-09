import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";  // Import AOS styles
import Navbar from "@/components/Navbar";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";
import images from "@/assets/images";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { FaHandHoldingHeart } from "react-icons/fa";
import { IoIosVideocam } from "react-icons/io";
import { FaClipboardQuestion } from "react-icons/fa6";
import { HiMiniNewspaper } from "react-icons/hi2";
import { IoPeopleSharp } from "react-icons/io5";
import { FaClipboardList } from "react-icons/fa6";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ModeToggle } from "@/components/modeToggle";
import SwiperSlider from "@/components/swiper-slide";
import Mission from "./Mission";

const Board = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <section className="h-full w-full">
        <Navbar />
        <div>
          <div>
            <Swiper
              modules={[Autoplay, Navigation, Pagination]}
              spaceBetween={30}
              slidesPerView={1}
              loop={true}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              navigation
              pagination={{ clickable: true }}
            >
              {[images.dswd3, images.dswd2, images.dswd1].map((img, index) => (
                <SwiperSlide key={index}>
                  <div
                    className="relative h-[30rem] bg-cover bg-center"
                    style={{ backgroundImage: `url(${img})` }}
                    data-aos="fade-up" // AOS animation on this element
                  >
                    <div className="absolute inset-0 bg-black opacity-50 dark:opacity-60"></div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div
            className="flex flex-col gap-2 justify-center items-center pb-14 dark:bg-gray-800 pt-14"
           
          >
            <h3 className="font-bold text-4xl leading-tight text-gray-700 dark:text-gray-100 text-center">
              How can we help you today?
            </h3>
            <p className="text-lg leading-relaxed text-gray-500 dark:text-gray-300">
              Let us know how we can help.
            </p>
            <div className="grid grid-cols-3 gap-5 mt-4">
              {[
                { icon: FaHandHoldingHeart, title: "Program Categories" },
                { icon: IoIosVideocam, title: "Featured Stories" },
                { icon: FaClipboardQuestion, title: "Commonly Asked" },
                { icon: HiMiniNewspaper, title: "Promotion & News" },
                { icon: IoPeopleSharp, title: "Directory Officials" },
                { icon: FaClipboardList, title: "Citizen's Charter" },
              ].map(({ icon: Icon, title }, index) => (
                <Card
                  key={index}
                  className="flex flex-col hover:shadow-lg cursor-pointer bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200"
                  data-aos="fade-up" // AOS animation for each card
                >
                  <CardHeader>
                    <Icon className="h-12 w-12 bg-indigo-900 p-2 rounded-md text-white" />
                  </CardHeader>
                  <CardContent>
                    <span className="font-semibold text-xl">{title}</span>
                  </CardContent>
                </Card>
              ))}
              <ModeToggle />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div
          className="flex flex-col gap-2 justify-center items-center bg-gray-100 dark:bg-gray-700 py-10"
        
        >
          <h3 className="font-bold text-4xl leading-tight text-gray-700 dark:text-gray-100 text-center">
            Frequently Asked Questions
          </h3>
          <p className="text-lg leading-relaxed text-gray-500 dark:text-gray-300">
            We're here to help with all your questions and answers in one place.
          </p>
          <div className="max-w-xl w-full mt-4">
            {/* FAQ 1 */}
            <Accordion type="multiple" className="w-full border-2 rounded-md dark:border-gray-600 dark:text-white dark:border-b-0">
              <AccordionItem value="item-1" className="ps-4">
                <AccordionTrigger>What is the DSWD's mandate?</AccordionTrigger>
                <AccordionContent>
                  The Department of Social Welfare and Development (DSWD) is responsible for protecting the rights of individuals, particularly the marginalized, and promoting their welfare through social welfare services and policies.
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            {/* FAQ 2 */}
            <Accordion type="multiple" className="w-full border-2 rounded-md dark:border-gray-600 dark:text-white dark:border-b-0">
              <AccordionItem value="item-2" className="ps-4">
                <AccordionTrigger>How can I apply for financial assistance from DSWD?</AccordionTrigger>
                <AccordionContent>
                  To apply for financial assistance from DSWD, you must visit your nearest DSWD field office and submit the necessary documents. Each region has specific requirements, so it's best to inquire directly at the local office or visit their official website.
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            {/* FAQ 3 */}
            <Accordion type="multiple" className="w-full border-2 rounded-md dark:border-gray-600 dark:text-white dark:border-b-0">
              <AccordionItem value="item-3" className="ps-4">
                <AccordionTrigger>What programs does DSWD offer to assist communities?</AccordionTrigger>
                <AccordionContent>
                  DSWD offers various programs such as the Pantawid Pamilyang Pilipino Program (4Ps), Sustainable Livelihood Program (SLP), and the Emergency Shelter Assistance (ESA) to support communities in need.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      <section className="py-14 dark:bg-gray-800">
        <div className="container-padding">
          <h3 className="font-bold text-4xl leading-tight text-gray-700 dark:text-gray-100 text-center">
            Gallery and Announcements
          </h3>
          <p className="text-lg leading-relaxed text-gray-500 dark:text-gray-300 text-center">
          Stay informed with the latest announcements and gallery updates. We're here to keep you in the loop!
          </p>
          <SwiperSlider />
        </div>
      </section>

      <section>
        <Mission />
      </section>
    </>
  );
};

export default Board;
