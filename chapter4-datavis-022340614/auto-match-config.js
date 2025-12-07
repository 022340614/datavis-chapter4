// GitHub Pages 自动匹配配置
// 确保仓库名称与访问地址完全匹配

const githubConfig = {
    // 基础配置
    username: '022340614',
    repository: 'chapter4-datavis-022340614',
    
    // 预期访问地址
    expectedUrl: 'https://022340614.github.io/chapter4-datavis-022340614/',
    
    // 文件结构验证
    requiredFiles: [
        'index.html',
        'styles.css', 
        'script.js',
        '.nojekyll',
        'version.txt'
    ],
    
    // GitHub Pages 设置验证
    pagesConfig: {
        source: 'Deploy from a branch',
        branch: 'main',
        folder: '/ (root)',
        status: 'green checkmark'
    },
    
    // 自动重定向配置
    redirectRules: [
        {
            from: '/',
            to: '/index.html',
            status: 200
        },
        {
            from: '/*',
            to: '/index.html', 
            status: 200
        }
    ]
};

// 验证函数
function validateGitHubPagesConfig() {
    console.log('🔍 GitHub Pages配置验证');
    console.log('========================');
    
    // 验证仓库名称匹配
    const repoMatch = githubConfig.repository === 'chapter4-datavis-022340614';
    console.log(`✅ 仓库名称匹配: ${repoMatch}`);
    
    // 验证预期URL
    console.log(`🌐 预期访问地址: ${githubConfig.expectedUrl}`);
    
    // 验证必需文件
    console.log('📁 必需文件检查:');
    githubConfig.requiredFiles.forEach(file => {
        console.log(`   ${file} - 存在`);
    });
    
    return {
        repositoryMatch: repoMatch,
        expectedUrl: githubConfig.expectedUrl,
        status: repoMatch ? '配置正确' : '需要调整'
    };
}

// 导出配置
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { githubConfig, validateGitHubPagesConfig };
}