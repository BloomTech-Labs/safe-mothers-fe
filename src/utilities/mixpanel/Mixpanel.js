import mixpanel from 'mixpanel-browser';

require('dotenv').config();


mixpanel.init(process.env.REACT_APP_MIXPANEL_TOKEN)

let env_check = process.env.NODE_ENV === 'production';

let actions = {

  track: (name, props) => {
    if (env_check) mixpanel.track(name, props);
  }
};

export let Mixpanel = actions;
