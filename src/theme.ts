"use client"

import { createTheme } from "@mui/material/styles";


// todo -> Найти референсную фигму и застилизовать темо под проект
const theme = createTheme({
	cssVariables: true,
	typography: {
		fontFamily: 'var(--font-roboto)',
	},
	palette: {
		mode: 'light',
		primary: {
			main: '#2D5016'
		},
		secondary: {
			main: '#6B7280',
		},
	}
});


export default theme;