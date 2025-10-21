"use strict";

import { mainInpAnim } from "./dynamicStyles.js";

const mainInp = document.getElementById("main-input");
const addBtn = document.getElementById("add-task-btn");
const tasksContainer = document.getElementById("tasks-container");

mainInpAnim(mainInp, addBtn);
