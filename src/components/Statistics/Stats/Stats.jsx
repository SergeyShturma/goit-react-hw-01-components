import PropTypes from "prop-types";
import s from "./Stats.module.css";
import getRandomHexColor from "components/Statistics/RandonHexColor"

export const Stats = ( { stats } ) => {
    return <ul className={s.statList}>
    {stats.map(({ id, label, percentage }) => (
					<li className={s.item} style={{ backgroundColor: getRandomHexColor() }} key={id}>
						<span className={s.label}>{label}</span>
						<span className={s.percentage}>{percentage}%</span>
					</li>
				))}
  </ul>
}
  

Stats.propTypes = {
	stats: PropTypes.arrayOf(PropTypes.exact({
		id: PropTypes.string.isRequired,
		label: PropTypes.string.isRequired,
		percentage: PropTypes.number.isRequired,}))	
};