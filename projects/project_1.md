---
title: 'Designing a Location Data Collection SDK'
summary: 'Developed the location data collection logic as an SDK to simplify use across in-house apps and potential future client integrations.'
description: ' To enable in-house location data collection apps to easily gather location information, the location data collection logic was developed as an SDK rather than a standalone module. This decision was made based on the expectation that external clients might also require the same location data collection functionality in the future.'
date: '2020.6 - 2020.10 (5months)'
detail_page: true
product: 'product_2'
tags: ["Android", "Java"]
---

### Background
- There are several in-house service apps that collect location data. To reduce maintenance costs and maintain consistent data quality, it became necessary to unify the location collection logic.
- External apps requested integration to enable crowdsourced location data collection and reward distribution — similar to how our own app, Cashplace, operates.
  <br>
  <br>
### Responsibilities
- Android feature design and development (100%)
  <br>
  <br>
### Architecture
<img src="/images/project_1/111.png" alt="Project Screenshot" style="max-width:100%; height:auto; border-radius:12px; display:block; margin:auto;" />

