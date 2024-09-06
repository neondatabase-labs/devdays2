'use client';

import Image from 'next/image';
import PropTypes from 'prop-types';
import Countdown from 'react-countdown';

import SubscriptionForm from 'components/shared/subscription-form';
import { HUBSPOT_DEVELOPER_DAYS_3_FORM_ID } from 'constants/forms';
import illustration from 'images/deploy/illustration.jpg';

const renderer = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a completed state
    return <div>Event has started!</div>;
  }
  // Render a countdown
  return (
    <span className="text-base font-medium leading-none text-white">
      <span className="w-10 h-8 rounded inline-flex justify-center items-center bg-[#0C0D0D]">
        {days.toString().padStart(2, '0')}d
      </span>{' '}
      :{' '}
      <span className="w-10 h-8 rounded inline-flex justify-center items-center bg-[#0C0D0D]">
        {hours.toString().padStart(2, '0')}h
      </span>{' '}
      :{' '}
      <span className="w-10 h-8 rounded inline-flex justify-center items-center bg-[#0C0D0D]">
        {minutes.toString().padStart(2, '0')}m
      </span>{' '}
      :{' '}
      <span className="w-10 h-8 rounded inline-flex justify-center items-center bg-[#0C0D0D]">
        {seconds.toString().padStart(2, '0')}s
      </span>
    </span>
  );
};

const CountdownTimer = () => {
  const targetDate = new Date('2024-11-02T18:00:00Z').getTime();
  const now = new Date().getTime();
  const difference = targetDate - now;

  return <Countdown date={Date.now() + difference} renderer={renderer} />;
};

// eslint-disable-next-line no-unused-vars
const EmailRegistrationStep = ({ onSuccessCallback }) => (
  <div className="relative pt-[440px]">
    <Image
      className="absolute w-[1279px] h-auto left-1/2 -translate-x-1/2 -top-[88px]"
      src={illustration}
      alt="Neon Deploy"
      width={1279}
      height={808}
    />
    <div className="flex flex-col justify-center text-center items-center relative z-10">
      <div className="relative flex flex-col items-center">
        <CountdownTimer />
        <div className="relative overflow-hidden mt-3.5">
          <time
            className="relative text-[32px] tracking-tight leading-[1.2] text-white"
            dateTime="2024-11-02T10:00:00Z"
          >
            November 2nd, 2024 <br /> 10:00 AM PT
          </time>
          {/* <span className="absolute w-[214px] h-[60px] bottom-[calc(100%-10px)] left-1/2 -translate-x-1/2 bg-[#66B2DD] rounded-full blur-[30px] opacity-70 pointer-events-none mix-blend-multiply" /> */}
        </div>
      </div>
      <p className="font-light text-lg leading-[1.3] mt-3 text-gray-60 max-w-[448px]">
        Join us for presentations about Postgres, scalability, AI, and using Neon with modern
        developer tools.
      </p>
      <SubscriptionForm
        className="mt-8 md:mt-7"
        successText="Thanks for registering!"
        submitButtonText="Register"
        size="sm"
        localStorageKey="submittedEmailDeveloperDays3Form"
        formId={HUBSPOT_DEVELOPER_DAYS_3_FORM_ID}
      />
    </div>
  </div>
);

EmailRegistrationStep.propTypes = {
  onSuccessCallback: PropTypes.func,
};

export default EmailRegistrationStep;
