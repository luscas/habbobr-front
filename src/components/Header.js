import React, { useState } from 'react';
import { Navbar, NavbarBrand, NavbarToggler, Collapse, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

export default function Header(props) {
	const [dropdownOpen, setDropdownOpen] = useState(false);
	const toggle = () => setDropdownOpen(prevState => !prevState);

	const [isOpen, setIsOpen] = useState(false);
	const toggleCollapse = () => setIsOpen(!isOpen);

	return (
		<Navbar color="light" light fixed="top" expand="lg">
			<NavbarBrand href={"/"} className="navbar-brand">
				habboBR<span className="tag">Beta</span>
			</NavbarBrand>

			<NavbarToggler onClick={toggleCollapse}><span className="navbar-toggler-icon"></span></NavbarToggler>

			<Collapse isOpen={isOpen} navbar>
				<ul id="menu-principal" className="navbar-nav mr-auto">
					<li className="active">
						<a href={"/"} className="nav-link active">Início</a>
					</li>

					<li>
						<UncontrolledDropdown nav inNavbar>
							<DropdownToggle nav caret>
								Páginas
							</DropdownToggle>

							<DropdownMenu right>
								<DropdownItem>Sobre</DropdownItem>
								<DropdownItem href="/login">Login</DropdownItem>
								<DropdownItem href="/equipe">Equipe</DropdownItem>
								<DropdownItem>Contato</DropdownItem>
								<DropdownItem>Components</DropdownItem>
							</DropdownMenu>
						</UncontrolledDropdown>
					</li>
					<li><a href={"/"} className="nav-link">Notícias</a></li>
					<li><a href={"/"} className="nav-link">Fórum</a></li>
					<li><a href={"/"} className="nav-link">Galeria</a></li>
					<li><a href={"/"} className="nav-link">Eventos</a></li>
				</ul>

				<div className="d-flex justify-content-center align-items-center ml-auto mt-3 mt-lg-0">
					<div className="mr-4">
						<label className="theme-switch mb-0" htmlFor="checkbox">
							<i className="fas fa-moon text-muted"></i>
							<input className="d-none" type="checkbox" id="checkbox" />
						</label>
					</div>

					<a href={"/"} className="btn btn-primary" data-toggle="modal" data-target="#loginModal">Entrar</a>

					<div className="search">
						<label htmlFor="search"><i className="fas fa-search"></i></label>

						<form action="https://marcocuel.com/p/fansite/" method="get">
							<input type="text" name="s" id="search" placeholder="Buscar..." />
						</form>
					</div>
				</div>
			</Collapse>
		</Navbar>
	);
}