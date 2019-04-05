import React, { Suspense } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import { Card, CardContent, Typography } from '@material-ui/core';

import Loader from '../../hoc/loader';

import MembersIcon from '../../Resources/images/members.svg';
import ChatIcon from '../../Resources/images/chat.svg';
import PhotoIcon from '../../Resources/images/photo.svg';


const Avatar = React.lazy(() => import('@material-ui/core/Avatar'));


function MediaControlCard(props) {
  const { classes, title, iconfarm, iconserver, nsid, members, pool_count, topic_count } = props;
  
  const iconFarmValue = iconfarm;
  const iconServerValue = iconserver;
  const nsidValue = nsid;

// These commented url's are basically written for various image sources, because flickr were not provided the same location for the images.

  // const url1 = `https://s.yimg.com/pw/images/buddyicon11_r.png#1578911@N22`;
  // const url2 = `https://s.yimg.com/pw/images/buddyicon11_r.png#1904771@N21`;
  // const url3 = `https://s.yimg.com/pw/images/buddyicon07_r.png#2183431@N22`;
  
  const avatarURL = `https://farm${iconFarmValue}.staticflickr.com/${iconServerValue}/buddyicons/${nsidValue}.jpg`;

  const avatarURLAlt = `https://s.yimg.com/pw/images/buddyicon00_r.png#${nsidValue}`;

  let memberCount = 0;
  let poolCount = 0;
  let topicCount = 0;

  //Following conditions are written for the counts like members, photos, topics etc so that these values will visible in a fashion(in terms of Million or Thousands).

if(members > 999 && members < 1000000){
  const temp = (members/1000).toFixed(1);
  memberCount = `${temp}K`;

}else if(members > 999999){
  const temp =  (members/1000000).toFixed(1);
  memberCount = `${temp}M`;
}else{
  memberCount = members;
}


if(pool_count > 999 && pool_count < 1000000){
  const temp = (pool_count/1000).toFixed(1);
  poolCount = `${temp}K`;

}else if(pool_count > 999999){
  const temp =  (pool_count/1000000).toFixed(1);
  poolCount = `${temp}M`;
}else{
  poolCount = pool_count;
}

if(topic_count > 999 && topic_count < 1000000){
  const temp = (topic_count/1000).toFixed(1);
  topicCount = `${temp}K`;

}else if(topic_count > 999999){
  const temp =  (topic_count/1000000).toFixed(1);
  topicCount = `${temp}M`;
}else{
  topicCount = topic_count;
}

  return (
    <Card className={classes.card}>
       
       <Suspense fallback={<Loader />}>
        
          <Avatar alt="Remy Sharp" 
          src={iconFarmValue ? avatarURL : avatarURLAlt}
          className={classes.bigAvatar} />

      </Suspense>


      <div className={classes.details}>
        <CardContent className={classes.content}>
          
          <Typography component="title" variant="h5" className={classes.title}>
           {title}
          </Typography>


{/* Following Typography contains Year Since the group created. But the api does not have these values, thats why XXXX mentioned */}



          <Typography variant="subtitle1">
            Since XXXX 
          </Typography>

          <div className="col-md-12">     
            <div className="row">
              <div className="col-md-4" style={{paddingLeft: 0, paddingRight: 5}}>
                  <img src={MembersIcon} className={styles.AvatarIcons} alt='' /> {memberCount}
              </div>
              <div className="col-md-4" style={{paddingLeft: 0, paddingRight: 5}}>
                  <img src={PhotoIcon} className={styles.AvatarIcons} alt='' /> {poolCount}
              </div>
              <div className="col-md-4" style={{paddingLeft: 0, paddingRight: 1}}>
                  <img src={ChatIcon} className={styles.AvatarIcons} alt='' /> {topicCount}
              </div>
            </div>
          </div>
          
        </CardContent>
      </div>
    </Card>
  );
}


const styles = {
  card: {
    display: 'flex',
    maxWidth: 340,
    zIndex: 2,
    maxHeight: 130,
    marginRight: 0
  },
  details: {
    display: 'flex',
    maxWidth: 240,
    paddingRight: 0
  },
  content: {
    flex: 1,
    width: 240,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 6,
    paddingRight: 2
  },
  bigAvatar: {
    paddingTop: -30,
    paddingBottom: -30,
    margin: 5,
    width: 70,
    height: 70,
  },
  AvatarIcons: {
    width: '1em',
    height: '1em',
    color: '#777'
  },
title: {
  whiteSpace: 'nowrap',
  width: '13em',
  overflow: 'hidden',
  textOverflow: 'ellipsis'
}};


MediaControlCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(MediaControlCard);