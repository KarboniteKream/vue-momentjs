# vue-momentjs
A tiny Moment.js wrapper for Vue.

## Installation
```bash
yarn add moment vue-momentjs
```

```javascript
import Vue from "vue";
import moment from "moment";
import VueMomentJS from "vue-momentjs";

Vue.use(VueMomentJS, moment);
```

## Usage
Call `this.$moment()` in any component.
