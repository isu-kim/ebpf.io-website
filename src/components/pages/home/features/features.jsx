import clsx from 'clsx';
import PropTypes from 'prop-types';
import React from 'react';

import networkingSvg from './images/networking.svg';
import observabilitySvg from './images/observability.svg';
import securitySvg from './images/security.svg';
import tracingProfilingSvg from './images/tracing-profiling.svg';

const images = {
  networking: networkingSvg,
  observability: observabilitySvg,
  tracingAndProfiling: tracingProfilingSvg,
  security: securitySvg,
};

const Features = ({ title, items }) => (
  <section className="features safe-paddings mt-32 lg:mt-24 md:mt-20">
    <div className="container">
      <h2 className="heading-8xl text-center font-semibold leading-dense">{title}</h2>
      <ul className="mt-14 grid grid-cols-2 gap-8 lg:mt-12 lg:gap-7 md:mt-10 md:grid-cols-1 md:gap-6">
        {items.map(({ image, title, description, bgClassName }, index) => (
          <li className="flex rounded-lg sm:flex-col" key={index}>
            <div
              className={clsx(
                bgClassName,
                'flex shrink-0 rounded-l-lg sm:rounded-t-lg sm:rounded-bl-none'
              )}
            >
              <img
                className="lg:w-[184px] lg:object-cover md:w-40 sm:mx-auto sm:w-[264px]"
                src={images[image]}
                alt={title}
                width={264}
                height={264}
                loading="lazy"
              />
            </div>

            <div className="rounded-r-lg border border-l-0 border-gray-90 p-8 lg:p-6 sm:rounded-bl-lg sm:rounded-tr-none sm:border-l sm:border-t-0">
              <h3 className="font-sans text-3xl font-semibold leading-snug lg:text-2xl">{title}</h3>
              <p className="mt-3 lg:mt-2.5 lg:text-sm md:text-base">{description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

Features.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      bgClassName: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Features;
