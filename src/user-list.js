import React from "react";
import { SwipeableFlatList } from "react-native";
import UserItem from "./user-item";
import UserActions from "./user-action";

const UserList = ({ users }) => {
    return (
        <SwipeableFlatList
        //data prop is usually an array, will be fed to each item within the list
        data={users}
        //if true, it triggers on a bounce animation on the first item in the list
        bounceFirstRowOnMount={true}
        //this prop sets a maximum swipeable distance for each item
        maxSwipeDistance={160}
        renderItem={UserItem}
        renderQuickActions={UserActions}
        />
    );
};

export default UserList;