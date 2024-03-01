import React, { useState } from 'react';

import Button from 'components/shared/button/button';
import FormModal from 'components/shared/form-modal';
import { hubspotFormId } from 'data/shared/summit-2023-navigation';

const Banner = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = (e) => {
    e.stopPropagation();
    setIsOpen(false);
  };

  return (
    <section className="relative mt-40 md:mt-16 sm:mt-14">
      <div className="container">
        <div className="relative flex flex-row items-center justify-center space-x-10 rounded-lg bg-gray-98 px-6 py-[42px] md:flex-col md:space-x-0 md:space-y-6 md:py-6">
          <h2 className="heading-6xl text-left font-semibold leading-tight text-black md:text-center">
            Find all of the recordings on YouTube
          </h2>
          <Button
            to="https://www.youtube.com/playlist?list=PLDg_GiBbAx-l4D4oKbscJhPFKv2oqPcD_"
            className="rounded-lg leading-tight xs:w-full"
            theme="black-filled"
            size="md"
            target="_blank"
          >
            Watch now
          </Button>
        </div>
      </div>
      <FormModal
        title="Register for eBPF Summit"
        isOpen={isOpen}
        closeModal={closeModal}
        hubspotFormId={hubspotFormId}
      />
    </section>
  );
};

export default Banner;
