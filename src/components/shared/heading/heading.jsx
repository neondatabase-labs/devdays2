import clsx from 'clsx';
import PropTypes from 'prop-types';
import { forwardRef } from 'react';

const styles = {
  size: {
    '2xl': 't-8xl font-bold leading-dense',
    xl: 't-7xl font-bold leading-dense',
    lg: 'text-[72px] font-bold leading-tight 2xl:text-6xl xl:text-[56px] xl:leading-dense md:text-[44px]',
    md: 't-6xl font-bold leading-dense',
    sm: 't-4xl font-semibold',
    xs: 't-base font-bold tracking-wider uppercase',
  },
  theme: {
    white: 'text-white',
    black: 'text-black dark:text-white',
  },
};

const Heading = forwardRef(
  (
    {
      className: additionalClassName = null,
      tag: Tag,
      size = null,
      theme = null,
      asHTML = false,
      children,
      ...otherProps
    },
    ref
  ) => {
    const className = clsx(styles.size[size], styles.theme[theme], additionalClassName);

    if (asHTML) {
      return (
        <Tag
          className={className}
          dangerouslySetInnerHTML={{ __html: children }}
          ref={ref}
          {...otherProps}
        />
      );
    }

    return (
      <Tag className={className} ref={ref} {...otherProps}>
        {children}
      </Tag>
    );
  }
);

Heading.propTypes = {
  className: PropTypes.string,
  tag: PropTypes.string.isRequired,
  size: PropTypes.oneOf(Object.keys(styles.size)),
  theme: PropTypes.oneOf(Object.keys(styles.theme)),
  asHTML: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

export default Heading;
