---
title: 'App API Server Design and Maintenance'
summary: 'Designed, developed, and maintained the on-premise API server (Node.js/Express) for the Paradise City Hotel''s mobile app, expanding services from web to mobile.'
description: "Responsible for the end-to-end design, development, and maintenance of the App API server for the Incheon Paradise City Hotel. This project expanded the existing web-only services to a mobile app, introducing new features like mobile room keys and location-based promotions. The entire system was developed on-premise, utilizing the client's physical servers, and architected for high availability with L4 load balancing, Nginx reverse proxy, and an Express.js backend."
date: '2022.2 - 2025.6 (41months)'
detail_page: true
product: 'product_3'
tags: [ 'ubuntu', 'nginx', 'Expres.js', 'TypeScript', 'Oracle' ]
---

### Background
A project commissioned for the development of the Incheon Paradise City Hotel app. <br>
Developed by adding mobile-exclusive features (e.g., mobile room key, location-based promotions) in addition to existing web service functions.<br>
The client had its own servers, so development was conducted on-premise.<br>

### Responsibilities
- App API design and development (100%)
- Additional new feature development and server maintenance (100%)

### Key Features
- Hotel accommodation product inquiry, reservation, and payment
- Room service requests during stay and admission QR code generation for facility use
- Casino-exclusive: Casino point inquiry
- Mobile room key issuance and card key information return
- Ordering system available on web pads used by casino staff

### Architecture
Load balancing via L4 switching
<img src="/images/project_11/figure_1.png" alt="Project Screenshot" style="max-width:100%; height:auto; border-radius:12px; display:block; margin:auto;" />

Web App Application Architecture
<img src="/images/project_11/figure_2.png" alt="Project Screenshot" style="max-width:100%; height:auto; border-radius:12px; display:block; margin:auto;" />

Api Log Viewer
<img src="/images/project_11/figure_3.png" alt="Project Screenshot" style="max-width:100%; height:auto; border-radius:12px; display:block; margin:auto;" />