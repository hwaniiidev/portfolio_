---
title: 'Adjusting Standby Buckets Using a Sub-Process and A/B Testing'
summary: 'To combat Android''s background restrictions on location data, this project used a sub-process to adjust Standby Buckets. A/B testing confirmed a 45% increase in daily location requests per user.'
description: 'This project addressed stricter Android background limits affecting location data collection. A sub-process was developed to adjust Standby Buckets, allowing the SDK to operate continuously. A/B testing with Firebase and BigQuery validated this solution, demonstrating a 45% increase in daily location requests per user and confirming its effectiveness.'
date: '2021.11 - 2022.1 (3months)'
detail_page: true
product: 'product_2'
tags: [ 'Android', 'Java', 'Kotlin']
---

## Resolving App Battery Overconsumption Issue

### Background
- As the Android OS is updated, there are more restrictions on background operations, which has a significant negative impact on location data collection.
- An alternative is needed to ensure the SDK can continue to operate in the background.


### Responsibilities
- Developed an alternative solution to adjust Standby Buckets using a sub-process. (Alternative solution 100%, Development 90%)
- Designed and conducted A/B testing (using Firebase and GCP BigQuery) to verify the effectiveness of the Standby Bucket adjustment. (Test design and execution 100%)

### Outcome
Average number of location recognition requests per user per day increased by 45%

- Before improvement:
  <img src="/images/project_8/figure_1.png" alt="Project Screenshot" style="max-width:100%; height:auto; border-radius:12px; display:block; margin:auto;" />
- After improvement:
  <img src="/images/project_8/figure_2.png" alt="Project Screenshot" style="max-width:100%; height:auto; border-radius:12px; display:block; margin:auto;" />
