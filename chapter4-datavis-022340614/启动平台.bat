@echo off
chcp 65001 >nul
title 第4章数据可视化平台启动器
echo.
echo ========================================
echo   第4章数据可视化平台 - 022340614
echo ========================================
echo.
echo 正在启动数据可视化平台...

:: 检查文件是否存在
if not exist "index.html" (
    echo 错误: 找不到index.html文件
    echo 请确保在正确的目录下运行此脚本
    pause
    exit /b 1
)

:: 尝试使用默认浏览器打开
echo 正在打开浏览器...
start "" "index.html"

echo.
echo 平台已启动！请在浏览器中查看可视化效果。
echo.
echo 如果浏览器没有自动打开，请手动打开index.html文件
echo.
pause