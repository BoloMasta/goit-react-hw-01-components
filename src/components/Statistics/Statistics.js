import PropTypes from 'prop-types';
import css from './Statistics.module.css';

// color shuffle function
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// stats list
const StatList = ({ stats }) => {
  return (
    <ul className={css.statList}>
      {stats.map(stat => (
        <li
          className={css.item}
          style={{
            backgroundColor: getRandomHexColor(),
            width: 100 / stats.length + '%',
          }}
          key={stat.id}
        >
          <span className={css.label}>{stat.label}</span>
          <span className={css.percentage}>{stat.percentage}%</span>
        </li>
      ))}
    </ul>
  );
};

// Statistics component
export const Statistics = ({ title = '', stats }) => {
  return (
    <section className={css.statistics}>
      {title.length > 0 && <h2 className={css.title}>{title}</h2>}
      <StatList stats={stats} />
    </section>
  );
};

// PropTypes
Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired
  ),
};
