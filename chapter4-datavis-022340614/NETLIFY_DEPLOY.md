# Netlify 部署指南

## 为什么选择Netlify
- 更简单的部署流程
- 即时生效，无需等待
- 自动HTTPS
- 全球CDN加速
- 免费套餐足够使用

## 部署步骤

### 方法一：拖拽部署（最简单）
1. 访问 https://app.netlify.com/
2. 注册/登录账户（支持GitHub登录）
3. 将整个 `chapter4-datavis-022340614` 文件夹拖拽到部署区域
4. 获得类似 `https://xxxxxx.netlify.app` 的网址

### 方法二：GitHub连接部署
1. 在Netlify点击"New site from Git"
2. 连接您的GitHub账户
3. 选择 `chapter4-datavis-022340614` 仓库
4. 设置构建命令（留空）和发布目录（`.`）
5. 点击部署

### 方法三：CLI部署
```bash
# 安装Netlify CLI
npm install -g netlify-cli

# 登录
netlify login

# 初始化部署
netlify init

# 部署
netlify deploy --prod --dir=.
```

## 预期结果
部署成功后获得：
- 唯一网址：`https://xxxxxx.netlify.app`
- 自动SSL证书
- 即时访问数据可视化平台

## 优势对比
| 特性 | Netlify | GitHub Pages |
|------|---------|-------------|
| 部署速度 | 即时 | 5-30分钟 |
| 自定义域名 | 免费 | 免费 |
| HTTPS | 自动 | 自动 |
| 构建日志 | 详细 | 基础 |
| 重定向 | 灵活 | 有限 |

## 故障排除
如果部署失败：
1. 检查文件结构完整性
2. 确认没有CNAME文件冲突
3. 查看Netlify构建日志
4. 确保所有文件已上传

## 访问测试
部署成功后访问：
- 主页面: `https://您的网址.netlify.app`
- 诊断页面: `https://您的网址.netlify.app/diagnose.html`

预计5分钟内完成部署并获得可访问网址。