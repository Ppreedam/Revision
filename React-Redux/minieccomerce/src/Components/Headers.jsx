import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Cartpage from './cartpage';
import "./Header.css"
import AccountMenu from './PersonalAccount';

function Headers() {
  return (
    <Navbar className='navbar' collapseOnSelect expand="lg" variant="dark" fixed='top'>
      <Container>
        <Navbar.Brand href="/">GharTak</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features"></Nav.Link> 
             {/* <Nav.Link href="#pricing">Pricing</Nav.Link>
             <NavDropdown title="" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>  */}
          </Nav>
          <Nav>
          <Navbar.Brand className='home' href="/">Home</Navbar.Brand>
          <Navbar.Brand className='product' href="/product">Product</Navbar.Brand>

          <Navbar.Brand href="#" >
            <AccountMenu/>
          </Navbar.Brand>

          <Navbar.Brand className='cart'>
            
            <Cartpage/>
          </Navbar.Brand>
          
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Headers;