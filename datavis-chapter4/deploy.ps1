# GitHub Pages 自动部署脚本 - PowerShell版本
Write-Host "============================================" -ForegroundColor Green
Write-Host "GitHub Pages 自动部署脚本" -ForegroundColor Yellow
Write-Host "============================================" -ForegroundColor Green
Write-Host ""

# 设置执行策略（如果需要）
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser -Force

# 切换到脚本所在目录
Set-Location $PSScriptRoot

# 步骤1: 检查Git状态
Write-Host "步骤1: 检查Git状态" -ForegroundColor Cyan
git status
Write-Host ""

# 步骤2: 添加所有文件
Write-Host "步骤2: 添加所有文件到Git" -ForegroundColor Cyan
git add .
Write-Host ""

# 步骤3: 提交更改
Write-Host "步骤3: 提交更改" -ForegroundColor Cyan
git commit -m "自动部署: 修复GitHub Pages 404问题 - $(Get-Date -Format 'yyyy-MM-dd HH:mm:ss')"
Write-Host ""

# 步骤4: 重命名分支到main（如果当前是master）
Write-Host "步骤4: 检查并设置分支" -ForegroundColor Cyan
$currentBranch = git branch --show-current
if ($currentBranch -eq "master") {
    git branch -M main
    Write-Host "分支已重命名为: main" -ForegroundColor Green
}

# 步骤5: 添加远程仓库
Write-Host "步骤5: 配置远程仓库" -ForegroundColor Cyan
git remote remove origin 2>$null
git remote add origin https://github.com/022340614/datavis-chapter4.git
Write-Host "远程仓库已配置" -ForegroundColor Green

# 步骤6: 推送到GitHub
Write-Host "步骤6: 推送到GitHub" -ForegroundColor Cyan
git push -u origin main --force
Write-Host ""

Write-Host "============================================" -ForegroundColor Green
Write-Host "✅ 部署完成！" -ForegroundColor Yellow
Write-Host "请访问以下地址检查部署状态：" -ForegroundColor White
Write-Host "GitHub Actions: https://github.com/022340614/datavis-chapter4/actions" -ForegroundColor Cyan
Write-Host "主页面: https://022340614.github.io/datavis-chapter4/" -ForegroundColor Cyan
Write-Host "测试页面: https://022340614.github.io/datavis-chapter4/deploy-test.html" -ForegroundColor Cyan
Write-Host "快速验证: https://022340614.github.io/datavis-chapter4/quick-deploy.html" -ForegroundColor Cyan
Write-Host "============================================" -ForegroundColor Green

# 等待用户确认
Read-Host "按Enter键退出"