// Top level imports
// import Image from "next/image";
import { ReactElement, useEffect, useState } from 'react'
import classNames from 'classnames'

// Bootstrap
import { Navbar, Container, Nav } from 'react-bootstrap'

// component definition
export const Header = (): ReactElement => {
	// state definition
	const [activeLink] = useState('home')
	const [scrolled, setScrolled] = useState(false)

	// Component mounted
	useEffect(() => {
		const onScroll = () => {
			if (window.scrollY > 50) {
				setScrolled(true)
			} else {
				setScrolled(false)
			}
		}

		window.addEventListener('scroll', onScroll)

		return () => {
			window.removeEventListener('scroll', onScroll)
		}
	}, [])

	// Main JSX
	return (
		<Navbar expand="lg" className={classNames({ scrolled: scrolled })}>
			<Container>
				<Navbar.Brand href="#home" className="text-white">
					React-Bootstrap
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav">
					<span className="navbar-toggle-icon" />
				</Navbar.Toggle>
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="me-auto">
						<Nav.Link
							href="#home"
							className={classNames('navbar-link', {
								active: activeLink,
							})}
						>
							Home
						</Nav.Link>
					</Nav>

					<span className="navbar-text">
						<div className="social-icon">
							<a href="#">
								{/* <Image
                                    src="bla"
                                    alt="bla"
                                    width={100}
                                    height={100}
                                /> */}
							</a>
						</div>

						<button className="">
							<span>Lets connect</span>
						</button>
					</span>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	)
}
