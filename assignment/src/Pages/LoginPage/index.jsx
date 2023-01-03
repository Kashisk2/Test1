import { Box, Divider, Typography } from "@mui/material";
import { Container } from "@mui/system";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";
const LoginPage = () => {
  const [userData, setUserData] = useState([]);
  const navigate = useNavigate();
  const handleClick = (id, el) => {
    navigate(`/user/${id}`, { state: { el } });
  };
  const getUserData = async () => {
    const res = await fetch(
      "https://my-json-server.typicode.com/kashisk2/kashi_1st_repo/users"
    );
    const res2 = await res.json();
    setUserData(res2);
  };
  useEffect(() => {
    getUserData();
  }, []);
  return (
    <Box sx={{ position: "relative" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          width: 1,
          alignItems: "center",
          mt: 20,
        }}
      >
        <Box
          sx={{
            width: 0.25,
            borderRadius: "34px",
            boxShadow: "0px 2px 80px #00000029",
          }}
        >
          <Box
            sx={{
              borderRadius: "34px 34px 0px 0px",
              backgroundColor: "#f6f6f6",
            }}
          >
            <Typography sx={{ py: 6 }}>Select your account</Typography>
          </Box>
          <Box
            sx={{
              padding: 3,
            }}
          >
            <Box
              sx={{
                maxHeight: "300px",
                overflow: "auto",
                "&::-webkit-scrollbar": {
                  width: "6px",
                  height: "0.2em",
                },
                "&::-webkit-scrollbar-track": {
                  borderRadius: "10px",
                },
                "&::-webkit-scrollbar-thumb": {
                  backgroundColor: "rgba(0,0,0,.1)",

                  borderRadius: "10px",
                },
              }}
            >
              {userData.map((el, index) => (
                <Box key={index + 1}>
                  <Box
                    onClick={() => handleClick(el.id, el)}
                    sx={{
                      display: "flex",
                      cursor: "pointer",
                      alignItems: "center",
                      gap: 1,
                    }}
                  >
                    <Box sx={{ borderRadius: "50%" }}>
                      <img src={el.profilepicture} alt={el.id} />
                    </Box>
                    <Box>
                      <Typography>{el.name}</Typography>
                    </Box>
                  </Box>
                  <Divider sx={{ my: 1, mr: 1 }} />
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
export default LoginPage;
