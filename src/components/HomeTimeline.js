import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import {useMediaQuery} from "@material-ui/core";
import { getUserById} from "../dataManager";
import {Message, MusicNote, Videocam} from "@material-ui/icons";
import ReactAudioPlayer from "react-audio-player";
import {Player} from "video-react";
import {Link} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: '6px 16px',
    },
    secondaryTail: {
        backgroundColor: theme.palette.secondary.main,
    },
}));

export default function HomeTimeline({posts}) {
    const lg = useMediaQuery('(min-width:600px)')
    if(!posts){
        return(<></>)
    }
    return (
            <Timeline align={lg ? 'alternate' : 'left'}>
                {posts.map(post => <HomeItem key={post.id} post={post}/>)}
            </Timeline>

    );
}


function HomeItem({post}){
    switch (post.type){
        case 'message':
            return(<HomeItemMessage post={post} />)
        case 'music':
            return(<HomeItemMusic post={post} />)
        case 'video':
            return(<HomeItemVideo post={post} />)
        default:
            return(<HomeItemMessage post={post} />)
    }
}
function HomeItemMessage({post}){
    const user = getUserById(post.createdBy)
    const classes = useStyles();
    return(
        <TimelineItem data-aos="fade-up">
            <TimelineOppositeContent>
                <Typography variant="body2" color="textSecondary">
                    {post.createdAt}
                </Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
                <TimelineDot>
                    <Link to={"/post/"+post.id}>
                    <Message />
                    </Link>
                </TimelineDot>
                <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
                <Paper elevation={3} className={classes.paper}>
                    <Typography variant="h6" component="h1">
                        <Link to={"/artist/"+user.id}> {user.username} </Link>
                    </Typography>
                    <Typography>{post.message}</Typography>
                    <Typography><i className="fa fa-heart"></i> {post.likes} </Typography>
                </Paper>
            </TimelineContent>
        </TimelineItem>
    )
}

function HomeItemMusic({post}){
    const classes = useStyles();
    const user = getUserById(post.createdBy)
    return(
        <TimelineItem data-aos="fade-up">
            <TimelineOppositeContent>
                <Typography variant="body2" color="textSecondary">
                    {post.createdAt}
                </Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
                <TimelineDot color="primary">
                    <Link to={"/post/"+post.id}>
                    <MusicNote />
                    </Link>
                </TimelineDot>
                <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
                <Paper elevation={3} className={classes.paper}>
                    <Typography variant="h6" component="h1">
                        <Link to={"/artist/"+user.id}> {user.username} </Link>
                    </Typography>
                    <Typography>
                        {post.message}
                        <ReactAudioPlayer className="w-100" src={post.music_url} controls/>
                    </Typography>
                    <Typography><i className="fa fa-heart"></i> {post.likes} </Typography>
                </Paper>
            </TimelineContent>
        </TimelineItem>
    )
}
function HomeItemVideo({post}){
    const classes = useStyles();
    const user = getUserById(post.createdBy)
    return(
        <TimelineItem data-aos="fade-up">
            <TimelineOppositeContent>
                <Typography variant="body2" color="textSecondary">
                    {post.createdAt}
                </Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
                <TimelineDot color="primary" variant="outlined">
                    <Link to={"/post/"+post.id}>
                    <Videocam />
                    </Link>
                </TimelineDot>
                <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
                <Paper elevation={3} className={classes.paper}>
                    <Typography variant="h6" component="h1">
                        <Link to={"/artist/"+user.id}> {user.username} </Link>
                    </Typography>
                    <Typography>
                        {post.message}
                        <div className="rounded overflow-hidden pb-3">
                            <Player playsInline  src={post.video_url}/>
                        </div>
                    </Typography>
                    <Typography><i className="fa fa-heart"></i> {post.likes} </Typography>
                </Paper>
            </TimelineContent>
        </TimelineItem>
    )
}
