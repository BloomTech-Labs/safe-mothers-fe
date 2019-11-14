import mixpanel from 'mixpanel-browser';

require('dotenv').config();


mixpanel.init(process.env.REACT_APP_MIXPANEL_TOKEN)

let env_check = process.env.REACT_APP_NODE_ENV === 'production';
console.log(process.env.REACT_APP_NODE_ENV)
console.log(env_check)
let actions = {

  track: (name, props) => {
    if (env_check) mixpanel.track(name, props);
  }
};

export let Mixpanel = actions;
