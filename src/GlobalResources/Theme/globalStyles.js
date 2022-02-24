//Copyright 2021 Glowstik Inc. All rights reserved.
import theme from './theme'


const globalStyles = {
	body: {
		fontFamily: 'OpenSans',
		overscrollBehaviorY: 'none',
		margin: 0
	},
	a: {color: theme.pallete.brandPink},
	input: {fontFamily: 'OpenSans'},
	'.activeInputOutline': {
		outline: 'none',
		borderStyle: 'solid',
		borderWidth: 2,
		borderColor: theme.palette.formBlue,
		borderRadius: 8
	},
	'.footer': {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center'
	},
	'.gridWrapperFooters': {
		height: '100%',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between',
		overflow: 'hidden'
	},
	'.grid': {
		display: 'grid',
		gridAutoColumns: '1fr',
		gridTemplateRows: 'auto auto auto auto auto',
		marginRight: 24,
		marginLeft: 24,
		gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr',
		gridRowGap: 24,
		gridColumnGap: 24,
		[theme.breakpoints.down('tablet')]: {
			gridColumnGap: 16,
			gridRowGap: 16,
			gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr',
		},
		[theme.breakpoints.down('mobile')]: {gridTemplateColumns: '1fr 1fr 1fr 1fr'},
	},
	'.headingText': {
		display: 'inline-block',
		fontSize: 40,
		lineHeight: '1.2em',
		textAlign: 'center',
		letterSpacing: 0,
		[theme.breakpoints.down('tablet')]: {fontSize: 32},
		[theme.breakpoints.down('mobile')]: {fontSize: 30},
	},
	'.subContentText': {
		width: '15em',
		justifyContent: 'center',
		alignItems: 'flex-start',
		fontSize: 12,
		textAlign: 'center',
		marginBottom: 16,
	}
}

export default globalStyles