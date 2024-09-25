import { useState } from "react";
import { AppBar, Toolbar, IconButton, Menu, MenuItem, Button } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Link } from "react-router-dom";
import { useMediaQuery } from "@mui/material";

// Tailwind CSS Styles
const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [impactEl, setImpactEl] = useState(null);
  const isMobile = useMediaQuery("(max-width: 768px)");

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleImpactClick = (event) => {
    setImpactEl(event.currentTarget);
  };

  const handleImpactClose = () => {
    setImpactEl(null);
  };

  return (
    <AppBar position="sticky" sx={{ backgroundColor: '#dc2626' }}> {/* Changed the color here */}
      <Toolbar className="flex items-center justify-between px-4 py-2">
        {/* Logo */}
        <div className="flex items-center">
          <img src="/logo2.jpg" alt="Logo" className="h-22 w-20  rounded-lg" />
          <div className="text-white text-2xl font-bold"></div>
        </div>

        {isMobile ? (
          <>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={handleMenuClick}
            >
              <MenuIcon />
            </IconButton>

            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
              className="bg-white"
            >
              <MenuItem onClick={handleMenuClose}>
                <Link to="/" className="text-blue-600">Home</Link>
              </MenuItem>
              <MenuItem onClick={handleMenuClose}>
                <Link to="/about" className="text-blue-600">About</Link>
              </MenuItem>
              <MenuItem onClick={handleMenuClose}>
                
              <div>
              <Button
                color="inherit"
                aria-controls="impact-menu"
                aria-haspopup="true"
                onClick={handleImpactClick}
                endIcon={<ArrowDropDownIcon />}
                className="text-white"
              >
                Our Impact
              </Button>
              <Menu
                id="impact-menu"
                anchorEl={impactEl}
                open={Boolean(impactEl)}
                onClose={handleImpactClose}
              >
                <MenuItem onClick={handleImpactClose}>
                  <Link to="/shadiMubark" className="text-blue-600">Marraige Ceremony</Link>
                </MenuItem>
                <MenuItem onClick={handleImpactClose}>
                  <Link to="/FoodAid" className="text-blue-600">Food Aid</Link>
                </MenuItem>
                <MenuItem onClick={handleImpactClose}>
                  <Link to="HelpEducation" className="text-blue-600">Education</Link>
                </MenuItem>
                <MenuItem onClick={handleImpactClose}>
                  <Link to="Health" className="text-blue-600">Health</Link>
                </MenuItem>
                <MenuItem onClick={handleImpactClose}>
                  <Link to="WaterPlant" className="text-blue-600">Water Plant</Link>
                </MenuItem>
                <MenuItem onClick={handleImpactClose}>
                  <Link to="ChildrenHospital"className="text-blue-600"> Children Hospital </Link>
                </MenuItem>
                <MenuItem onClick={handleImpactClose}>
                  <Link to="MedicineCharity" className="text-blue-600">Medicine Charity</Link>
                </MenuItem>
                <MenuItem onClick={handleImpactClose}>
                  <Link to="HelpJobBank" className="text-blue-600">Help Job Bank</Link>
                </MenuItem>
                <MenuItem onClick={handleImpactClose}>
                  <Link to="LegalAid" className="text-blue-600">Legal Aid </Link>
                </MenuItem>
                <MenuItem onClick={handleImpactClose}>
                  <Link to="OldAgeHome" className="text-blue-600">Old Age Home </Link>
                </MenuItem>
                <MenuItem onClick={handleImpactClose}>
                  <Link to="Orphans" className="text-blue-600">Orphans</Link>
                </MenuItem>
              </Menu>
            </div>




              </MenuItem>
              <MenuItem onClick={handleMenuClose}>
                <Link to="/Ourmember" className="text-blue-600">Our Member</Link>
              </MenuItem>
              <MenuItem onClick={handleMenuClose}>
                <Link to="/contact" className="text-blue-600">Contact</Link>
              </MenuItem>
              <MenuItem onClick={handleMenuClose}>
                <Link to="/DonatationForm" className="text-blue-600">Donate Now</Link>
              </MenuItem>
            </Menu>
          </>
        ) : (
          <div className="flex items-center space-x-4">
            <Button color="inherit">
              <Link to="/" className="text-white">Home</Link>
            </Button>
            <Button color="inherit">
              <Link to="/about" className="text-white">About</Link>
            </Button>
            <div>
              <Button
                color="inherit"
                aria-controls="impact-menu"
                aria-haspopup="true"
                onClick={handleImpactClick}
                endIcon={<ArrowDropDownIcon />}
                className="text-white"
              >
                Our Impact
              </Button>
              <Menu
                id="impact-menu"
                anchorEl={impactEl}
                open={Boolean(impactEl)}
                onClose={handleImpactClose}
              >
                <MenuItem onClick={handleImpactClose}>
                  <Link to="/shadiMubark" className="text-black">Marraige Ceremony</Link>
                </MenuItem>
                <MenuItem onClick={handleImpactClose}>
                  <Link to="/FoodAid" className="text-black">Food Aid</Link>
                </MenuItem>
                <MenuItem onClick={handleImpactClose}>
                  <Link to="HelpEducation" className="text-black">Education</Link>
                </MenuItem>
                <MenuItem onClick={handleImpactClose}>
                  <Link to="Health" className="text-black">Health</Link>
                </MenuItem>
                <MenuItem onClick={handleImpactClose}>
                  <Link to="WaterPlant" className="text-black">Water Plant</Link>
                </MenuItem>
                <MenuItem onClick={handleImpactClose}>
                  <Link to="ChildrenHospital"className="text-black"> Children Hospital </Link>
                </MenuItem>
                <MenuItem onClick={handleImpactClose}>
                  <Link to="MedicineCharity" className="text-black">Medicine Charity</Link>
                </MenuItem>
                <MenuItem onClick={handleImpactClose}>
                  <Link to="HelpJobBank" className="text-black">Help Job Bank</Link>
                </MenuItem>
                <MenuItem onClick={handleImpactClose}>
                  <Link to="LegalAid" className="text-black">Legal Aid </Link>
                </MenuItem>
                <MenuItem onClick={handleImpactClose}>
                  <Link to="OldAgeHome" className="text-black">Old Age Home </Link>
                </MenuItem>
                <MenuItem onClick={handleImpactClose}>
                  <Link to="Orphans" className="text-black">Orphans</Link>
                </MenuItem>
              </Menu>
            </div>

            <Button color="inherit">
              <Link to="/OurMember" className="text-white">Our Members</Link>
            </Button>
            <Button color="inherit">
              <Link to="/contact" className="text-white">Contact</Link>
            </Button>
            <Button
              // variant="contained"
              className="bg-red-600 text-white shadow-lg shadow-slate-600 py-8 border-y-8 border-double">
              <Link to="/DonationForm" className="text-white">Donate Now</Link>
            </Button>
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;