import { AppBar } from "@material-ui/core";
import CartWidget from "./CartWidget";
import { Wrapper, Logo, MenuItem, Left, Center, Right } from './styledComponents';

const NavBar = () => {
    return (
        <AppBar position="relative">
            <Wrapper>
                <Left>
                    <Logo>ALT.EN $HO.P</Logo>
                </Left>
                <Center>
                    <MenuItem>CATEGORÍA 1</MenuItem>
                    <MenuItem>CATEGORÍA 2</MenuItem>
                    <MenuItem>CATEGORÍA 3</MenuItem>                    
                    <MenuItem>CATEGORÍA 4</MenuItem>                    
                </Center>
                <Right>
                    <MenuItem>REGISTER</MenuItem>
                    <MenuItem>SIGN IN</MenuItem>
                    <MenuItem><CartWidget /></MenuItem>
                </Right>
            </Wrapper>
        </AppBar>
    );
}

export default NavBar;