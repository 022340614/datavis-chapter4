// 第4章数据可视化平台 - 交互式图表实现
document.addEventListener('DOMContentLoaded', function() {
    // 1. 图书采购情况图表
    const bookPurchaseCtx = document.getElementById('bookPurchaseChart').getContext('2d');
    new Chart(bookPurchaseCtx, {
        type: 'bar',
        data: {
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
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: '采购数量(本)'
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
                    text: '地区1和地区2对各类图书的采购情况'
                }
            }
        }
    });

    // 2. 汇率走势分析图表
    const exchangeRateCtx = document.getElementById('exchangeRateChart').getContext('2d');
    new Chart(exchangeRateCtx, {
        type: 'line',
        data: {
            labels: ['3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '17', '18', '19', '24', '25', '26', '31'],
            datasets: [
                {
                    label: '2017年7月美元/人民币汇率',
                    data: [6.8007, 6.8007, 6.8015, 6.8015, 6.8060, 6.8060, 6.8060, 6.8036, 6.8025, 6.7877, 6.7835, 6.7758, 6.7700, 6.7463, 6.7519, 6.7511, 6.7511, 6.7539, 6.7265],
                    borderColor: '#006374',
                    backgroundColor: 'rgba(0, 99, 116, 0.1)',
                    borderWidth: 2,
                    tension: 0.1
                },
                {
                    label: '2019年7月美元/人民币汇率',
                    data: [6.8640, 6.8705, 6.8697, 6.8697, 6.8697, 6.8881, 6.8853, 6.8856, 6.8677, 6.8662, 6.8662, 6.8662, 6.8827, 6.8761, 6.8635, 6.8860, 6.8737, 6.8796, 6.8841],
                    borderColor: '#8a2e76',
                    backgroundColor: 'rgba(138, 46, 118, 0.1)',
                    borderWidth: 2,
                    borderDash: [5, 5],
                    tension: 0.1
                }
            ]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    title: {
                        display: true,
                        text: '汇率'
                    }
                },
                x: {
                    title: {
                        display: true,
                        text: '日期'
                    }
                }
            }
        }
    });

    // 3. 产品销售趋势图表
    const salesTrendCtx = document.getElementById('salesTrendChart').getContext('2d');
    new Chart(salesTrendCtx, {
        type: 'line',
        data: {
            labels: ['第1季度', '第2季度', '第3季度', '第4季度'],
            datasets: [
                {
                    label: '产品A',
                    data: [2144, 4617, 7674, 6666],
                    borderColor: '#e74c3c',
                    backgroundColor: 'rgba(231, 76, 60, 0.1)',
                    borderWidth: 2,
                    pointStyle: 'diamond',
                    pointRadius: 8,
                    pointBackgroundColor: '#e74c3c'
                },
                {
                    label: '产品B',
                    data: [853, 1214, 2414, 4409],
                    borderColor: '#3498db',
                    backgroundColor: 'rgba(52, 152, 219, 0.1)',
                    borderWidth: 2,
                    borderDash: [5, 5],
                    pointStyle: 'triangle',
                    pointRadius: 8,
                    pointBackgroundColor: '#3498db'
                },
                {
                    label: '产品C',
                    data: [153, 155, 292, 680],
                    borderColor: '#2ecc71',
                    backgroundColor: 'rgba(46, 204, 113, 0.1)',
                    borderWidth: 2,
                    borderDash: [2, 2],
                    pointStyle: 'rect',
                    pointRadius: 8,
                    pointBackgroundColor: '#2ecc71'
                }
            ]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: '销售额(万元)'
                    }
                }
            }
        }
    });

    // 4. 温度走势预测图表
    const temperatureCtx = document.getElementById('temperatureChart').getContext('2d');
    new Chart(temperatureCtx, {
        type: 'line',
        data: {
            labels: Array.from({length: 15}, (_, i) => `第${i+1}天`),
            datasets: [
                {
                    label: '最高温度',
                    data: [32, 33, 34, 34, 33, 31, 30, 29, 30, 29, 26, 23, 21, 25, 31],
                    borderColor: '#e67e22',
                    backgroundColor: 'rgba(230, 126, 34, 0.1)',
                    borderWidth: 2,
                    pointRadius: 6,
                    pointBackgroundColor: '#e67e22'
                },
                {
                    label: '最低温度',
                    data: [19, 19, 20, 22, 22, 21, 22, 16, 18, 18, 17, 14, 15, 16, 16],
                    borderColor: '#3498db',
                    backgroundColor: 'rgba(52, 152, 219, 0.1)',
                    borderWidth: 2,
                    pointRadius: 6,
                    pointBackgroundColor: '#3498db'
                }
            ]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    title: {
                        display: true,
                        text: '温度(°C)'
                    }
                },
                x: {
                    title: {
                        display: true,
                        text: '日期'
                    }
                }
            }
        }
    });

    // 5. 科赫雪花分形图表
    const snowflakeCtx = document.getElementById('snowflakeChart').getContext('2d');
    drawKochSnowflake(snowflakeCtx);

    // 6. 颜色映射演示图表
    const colorMapCtx = document.getElementById('colorMapChart').getContext('2d');
    new Chart(colorMapCtx, {
        type: 'bar',
        data: {
            labels: ['红色系', '蓝色系', '绿色系', '黄色系', '紫色系'],
            datasets: [{
                data: [30, 45, 25, 35, 40],
                backgroundColor: [
                    '#FF6B6B', '#4ECDC4', '#45B7D1', '#FFE66D', '#9B59B6'
                ],
                borderColor: [
                    '#FF5252', '#26A69A', '#3498DB', '#FFD600', '#8E44AD'
                ],
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            },
            plugins: {
                legend: {
                    display: false
                },
                title: {
                    display: true,
                    text: '颜色搭配和应用演示'
                }
            }
        }
    });
});

