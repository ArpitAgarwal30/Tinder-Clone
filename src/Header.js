import React from 'react'
import PersonIcon from '@material-ui/icons/Person';
import './Header.css';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { Link, useHistory } from 'react-router-dom';

function Header({ backButton }) {
    const history = useHistory();
    return (
        <div className="header">
            {backButton ? (
                <IconButton onClick={() => history.replace(backButton)}>
                    <ArrowBackIosIcon fontSize="large" className='header__backButton' />
                </IconButton>
            ) : (
                    <IconButton>
                        <PersonIcon className="header_icon" fontSize="large" />
                    </IconButton>
                )}
            <Link to='/'>
                <img className="logo"
                    src="https://globaldatinginsights.com/wp-content/uploads/2017/08/Screen-Shot-2017-08-17-at-10.04.531.png"
                    alt="tinder logo"
                />
            </Link>
            <Link to='/chat'>
                <IconButton>
                    <QuestionAnswerIcon className="header_icon" fontSize="large" />
                </IconButton>
            </Link>
        </div>
    );
};
export default Header