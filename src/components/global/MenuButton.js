import React from "react";
import "./MenuButton.css";
import {Link} from "react-router-dom";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import order_img from "./order.png";
import history_img from "./history.png";
import track_img from "./track.png";
import list_img from "./list.png";
import logout_img from "./logout.png";

const MenuButton = () => {
	const [open, setOpen] = React.useState(false);

	const toggleDrawer = (newOpen) => () => {
		setOpen(newOpen);
	};

	const DrawerList = (
		<Box
			sx={{width: 250}}
			role="presentation"
			onClick={toggleDrawer(false)}
		>
			<List>
				{[
					"New Order",
					"Track Order",
					"Order History",
					"Restaurant List",
					"Log Out",
				].map((text, index) => (
					<ListItem key={text} disablePadding>
						<ListItemButton
							component={Link}
							to={"/" + text.toLowerCase().replace(/ /g, "")}
						>
							<ListItemIcon>
								{index === 0 && (
									<img
										src={order_img}
										alt="order"
										width={"50px"}
										height={"50px"}
									/>
								)}
								{index === 1 && (
									<img
										src={track_img}
										alt="track"
										width={"50px"}
										height={"50px"}
									/>
								)}
								{index === 2 && (
									<img
										src={history_img}
										alt="history"
										width={"50px"}
										height={"50px"}
									/>
								)}
								{index === 3 && (
									<img
										src={list_img}
										alt="list"
										width={"50px"}
										height={"50px"}
									/>
								)}
								{index === 4 && (
									<img
										src={logout_img}
										alt="logout"
										height={"50px"}
										width={"50px"}
									/>
								)}
							</ListItemIcon>
							<ListItemText primary={text} />
						</ListItemButton>
					</ListItem>
				))}
			</List>
		</Box>
	);

	return (
		<div className="menu_button_all">
			<button className="button_menu" onClick={toggleDrawer(true)}>
				<div className="bar black"></div>
				<div className="bar bronze"></div>
				<div className="bar black"></div>
				<div className="bar bronze"></div>
			</button>
			<Drawer open={open} onClose={toggleDrawer(false)} anchor="right">
				{DrawerList}
			</Drawer>
		</div>
	);
};

export default MenuButton;
