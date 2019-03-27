import React, { Component } from "react";
import AppBar from "material-ui/AppBar";
class Header extends Component {
  render() {
    // return (
    //   <div>
    //     <h1>Header</h1>
    //     <AppBar position="static">
    //      <h1>in app bar</h1>
    //     </AppBar>
    //   </div>
    // );
 
    function ButtonAppBar(props) {
      const { classes } = props;
      return (
        <div className={classes.root}>
          <AppBar position="static">
            <Toolbar>
              <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" color="inherit" className={classes.grow}>
                News
              </Typography>
              <Button color="inherit">Login</Button>
            </Toolbar>
          </AppBar>
        </div>
      );
    } }
}

export default Header;
