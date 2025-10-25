---
title: 'Sharing ANID Between Multiple SDKs Within a Single Device'
summary: 'Developed a feature to share a single Anonymous ID (ANID) across apps using the same SDK on one device, anticipating possible ad identifier restrictions.'
description: 'In response to increasing privacy restrictions on mobile advertising identifiers like Apple''s IDFA and potential changes to Google''s ADID, I designed and developed a feature to unify the Anonymous ID (ANID) for all apps utilizing our SDK on a single device. This ensures consistent user identification for analytics and other purposes without relying on device-level advertising IDs, thereby future-proofing the SDK against upcoming platform policy changes.'
date: '2021.4 - 2021.4 (1month)'
detail_page: true
product: 'product_2'
tags: [ 'Android', 'Java' ]
---

### Background

&nbsp;&nbsp;&nbsp;&nbsp;With the iOS 14 update, user consent became mandatory to use the IDFA (Identifier for Advertisers). Anticipating similar policy changes for the ADID (Android Advertising ID), there was a need to improve our system. The goal was to consolidate the ANID (Loplat's Anonymous ID) so that a single, unified ANID could be used across all applications utilizing the Loplat SDK on a single device.

### Responsibilities

- Android: Design and develop feature (100%)
  <br>
  <br>

### Architecture
<img src="/images/project_6/111.png" alt="Project Screenshot" style="max-width:100%; height:auto; border-radius:12px; display:block; margin:auto;" />
