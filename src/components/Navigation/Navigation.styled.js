import styled from "@emotion/styled";

export const Nav = styled.nav`
	display: flex;
	justify-content: space-between;
	padding: 10px 30px;
	margin-bottom: 20px;
	border-bottom: 1px solid #080808;
	div{
		display: flex;
		align-items: center;
		gap: 15px;
	}
	p{
		margin: 0;
	}
	a {
		text-decoration: none;
		color: black;

		&.active {
			color: #9d22f9;
			text-decoration: underline;
		}
	}
`;