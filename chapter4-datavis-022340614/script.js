// 页面加载完成后初始化所有图表
document.addEventListener('DOMContentLoaded', function() {
    initBookPurchaseChart();
    initExchangeRateChart();
    initProductSalesChart();
    initTemperatureChart();
    initSnowflake();
});

// 1. 图书采购情况图表
function initBookPurchaseChart() {
    const ctx = document.getElementById('bookPurchaseChart').getContext('2d');
    
    const data = {
        labels: ['家庭', '小说', '心理', '科技', '儿童'],
        datasets: [
            {
                label: '地区1',
                data: [1200, 2400, 1800, 2200, 1600],
                backgroundColor: '#FFCC00',
                borderColor: '#FFCC00',
                borderWidth: 1
            },
            {
                label: '地区2',
                data: [1050, 2100, 1300, 1600, 1340],
                backgroundColor: '#B0C4DE',
                borderColor: '#B0C4DE',
                borderWidth: 1
            }
        ]
    };

    new Chart(ctx, {
        type: 'bar',
        data: data,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: '采购数量(本)'
                    },
                    grid: {
                        color: 'rgba(0,0,0,0.1)'
                    }
                },
                x: {
                    title: {
                        display: true,
                        text: '图书种类'
                    }
                }
            },
            plugins: {
                title: {
                    display: true,
                    text: '地区1和地区2对各类图书的采购情况',
                    font: {
                        size: 16,
                        weight: 'bold'
                    }
                },
                legend: {
                    position: 'top'
                }
            }
        }
    });
}

// 2. 汇率走势图表
function initExchangeRateChart() {
    const ctx = document.getElementById('exchangeRateChart').getContext('2d');
    
    const date_x = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 17, 18, 19, 24, 25, 26, 31];
    const eurcny_2017 = [6.8007, 6.8007, 6.8015, 6.8015, 6.8060, 6.8060, 6.8060, 6.8036, 
                        6.8025, 6.7877, 6.7835, 6.7758, 6.7700, 6.7463, 6.7519, 6.7511, 
                        6.7511, 6.7539, 6.7265];
    const eurcny_2019 = [6.8640, 6.8705, 6.8697, 6.8697, 6.8697, 6.8881, 6.8853, 6.8856, 
                        6.8677, 6.8662, 6.8662, 6.8662, 6.8827, 6.8761, 6.8635, 6.8860, 
                        6.8737, 6.8796, 6.8841];

    new Chart(ctx, {
        type: 'line',
        data: {
            labels: date_x.map(d => `7月${d}日`),
            datasets: [
                {
                    label: '2017年7月美元/人民币汇率',
                    data: eurcny_2017,
                    borderColor: '#006374',
                    backgroundColor: 'rgba(0, 99, 116, 0.1)',
                    borderWidth: 2,
                    tension: 0.1,
                    fill: false
                },
                {
                    label: '2019年7月美元/人民币汇率',
                    data: eurcny_2019,
                    borderColor: '#8a2e76',
                    backgroundColor: 'rgba(138, 46, 118, 0.1)',
                    borderWidth: 2,
                    borderDash: [5, 5],
                    tension: 0.1,
                    fill: false
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    title: {
                        display: true,
                        text: '汇率'
                    },
                    grid: {
                        color: 'rgba(0,0,0,0.1)'
                    }
                },
                x: {
                    title: {
                        display: true,
                        text: '日期'
                    }
                }
            },
            plugins: {
                title: {
                    display: true,
                    text: '2017年7月与2019年7月美元/人民币汇率走势',
                    font: {
                        size: 16,
                        weight: 'bold'
                    }
                }
            }
        }
    });
}

// 3. 产品销售图表
function initProductSalesChart() {
    const ctx = document.getElementById('productSalesChart').getContext('2d');
    
    const sale_a = [2144, 4617, 7674, 6666];
    const sale_b = [853, 1214, 2414, 4409];
    const sale_c = [153, 155, 292, 680];
    const quarters = ['第1季度', '第2季度', '第3季度', '第4季度'];

    new Chart(ctx, {
        type: 'line',
        data: {
            labels: quarters,
            datasets: [
                {
                    label: '产品A',
                    data: sale_a,
                    borderColor: '#FF6B6B',
                    backgroundColor: 'rgba(255, 107, 107, 0.1)',
                    borderWidth: 2,
                    pointStyle: 'diamond',
                    pointRadius: 8,
                    tension: 0.1
                },
                {
                    label: '产品B',
                    data: sale_b,
                    borderColor: '#4ECDC4',
                    backgroundColor: 'rgba(78, 205, 196, 0.1)',
                    borderWidth: 2,
                    borderDash: [5, 5],
                    pointStyle: 'triangle',
                    pointRadius: 8,
                    tension: 0.1
                },
                {
                    label: '产品C',
                    data: sale_c,
                    borderColor: '#45B7D1',
                    backgroundColor: 'rgba(69, 183, 209, 0.1)',
                    borderWidth: 2,
                    borderDash: [2, 2],
                    pointStyle: 'rect',
                    pointRadius: 8,
                    tension: 0.1
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: '销售额(万元)'
                    },
                    grid: {
                        color: 'rgba(0,0,0,0.1)'
                    }
                }
            },
            plugins: {
                title: {
                    display: true,
                    text: '不同产品各季度的销售额',
                    font: {
                        size: 16,
                        weight: 'bold'
                    }
                }
            }
        }
    });
}

