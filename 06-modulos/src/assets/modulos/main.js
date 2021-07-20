// import React, { useState, useMemo } from 'react';
// const [isShow,setIsShow] = useState(false)

import Dividir, { multiplicar, restar as Restar, sumar } from "./operaciones.js"
import { modulo } from "./funciones.js"
// const express = require('express') // node
// module.exports = {  }

const restar = (a, b) => a - b * 2

console.log('Multiplicar', multiplicar(20, 2));
console.log('Restar', restar(20, 2));
console.log('Restar desde la funcion', Restar(20, 2));
console.log('Sumar', sumar(20, 2));
console.log('Dividir default', Dividir(20, 2));
console.log('Desde el fichero modulo', modulo(20, 2));