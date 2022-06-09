import React, { Component } from 'react';
import '../app.css';
import ButtonsTag from './ButtonsTag.jsx';
import NewQuote2 from './newQuote2';
// if(process.env.NEXT_PUBLIC_API_MOCKING ==="enabled"){
//   require("../mocks");
// }
class Randomqoutes extends Component {
	constructor(props) {
		super(props);
		this.state = {
			quotesArray: [{ quote: 'placeholder', author: 'placeholder' }],
			//quotesArray = [{quote:"", author:""}, {quote:"aa", author:""},...]
			index: 0,
			data2: 0,
		};
		this.newQoute();
		// this.printAuth();
	}

	newQoute = () => {
		fetch('https://api.quotable.io/random').then((response) =>
			response.json().then((data) => {
				const tempArray = { quote: data.content, author: data.author };
				console.log(tempArray.author)
				this.setState((rando) => ({
					quotesArray: [...rando.quotesArray, tempArray],
					index: this.state.quotesArray.length,
				}));
			})
		);
	};



	// printAuth = () => {
	// 	fetch(
	// 		'https://api.publicapis.org/entries?category=Development&https=true'
	// 	).then((response) =>
	// 		response.json().then((data) => {
	// 			const arr = data.entries;

	// 			console.log('api ' + JSON.stringify(arr[4]));

	// 			const arr2 = arr.map(d=>d).filter((n)=>n).includes("Auth")

	//       console.log('myArr ' + arr2);;

	// 		})
	// 	);
	// };
	prevQoute = () => {
		this.setState((prevState) => ({
			index: prevState.index - 1,
		}));
	};

	nextQoute = () => {
		this.setState((prevState) => ({
			index: prevState.index + 1,
		}));
	};

	listIndex = (n) => {
		console.log(n.target.value);
		this.setState({
			index: n.target.value,
		});
	};
	render = () => {
		console.log(this.state.index);

		return (
			<div className="app-header">
				<div data-testid="quote" id="quote">
					{this.state.quotesArray[this.state.index].quote}
				</div>

				<span id="author">
					-{this.state.quotesArray[this.state.index].author}
				</span>

				<div>
					<select value={this.state.index} onChange={this.listIndex}>
						{this.state.quotesArray.map((d, i) => (
							<option value={i}>{i}</option>
						))}
					</select>
				</div>

				<div className="buttons">
					<ButtonsTag
						text="Previous"
						clickHandler={this.prevQoute}
						condition={this.state.index === 1}
					/>

					<ButtonsTag
						data-testid="newquote"
						text="New Quote"
						clickHandler={this.newQoute}
					/>

					<ButtonsTag
						text="Next"
						clickHandler={this.nextQoute}
						condition={this.state.index + 1 === this.state.quotesArray.length}
					/>
				</div>
			</div>
		);
	};
}
export default Randomqoutes;
