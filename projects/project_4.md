---
title: 'Store Closure Inspection Improvement and Prevention of Duplicate POI Creation for New Stores'
summary: 'Improved the Loplat SDK’s recognition performance and automated the existing store closure inspection process, which had been inconvenient due to manual closure reporting through external chat platforms and the lack of inspection automation.'
description: 'Enhanced Loplat SDK recognition accuracy and automated the store closure inspection process to eliminate manual reporting through external platforms. Additionally, improved the POI management logic to prevent duplicate store entries during new store data collection, resulting in more reliable location data and streamlined operational workflows.'
date: '2021.3 - 2020.4 (2months)'
detail_page: true
product: 'product_1'
tags: [ 'Android', 'Java', 'Kotlin' ]
---

## Store Closure Inspection Improvement

### Background
- To improve the Loplat SDK’s recognition performance and address the inconvenience of the existing store closure inspection process (such as reporting closures through external chat platforms and the lack of automation in inspections), automation was requested.
  <br>
  <br>
### Responsibilities
- Android: Design and develop feature (100%)
  <br>
  <br>
### Architecture
<img src="/images/project_4/111.png" alt="Project Screenshot" style="max-width:100%; height:auto; border-radius:12px; display:block; margin:auto;" />
  <br>
  <br>  
  <br>

---

## Prevention of Duplicate POI Creation for New Stores

### Background
- During new store data collection, duplicate stores were frequently created because already collected stores were sometimes recognized as new locations, making it necessary to improve this functionality.
  <br>
  <br>
### Responsibilities
- Android: Design and develop feature (100%)
  <br>
  <br>
### Architecture
<img src="/images/project_4/222.png" alt="Project Screenshot" style="max-width:100%; height:auto; border-radius:12px; display:block; margin:auto;" />

#### Criteria for Selecting Duplicate Stores
&nbsp;&nbsp;&nbsp;&nbsp;Among the Search Place Engine results (A) and the SDK location recognition results (B), the store with the highest priority is selected.
B represents the union of the place and nearbys results from recognition.

```java
if (A.size() > 0 && B.size() > 0) {
    if (/* a store in A has the same branch name */) {
        // Select the store closest to the specified location
    } else {
        if (/* a store in B matches one in A */) {
            // Select the store with the highest similarity
        } else {
            if (/* a store in the SDK recognition result has an "IN" determination */) {
                // Select the store with the highest similarity
            } else {
                // Select the store closest to the specified location among A and B
            }
        }
    }
} else if (A.size() > 0 && B.size() == 0) {
    if (/* a store in A has the same branch name */) {
        // Select the store closest to the specified location
    } else {
        // Select the store closest to the specified location in A
    }
} else if (A.size() == 0 && B.size() > 0) {
    if (/* a store in B has the same store name */) {
        if (/* a store in B has the same branch name */) {
            // Select the store with the highest similarity
        } else {
            // Select the store with the highest similarity
        }
    } else {
        if (/* a store within 300m of the specified location exists */) {
            // Select the store with the highest similarity
        } else {
            // Select the store with the highest similarity
        }
    }
} else {
    // pass
}
```

#### Feature Behavior
<img src="/images/project_4/333.png" alt="Project Screenshot" style="max-width:100%; height:auto; border-radius:12px; display:block; margin:auto;" />
