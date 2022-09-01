import PropTypes from 'prop-types';
import s from './statList.module.css';

function StatList({ label, percentage }) {
  return (
    <li className={s.item} style={{ backgroundColor: randomClr() }}>
      <span className={s.label}>{label}</span>
      <span className={s.percentage}>{percentage}</span>
    </li>
  );
}

StatList.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};

function randomClr() {
  const letters = '0123456789ABCDEF'.split('');
  var color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.round(Math.random() * 15)];
  }
  return color;
}

export default StatList;
