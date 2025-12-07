@echo off
echo ============================================
echo GitHub Pages 自动部署脚本
echo ============================================
echo.

cd /d "%~dp0"

echo 步骤1: 检查Git状态
git status
echo.

echo 步骤2: 添加所有文件到Git
git add .
echo.

echo 步骤3: 提交更改
git commit -m "修复GitHub Pages 404问题 - 自动部署"
echo.

echo 步骤4: 推送到GitHub
git push origin main
echo.

echo ============================================
echo 部署完成！
echo 请访问以下地址检查部署状态：
echo https://github.com/022340614/datavis-chapter4/actions
echo https://022340614.github.io/datavis-chapter4/
echo ============================================
pause