// 4. 温度走势图表
function initTemperatureChart() {
    const ctx = document.getElementById('temperatureChart').getContext('2d');
    
    const dates = Array.from({length: 15}, (_, i) => i + 4);
    const y_max = [32, 33, 34, 34, 33, 31, 30, 29, 30, 29, 26, 23, 21, 25, 31];
    const y_min = [19, 19, 20, 22, 22, 21, 22, 16, 18, 18, 17, 14, 15, 16, 16];

    new Chart(ctx, {
        type: 'line',
        data: {
            labels: dates.map(d => `第${d}天`),
            datasets: [
                {
                    label: '最高温度',
                    data: y_max,
                    borderColor: '#FF6B35',
                    backgroundColor: 'rgba(255, 107, 53, 0.1)',
                    borderWidth: 2,
                    pointRadius: 6,
                    tension: 0.1
                },
                {
                    label: '最低温度',
                    data: y_min,
                    borderColor: '#1E90FF',
                    backgroundColor: 'rgba(30, 144, 255, 0.1)',
                    borderWidth: 2,
                    pointRadius: 6,
                    tension: 0.1
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    title: {
                        display: true,
                        text: '温度(°C)'
                    },
                    min: 0,
                    max: 40,
                    grid: {
                        color: 'rgba(0,0,0,0.1)'
                    }
                }
            },
            plugins: {
                title: {
                    display: true,
                    text: '未来15天最高气温和最低气温的走势',
                    font: {
                        size: 16,
                        weight: 'bold'
                    }
                }
            }
        }
    });
}

// 5. 科赫雪花分形
function initSnowflake() {
    const canvas = document.getElementById('snowflakeCanvas');
    const ctx = canvas.getContext('2d');
    
    // 设置canvas大小
    canvas.width = 400;
    canvas.height = 400;
    
    // 绘制科赫雪花
    function drawKochSnowflake(order, scale = 150) {
        function kochSnowflakeComplex(order) {
            if (order === 0) {
                // 初始三角形
                const angles = [0, 120, 240].map(angle => angle + 90);
                return angles.map(angle => {
                    const x = scale / Math.sqrt(3) * Math.cos(angle * Math.PI / 180);
                    const y = scale / Math.sqrt(3) * Math.sin(angle * Math.PI / 180);
                    return {x, y};
                });
            } else {
                const points = kochSnowflakeComplex(order - 1);
                const newPoints = [];
                
                for (let i = 0; i < points.length; i++) {
                    const p1 = points[i];
                    const p2 = points[(i + 1) % points.length];
                    
                    // 计算三等分点
                    const dx = p2.x - p1.x;
                    const dy = p2.y - p1.y;
                    
                    const pA = {x: p1.x + dx / 3, y: p1.y + dy / 3};
                    const pC = {x: p1.x + 2 * dx / 3, y: p1.y + 2 * dy / 3};
                    
                    // 计算中间凸起的点
                    const angle = Math.atan2(dy, dx);
                    const length = Math.sqrt(dx * dx + dy * dy) / 3;
                    const pB = {
                        x: p1.x + dx / 2 - length * Math.sin(angle),
                        y: p1.y + dy / 2 + length * Math.cos(angle)
                    };
                    
                    newPoints.push(p1, pA, pB, pC);
                }
                return newPoints;
            }
        }
        
        const points = kochSnowflakeComplex(order);
        
        // 绘制雪花
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.save();
        ctx.translate(canvas.width / 2, canvas.height / 2);
        
        ctx.beginPath();
        ctx.moveTo(points[0].x, points[0].y);
        for (let i = 1; i < points.length; i++) {
            ctx.lineTo(points[i].x, points[i].y);
        }
        ctx.closePath();
        
        // 填充颜色
        ctx.fillStyle = 'lightsalmon';
        ctx.fill();
        
        // 描边
        ctx.strokeStyle = 'orangered';
        ctx.lineWidth = 3;
        ctx.stroke();
        
        ctx.restore();
    }
    
    drawKochSnowflake(2);
}

// 添加滚动监听，实现导航高亮
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('.chart-section');
    const navLinks = document.querySelectorAll('nav a');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (scrollY >= sectionTop - 100) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === current) {
            link.classList.add('active');
        }
    });
});

// 添加导航链接点击事件
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});