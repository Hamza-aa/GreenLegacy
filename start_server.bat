@echo off
echo =======================================================
echo   GreenLegacy Slemani - Local Server Host
echo =======================================================
echo.
echo Starting local web server on port 8000...
echo.
echo You can view the website at:
echo   Local Computer: http://localhost:8000
echo   Network Devices: http://192.168.1.11:8000
echo.
echo Press Ctrl+C in this window to stop the server.
echo =======================================================
echo.

python -m http.server 8000
pause
