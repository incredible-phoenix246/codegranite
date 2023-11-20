'use client';

import useInView from '@/hooks/useInView';
import cn from '@/utils/tailwind';

import React from 'react';

import ClientSlider from './sliders/ClientSlider';

const Clients = () => {
  const clientRef = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(clientRef);
  return (
    <section
      ref={clientRef}
      className={cn(
        'w-full h-screen flex flex-col items-center ',
        isInView ? 'opacity-100 translate-y-0 delay-300 duration-1000' : ' opacity-0 translate-y-36',
      )}
    >
      <h2
        ref={clientRef}
        className={cn(
          'font-bold text-2xl sm:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl text-header',
          isInView ? 'opacity-100 translate-y-0 delay-300 duration-1000' : ' opacity-0 translate-y-36',
        )}
      >
        What Our Clients Say
      </h2>
      <div className="flex w-full justify-center  items-center relative mt-10 lg:mt-16 px-4 lg:px-8">
        <ClientSlider />
      </div>
    </section>
  );
};

export default Clients;
