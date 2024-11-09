import { useEffect } from 'react';
import Lottie from 'lottie-react';
import animationData from '@/assets/ai-animation.json';
import { Button } from '@/components/ui/button';
import voice from '@/assets/voice.mp3';
import { Link } from 'react-router-dom';

const GetStarted = () => {
  useEffect(() => {
    const audio = new Audio(voice);
    audio.play();
  }, []); // Only play audio on the first render

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center -mt-40">
        <div className="flex flex-col items-center">
          <Lottie
            animationData={animationData}
            loop={true}
            className="w-full max-w-2xl md:max-w-3xl lg:max-w-4xl"
          />
          <div className="-mt-16">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-800">
              How can I help you today?
            </h1>
            <p className="text-2xl md:text-4xl lg:text-4xl max-w-4xl mt-8 text-gray-600">
              I'm here to assist you. Let me help you get started with ease and provide the support you need.
            </p>
            <Link to='/board'>
              <Button
                className="rounded-full bg-blue-500 text-white px-12 p-16 text-2xl md:text-4xl lg:text-5xl font-semibold mt-10 hover:bg-blue-600 transition-all"
                size="lg"
              >
                Let's Get Started
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default GetStarted;
