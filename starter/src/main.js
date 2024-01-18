import "./global.css";

import Alpine from "alpinejs";
import { defineState, defineTodoAppState } from "./data/state";

defineState(Alpine);

defineTodoAppState(Alpine);

Alpine.start();