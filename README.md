<!-- 2.3 -->
<!--  -->


# bulk-svg-prettify

> work in progress

Prettify a folder of svgs with one command

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

### Usage (work in progress)

```bash
# set input and output folder for svgs in single command
-f ./path/to/svgs -o ./path/to/svgouput
```
