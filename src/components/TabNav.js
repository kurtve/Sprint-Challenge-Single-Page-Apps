import React from "react";
import { Tab, Menu, Icon } from "semantic-ui-react";
import { NavLink } from "react-router-dom";
import WelcomePage from './WelcomePage';
import CharacterList from './CharacterList';
import LocationList from './LocationList';
import EpisodeList from './EpisodeList';


// TODO: Add missing menu/tabs/nav below

// Review Semantic UI Component options for nav-like UI:
// https://react.semantic-ui.com/collections/menu/
// https://react.semantic-ui.com/modules/tab/
// https://react.semantic-ui.com/elements/button/
// https://react.semantic-ui.com/collections/breadcrumb/

export default function TabNav() {

	const panes = [
		{menuItem: 'Home Page', render: () => <Tab.Pane><WelcomePage /></Tab.Pane> },
		{menuItem: 'Characters', render: () => <Tab.Pane><CharacterList /></Tab.Pane> },
		{menuItem: 'Locations', render: () => <Tab.Pane><LocationList /></Tab.Pane> },
		{menuItem: 'Episodes', render: () => <Tab.Pane><EpisodeList /></Tab.Pane> }
	];

	return (

		<Tab panes={panes} />

	);

};
