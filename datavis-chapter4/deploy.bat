@echo off
chcp 65001 >nul
title 第4章数据可视化平台部署工具
echo ========================================
echo   第4章数据可视化平台部署工具
echo ========================================
echo.

echo 1. 检查文件完整性...
if exist index.html (
    echo   ✅ index.html 存在
) else (
    echo   ❌ index.html 缺失
    goto error
)

if exist styles.css (
    echo   ✅ styles.css 存在
) else (
    echo   ❌ styles.css 缺失
    goto error
)

if exist script.js (
    echo   ✅ script.js 存在
) else (
    echo   ❌ script.js 缺失
    goto error
)

if exist .nojekyll (
    echo   ✅ .nojekyll 存在
) else (
    echo   ❌ .nojekyll 缺失
    goto error
)

echo.
echo 2. 文件结构验证完成！
echo.
echo 3. GitHub Pages部署步骤：
echo   1. 将所有文件上传到GitHub仓库：datavis-chapter4
echo   2. 进入仓库Settings → Pages
echo   3. 选择main分支，根目录
echo   4. 保存设置，等待部署完成
echo   5. 访问：https://022340614.github.io/datavis-chapter4/
echo.
echo 4. 本地测试：
echo   双击index.html文件或运行：python -m http.server 8000
echo.
echo ========================================
echo 部署准备完成！请按照上述步骤操作。
echo ========================================
pause
exit

:error
echo.
echo ❌ 文件完整性检查失败，请确保所有文件存在。
pause
exit