'use strict'

var parrafo1 = document.getElementById("parrafo1")
var parrafo2 = document.getElementById("parrafo2")
var parrafo3 = document.getElementById("parrafo3")
var altura1 = parrafo1.offsetHeight;
var altura2 = parrafo2.offsetHeight;
var altura3 = parrafo3.offsetHeight;
parrafo1.style.overflow=  "hidden";
parrafo1.style.height = `${altura1/3}px`;
parrafo2.style.overflow=  "hidden";
parrafo2.style.height = `${altura2/3}px`;
parrafo3.style.overflow=  "hidden";
parrafo3.style.height = `${altura3/3}px`;
