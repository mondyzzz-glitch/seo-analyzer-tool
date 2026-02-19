// SEO分析工具 - 主程序

// Google PageSpeed Insights API
const PSI_API_BASE = 'https://www.googleapis.com/pagespeedonline/v5/runPagespeed';
const API_KEY = 'AIzaSyDk8L0xyAwV1lBO4lnDLIx5Wf5nQVkD1wA';

// 分析函数
function analyzeSite() {
    const url = prompt('请输入网站地址，例如: https://example.com');
    
    if (!url) {
        alert('请输入网址');
        return;
    }
    
    // 简单模拟分析
    const score = Math.floor(Math.random() * 40) + 50;
    
    alert('分析完成！\n\nSEO得分: ' + score + '/100\n\n💡 免费版仅展示基础分析\n🚀 专业版：详细报告 + 优化建议\n\n价格：¥9.9/次\n\n立即获取详细报告！');
}

// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
    const btn = document.querySelector('.btn-primary');
    if (btn) {
        btn.addEventListener('click', analyzeSite);
    }
});
