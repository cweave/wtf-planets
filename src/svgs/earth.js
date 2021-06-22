import React from 'react';

function Earth({ name, width, height, title }) {
	return (
		<svg
			id="earth_svg__\u0421\u043B\u043E\u0439_1"
			xmlns="http://www.w3.org/2000/svg"
			x={0}
			y={0}
			viewBox="170 110 600 500"
			xmlSpace="preserve"
			width={width || '1em'}
			height={height || '1em'}
		>
			<title id={`${name}Title`}>{title}</title>
			<style>{'.earth_svg__st5{fill:#659959}'}</style>
			<path
				d="M613 341.57c0 3.32-.07 6.64-.23 9.92-.43 9.49-1.49 18.81-3.13 27.94v.01c-.87 4.85-1.91 9.64-3.1 14.36v.02c-17.64 69.82-69.8 125.9-137.27 149-21.62 7.41-44.81 11.42-68.95 11.42-24 0-47.07-3.98-68.59-11.3-83.8-28.54-144.09-107.91-144.09-201.38 0-35.11 8.51-68.23 23.57-97.41 29.17-56.5 82.91-98.25 147.09-111.11 13.31-2.67 27.07-4.1 41.16-4.15h.86c28.24 0 55.19 5.5 79.84 15.5C558.06 175.95 613 252.34 613 341.57z"
				fill="#62a8dd"
			/>
			<path
				className="earth_svg__st5"
				d="M377.38 132.8s-10.39-4.7-4.68 6.87c1.72 3.48.33 11.04.95 14.66.5 2.93 2.75 6.36 7.69 8.88 4.94 2.53 8.83-1.83 11.61-6.52 2.78-4.69 7.96-10.64 14.76-10.15 6.8.49 11.79-8.44 3.97-12.41-7.82-3.97-10.82-6.33-14.23-4.75-2.02.93-2.91 4.29-7.66 4.62-4.75.32-12.41-1.2-12.41-1.2zM404.82 390.7c-5.02 8.53-7.79 10.51-7.79 10.51s-1.82 1.92-2.51 2.47c-6.19 4.94-11.78 2.44-12.57 20.91 0 0-3.9 9.69-12.54 9.04-4.53-.34-4.11 6.58-6.26 7.79-5.87 3.3-13.93-13.12-17.9 11.69 0 0-.63 4.92-4 12.38-1.58 3.51-6.76 6.53-7.37 21.7-.22 5.42-.96 8.27-1.82 9.69-1.26 2.09-1.13 4.78-.15 7.03 1.31 3 2.38 6.32 1.84 8.25-1.17 4.17-23.64 1.21-28.1-12.39-4.46-13.61-12.83-38.39-12.83-38.39l-3.71-14.15c-1.22-4.64-1.7-9.44-1.69-14.25.01-8.35-1.87-22.94-13.94-30.82-28.63-18.7-28.08-51.41-18.98-65.79 1.4-2.22 6.07-4.51-5.36-9.05-7.63-3.02-9.12-9.38-9.28-13.27-.09-2.31-.72-4.57-2.04-6.45l-5.49-7.79c-2.86-4.06-6.65-7.37-11.15-9.3-5.71-2.45-13.47-7.69-13.38-18.04.13-16.37 2.79-20.4 3.41-27.23.03-.31.03-.67.02-1.06 29.17-56.5 82.91-98.25 147.09-111.11.72 1.61 2.03 5.08 2.03 8.88 0 4.21-1.62 8.83-7.46 11.79-13.1 6.63-7.82-1.58-8.21-3.87-.52-3.12-5.54-5.69-12.28.84-6.74 6.53-8.5-.6-14.26.98h-.01c-.46.23-16.52 8.42-13.56 17.76 3 9.48 4.14 14.72 14.99 10.29 10.85-4.43 3.21-11.82 11.15-12.08 7.94-.27 4.69-4.64 5.54-6.65 1.12-2.67 5.81-2.44 11.22 1.28 5.41 3.72 3.72 14.47 3.72 14.47s6.07 1.63 5.89 4.92c-.19 3.28.52 8.15-4.94 9.75-5.47 1.6-10.58-.87-13.47.92-2.28 1.42-3 7.3-3.26 10.45-.19 2.22-7.2 2.33-15.09 3.01-10.4.9-20.46 5.27-27.52 13.16-.51.57-.84 1.17-1.24 1.55-2.85 2.67-14.94 6.71-14.9 15.75.01 1.36.82 5.39.82 5.39s2.41 13.62-8.61 15.59c-7.16 1.29-10.04-6.7-11.18-12.45-.61-3.09-3.37-5.21-6.41-4.81l-9.27 1.2c-3.6.47-6.94 2.22-9.31 5.05-6.16 7.37-5.21 11.64 4.45 31.19 2.02 4.09-1.8 8.49.49 18.32.46 1.98 5.51 2.3 7.27 3.24 3.01 1.61 4.43 13.2 4.43 13.2s8.79 8.94 13.37 8.94c.26 0 .5-.03.73-.09 2.02-.52 3.86-2.67 5.23-4.78 2.08-3.21 5.34-5.33 9.06-5.78 8.36-1 22.83-1.64 31.85 4.13 13.28 8.5-3.06 7.98 15.71 9.15 11.74.73 19.93 11.61 24.43 19.67 2.73 4.89 7.21 8.54 12.47 10.16 4.18 1.29 7.29 6.16 12.41 8.12 4.85 1.86 15.02-3.07 20.27 4.34 5.25 7.38 14.96 16.12 9.95 24.65zM469.26 542.83c-21.62 7.41-44.81 11.42-68.95 11.42-24 0-47.07-3.98-68.59-11.3 4.36-3.4 16-11.71 21.28-7.88 6.58 4.76.7 10.69 30.01 11.75 29.31 1.06 21.72.36 25.94-4.85 2.79-3.44 3.85-4.99 19.56 2.59 0 0 11.89-.75 13.29-6.68 1.32-5.48 24.14 3.59 27.46 4.95zM613 341.57c0 3.32-.07 6.64-.23 9.92-6.59.74-2.63 7.24-3.11 27.43 0 .17-.01.33-.02.5v.01c-.19 5.36-1.41 10.18-3.1 14.36v.02c-4.6 11.41-12.64 18.09-12.64 18.09s-13.83 16.9-12.76 28.79c.99 10.95-11.52 28.28-32.81 24.15-2.85-.55-4.69-3.46-3.84-6.32 1.42-4.75 2.29-12-3.26-16.63-5.41-4.52-1.37-10.26 2.56-14.03 2.99-2.86 4.7-6.78 5.1-10.95.35-3.63 1.21-7.52 3.29-8.6 5.43-2.81-1.08-18.81-1.92-25.02-.41-3.06-.49-12.24 4.64-11.37 5.13.88-6.33-42.52-6.33-42.52s-5.13-14.68-28.52-7.25-43.71-2.22-43.71-2.22-7.25-5.95-1.8-27.8-4.97-35.25-1.23-37.35 11.43-3.24 14.72-12.36c3.29-9.13 1.81-13.62 16.18-12.77 14.38.85 23.64-8.25 35.33-2.82 11.69 5.43 14.74 11.05 28.68 5.19s-10.77-14.3-10.77-14.3-4.12-3.71-7.67-3.15c-3.54.55-10.14-4.66-12.9-2.8-3.05 2.07-.47 6.65-13.34-6.14-1.58-1.57-5.41-.55-8.15 3.32-2.73 3.86-8.8-2.27-8.8-2.27s-4.78-3.82-8.01 9.86c-3.24 13.68-38.88-2.28-22.36-13.5 3.19-2.17 10.49-3.79 15.27.79 4.77 4.58-2.71-9.63 8.36-13.76 11.07-4.13-9.73-26-18.18-27.29-5.92-.91-22.48-5.63-21.67-16.12.46-5.98 11.1-4.59 20.16-2.28C558.06 175.95 613 252.34 613 341.57z"
			/>
			<path
				className="earth_svg__st5"
				d="M464.44 164.69s21.65 15.59 16.06 21.5-6.87 4.46-11.25-3.22-13.49-14.72-10.75-18.59c2.73-3.88 5.94.31 5.94.31zM458.58 175.11c2.4-.24 6.34 2.94 5.83 7.88-.51 4.95-16.98-6.77-5.83-7.88zM257.24 268.25s3.88 10.78 18.27 5.7c14.39-5.07-22.66-10.88-18.27-5.7zM262.97 282.99s2.38 5.97 12.44 1.6c2.05-.89 2.67-1.58 2.06-2.15-3.67-3.46-13.96-6.01-14.5.55z"
			/>
			<path
				className="earth_svg__st5"
				d="M301.23 284.01c6.02 11.84-30.03 2.91-22.8-2.08 7.22-4.99 19.15-5.09 22.8 2.08z"
			/>
		</svg>
	);
}

export default Earth;