// 科赫雪花分形绘制函数
function drawKochSnowflake(ctx) {
    const width = ctx.canvas.width;
    const height = ctx.canvas.height;
    const centerX = width / 2;
    const centerY = height / 2;
    const size = Math.min(width, height) * 0.3;

    function kochSnowflake(order, size) {
        const points = [];
        const angle = -Math.PI / 2;
        
        for (let i = 0; i < 3; i++) {
            const segment = kochCurve(order, size);
            const segmentAngle = angle + (i * 2 * Math.PI / 3);
            
            segment.forEach(point => {
                const x = point.x * Math.cos(segmentAngle) - point.y * Math.sin(segmentAngle);
                const y = point.x * Math.sin(segmentAngle) + point.y * Math.cos(segmentAngle);
                points.push({x: centerX + x, y: centerY + y});
            });
        }
        
        return points;
    }

    function kochCurve(order, size) {
        if (order === 0) {
            return [{x: 0, y: 0}, {x: size, y: 0}];
        } else {
            const segment = kochCurve(order - 1, size / 3);
            const points = [];
            
            // 第一段
            points.push(...segment.map(p => ({x: p.x, y: p.y})));
            
            // 第二段（旋转60度）
            const angle = Math.PI / 3;
            points.push(...segment.map(p => ({
                x: size/3 + p.x * Math.cos(angle) - p.y * Math.sin(angle),
                y: p.x * Math.sin(angle) + p.y * Math.cos(angle)
            })));
            
            // 第三段（旋转-60度）
            const angle2 = -Math.PI / 3;
            points.push(...segment.map(p => ({
                x: size/2 + p.x * Math.cos(angle2) - p.y * Math.sin(angle2),
                y: size * Math.sqrt(3)/6 + p.x * Math.sin(angle2) + p.y * Math.cos(angle2)
            })));
            
            // 第四段
            points.push(...segment.map(p => ({x: 2*size/3 + p.x, y: p.y})));
            
            return points;
        }
    }

    const points = kochSnowflake(3, size);
    
    // 绘制雪花
    ctx.beginPath();
    ctx.moveTo(points[0].x, points[0].y);
    for (let i = 1; i < points.length; i++) {
        ctx.lineTo(points[i].x, points[i].y);
    }
    ctx.closePath();
    
    // 填充颜色
    ctx.fillStyle = 'rgba(255, 182, 193, 0.8)';
    ctx.fill();
    
    // 描边
    ctx.strokeStyle = '#FF6B8B';
    ctx.lineWidth = 3;
    ctx.stroke();
}