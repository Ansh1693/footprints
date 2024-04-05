import mixpanel from 'mixpanel-browser';
 
mixpanel.init("8be2e346546beb6b052f1a433b724a6c", { debug: true, track_pageview: true, persistence: 'localStorage', ignore_dnt: true });

export default mixpanel;