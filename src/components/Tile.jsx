import React from 'react';
import base from './Base';


export default class Tile extends base{
	constructor(props){
		super(props);
		}
		render(){
			return(
					<div className='Tile flexContainer row'>
						<h2 className='Topic flex column'>{this.props.topic}</h2>
						<p className='Description flex column'>{this.props.description}</p>
					</div>
				)
		}
}