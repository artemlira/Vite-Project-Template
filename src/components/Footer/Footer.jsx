import React from 'react';
import PropTypes from 'prop-types';
import styles from './footer.module.scss';

function Footer({ props }) {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.container}>
          Footer Component
          {props}
        </div>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  props: PropTypes.string.isRequired,
};

export default Footer;
