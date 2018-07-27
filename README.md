# drivezy-analytics-utils
 * Supported Drivezy analytics and Segment analytics

# How do I get set up?
 * Run 'npm install drivezy-analytic-utils --save'
 
# Sample

```
    import React , {Component} from 'react';
    import { DrivezyAnalytics } from 'drivezy-analytic-utils';

    export default class Test {
        constructor(props) { 
            DrivezyAnalytics.initialize({enable:true, key: 'key_value'}, true, true, 'app_type');
            DrivezyAnalytics.identifyUser({enable:true, key: 'key_value'}, true, true, {id: id, display_name: 'display_name', mobile: 'mobile_number', email: 'email'});
            DrivezyAnalytics.trackEvent (isSegement:{enable: 'true/false', key: segmentKey}, isDrivezyAnalytics: 'true/false', isApp: 'true/false', userId, event: event_name, eventObject: event_parameter, headers, body)
        }   
    }
```

# APIS
 * DrivezyAnalytics.initialize(isSegement, isDrivezyAnalytics, isApp, appType)- setup env for package
 * DrivezyAnalytics.identifyUser(isSegement, isDrivezyAnalytics, isApp, user) - identifying user
 * DrivezyAnalytics.trackEvent (isSegement:{enable: 'true/false', key: segmentKey}, isDrivezyAnalytics: 'true/false', isApp: 'true/false', userId, event: event_name, eventObject: event_parameter, headers, body) - used to track event
 
 # Document Author
 
  [Kamlesh_Nehra](https://github.com/nehrakln07)
