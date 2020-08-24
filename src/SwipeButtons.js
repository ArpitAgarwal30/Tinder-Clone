import React from 'react'
import ReplayIcon from '@material-ui/icons/Replay';
import CloseIcon from '@material-ui/icons/Close';
import StarRateIcon from '@material-ui/icons/StarRate';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import IconButton from '@material-ui/core/IconButton';
import './SwipeButtons.css';

function SwipeButtons() {
    return (
        <div className="SwipeButtons">
            <IconButton>
                <ReplayIcon fontSize="large" className="swipeButtons__repeat" />
            </IconButton>
            <IconButton>
                <CloseIcon fontSize="large" className="swipeButtons__left" />
            </IconButton>
            <IconButton>
                <StarRateIcon fontSize="large" className="swipeButtons__star" />
            </IconButton>
            <IconButton>
                <FavoriteIcon fontSize="large" className="swipeButtons__right" />
            </IconButton>
            <IconButton>
                <FlashOnIcon fontSize="large" className="swipeButtons__flash" />
            </IconButton>
        </div>
    );
};

export default SwipeButtons;
