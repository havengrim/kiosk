import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Button } from "@/components/ui/button";
import { GoArrowRight } from "react-icons/go";
import images from "@/assets/images";

const Mission = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS
  }, []);

  return (
    <section className="py-24 bg-white dark:bg-gray-900 overflow-hidden" >
      <div className="container-padding">
        {/* Header Section */}
        <div className="flex justify-center items-center flex-col gap-2">
          <h3 className="font-bold text-4xl leading-tight text-gray-700 dark:text-gray-100 text-center">
            Mission and Vision
          </h3>
          <p className="text-lg leading-relaxed text-gray-500 dark:text-gray-300 text-center">
            Department of Social Welfare and Development - Philippines
          </p>
        </div>

        {/* Vision Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-16 mt-20">
          <div data-aos="fade-right">
            <h3 className="font-bold text-4xl leading-tight text-gray-700 dark:text-gray-200 uppercase">
              Vision
            </h3>
            <p className="text-lg mt-4 leading-relaxed text-gray-600 dark:text-gray-400">
              The DSWD envisions all Filipinos free from hunger and poverty, have equal access to opportunities, enabled by a fair, just, and peaceful society.
            </p>
            <Button className="rounded-full mt-4 bg-indigo-800 p-4 sm:p-8 text-base sm:text-lg flex items-center justify-center dark:text-gray-900 dark:bg-gray-100">
              Learn More <GoArrowRight className="ml-2 h-5 w-5 sm:ml-4 sm:h-10 sm:w-6" />
            </Button>
          </div>
          <div data-aos="fade-left">
            {/* Image with overlay */}
            <div className="relative group w-full h-auto rounded-lg shadow-lg overflow-hidden">
              <img src={images.vision} alt="DSWD Vision" className="w-full h-full object-cover rounded-xl" />
            </div>
          </div>
        </div>

        {/* Mission Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-16 mt-20">
          <div data-aos="fade-right" className="order-2 sm:order-1">
            {/* Image with overlay */}
            <div className="relative group w-full h-auto rounded-lg shadow-lg overflow-hidden">
              <img src={images.mission} alt="DSWD Mission" className="w-full h-full object-cover rounded-xl" />
            </div>
          </div>
          <div data-aos="fade-left" className="order-1 sm:order-2">
            <h3 className="font-bold text-4xl leading-tight text-gray-700 dark:text-gray-200 uppercase">
              Mission
            </h3>
            <p className="text-lg mt-4 leading-relaxed text-gray-600 dark:text-gray-400">
              To lead in the formulation, implementation, and coordination of social welfare and development policies and programs for and with the poor, vulnerable, and disadvantaged.
            </p>
            <Button className="rounded-full mt-4 bg-indigo-800  p-4 sm:p-8 text-base sm:text-lg flex items-center justify-center dark:text-gray-900 dark:bg-gray-100">
              Learn More <GoArrowRight className="ml-2 h-5 w-5 sm:ml-4 sm:h-10 sm:w-6" />
            </Button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Mission;
