# 第4章数据可视化平台 - 本地部署指南

## 快速启动方式

### 方式一：双击启动（推荐）
1. 双击 `启动本地服务器.bat`
2. 自动打开浏览器访问平台
3. 服务器运行在 `http://localhost:8000`

### 方式二：Python服务器
```bash
cd chapter4-datavis-022340614
python local-server.py
```

### 方式三：直接打开
直接双击 `index.html` 文件（部分功能可能受限）

## 平台功能
- ✅ 图书采购情况可视化
- ✅ 汇率走势分析  
- ✅ 产品销售趋势
- ✅ 温度走势预测
- ✅ 科赫雪花分形
- ✅ 颜色映射演示

## 技术特点
- 响应式设计，支持移动端
- 使用Chart.js实现交互式图表
- Canvas绘制分形图形
- 现代化UI设计

## GitHub Pages问题说明
由于GitHub Pages持续出现404错误，本地部署确保平台可以立即使用。GitHub Pages问题可能由以下原因导致：
- 仓库名称特殊字符限制
- 账户类型配置问题
- DNS传播问题

## 文件清单
```
index.html          # 主页面
styles.css          # 样式文件  
script.js           # 交互功能
local-server.py     # Python服务器
启动本地服务器.bat    # Windows启动器
README-本地部署.md   # 说明文档
```

## 访问地址
本地服务器启动后访问：
- 主页面: http://localhost:8000/index.html
- 直接访问: http://localhost:8000/

## 系统要求
- Windows 7+ / macOS / Linux
- Python 3.6+（可选，用于服务器）
- 现代浏览器（Chrome/Firefox/Safari/Edge）

## 故障排除
如果启动失败：
1. 确保已安装Python（方式一、二需要）
2. 直接双击index.html文件（方式三）
3. 检查防火墙设置
4. 尝试不同浏览器