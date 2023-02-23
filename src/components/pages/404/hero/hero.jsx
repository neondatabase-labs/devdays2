'use client';

import Image from 'next/image';
import { usePathname } from 'next/navigation';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

import Button from 'components/shared/button';
import Container from 'components/shared/container';
import CursorTrackingWrapper from 'components/shared/cursor-tracking-wrapper';
import Link from 'components/shared/link';
import DesktopBlankTicketIllustration from 'images/developer-days-2/blank-ticket-desktop.svg';
import MobileBlankTicketIllustration from 'images/developer-days-2/blank-ticket-mobile.svg';

import illustration from './images/illustration.png';

const CTA = ({ isDocsPage = false }) =>
  isDocsPage ? (
    <div className="flex w-full flex-col">
      <span className="h-px w-full bg-gray-4" />
      <Link className="mt-8 self-start" size="lg" theme="black-primary-1" to="/">
        Back to home
      </Link>
    </div>
  ) : (
    <Button className="mt-11 self-start lg:mt-8 sm:w-full" size="md" theme="primary" to="/">
      Back to Home
    </Button>
  );

CTA.propTypes = {
  isDocsPage: PropTypes.bool,
};

const Skeleton = () => (
  <div className="mt-6 flex w-full flex-col items-start justify-center space-y-4">
    <span className="skeleton max-w-[410px]" />
    <span className="skeleton max-w-[260px]" />
    <span className="skeleton max-w-[410px]" />
  </div>
);

const Hero = ({ isTicketPage = false }) => {
  const pathname = usePathname();
  const [isDocsPage, setIsDocsPage] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsDocsPage(pathname.includes('/docs/'));
    setIsLoading(false);
  }, [pathname]);

  return (
    <section className="min-h-[inherit] text-white md:py-14 xs:pt-10">
      <Container
        className="grid min-h-[inherit] grid-cols-12 items-start gap-x-8 md:gap-x-0 md:gap-y-4"
        size="md"
      >
        <div className="col-start-2 col-end-6 flex flex-col self-center 2xl:col-start-1 md:col-span-full">
          <h1 className="text-[58px] font-bold leading-none xl:text-5xl xl:leading-none md:text-4xl">
            Ooops!
            <br /> {isTicketPage ? 'Ticket' : 'Page'} not found...
          </h1>
          <p className="t-xl mt-7 lg:mt-8">
            Sorry, the page you are looking for doesn’t exist or has been moved.
          </p>

          {isLoading ? <Skeleton /> : <CTA isDocsPage={isDocsPage} />}
        </div>

        <div className="col-start-6 col-end-12 self-center 2xl:col-end-13 md:col-span-full">
          {isTicketPage ? (
            <>
              <CursorTrackingWrapper>
                <Image
                  className="mx-auto sm:hidden"
                  width={776}
                  height={380}
                  src={DesktopBlankTicketIllustration}
                  alt="Blank ticket desktop illustration"
                />
              </CursorTrackingWrapper>
              <Image
                className="mx-auto hidden sm:block"
                width={346}
                height={702}
                src={MobileBlankTicketIllustration}
                alt="Blank ticket mobile illustration"
              />
            </>
          ) : (
            <Image
              className="w-full md:mx-auto md:max-w-xl"
              width={860}
              height={862}
              src={illustration}
              alt="Illustration"
              loading="eager"
              quality={75}
            />
          )}
        </div>
      </Container>
    </section>
  );
};

Hero.propTypes = {
  isTicketPage: PropTypes.bool,
};

export default Hero;
