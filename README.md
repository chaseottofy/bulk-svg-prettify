# bulk-svg-prettify

> work in progress

Custom script to prettify SVG files in bulk.

### Example

```xml
#Before

<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 200 200"><path fill="url(#a)" fill-rule="evenodd" d="M32 100.6a68.4 68.4 0 0 1 52-66.5V1.3C36.4 9 0 50.5 0 100.6c0 50.1 36.4 91.7 84 99.4v-32.8a68.4 68.4 0 0 1-52-66.6Zm168 0c0 50.1-36.4 91.7-84 99.4v-32.8a68.4 68.4 0 0 0 52-66.6 68.4 68.4 0 0 0-52-66.5V1.3c47.6 7.7 84 49.2 84 99.3Z" clip-rule="evenodd"/><defs><linearGradient id="a" x1="157.5" x2="44.7" y1="33.1" y2="148.6" gradientUnits="userSpaceOnUse"><stop offset=".1" stop-color="#0089ae"/><stop offset="1" stop-color="#025b74"/></linearGradient></defs></svg>
```

```xml
#After

<svg
  width="24px"
  height="24px"
  viewBox="0 0 200 200"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M32 100.641C32 68.391 54.1651 41.3515 84 34.1102V1.28125C36.3772 8.98855 0 50.5392 0 100.641C0 150.742 36.3772 192.293 84 200V167.171C54.1651 159.93 32 132.89 32 100.641ZM200 100.641C200 150.742 163.623 192.293 116 200V167.171C145.835 159.93 168 132.89 168 100.641C168 68.391 145.835 41.3515 116 34.1102V1.28125C163.623 8.98855 200 50.5392 200 100.641Z"
    fill="url(#paint0_linear_231_555)"
  />
  <defs>
    <linearGradient
      id="paint0_linear_231_555"
      x1="157.5"
      y1="33.0763"
      x2="44.7421"
      y2="148.561"
      gradientUnits="userSpaceOnUse">
      <stop
        offset="0.0509862"
        stop-color="#0089ae"
      />
      <stop
        offset="1"
        stop-color="#025b74"
      />
    </linearGradient>
  </defs>
</svg>
```

**Handles Large svgs with complex gradients**

