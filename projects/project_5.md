---
title: 'Samsung Android 11 Device Waking Up Too Frequently Warning'
summary: 'Fixed the “Samsung device waking up too frequently” issue on Android 11 by optimizing ActivityRecognition.getClient intervals, reducing unnecessary wakeups and improving battery performance.'
description: 'A new warning appeared on Samsung Android 11 devices (“Device waking up too frequently”) and in the Google Play Console due to excessive background wakeups triggered by activity detection permissions. Through detailed analysis of battery statistics and monitoring results, the issue was identified as excessive alarms from com.google.android.location.ALARM_WAKEUP_ACTIVITY_DETECTION.
The solution involved adjusting the ActivityRecognition.getClient interval from 10 seconds to 30 seconds and later to 30 minutes. This optimization eliminated the warning in Samsung Device Care and reduced the unnecessary wakeup ratio in Play Console vitals from 7–9% to below 1%, without affecting location request accuracy or performance.'
date: '2021.3 - 2021.4 (2months)'
detail_page: true
product: 'product_2'
tags: [ 'Android', 'Java', 'Kotlin' ]
---

### Background

- "Device waking up too frequently" warning notification found on S20 Android 11.
- New Google Play Console warning for device wake up on Samsung devices.

### Responsibilities

- Identify the cause and respond (100%)
  <br>
  <br>

### Conclusion
&nbsp;&nbsp;&nbsp;&nbsp;The cause of the "Samsung device waking up too frequently" issue and the unnecessary wake up
issue in the console is the unknown wakeup due to the use of activity detection permission. This can be resolved by
adjusting the ActivityRecognition.getClient interval time. However, since the criteria for these issues (Samsung device
waking up too frequently: more than 180 wake ups per hour, wake lock exceeding 1 hour / console: more than 10 wake ups
per hour) may change, periodic monitoring is necessary.

&nbsp;&nbsp;&nbsp;&nbsp;Also, the ActivityRecognition.getClient interval time can be set differently for each version, so
it needs to be decided in a way that does not affect the number of location requests.

### Cause Analysis and Solution

#### 1st Progress Sharing
- The criteria for unnecessary wake ups in the Google Play Console vital and the "Device waking up too frequently"
  shown in the Samsung device care app are different.
    - Console vital criteria:
      - The percentage of sessions where the app caused more than 10 wakeups per hour on average. This data is only collected when the device is not charging.
    - Samsung device care criteria (received via email from Samsung):
      - Wakelock held for more than 1 hour in the background for 3 hours.
      - Wakeup Alarm triggered more than 180 times in 1 hour in the background.
- The "Device waking up too frequently" issue in the Samsung device care app is related to the activity detection permission.
  - According to the information from Samsung, the issue consistently occurred only in the Lotte app. Shinhan, CJ, and KB have not had this issue since December 2020. The commonality between Lotte and the Cashplace mode app is the use of activity detection permission.
  - Also, looking at the batterystats records:
    - *walarm*:com.google.android.location.ALARM_WAKEUP_ACTIVITY_DETECTION: 800 times. This wakeup alarm occurred excessively.
    - This notification has the same times value for all apps that use activity detection permission: Lotte, mode, Cashplace, and Appetizer.
    - Intentionally operating the device to trigger the SDK's activity detection resulted in 293 wakeup alarms in 30 minutes.
    - When the activity detection permission was turned OFF, *walarm*:com.google.android.location.ALARM_WAKEUP_ACTIVITY_DETECTION did not occur at all.
- Change the reported at regular intervals setting of SDK ActivityRecognitionClient.requestActivityUpdates
  - Since the "Device waking up too frequently" issue is related to the activity detection permission, and we cannot stop using it, we plan to change the interval setting.
    ActivityRecognition.getClient(mContext).requestActivityUpdates(long interval, startPendingIntent);
    The existing interval = 10s setting will be changed to interval = 30s.
  - The appropriate interval value will be finalized based on the monitoring results of the Samsung device care app, console vital, and the number of location recognition requests after deploying to Cashplace.
