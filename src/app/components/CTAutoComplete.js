import React, {Component} from 'react';
import AutoComplete from 'material-ui/AutoComplete';
import Chip from 'material-ui/Chip';

const tags = [
	'Accounting', 'Business', 'Marketing', 'Tech',
];

class CTAutoComplete extends Component{
	constructor(props, context){
		super(props, context);

		this.state = {
			activeTags: [],
			searchText: '',
		}
	}

	addTag(request, index){
		const tags = this.state.activeTags;

		if(tags.indexOf(request) != -1)
			return true;
		tags.push({key: index, label : request});

		this.setState({activeTags: tags, searchText: ''});
	}

	handleRequestDelete(key){
		const tags = this.state.activeTags;
		const chipKey = key;

		const result = tags.filter(function(tag, key) {
		    return tag.key !== chipKey;
		});
		this.setState({activeTags: result});
	}

	renderTagList(){
		const tags = this.state.activeTags;
		if(typeof tags[0] === 'undefined')
			return true;
		return tags.map((tag, index) => {
			return(
				<Chip
					key={tag.key}
					onRequestDelete={() => this.handleRequestDelete(tag.key)}
					style={{textTransform: 'uppercase'}}
				>{tag.label}</Chip>
			);
		})
	}

	handleUpdateInput(text){
		this.setState({searchText: text});
	}

	render(){
		return(
			<div>
				<AutoComplete fullWidth={true} 
					floatingLabelText="Tags" 
					filter={AutoComplete.fuzzyFilter} 
					dataSource={tags} 
					maxSearchResults={5}
					searchText={this.state.searchText}
					onNewRequest={this.addTag.bind(this)}
					onUpdateInput={this.handleUpdateInput.bind(this)} />
				{this.renderTagList()}
			</div>
		);
	}
}

export default CTAutoComplete;