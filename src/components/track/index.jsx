import React from 'react';
import {CustomInput, Button} from 'reactstrap';
import './styles.scss';

export default function Track(props) {
    return (
        <div className="track-item"
        onClick={() => props.playTrack(props.currentTrack)}
        >
            {props.showCheckbox !== false &&
            <div className="selection">
                <input
                    type="checkbox"
                    name="playlistCheck"
                    checked={props.currentTrack.checked}
                    onChange={props.onChange}
                    value={props.currentTrack.id}
                    onClick={(e) => e.stopPropagation()}
                />
            </div>
            }
            <div className="track-title">
                {/* <span className="d-none d-sm-inline" style={{marginRight: '10px'}}><i className="fa fa-music" /></span> */}
                <span className="title">{props.title}</span>
                <div className="tags-container">
                    {props.currentTrack.tags && props.currentTrack.tags.map(tag =>
                        <div className="tag">{tag.name}</div>
                    )}
                </div>
            </div>
            {props.currentTrack.artist &&
                <div className="artist-info">
                    {props.currentTrack.artist}
                </div>
            }
            <div className="track-action">
                {/* <Button
                    className="play-btn"
                    onClick={() => props.playTrack(props.currentTrack)}
                    color="success"
                ><span><i className="fa fa-play" /></span></Button> */}
            </div>
        </div>
    )
}