- Additional items to investigate:
  - Cashplace requires activity detection permission, but unnecessary wake ups are not counted on Android 10 and above in vital. This is presumed to be because Android 10 uses a different activity detection permission than previous versions, and Google's vital recognizes this difference and excludes it.
  - <s>Appetizer also generates the same *walarm*:com.google.android.location.ALARM_WAKEUP_ACTIVITY_DETECTION as Cashplace or the mode app, but it is not caught by the "Device waking up too frequently" issue.</s>
    <br>The exact conditions are unknown, but after deleting the device care app's data and restarting, Appetizer also produced the same issue.
#### 2nd Progress Sharing:
##### Number of Location Requests
Sharing the monitoring results since March 25th, when version v2.0.9.6.4.2 with the ActivityRecognition.getClient interval time adjusted to 30 seconds was deployed.
<img src="/images/project_5/figure_1.png" alt="Project Screenshot" style="max-width:100%; height:auto; border-radius:12px; display:block; margin:auto;" />
No particular issues have been found so far due to the increase in the interval from 10 seconds to 30 seconds. The pattern of maintaining a constant number of requests on weekdays and a sharp decrease on weekends (Saturday, Sunday) is similar to the pattern of the previous 4 weeks.

#### Final Progress Sharing and Problem Resolution:
In the previous test, the session ratio that would be included in the warning in vital was 0% for Android 10 and 11 devices, and there was no difference for Android before and after adjusting the ActivityRecognition.getClient interval time. We speculated that the aggregated figures were different due to the change in the activity detection permission to android.permission.ACTIVITY_RECOGNITION from Android 10.
- Speculation: (In the permission used in versions before Android 10, all activity detections were counted as unnecessary wake ups. Google, recognizing this as a problem, added a different permission from Android 10 and modified it so that wake ups occurring from the newly added permission are not counted.)
- To confirm this speculation, we set the ActivityRecognition.getClient interval time to 30 minutes and deployed it as v2.0.9.6.5.1 for testing in Cashplace. The reason for setting it to 30 minutes was that Google counts wake ups as unnecessary if they exceed 10 per hour, so we judged it to be an appropriate cycle that does not exceed 10 and does not significantly affect the Cashplace location recognition results.
- Number of Location Requests
  <img src="/images/project_5/figure_2.png" alt="Project Screenshot" style="max-width:100%; height:auto; border-radius:12px; display:block; margin:auto;" />
  Compared to the previous 4 weeks (March), it is on a downward trend, but it has been on a downward trend since March, and there were many external factors, so it is judged that adjusting the interval does not have a significant impact on the number of location recognition requests.
- Samsung Device Care
  After updating to v2.0.9.6.5.1, the "Device waking up too frequently" issue is no longer occurring.
- Console vital
  There is a clear difference from the previous test (.v2.0.9.6.4.2 interval cycle 30 seconds).
  - Interval cycle 10 seconds (initial problem recognition situation)
    Unnecessary wake up ratio: 7-9%
    <img src="/images/project_5/figure_3.png" alt="Project Screenshot" style="max-width:100%; height:auto; border-radius:12px; display:block; margin:auto;" />
  - Interval cycle 30 seconds
    Unnecessary wake up ratio: 4.97%
    <img src="/images/project_5/figure_4.png" alt="Project Screenshot" style="max-width:100%; height:auto; border-radius:12px; display:block; margin:auto;" />
  - Interval cycle 30 minutes
    Unnecessary wake up ratio: 0.86%
    <img src="/images/project_5/figure_5.png" alt="Project Screenshot" style="max-width:100%; height:auto; border-radius:12px; display:block; margin:auto;" />
- The session ratio counted as abnormal operation on Android 9 has been significantly reduced from 45-55% to 5%. On Android 10 and 11, it remains below 1% as before.
