/* eslint-disable jsx-a11y/anchor-is-valid */
import clsx from 'clsx';
import NextLink from 'next/link';
import PropTypes from 'prop-types';

import ArrowRightIcon from 'icons/arrow-right.inline.svg';

const underlineCommonStyles =
  'relative transition-colors duration-500 before:absolute before:-bottom-1.5 before:left-0 before:h-1.5 before:w-full before:transition-all before:duration-500 hover:before:bottom-full hover:before:opacity-0 before:pointer-events-none';

const styles = {
  base: 'inline-flex !leading-none items-center',
  size: {
    lg: 't-2xl font-semibold',
    md: 't-xl font-semibold',
    sm: 't-lg',
    xs: 't-base',
    '2xs': 't-sm',
  },
  theme: {
    black:
      'text-black transition-colors duration-200 hover:text-primary-2 dark:text-white dark:hover:text-primary-2',
    'black-no-hover': 'text-black',
    white: 'text-white transition-colors duration-200 hover:text-primary-2',
    'black-primary-1': `${underlineCommonStyles} before:bg-primary-1 hover:text-primary-1 dark:before:bg-primary-1 dark:text-white dark:hover:text-primary-1`,
    'black-secondary-3': `${underlineCommonStyles} before:bg-secondary-3 hover:text-secondary-3`,
    'black-secondary-5': `${underlineCommonStyles} before:bg-secondary-5 hover:text-secondary-5`,
    'underline-primary-1':
      'text-primary-1 border-b-2 border-primary-1 transition-colors duration-200 hover:border-transparent',
  },
};

const Link = ({
  className: additionalClassName = null,
  size = null,
  theme = null,
  to = null,
  withArrow = false,
  children,
  ...props
}) => {
  const className = clsx(
    size && theme && styles.base,
    styles.size[size],
    styles.theme[theme],
    additionalClassName
  );

  const content = (
    <>
      {withArrow ? <span>{children}</span> : children}
      {withArrow && <ArrowRightIcon className={clsx('ml-2 shrink-0')} />}
    </>
  );

  if (to.startsWith('/')) {
    return (
      <NextLink className={className} href={to} {...props}>
        {content}
      </NextLink>
    );
  }

  return (
    <a className={className} href={to} {...props}>
      {content}
    </a>
  );
};

Link.propTypes = {
  className: PropTypes.string,
  to: PropTypes.string,
  size: PropTypes.oneOf(Object.keys(styles.size)),
  theme: PropTypes.oneOf(Object.keys(styles.theme)),
  children: PropTypes.node.isRequired,
  withArrow: PropTypes.bool,
};

export default Link;
