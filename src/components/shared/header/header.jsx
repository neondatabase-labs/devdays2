'use client';

import clsx from 'clsx';
import PropTypes from 'prop-types';
import { forwardRef } from 'react';

import Button from 'components/shared/button';
import Container from 'components/shared/container';
import Link from 'components/shared/link';
import Logo from 'components/shared/logo';
import LINKS from 'constants/links';
import MENUS from 'constants/menus.js';

import Burger from './burger';
// import DiscordIcon from './images/header-discord.inline.svg';
import AboutUsIcon from './images/header-about-us.inline.svg';
import CareersIcon from './images/header-careers.inline.svg';
import DiscussionsIcon from './images/header-discussions.inline.svg';
import Github from './images/header-github.inline.svg';

const icons = {
  // discord: DiscordIcon,
  discussions: DiscussionsIcon,
  careers: CareersIcon,
  aboutUs: AboutUsIcon,
};

const Header = forwardRef(
  (
    {
      theme,
      isMobileMenuOpen = false,
      onBurgerClick,
      isSignIn = false,
      isSticky = false,
      withBottomBorder = false,
    },
    ref
  ) => {
    const isThemeBlack = theme === 'black';

    return (
      <header
        className={clsx(
          'safe-paddings absolute top-0 left-0 right-0 z-40 w-full dark:bg-black lg:relative lg:h-14',
          isThemeBlack ? 'lg:bg-black' : 'bg-white',
          isSticky && 'sticky top-0 z-50 md:relative',
          withBottomBorder && 'border-b border-gray-7 dark:border-gray-2'
        )}
        ref={ref}
      >
        <Container className="flex items-center justify-between py-3.5" size="lg">
          <Link to="/">
            <span className="sr-only">Neon</span>
            <Logo isThemeBlack={isThemeBlack} />
          </Link>

          <nav className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <ul className="flex space-x-12 3xl:space-x-10 2xl:space-x-8 lg:hidden">
              {MENUS.header.map(({ to, text, items }, index) => {
                const Tag = to ? Link : 'button';
                return (
                  <li className={clsx(items?.length > 0 && 'group relative')} key={index}>
                    <Tag
                      className={clsx(
                        'whitespace-pre',
                        items?.length > 0 &&
                          'relative pr-3.5 leading-none transition-colors duration-200 before:absolute before:top-[7px] before:right-0 before:h-0 before:w-0 before:border-4 before:border-transparent before:transition-[border-color] before:duration-200 hover:text-primary-2 group-hover:before:border-t-primary-2 dark:before:border-black',
                        items?.length > 0 && isThemeBlack
                          ? 'before:border-t-white'
                          : 'before:border-t-black dark:before:border-t-white',
                        isThemeBlack ? 'text-white' : 'text-black dark:text-white'
                      )}
                      to={to}
                      theme={isThemeBlack && to ? 'white' : 'black'}
                    >
                      {text}
                    </Tag>
                    {items?.length > 0 && (
                      <div className="group-hover:opacity-1 invisible absolute bottom-0 translate-y-full pt-4 opacity-0 transition-[opacity,visibility] duration-200 group-hover:visible group-hover:opacity-100">
                        <ul
                          className=" rounded-2xl bg-white p-3.5"
                          style={{ boxShadow: '0px 4px 10px rgba(26, 26, 26, 0.2)' }}
                        >
                          {items.map(({ iconName, text, description, to }, index) => {
                            const Icon = icons[iconName];
                            return (
                              <li
                                className={clsx(
                                  index !== 0 && 'mt-3.5 border-t border-t-gray-6 pt-3.5'
                                )}
                                key={index}
                              >
                                <Link
                                  className="flex items-center whitespace-nowrap hover:text-primary-2"
                                  to={to}
                                >
                                  <Icon className="shrink-0" aria-hidden />
                                  <span className="ml-3">
                                    <span className="t-xl block font-semibold !leading-none transition-colors duration-200">
                                      {text}
                                    </span>
                                    <span className="mt-1.5 block leading-none text-black">
                                      {description}
                                    </span>
                                  </span>
                                </Link>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="flex space-x-5 lg:hidden">
            <Button
              className="relative py-[11px] pl-11 dark:border-white dark:bg-black dark:text-white dark:hover:border-primary-2 xl:hidden"
              to={LINKS.github}
              size="xs"
              theme={isThemeBlack ? 'tertiary' : 'quaternary'}
              rel="noopener noreferrer"
              target="_blank"
            >
              <Github
                className={clsx(
                  'absolute top-1/2 left-1.5 -translate-y-1/2 dark:text-white',
                  isThemeBlack ? 'text-white' : 'text-black'
                )}
              />
              <span>Star Us</span>
            </Button>
            {isSignIn && (
              <Button className="py-[11px]" to={LINKS.dashboard} size="xs" theme="primary">
                Sign In
              </Button>
            )}
            {!isSignIn && (
              <Button className="py-[11px]" to={LINKS.signup} size="xs" theme="primary">
                Sign up
              </Button>
            )}
          </div>
          <div className=" hidden items-center lg:flex">
            <Burger
              className={clsx(isThemeBlack ? 'text-white' : 'text-black dark:text-white')}
              isToggled={isMobileMenuOpen}
              onClick={onBurgerClick}
            />
          </div>
        </Container>
      </header>
    );
  }
);

Header.propTypes = {
  theme: PropTypes.oneOf(['white', 'black']).isRequired,
  withBottomBorder: PropTypes.bool,
  isMobileMenuOpen: PropTypes.bool,
  onBurgerClick: PropTypes.func.isRequired,
  isSignIn: PropTypes.bool,
  isSticky: PropTypes.bool,
};

export default Header;
