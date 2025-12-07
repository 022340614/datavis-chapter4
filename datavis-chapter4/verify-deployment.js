// GitHub Pages部署验证工具
// 用于诊断404问题

function verifyDeployment() {
    const tests = [
        {
            name: '仓库名称检查',
            url: 'https://github.com/022340614/datavis-chapter4',
            expected: '仓库存在且可访问'
        },
        {
            name: 'GitHub Pages设置',
            url: 'https://github.com/022340614/datavis-chapter4/settings/pages',
            expected: '显示绿色勾选标记'
        },
        {
            name: '文件结构验证',
            url: 'https://github.com/022340614/datavis-chapter4',
            expected: 'index.html在根目录'
        },
        {
            name: '测试页面访问',
            url: 'https://022340614.github.io/datavis-chapter4/quick-fix.html',
            expected: '能正常访问诊断页面'
        },
        {
            name: '主页面访问',
            url: 'https://022340614.github.io/datavis-chapter4/',
            expected: '显示数据可视化平台'
        }
    ];

    console.log('GitHub Pages部署验证开始...');
    console.log('================================');

    tests.forEach((test, index) => {
        console.log(`${index + 1}. ${test.name}`);
        console.log(`   网址: ${test.url}`);
        console.log(`   预期: ${test.expected}`);
        console.log('   ---');
    });

    console.log('================================');
    console.log('验证步骤说明:');
    console.log('1. 手动访问每个网址检查结果');
    console.log('2. 如果测试页面能访问但主页不能，说明是index.html路径问题');
    console.log('3. 检查文件名大小写和GitHub Pages设置');
    console.log('4. 强制重新部署解决缓存问题');
}

verifyDeployment();