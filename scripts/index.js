"use strict";

import { mainInpAnim } from "./dynamicStyles.js";

const mainInp = document.getElementById("main-input");
const addBtn = document.getElementById("add-task-btn");
const tasksContainer = document.getElementById("tasks-container");
const detailsInp = document.getElementById("details-input");

mainInpAnim(mainInp, detailsInp, addBtn);