```xml
#Before

<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 320 271" class="resources_vercelIllustration__s6HRH"><mask height="278" id="mask0_1317_334" maskUnits="userSpaceOnUse" style="mask-type:alpha" width="600" x="-173" y="-7"><ellipse cx="127" cy="131.634" fill="url(#paint0_radial_1317_334)" rx="300" ry="138.634"/></mask><g mask="url(#mask0_1317_334)"><path d="M126.179 109.505C118.734 109.505 113.367 114.348 113.367 121.614C113.367 128.879 119.402 133.723 126.853 133.723C131.351 133.723 135.316 131.947 137.77 128.953L132.612 125.98C131.25 127.466 129.179 128.334 126.853 128.334C123.623 128.334 120.879 126.652 119.86 123.961H138.755C138.903 123.208 138.991 122.428 138.991 121.607C138.991 114.348 133.63 109.505 126.179 109.505ZM119.806 119.259C120.649 116.575 122.956 114.886 126.179 114.886C129.409 114.886 131.715 116.575 132.551 119.259H119.806ZM118.283 102.105L99.5974 134.395L80.9056 102.105H87.9116L99.5907 122.286L111.27 102.105H118.283ZM55.1267 98.7412L80.0424 141.795H30.2109L55.1267 98.7412ZM166.098 121.614C166.098 125.65 168.741 128.341 172.841 128.341C175.619 128.341 177.703 127.083 178.775 125.031L183.954 128.011C181.809 131.577 177.79 133.723 172.841 133.723C165.39 133.723 160.029 128.879 160.029 121.614C160.029 114.348 165.397 109.505 172.841 109.505C177.79 109.505 181.803 111.651 183.954 115.216L178.775 118.196C177.703 116.144 175.619 114.886 172.841 114.886C168.748 114.886 166.098 117.577 166.098 121.614ZM221.715 102.105V133.05H215.646V102.105H221.715ZM198.788 109.505C191.344 109.505 185.977 114.348 185.977 121.614C185.977 128.879 192.018 133.723 199.463 133.723C203.96 133.723 207.925 131.947 210.38 128.953L205.221 125.98C203.859 127.466 201.789 128.334 199.463 128.334C196.233 128.334 193.488 126.652 192.47 123.961H211.364C211.513 123.208 211.6 122.428 211.6 121.607C211.6 114.348 206.24 109.505 198.788 109.505ZM192.416 119.259C193.259 116.575 195.558 114.886 198.788 114.886C202.018 114.886 204.325 116.575 205.161 119.259H192.416ZM158.006 110.177V116.696C157.332 116.501 156.617 116.366 155.848 116.366C151.931 116.366 149.105 119.057 149.105 123.094V133.05H143.036V110.177H149.105V116.366C149.105 112.949 153.09 110.177 158.006 110.177Z" data-logomark="" fill="white"/><line stroke="white" stroke-dasharray="5 5" stroke-opacity="0.4" stroke-width="0.5" x1="-143.73" x2="396.44" y1="98.5132" y2="98.5132"/><line stroke="white" stroke-dasharray="5 5" stroke-opacity="0.4" stroke-width="0.5" style="animation-delay:0.1s" x1="30.8047" x2="30.8047" y1="-14.5773" y2="322.966"/><line stroke="white" stroke-dasharray="5 5" stroke-opacity="0.4" stroke-width="0.5" style="animation-delay:0.2s" x1="0.4626" x2="180.428" y1="3.89746" y2="315.607"/><line stroke="white" stroke-dasharray="5 5" stroke-opacity="0.4" stroke-width="0.5" style="animation-delay:0.3s" x1="24.2282" x2="195.927" y1="3.55225" y2="300.944"/><line stroke="white" stroke-dasharray="5 5" stroke-opacity="0.4" stroke-width="0.5" style="animation-delay:0.4s" x1="221.625" x2="221.625" y1="-14.9214" y2="332.61"/><line stroke="white" stroke-dasharray="5 5" stroke-opacity="0.4" stroke-width="0.5" style="animation-delay:0.5s" x1="-143.73" x2="396.44" y1="134.3" y2="134.3"/><line stroke="white" stroke-dasharray="5 5" stroke-opacity="0.4" stroke-width="0.5" style="animation-delay:0.6s" x1="-143.73" x2="396.44" y1="106.285" y2="106.285"/><line stroke="white" stroke-dasharray="5 5" stroke-opacity="0.4" stroke-width="0.5" style="animation-delay:0.7s" x1="-145.105" x2="397.03" y1="141.545" y2="141.545"/></g><defs><radialGradient cx="0" cy="0" gradientTransform="translate(127 131.634) rotate(90) scale(138.634 300)" gradientUnits="userSpaceOnUse" id="paint0_radial_1317_334" r="1"><stop/><stop offset="1" stop-opacity="0"/></radialGradient></defs></svg>
```

