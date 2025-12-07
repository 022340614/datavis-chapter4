@echo off
chcp 65001 >nul
title 第4章数据可视化平台 - 本地服务器

echo.
echo ========================================
echo   第4章数据可视化平台 - 本地服务器启动
echo ========================================
echo.

:: 检查Python是否安装
python --version >nul 2>&1
if errorlevel 1 (
    echo 错误: 未找到Python，请先安装Python
    echo 下载地址: https://www.python.org/downloads/
    pause
    exit /b 1
)

:: 启动本地服务器
echo 正在启动本地服务器...
python local-server.py

if errorlevel 1 (
    echo.
    echo 启动失败，尝试备用方案...
    echo 请手动打开 index.html 文件
    start index.html
)

pause