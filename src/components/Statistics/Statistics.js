import css from './Statistics.module.css';
import data from './data.json';

// random color
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// item width
const itemWidth = 100 / data.length + '%';

// stats list
const StatList = ({ stats }) => {
  return (
    <ul className={css.statList}>
      {stats.map(stat => (
        <li
          className={css.item}
          style={{ backgroundColor: getRandomHexColor(), width: itemWidth }}
          key={stat.id}
        >
          <span className={css.label}>{stat.label}</span>
          <span className={css.percentage}>{stat.percentage}%</span>
        </li>
      ))}
    </ul>
  );
};

export const Statistics = ({ title = '', stats }) => {
  return (
    <section className={css.statistics}>
      {title.length > 0 ? <h2 className={css.title}>{title}</h2> : null}

      <StatList stats={stats} />
    </section>
  );
};
