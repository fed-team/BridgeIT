import Vue from "vue";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faUserSecret } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons/faBars";
Vue.component("Awesome", FontAwesomeIcon);

library.add(faUserSecret, faBars);
