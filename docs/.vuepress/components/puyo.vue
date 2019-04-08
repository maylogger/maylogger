<template>
  <filter id="goo">
    <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="blur" />
    <feColorMatrix in="blur" type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 17 -7" result="goo" />
    <feBlend in="SourceGraphic" in2="goo" />
  </filter>
</template>

<style>
div[class$="container"] {
    filter: url('#goo');
}
</style>