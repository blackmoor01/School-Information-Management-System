import React, { useState, useEffect } from "react";
import { ClipLoader } from "react-spinners";
import { TextField, Button, Box, Alert } from "@mui/material";

const Settings = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [settings, setSettings] = useState({
    username: "",
    email: "",
  });

  useEffect(() => {
    // Simulate a data fetch
    setTimeout(() => {
      setLoading(false);
      setSettings({ username: "JohnDoe", email: "john.doe@example.com" });
    }, 3000);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSettings({ ...settings, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    // Simulate saving data
    setTimeout(() => {
      setLoading(false);
      if (Math.random() > 0.2) {
        setSuccess(true);
      } else {
        setError("Failed to save settings. Please try again.");
      }
    }, 2000);
  };

  return (
    <div>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          mt: 5,
        }}
      >
        {loading ? (
          <div>
            <ClipLoader color={"#123abc"} loading={loading} size={50} />
            <p>Loading settings...</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ width: "300px" }}>
            <TextField
              fullWidth
              label="Username"
              name="username"
              value={settings.username}
              onChange={handleChange}
              margin="normal"
              required
            />
            <TextField
              fullWidth
              label="Email"
              name="email"
              type="email"
              value={settings.email}
              onChange={handleChange}
              margin="normal"
              required
            />
            <Button
              fullWidth
              type="submit"
              variant="contained"
              color="primary"
              style={{ marginTop: "20px" }}
              disabled={loading}
            >
              Save Settings
            </Button>
          </form>
        )}

        {success && (
          <Alert severity="success" sx={{ mt: 3 }}>
            Settings saved successfully!
          </Alert>
        )}
        {error && (
          <Alert severity="error" sx={{ mt: 3 }}>
            {error}
          </Alert>
        )}
      </Box>
    </div>
  );
};

export default Settings;
