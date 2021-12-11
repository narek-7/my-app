import React, { useState } from 'react';
import Counter from './counter';

const CounterList = () => {
	const initialState =
		[
			{ id: 1, value: 10, name: "Ненужная вещь" },
			{ id: 2, value: 5, name: "Ложка" },
			{ id: 3, value: 0, name: "Вилка" },
			{ id: 4, value: 0, name: "Тарелка" },
			{ id: 5, value: 0, name: "Набор минитлиста" },
		];

	let [counters, setCounters] = useState(initialState);

	const handleDelete = (id) => {
		const newCounters = counters.filter(c => c.id !== id);
		setCounters(newCounters);
	};

	const handleReset = () => {
		setCounters(initialState);
	};

	const handleIncrement = (id) => {
		const newCounters = counters.map(c => {
			if (c.id === id) {
				c.value++;
			}
			return c;
		});
		setCounters(newCounters);
	};

	const handleDecrement = (id) => {
		const newCounters = counters.map(c => {
			if (c.id === id) {
				c.value--;
			}
			return c;
		});
		setCounters(newCounters);
	};

	return (
		<>
			{counters.map(count =>
				<Counter
					key={count.id}
					{...count}
					onDelete={handleDelete}
					onIncrement={handleIncrement}
					onDecrement={handleDecrement} />
			)}
			<button className="btn btn-primary btn-sm m-2" onClick={handleReset}>Reset</button>
		</>
	);
};


export default CounterList;