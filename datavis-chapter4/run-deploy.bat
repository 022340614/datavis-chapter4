@echo off
echo ============================================
echo GitHub Pages 自动部署脚本 - 启动器
echo ============================================
echo.

cd /d "%~dp0"

echo 正在启动PowerShell部署脚本...
powershell -ExecutionPolicy Bypass -File "deploy.ps1"

echo.
echo ============================================
echo 部署脚本执行完成！
echo ============================================
pause