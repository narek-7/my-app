import React from 'react';

const Counter = (props) => {
	const { value } = props;

	const formatValue = () => {
		return value === 0 ? "empty" : value;
	};

	const getBageClasses = () => {
		if (value === 0)
			return "badge m-2 bg-warning";
		return "badge m-2 bg-primary";
	};

	return (
		<div>
			<span>{props.name}</span>
			<span className={getBageClasses()}>{formatValue()}</span>
			<button className="btn btn-primary btn-sm m-2" onClick={() => props.onIncrement(props.id)}>+</button>
			<button className="btn btn-primary btn-sm m-2" onClick={() => props.onDecrement(props.id)}>-</button>
			<button className="btn btn-danger btn-sm m-2" onClick={() => props.onDelete(props.id)}>Delete</button>
		</div>
	);
};

export default Counter;