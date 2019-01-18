//TODO:
// 1. import react, moment, link, DefaultProfileImg (from image)
// 2. the message item should have a img with either the profileImageUrl passed
// in or DefaultProfileImg, alt={username } height = 100, width = 100, className
// = timeline-image
// 3. a div called message area and a link to username and a span with date (use
// moment)

import React from 'react';
import Moment from 'react-moment';
import { Link } from 'react-router-dom';
import DefaultProfileImg from '../images/default-profile-image.jpg'
import PropTypes from 'prop-types';

const MessageItem = props => {
    const { date, text, username, profileImageUrl, removeMessage, isCorrectUser} = props;
    return (
        <div>
            <li className="list-group-item">
                <img
                    src={profileImageUrl || DefaultProfileImg}
                    alt={username}
                    height="100"
                    width="100"
                    className="timeline-image" />
                <div className="message-area">
                    <Link to="/">@{username}
                        &nbsp;</Link>
                    {/* text-muted is used for muted link*/}
                    <span className="text-muted">
                        <Moment className="text-muted" format="Do MMM YYYY">
                            {date}
                        </Moment>
                    </span>
                    <p>{text}</p>
                </div>
                {isCorrectUser &&( <button type="button" className="btn btn-danger" onClick={removeMessage}>Delete</button>)}  
            </li>
        </div>
    )
};

MessageItem.propTypes = {
    text: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
};

export default MessageItem;
