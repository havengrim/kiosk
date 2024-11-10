import images from "@/assets/images";
import Navbar from "@/components/Navbar";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

const Faq = () => {
  return (
    <section className="h-full w-full">
      <Navbar />
      <div
        className="relative h-[30rem] sm:h-[20rem] md:h-[25rem] lg:h-[30rem] bg-cover bg-center flex justify-center items-center"
        style={{ backgroundImage: `url(${images.dswd1})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50 dark:opacity-60"></div>
        <div className="relative z-10 text-center px-4 sm:px-8 lg:px-16">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2">
            Frequently Asked Questions
          </h1>
          <p className="text-lg md:text-xl lg:text-xl text-white opacity-60">
            We're here to help with all your questions and answers in one place.
          </p>
        </div>
      </div>

      {/* FAQ Accordion Section */}
      <div className="w-full max-w-3xl mx-auto mt-10 px-4 sm:px-6 lg:px-8">
        <Accordion type="single" collapsible>
          <AccordionItem value="question1" className="border p-1 rounded-md">
            <AccordionTrigger className="text-lg font-semibold">
              What services does the DSWD provide?
            </AccordionTrigger>
            <AccordionContent className="text-gray-600">
              The DSWD provides various services, including social welfare and development programs, emergency assistance, family and community support, and services aimed at improving the well-being of the poor and vulnerable sectors.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="question2" className="border p-1 rounded-md">
            <AccordionTrigger className="text-lg font-semibold">
              How can I apply for financial assistance from the DSWD?
            </AccordionTrigger>
            <AccordionContent className="text-gray-600">
              You can apply for financial assistance by visiting the nearest DSWD office or through its official online platforms. You may need to provide necessary documents, such as a valid ID and proof of income, to determine your eligibility.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="question3" className="border p-1 rounded-md">
            <AccordionTrigger className="text-lg font-semibold">
              Who qualifies for the Pantawid Pamilyang Pilipino Program (4Ps)?
            </AccordionTrigger>
            <AccordionContent className="text-gray-600">
              The 4Ps program is targeted toward indigent families with children up to 18 years old or pregnant women. Eligibility is assessed through a set of criteria to ensure assistance reaches those most in need.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="question4" className="border p-1 rounded-md">
            <AccordionTrigger className="text-lg font-semibold">
              How do I report child abuse or neglect?
            </AccordionTrigger>
            <AccordionContent className="text-gray-600">
              To report cases of child abuse or neglect, contact the DSWD’s hotline, or reach out to local authorities or social workers for immediate assistance. DSWD takes such cases seriously and provides support to ensure the safety and well-being of children.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="question5" className="border p-1 rounded-md">
            <AccordionTrigger className="text-lg font-semibold">
              How can I access the DSWD's disaster relief services?
            </AccordionTrigger>
            <AccordionContent className="text-gray-600">
              In times of natural disasters, DSWD coordinates relief efforts and provides immediate assistance such as food, shelter, and medical aid. Contact your local DSWD office or barangay officials to learn more about relief distribution and other support services.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
};

export default Faq;
