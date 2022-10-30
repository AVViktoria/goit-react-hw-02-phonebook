import PropTypes from 'prop-types';
// import css from './Section.module.css';

//*    styles..//
export default function Section({ title, children }) {
  return (
    <section>
      <div>
        {title && <h2>{title}</h2>}
        {children}
      </div>
    </section>
  );
}

Section.prototype = {
  title: PropTypes.string,
};
