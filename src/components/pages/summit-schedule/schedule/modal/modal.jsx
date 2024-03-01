import clsx from 'clsx';
import PropTypes from 'prop-types';
import React from 'react';
import ReactModal from 'react-modal';

import CalendarIcon from 'icons/calendar.inline.svg';
import CloseIcon from 'icons/close.inline.svg';
import { getHoursAndMinutes, getMonthAndDay } from 'utils/get-date-data';

const customStyles = {
  overlay: {
    backgroundColor: 'rgba(25, 25, 40, 0.6)',
    zIndex: '30',
  },
};

const Modal = ({ className, isOpen, closeModal, speakers, title, description, startsAt }) => (
  <ReactModal
    style={customStyles}
    isOpen={isOpen}
    contentLabel={null}
    ariaHideApp={false}
    bodyOpenClassName="overflow-hidden touch-none"
    className={clsx(
      'border-gray-2 scrollbar-hidden relative left-1/2 top-1/2 z-50 max-h-[90%] w-[95%] max-w-[800px] -translate-x-1/2 -translate-y-1/2 overflow-y-scroll rounded-lg border border-gray-90 bg-white p-8 md:py-5',
      className
    )}
    closeTimeoutMS={200}
    shouldCloseOnOverlayClick
    onRequestClose={closeModal}
  >
    <CloseIcon className="absolute right-5 top-4 h-4 w-4" role="button" onClick={closeModal} />
    <div className="flex h-full w-full flex-col">
      {speakers && (
        <ul className="mb-2.5 flex flex-wrap gap-x-5">
          {speakers.map(({ id, name }) => (
            <li key={id}>
              <span className="text-lg leading-none">{name}</span>
            </li>
          ))}
        </ul>
      )}
      <h2 className="text-5xl font-bold leading-tight lg:text-4xl md:text-xl">{title}</h2>
      <p className="mt-5 text-lg leading-normal md:text-base">{description}</p>
      <div className="mt-4 flex items-center">
        <CalendarIcon className="mr-3 h-5 w-5 text-primary-orange" />
        <time className="pr-2 font-semibold">{`${getMonthAndDay(startsAt)},`}</time>
        <time className="font-semibold">{getHoursAndMinutes(startsAt)}</time>
      </div>
    </div>
  </ReactModal>
);
Modal.propTypes = {
  className: PropTypes.string,
  isOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  speakers: PropTypes.array,
  title: PropTypes.string,
  description: PropTypes.string,
  startsAt: PropTypes.string,
};

Modal.defaultProps = {
  className: null,
  title: null,
  description: null,
  speakers: null,
  startsAt: null,
};

export default Modal;
