import { Divider, Menu, MenuItem, Skeleton, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect } from "react";
import { useState } from "react";
import Style from "./index.style.jsx";
const PersonProfileTab = (prop) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box>
      <Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: 1,
          }}
        >
          <Typography variant="subtitle1" sx={{ color: "#545454" }}>
            Profile
          </Typography>
          <Box
            onClick={handleClick}
            sx={{
              display: "flex",
              cursor: "pointer",
              alignItems: "center",
              gap: 1,
            }}
          >
            <Box sx={{ borderRadius: "50%" }}>
              <img src={prop.user.profilepicture} alt={prop.user.id} />
            </Box>
            <Box>
              <Typography>{prop.user.name}</Typography>
            </Box>
          </Box>
          <Menu
            anchorEl={anchorEl}
            id="account-menu"
            open={open}
            sx={{ boxShadow: "0px 2px 80px #00000029" }}
            onClose={handleClose}
            onClick={handleClose}
            PaperProps={{
              elevation: 0,
              sx: {
                overflow: "visible",
                filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                mt: 1.5,
                "& .MuiAvatar-root": {
                  width: 32,
                  height: 32,
                  ml: -0.5,
                  mr: 1,
                },
                "&:before": {
                  content: '""',
                  display: "block",
                  position: "absolute",
                  top: 0,
                  right: 14,
                  width: 10,
                  height: 10,
                  bgcolor: "background.paper",
                  transform: "translateY(-50%) rotate(45deg)",
                  zIndex: 0,
                },
              },
            }}
            transformOrigin={{ horizontal: "right", vertical: "top" }}
            anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
          >
            <MenuItem>
              <Box
                sx={{
                  textAlign: "center",
                  m: "auto",
                  height: "100px",
                  width: "100px",
                  borderRadius: "50%",
                  backgroundColor: "#DADADA",
                }}
              ></Box>
            </MenuItem>
            <MenuItem
              sx={{
                textAlign: "center",
                m: "auto",
              }}
            >
              {prop.user.name}
            </MenuItem>
            <Divider />
            <MenuItem
              sx={{
                textAlign: "center",
                m: "auto",
              }}
            >
              {" "}
              {prop.user.email}
            </MenuItem>
            <MenuItem>Settings</MenuItem>
            <MenuItem>Logout</MenuItem>
          </Menu>
        </Box>
        <Divider sx={{ mt: 3 }} />
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            mt: 2,
          }}
        >
          <Box sx={{ width: "400px" }}>
            <Box>
              <Box>
                <Box sx={{ textAlign: "center", m: "auto" }}>
                  <Skeleton
                    variant="circular"
                    sx={{ m: "auto" }}
                    width={158}
                    height={158}
                  />
                </Box>

                <Box>
                  <Typography
                    sx={{ fontSize: "16px", color: "#545454", mt: 1 }}
                  >
                    {prop.user.name}
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography sx={Style.TextFirst}>Username</Typography>
                <Typography sx={Style.TextSecond}>:</Typography>
                <Typography sx={Style.TextThird}>
                  {prop.user.username}
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography sx={Style.TextFirst}>e-mail</Typography>
                <Typography sx={Style.TextSecond}>:</Typography>
                <Typography sx={Style.TextThird}>{prop.user.email}</Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography sx={Style.TextFirst}>Phone</Typography>
                <Typography sx={Style.TextSecond}>:</Typography>
                <Typography sx={Style.TextThird}>{prop.user.phone}</Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography sx={Style.TextFirst}>Website</Typography>
                <Typography sx={Style.TextSecond}>:</Typography>
                <Typography sx={Style.TextThird}>
                  {prop.user.website}
                </Typography>
              </Box>

              <Divider sx={{ mt: 1, width: 0.7, mx: "auto" }} />
              <Typography sx={{ color: "#9A9A9A", fontSize: "16px", mt: 1 }}>
                Company
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography sx={Style.TextFirst}>Website</Typography>
                <Typography sx={Style.TextSecond}>:</Typography>
                <Typography sx={Style.TextThird}>
                  {prop.user.website}
                </Typography>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography sx={Style.TextFirst}>Name</Typography>
                <Typography sx={Style.TextSecond}>:</Typography>
                <Typography sx={Style.TextThird}>
                  {prop.user.company?.name}
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography sx={Style.TextFirst}>catchphrase</Typography>
                <Typography sx={Style.TextSecond}>:</Typography>
                <Typography sx={Style.TextThird}>
                  {prop.user.company?.catchPhrase}
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography sx={Style.TextFirst}>bs</Typography>
                <Typography sx={Style.TextSecond}>:</Typography>
                <Typography sx={Style.TextThird}>
                  {prop.user.company?.bs}
                </Typography>
              </Box>
            </Box>
          </Box>
          <Divider orientation="vertical" flexItem />
          <Box>
            <Box sx={{ p: 3, width: "300px" }}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography sx={Style.TextFirst}>Address:</Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography sx={Style.TextFirst}>Street</Typography>
                <Typography sx={Style.TextSecond}>:</Typography>
                <Typography sx={Style.TextThird}>
                  {prop.user.address?.street}
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography sx={Style.TextFirst}>Suite</Typography>
                <Typography sx={Style.TextSecond}>:</Typography>
                <Typography sx={Style.TextThird}>
                  {prop.user.address?.suite}
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography sx={Style.TextFirst}>City</Typography>
                <Typography sx={Style.TextSecond}>:</Typography>
                <Typography sx={Style.TextThird}>
                  {prop.user.address?.city}
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography sx={Style.TextFirst}>Zipcode</Typography>
                <Typography sx={Style.TextSecond}>:</Typography>
                <Typography sx={Style.TextThird}>
                  {prop.user.address?.zipcode}
                </Typography>
              </Box>
            </Box>
            <Box sx={{ ml: 5, mt: 2, borderRadius: "20px" }}>
              <div className={Style.Mapouter}>
                <div className={Style.Gmap_canvas}>
                  <iframe
                    width="600"
                    height="350"
                    borderRadius="20px"
                    id="gmap_canvas"
                    src={`https://maps.google.com/maps?q=${prop.user.address?.geo?.lat},${prop.user.address?.geo?.lng}&t=&z=13&ie=UTF8&iwloc=&output=embed`}
                    frameborder="0"
                    scrolling="no"
                    marginheight="0"
                    marginwidth="0"
                  ></iframe>
                </div>
              </div>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "flex-end", gap: 1 }}>
              <Typography sx={{ fontSize: "12px", color: "#9A9A9A" }}>
                Lat:{prop.user.address?.geo?.lat}
              </Typography>
              <Typography sx={{ fontSize: "12px", color: "#9A9A9A" }}>
                Long:{prop.user.address?.geo?.lng}
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
export default PersonProfileTab;
