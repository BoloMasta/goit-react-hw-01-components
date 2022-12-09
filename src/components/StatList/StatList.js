import PropTypes from 'prop-types';
import css from './StatList.module.css';

const getRandomHexColor = () =>
  `#${Math.floor(Math.random() * 16777215).toString(16)}`;

export const StatList = ({ stats }) => (
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

StatList.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
      percentage: PropTypes.number,
    })
  ),
};
