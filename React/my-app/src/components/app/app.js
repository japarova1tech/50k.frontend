import React from "react";
import AppHeader from "../app-header";
import SearchPanel from"../search-panel";
import PostStatusFilter from "../post-status";
import PostList from "../post-list";
import PostAddForm from "../post-add-form";
const App = () => {
	return (
		<div>
			<AppHeader/>
			<div className="search-panel d-flex">
				<SearchPanel/>
				<PostStatusFilter/>
			</div>
			<PostList/>
			<PostAddForm/>
		</div>
		
	)
	
}

export default App;