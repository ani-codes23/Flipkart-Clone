import Dropdown from 'react-bootstrap/Dropdown';

function Loginbtn() {
    
    return (
        <Dropdown>
            <Dropdown.Toggle variant='primary' id="dropdown-basic" >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                    <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1" />
                </svg>
                <span >
                    Login
                </span>
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">
                    <p>New Customer?  
                        <span>SignUp</span>
                    </p> <hr/>
                </Dropdown.Item>
                <Dropdown.Item href="#/action-1">Login</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Flipkart Plus Zone</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Order</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Wishlist</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Reward</Dropdown.Item>
                <Dropdown.Item href="#/action-3">
                    <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-postcard-heart-fill" viewBox="0 0 16 16">
  <path d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm6 2.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0m3.5.878c1.482-1.42 4.795 1.392 0 4.622-4.795-3.23-1.482-6.043 0-4.622M2 5.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5"/>
</svg>  Gift Card
                    </span>
                </Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
}

export default Loginbtn;