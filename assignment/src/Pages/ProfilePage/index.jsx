import { Box, Divider, Skeleton } from "@mui/material";
import { useLocation, useParams } from "react-router-dom";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import "./style.css";
import { useEffect } from "react";
import PersonProfileTab from "../PersonProfileTab";
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      style={{ width: "100%" }}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3, width: 0.9 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}
const ProfilePage = () => {
  const { id } = useParams();
  const [value, setValue] = useState(0);
  const [user, setUser] = useState({});
  const location = useLocation();
  const [skelton, setSkelton] = useState(false);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const getUser = async () => {
    setSkelton(true);
    const res = await fetch(
      `https://my-json-server.typicode.com/kashisk2/kashi_1st_repo/users/${id}`
    );
    const res2 = await res.json();
    setSkelton(false);
    setUser(res2);
  };
  useEffect(() => {
    getUser();
  }, []);
  return (
    <Box sx={{ padding: 5, pb: 0 }}>
      <Box>
        <Box>
          <Box
            sx={{
              flexGrow: 1,
              width: 1,
              height: "700px",
              display: "flex",
            }}
          >
            <Tabs
              orientation="vertical"
              variant="scrollable"
              className="sidebar"
              value={value}
              TabIndicatorProps={{
                sx: {
                  bgcolor: "white",
                  width: "18px",
                  maxHeight: " 24px",
                  mt: "12px",
                  color: "red",

                  borderRadius: "60px 0px 0px 60px",
                },
              }}
              onChange={handleChange}
              aria-label="Vertical tabs example"
              sx={{
                borderRight: 1,
                borderColor: "divider",
                "& .MuiTab-root.Mui-selected": {
                  color: "white",
                },
              }}
            >
              <Tab
                sx={{
                  color: "#DADADA",
                  alignItems: "start",
                  ml: 1,
                  textTransform: "none",
                  fontSize: "16px",
                }}
                label="Profile"
                {...a11yProps(0)}
              />
              <Divider sx={{ mx: 3, bgcolor: "#DADADA" }} />
              <Tab
                sx={{
                  color: "#DADADA",
                  alignItems: "start",
                  ml: 1,
                  textTransform: "none",
                  fontSize: "16px",
                }}
                label="Post"
                {...a11yProps(1)}
              />
              <Divider sx={{ mx: 3, bgcolor: "#DADADA" }} />
              <Tab
                sx={{
                  color: "#DADADA",
                  alignItems: "start",
                  ml: 1,
                  textTransform: "none",
                  fontSize: "16px",
                }}
                label="Gallery"
                {...a11yProps(2)}
              />
              <Divider sx={{ mx: 3, bgcolor: "#DADADA" }} />
              <Tab
                sx={{
                  color: "#DADADA",
                  alignItems: "start",
                  ml: 1,
                  textTransform: "none",
                  fontSize: "16px",
                }}
                label="ToDo"
                {...a11yProps(3)}
              />
            </Tabs>
            <TabPanel value={value} index={0}>
              {skelton ? <Skeleton /> : <PersonProfileTab user={user} />}
            </TabPanel>
            <TabPanel value={value} index={2}>
              Post
            </TabPanel>
            <TabPanel value={value} index={4}>
              Gallery
            </TabPanel>
            <TabPanel value={value} index={6}>
              ToDo
            </TabPanel>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
export default ProfilePage;
