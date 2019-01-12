import React, { Component } from 'react';
import { fetchMessages } from '../store/actions/messages';
import { connect } from 'react-redux';
import MessageItem from '../components/MessageItem';

// 1. create mapStateToProp to map state.messages to prop, map dispatch
// fetchMessages through through connect
// 2. when the component did mount, dispatch loadMessages using fetchMessages
// from props
// 3. deconstruct messages from this.props in render
// 4. foreach messages return create a <MessageItem/> with key, date, text,
// username, profileImageUrl

class MessageList extends Component {
    componentDidMount() {
        this
            .props
            .fetchMessages();
    }
    render() {
        const { messages } = this.props;
        let messageList = messages.map(m => {
            return <MessageItem
                key={m._id}
                date={m.createAt}
                text={m.text}
                username={m.user.username}
                profileImageUrl={m.user.profileImageUrl} />
        })
        return (
            <div className="row col-sm-8">
                <div className="offset-1 col-sm-10">
                    <ul className="list-group" id="messages">
                    {messageList}
                    </ul>
                </div>
            </div>
        );
    }
}
function mapStateToProps(state) {
    return { messages: state.messages }
}

export default connect(mapStateToProps, { fetchMessages })(MessageList);