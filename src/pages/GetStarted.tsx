import { useEffect } from 'react';
import Lottie from 'lottie-react';
import animationData from '@/assets/ai-animation.json';
import { Button } from '@/components/ui/button';
import voice from '@/assets/voice.mp3';

const GetStarted = () => {
  useEffect(() => {
    // Set a delay of 3 seconds before playing the audio
    const timer = setTimeout(() => {
      const audio = new Audio(voice);
      audio.play();
    }, 3000); // 3000ms = 3 seconds

    // Cleanup the timer when the component unmounts
    return () => clearTimeout(timer);
  }, []); // Empty dependency array means it runs once when the component mounts

  return (
    <section>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center h-screen text-center -mt-10">
          <Lottie
            animationData={animationData}
            loop={true}
            className="w-full max-w-xs md:max-w-md lg:max-w-lg"
          />
          <div className="sm:-mt-20 -mt-10">
            <h1 className="text-xl md:text-3xl font-semibold text-center">
              How can we help you today?
            </h1>
            <p className="text-sm md:text-base max-w-md mt-2 text-gray-600">
              We're here to assist you. Let us help you get started with ease and provide the support you need.
            </p>
            <Button className="rounded-full bg-blue-500 sm:px-6 sm:py-8 p-4 text-sm md:text-base sm:font-semibold font-medium mt-4 hover:bg-blue-600" size={'lg'}>
              Let's Get Started
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default GetStarted;