```xml
#After

<svg
  xmlns="http://www.w3.org/2000/svg"
  fill="none"
  viewBox="0 0 320 271"
  class="resources_vercelIllustration__s6HRH"
>
  <mask
    height="278"
    id="mask0_1317_334"
    maskUnits="userSpaceOnUse"
    style="mask-type:alpha"
    width="600"
    x="-173"
    y="-7">
    <ellipse
      cx="127"
      cy="131.634"
      fill="url(#paint0_radial_1317_334)"
      rx="300"
      ry="138.634"
    />
  </mask>
  <g
    mask="url(#mask0_1317_334)">
    <path
      d="M126.179 109.505C118.734 109.505 113.367 114.348 113.367 121.614C113.367 128.879 119.402 133.723 126.853 133.723C131.351 133.723 135.316 131.947 137.77 128.953L132.612 125.98C131.25 127.466 129.179 128.334 126.853 128.334C123.623 128.334 120.879 126.652 119.86 123.961H138.755C138.903 123.208 138.991 122.428 138.991 121.607C138.991 114.348 133.63 109.505 126.179 109.505ZM119.806 119.259C120.649 116.575 122.956 114.886 126.179 114.886C129.409 114.886 131.715 116.575 132.551 119.259H119.806ZM118.283 102.105L99.5974 134.395L80.9056 102.105H87.9116L99.5907 122.286L111.27 102.105H118.283ZM55.1267 98.7412L80.0424 141.795H30.2109L55.1267 98.7412ZM166.098 121.614C166.098 125.65 168.741 128.341 172.841 128.341C175.619 128.341 177.703 127.083 178.775 125.031L183.954 128.011C181.809 131.577 177.79 133.723 172.841 133.723C165.39 133.723 160.029 128.879 160.029 121.614C160.029 114.348 165.397 109.505 172.841 109.505C177.79 109.505 181.803 111.651 183.954 115.216L178.775 118.196C177.703 116.144 175.619 114.886 172.841 114.886C168.748 114.886 166.098 117.577 166.098 121.614ZM221.715 102.105V133.05H215.646V102.105H221.715ZM198.788 109.505C191.344 109.505 185.977 114.348 185.977 121.614C185.977 128.879 192.018 133.723 199.463 133.723C203.96 133.723 207.925 131.947 210.38 128.953L205.221 125.98C203.859 127.466 201.789 128.334 199.463 128.334C196.233 128.334 193.488 126.652 192.47 123.961H211.364C211.513 123.208 211.6 122.428 211.6 121.607C211.6 114.348 206.24 109.505 198.788 109.505ZM192.416 119.259C193.259 116.575 195.558 114.886 198.788 114.886C202.018 114.886 204.325 116.575 205.161 119.259H192.416ZM158.006 110.177V116.696C157.332 116.501 156.617 116.366 155.848 116.366C151.931 116.366 149.105 119.057 149.105 123.094V133.05H143.036V110.177H149.105V116.366C149.105 112.949 153.09 110.177 158.006 110.177Z"
      fill="white"
    />
    <line
      stroke="white"
      stroke-dasharray="5 5"
      stroke-opacity="0.4"
      stroke-width="0.5"
      x1="-143.73"
      x2="396.44"
      y1="98.5132"
      y2="98.5132"
    />
    <line
      stroke="white"
      stroke-dasharray="5 5"
      stroke-opacity="0.4"
      stroke-width="0.5"
      style="animation-delay:0.1s"
      x1="30.8047"
      x2="30.8047"
      y1="-14.5773"
      y2="322.966"
    />
    <line
      stroke="white"
      stroke-dasharray="5 5"
      stroke-opacity="0.4"
      stroke-width="0.5"
      style="animation-delay:0.2s"
      x1="0.4626"
      x2="180.428"
      y1="3.89746"
      y2="315.607"
    />
    <line
      stroke="white"
      stroke-dasharray="5 5"
      stroke-opacity="0.4"
      stroke-width="0.5"
      style="animation-delay:0.3s"
      x1="24.2282"
      x2="195.927"
      y1="3.55225"
      y2="300.944"
    />
    <line
      stroke="white"
      stroke-dasharray="5 5"
      stroke-opacity="0.4"
      stroke-width="0.5"
      style="animation-delay:0.4s"
      x1="221.625"
      x2="221.625"
      y1="-14.9214"
      y2="332.61"
    />
    <line
      stroke="white"
      stroke-dasharray="5 5"
      stroke-opacity="0.4"
      stroke-width="0.5"
      style="animation-delay:0.5s"
      x1="-143.73"
      x2="396.44"
      y1="134.3"
      y2="134.3"
    />
    <line
      stroke="white"
      stroke-dasharray="5 5"
      stroke-opacity="0.4"
      stroke-width="0.5"
      style="animation-delay:0.6s"
      x1="-143.73"
      x2="396.44"
      y1="106.285"
      y2="106.285"
    />
    <line
      stroke="white"
      stroke-dasharray="5 5"
      stroke-opacity="0.4"
      stroke-width="0.5"
      style="animation-delay:0.7s"
      x1="-145.105"
      x2="397.03"
      y1="141.545"
      y2="141.545"
    />
  </g>
  <defs>
    <radialGradient
      cx="0"
      cy="0"
      gradientTransform="translate(127 131.634) rotate(90) scale(138.634 300)"
      gradientUnits="userSpaceOnUse"
      id="paint0_radial_1317_334"
      r="1">
      <stop>
      </stop>
      <stop
        offset="1"
        stop-opacity="0"
      />
    </radialGradient>
  </defs>
</svg>
```

### Usage (work in progress)

```bash
# set input and output folder for svgs in single command
-f ./path/to/svgs -o ./path/to/svgouput
```
