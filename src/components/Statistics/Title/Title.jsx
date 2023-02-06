import PropTypes from "prop-types";
import t from './Title.module.css'

export const Title = ({ text }) => { return text && <h2 className={t.title}>{text}</h2> }

Title.propTypes = {
	text: PropTypes.string,
};