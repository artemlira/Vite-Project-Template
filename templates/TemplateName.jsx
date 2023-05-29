import React from 'react';
import PropTypes from 'prop-types';
import styles from './TemplateName.module.scss';

function TemplateName({ props }) {
  return (
    <section className={styles.templateName}>
      <div className="container">
        <div className={styles.container}>
          TemplateName Component
          {props}
        </div>
      </div>
    </section>
  );
}

TemplateName.propTypes = {
  props: PropTypes.string.isRequired,
};

export default TemplateName;
