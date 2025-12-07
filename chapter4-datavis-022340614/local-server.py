#!/usr/bin/env python3
"""
本地HTTP服务器启动器
用于在本地运行数据可视化平台
"""

import http.server
import socketserver
import webbrowser
import os
import sys

def start_local_server():
    # 设置端口
    PORT = 8000
    
    # 切换到当前目录
    os.chdir(os.path.dirname(os.path.abspath(__file__)))
    
    # 创建HTTP服务器
    Handler = http.server.SimpleHTTPRequestHandler
    
    with socketserver.TCPServer(("", PORT), Handler) as httpd:
        print("=" * 60)
        print("第4章 数据可视化平台 - 本地服务器")
        print("=" * 60)
        print(f"服务器运行在: http://localhost:{PORT}")
        print(f"平台地址: http://localhost:{PORT}/index.html")
        print("按 Ctrl+C 停止服务器")
        print("=" * 60)
        
        # 自动打开浏览器
        webbrowser.open(f"http://localhost:{PORT}/index.html")
        
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\n服务器已停止")

if __name__ == "__main__":
    start_local_server()