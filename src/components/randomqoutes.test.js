import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import NewQuote2 from './newQuote2';
import Randomqoutes from './randomqoutes';
import React from 'react';
import { act } from 'react-dom/test-utils';

const qoute = {
	_id: 'psDF8kzy2M',
	tags: ['inspirational'],
	content: 'You are not here merely to make a living.',
	author: 'Woodrow Wilson',
	authorSlug: 'woodrow-wilson',
	length: 257,
	dateAdded: '2019-11-16',
	dateModified: '2019-11-16',
};

const qoute2 = {
	_id: 'psDF8kzy2M',
	tags: ['inspirational'],
	content: 'You are not here merely to make a living.',
	author: 'Woodrow Ijaz',
	authorSlug: 'woodrow-wilson',
	length: 257,
	dateAdded: '2019-11-16',
	dateModified: '2019-11-16',
};
global.fetch = jest.fn(() =>
	Promise.resolve({
		json: () => Promise.resolve({ ...qoute }),
	})
);

describe('api test', () => {
	test('api testing', async () => {
		// const testdata = await fetch('https://api.quotable.io/random')
		// console.log(testdata.json().author)
		const result = await NewQuote2();
		// console.log(result);

		expect(fetch).toHaveBeenCalledTimes(1);
		expect(result).toBe('Woodrow Wilson');
	});
});

test('api testing 2', async () => {
	await act(async () => {
		render(<Randomqoutes />);
	});

	// screen.debug()
	expect(screen.getByText(/Woodrow wilson/i)).toBeInTheDocument();
});

test('api testing 1', async () => {
	await act(async () => {
		render(<Randomqoutes />);
	});

	// screen.debug()
	expect(
		screen.getByText(/You are not here merely to make a living./i)
	).toBeInTheDocument();
});

test('api testing 3', async () => {
	// const user = userEvent.setup()
	await act(async () => {
		render(<Randomqoutes />);
	});
	global.fetch = jest.fn(() =>
		Promise.resolve({
			json: () => Promise.resolve({ ...qoute2 }),
		})
	);

	const button = screen.getByRole('button', { name: /New quote/i });
	
	// await user.click(button);
	await act(async () => {
		render(<Randomqoutes />);
	});

	screen.debug();
	expect(screen.getByText(/Woodrow Ijaz/i)).toBeInTheDocument();
});
