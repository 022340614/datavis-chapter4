# 第4章 数据可视化平台

GitHub Pages 部署地址：https://022340614.github.io/datavis-chapter4/

## 🚀 一键部署解决方案

### 方法1: 自动部署脚本（推荐）
1. **双击运行** `deploy.bat` 文件
2. 脚本会自动执行所有Git命令
3. 等待GitHub Actions完成部署（2-5分钟）
4. 访问验证页面：https://022340614.github.io/datavis-chapter4/quick-deploy.html

### 方法2: 手动Git命令
```bash
cd datavis-chapter4
git add .
git commit -m "修复GitHub Pages 404问题"
git push origin main
```

### 部署验证
- 主页面：https://022340614.github.io/datavis-chapter4/
- 测试页面：https://022340614.github.io/datavis-chapter4/deploy-test.html
- 快速验证：https://022340614.github.io/datavis-chapter4/quick-deploy.html

### 测试页面
- 主页面：https://022340614.github.io/datavis-chapter4/
- 测试页面：https://022340614.github.io/datavis-chapter4/deploy-test.html

## 📁 项目结构
```
datavis-chapter4/
├── index.html          # 主页面
├── styles.css          # 样式文件
├── script.js           # JavaScript 逻辑
├── deploy-test.html    # 部署测试页面
├── .nojekyll           # GitHub Pages 配置
├── CNAME              # 自定义域名配置
└── .github/workflows/deploy.yml  # 部署配置
```

## 🔧 故障排除
如果遇到 404 错误：
1. 检查 GitHub Pages 设置：`Settings > Pages`
2. 确认 Source 设置为：`Deploy from a branch`
3. 确认 Branch 设置为：`gh-pages` 或 `main`
4. 清除浏览器缓存后重新访问