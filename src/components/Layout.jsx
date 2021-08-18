import React from 'react'
import styled from "styled-components"


function Layout(props) {
	return (
		<SMargin>
			{props.children}
		</SMargin>
	)
}

const SMargin = styled.div`
	margin: 3rem;
	max-width:1440px;
	min-width:320px;

	@media screen and (max-width: 500px) {
		margin: 3rem 0;

  }
`



export default Layout
