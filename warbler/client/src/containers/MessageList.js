import React, { Component } from 'react';
import { fetchMessages } from '../store/actions/messages';
import {connect} from 'react-redux';
//TODO:
// 1. create mapStateToProp to map state.messages to prop, map dispatch fetchMessages through through connect 
// 2. when the component did mount, dispatch loadMessages using fetchMessages from props
// 3. deconstruct messages from this.props in render
// 4. foreach messages return create a <MessageItem/> with key, date, text, username, profileImageUrl

class MessageList extends Component {
    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default MessageList;