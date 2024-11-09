import Navbar from "@/components/Navbar";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
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
  } from "@/components/ui/accordion"
const Board = () => {
  return (
    <>
    <section className="h-full w-full">
      <Navbar />
      <div>
        <div className="pb-14">
          <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 5000, // 5 seconds delay
              disableOnInteraction: false, // keeps autoplay running even when user interacts
            }}
            navigation // Enables navigation (prev/next buttons)
            pagination={{ clickable: true }} // Enables pagination (dots)
          >
            <SwiperSlide>
              <div className="relative h-[30rem] bg-cover bg-center rounded-lg" style={{ backgroundImage: `url(${images.dswd3})` }}>
                <div className="absolute inset-0 bg-black opacity-50 rounded-lg"></div> {/* Overlay */}
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative h-[30rem] bg-cover bg-center rounded-lg" style={{ backgroundImage: `url(${images.dswd2})` }}>
                <div className="absolute inset-0 bg-black opacity-50 rounded-lg"></div> {/* Overlay */}
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative h-[30rem] bg-cover bg-center rounded-lg" style={{ backgroundImage: `url(${images.dswd1})` }}>
                <div className="absolute inset-0 bg-black opacity-50 rounded-lg"></div> {/* Overlay */}
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="flex flex-col gap-2 justify-center items-center pb-14">
            <h3 className="font-bold text-4xl leading-tight text-gray-700 text-center">How can we help you today?</h3>
            <p className="text-lg leading-relaxed text-gray-500">Let us know how we can help.</p>
            <div className="grid grid-cols-3 gap-5 mt-4">
                <Card className="flex flex-col hover:shadow-lg cursor-pointer ">
                    <CardHeader>
                        <FaHandHoldingHeart className="h-12 w-12 bg-indigo-900 p-2 rounded-md text-white" />
                    </CardHeader>
                    <CardContent>
                        <span className="font-semibold text-xl">Program Categories</span>
                    </CardContent>
                </Card>
                <Card className="flex flex-col hover:shadow-lg cursor-pointer ">
                    <CardHeader>
                        <IoIosVideocam className="h-12 w-12 bg-indigo-900 p-2 rounded-md text-white" />
                    </CardHeader>
                    <CardContent>
                        <span className="font-semibold text-xl">Featured Stories</span>
                    </CardContent>
                </Card>
                <Card className="flex flex-col hover:shadow-lg cursor-pointer ">
                    <CardHeader>
                        <FaClipboardQuestion className="h-12 w-12 bg-indigo-900 p-2 rounded-md text-white"  />
                    </CardHeader>
                    <CardContent>
                        <span className="font-semibold text-xl">Commonly Asked</span>
                    </CardContent>
                </Card>
                <Card className="flex flex-col hover:shadow-lg cursor-pointer ">
                    <CardHeader>
                        <HiMiniNewspaper className="h-12 w-12 bg-indigo-900 p-2 rounded-md text-white" />
                    </CardHeader>
                    <CardContent>
                        <span className="font-semibold text-xl">Promotion & News</span>
                    </CardContent>
                </Card>
                <Card className="flex flex-col hover:shadow-lg cursor-pointer ">
                    <CardHeader>
                        <IoPeopleSharp  className="h-12 w-12 bg-indigo-900 p-2 rounded-md text-white" />
                    </CardHeader>
                    <CardContent>
                        <span className="font-semibold text-xl">Directory Officials</span>
                    </CardContent>
                </Card>
                <Card className="flex flex-col hover:shadow-lg cursor-pointer">
                    <CardHeader>
                        <FaClipboardList className="h-12 w-12 bg-indigo-900 p-2 rounded-md text-white" />
                    </CardHeader>
                    <CardContent>
                        <span className="font-semibold text-xl">Citizen's Charter</span>
                    </CardContent>
                </Card>
            </div>
        </div>
      </div>
    </section>

    <section>
        <div className="flex flex-col gap-2 justify-center items-center bg-gray-100 py-10">
            <h3 className="font-bold text-4xl leading-tight text-gray-700 text-center">Frequently Asked Questions</h3>
            <p className="text-lg leading-relaxed text-gray-500">We're here to help with all your questions and answers in one place.</p>
            <div className="max-w-xl w-full mt-4">
                <Accordion type="multiple" className="w-full border-2 rounded-md">
                    <AccordionItem value="item-1" className="ps-4">
                        <AccordionTrigger>Is it accessible?</AccordionTrigger>
                        <AccordionContent>
                        Yes. It adheres to the WAI-ARIA design pattern.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
                <Accordion type="multiple" className="w-full border-2 rounded-md">
                    <AccordionItem value="item-1" className="ps-4">
                        <AccordionTrigger>Is it accessible?</AccordionTrigger>
                        <AccordionContent>
                        Yes. It adheres to the WAI-ARIA design pattern.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
                <Accordion type="multiple" className="w-full border-2 rounded-md">
                    <AccordionItem value="item-1" className="ps-4">
                        <AccordionTrigger>Is it accessible?</AccordionTrigger>
                        <AccordionContent>
                        Yes. It adheres to the WAI-ARIA design pattern.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
                <Accordion type="multiple" className="w-full border-2 rounded-md">
                    <AccordionItem value="item-1" className="ps-4">
                        <AccordionTrigger>Is it accessible?</AccordionTrigger>
                        <AccordionContent>
                        Yes. It adheres to the WAI-ARIA design pattern.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </div>
    </section>
    </>
  );
}

export default Board;
