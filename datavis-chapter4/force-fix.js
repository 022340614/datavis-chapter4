// GitHub Pages 强制修复工具
// 针对现有仓库的404问题

const forceFixSteps = [
    {
        step: 1,
        title: "检查GitHub Pages设置",
        action: "访问：https://github.com/022340614/datavis-chapter4/settings/pages",
        check: "确认显示绿色勾选标记，分支：main，文件夹：/ (root)"
    },
    {
        step: 2,
        title: "验证文件结构",
        action: "检查仓库根目录文件",
        check: "确认存在：index.html, styles.css, script.js, .nojekyll（全部小写）"
    },
    {
        step: 3,
        title: "强制重新部署",
        action: "Actions → Deploy to GitHub Pages → Run workflow",
        check: "等待构建完成，查看构建日志"
    },
    {
        step: 4,
        title: "清除缓存测试",
        action: "使用浏览器无痕模式访问",
        check: "访问：https://022340614.github.io/datavis-chapter4/"
    },
    {
        step: 5,
        title: "诊断测试",
        action: "访问测试页面",
        check: "https://022340614.github.io/datavis-chapter4/quick-fix.html"
    }
];

console.log("GitHub Pages 强制修复指南");
console.log("==========================");

forceFixSteps.forEach(item => {
    console.log(`${item.step}. ${item.title}`);
    console.log(`   操作: ${item.action}`);
    console.log(`   检查: ${item.check}`);
    console.log("   ---");
});

console.log("==========================");
console.log("如果仍然404，请提供：");
console.log("1. GitHub Pages设置页面截图");
console.log("2. 仓库文件列表截图");
console.log("3. GitHub Actions构建日志");