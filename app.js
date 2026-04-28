// 主应用逻辑
class DivineWristApp {
    constructor() {
        this.currentPage = 'intro';
        this.selectedOracleType = 'fusion';
        this.currentFortune = null;
        this.isShaking = false;
        this.shakeIntensity = 0;
        
        this.init();
    }
    
    init() {
        this.bindEvents();
        this.checkNFCTrigger();
        this.initParticles();
    }
    
    // 绑定事件
    bindEvents() {
        // 占卜类型选择
        document.querySelectorAll('.oracle-type').forEach(el => {
            el.addEventListener('click', () => {
                document.querySelectorAll('.oracle-type').forEach(e => e.classList.remove('selected'));
                el.classList.add('selected');
                this.selectedOracleType = el.dataset.type;
            });
        });
        
        // 默认选中融合模式
        document.querySelector('[data-type="fusion"]').classList.add('selected');
        
        // 开始按钮
        const startBtn = document.getElementById('start-btn');
        if (startBtn) {
            startBtn.addEventListener('click', () => this.startDivination());
        }
        
        // 重签按钮
        const restartBtn = document.getElementById('restart-btn');
        if (restartBtn) {
            restartBtn.addEventListener('click', () => this.restart());
        }
        
        // 摇签页面触摸事件
        const shakePage = document.getElementById('shake-page');
        if (shakePage) {
            shakePage.addEventListener('click', () => this.handleShakeInteraction());
            shakePage.addEventListener('touchstart', () => this.handleShakeInteraction());
        }
        
        // 监听设备摇晃（移动端）
        if (window.DeviceMotionEvent) {
            window.addEventListener('devicemotion', (e) => this.handleDeviceMotion(e));
        }
    }
    
    // 检查NFC触发
    checkNFCTrigger() {
        // 检查URL参数是否包含NFC触发标志
        const urlParams = new URLSearchParams(window.location.search);
        if (urlParams.get('nfc') === 'true' || urlParams.get('trigger') === 'nfc') {
            // NFC触发，直接开始摇签
            this.selectedOracleType = urlParams.get('type') || 'fusion';
            this.transitionToPage('shake');
            setTimeout(() => this.startShaking(), 500);
        }
        
        // 检查是否有NFC API（Web NFC）
        if ('NDEFReader' in window) {
            this.initWebNFC();
        }
    }
    
    // Web NFC 支持
    async initWebNFC() {
        try {
            const ndefReader = new NDEFReader();
            await ndefReader.scan();
            console.log('NFC扫描已启动');
            
            ndefReader.onreading = (event) => {
                console.log('NFC标签已读取');
                this.startDivination();
            };
        } catch (error) {
            console.log('NFC不可用或权限未授予:', error);
        }
    }
    
    // 开始占卜
    startDivination() {
        this.transitionToPage('shake');
        setTimeout(() => this.startShaking(), 800);
    }
    
    // 开始摇签
    startShaking() {
        const shakePage = document.getElementById('shake-page');
        if (!shakePage) return;
        
        shakePage.classList.add('shaking');
        this.isShaking = true;
        
        // 播放音效（可选）
        this.playSound('shake');
        
        // 3秒后停止并显示结果
        setTimeout(() => {
            this.stopShaking();
        }, 3000);
    }
    
    // 停止摇签
    stopShaking() {
        const shakePage = document.getElementById('shake-page');
        if (!shakePage) return;
        
        shakePage.classList.remove('shaking');
        this.isShaking = false;
        
        // 签掉出动画
        const sticks = document.querySelectorAll('.stick');
        sticks.forEach((stick, index) => {
            if (index === 0) {
                stick.classList.add('fallen');
            }
        });
        
        // 播放结果音效
        this.playSound('result');
        
        // 生成粒子效果
        this.createParticleBurst();
        
        // 1秒后显示结果
        setTimeout(() => {
            this.showResult();
        }, 1000);
    }
    
    // 处理摇晃交互
    handleShakeInteraction() {
        if (this.currentPage === 'shake' && !this.isShaking) {
            this.startShaking();
        }
    }
    
    // 处理设备运动（摇晃检测）
    handleDeviceMotion(event) {
        if (this.currentPage !== 'shake') return;
        
        const acceleration = event.accelerationIncludingGravity;
        if (!acceleration) return;
        
        const totalAcceleration = Math.abs(acceleration.x) + Math.abs(acceleration.y) + Math.abs(acceleration.z);
        
        // 检测剧烈摇晃
        if (totalAcceleration > 30 && !this.isShaking) {
            this.startShaking();
        }
    }
    
    // 显示结果
    showResult() {
        this.currentFortune = getRandomFortune();
        this.updateResultUI(this.currentFortune);
        this.transitionToPage('result');
    }
    
    // 更新结果UI
    updateResultUI(fortune) {
        // 更新签号和类型
        const signNumber = document.getElementById('sign-number');
        if (signNumber) {
            signNumber.textContent = `第${fortune.number}签`;
        }
        
        const signType = document.getElementById('sign-type');
        if (signType) {
            signType.textContent = fortune.type;
            // 根据签类型设置颜色
            signType.style.color = fortune.type.includes('上上') ? '#ffd700' :
                                   fortune.type.includes('上') ? '#98fb98' :
                                   fortune.type.includes('中') ? '#87ceeb' :
                                   '#cd5c5c';
        }
        
        // 更新卦象和星座符号
        const hexagram = document.getElementById('hexagram');
        if (hexagram) hexagram.textContent = fortune.hexagram;
        
        const constellation = document.getElementById('constellation');
        if (constellation) constellation.textContent = fortune.constellation;
        
        // 更新签文标题和诗句
        const signTitle = document.getElementById('sign-title');
        if (signTitle) signTitle.textContent = fortune.title;
        
        const signPoem = document.getElementById('sign-poem');
        if (signPoem) signPoem.textContent = fortune.poem;
        
        // 更新解读内容
        const eastInterpret = document.getElementById('east-interpret');
        if (eastInterpret) eastInterpret.textContent = fortune.eastInterpret;
        
        const westInterpret = document.getElementById('west-interpret');
        if (westInterpret) westInterpret.textContent = fortune.westInterpret;
        
        // 更新幸运元素
        const luckyColor = document.getElementById('lucky-color');
        if (luckyColor) luckyColor.textContent = fortune.luckyColor;
        
        const luckyNumber = document.getElementById('lucky-number');
        if (luckyNumber) luckyNumber.textContent = fortune.luckyNumber;
        
        const luckyStar = document.getElementById('lucky-star');
        if (luckyStar) luckyStar.textContent = fortune.luckyStar;
        
        // 添加入场动画
        const resultCard = document.querySelector('.result-card');
        if (resultCard) {
            resultCard.classList.add('fade-in');
        }
    }
    
    // 页面切换
    transitionToPage(pageName) {
        // 隐藏所有页面
        document.querySelectorAll('.page').forEach(page => {
            page.classList.remove('active');
        });
        
        // 显示目标页面
        const targetPage = document.getElementById(`${pageName}-page`);
        if (targetPage) {
            targetPage.classList.add('active');
        }
        
        this.currentPage = pageName;
    }
    
    // 重新开始
    restart() {
        // 重置动画状态
        const sticks = document.querySelectorAll('.stick');
        sticks.forEach(stick => stick.classList.remove('fallen'));
        
        const shakePage = document.getElementById('shake-page');
        if (shakePage) shakePage.classList.remove('shaking');
        
        // 回到摇签页面
        this.transitionToPage('shake');
        setTimeout(() => this.startShaking(), 500);
    }
    
    // 播放音效
    playSound(soundName) {
        const sound = document.getElementById(`${soundName}-sound`);
        if (sound) {
            sound.currentTime = 0;
            sound.play().catch(() => {}); // 忽略播放错误
        }
    }
    
    // 粒子效果初始化
    initParticles() {
        this.particleContainer = document.getElementById('particles');
    }
    
    // 创建粒子爆发效果
    createParticleBurst() {
        if (!this.particleContainer) return;
        
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;
        
        for (let i = 0; i < 30; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.left = centerX + 'px';
            particle.style.top = centerY + 'px';
            particle.style.transform = `translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px)`;
            this.particleContainer.appendChild(particle);
            
            // 动画结束后移除
            setTimeout(() => {
                particle.remove();
            }, 1000);
        }
    }
}

// 快速解签模式（NFC触发时的简化显示）
function showQuickResult() {
    const fortune = getRandomFortune();
    const tarot = getQuickTarotMessage();
    
    // 创建简化的结果展示
    const quickResultHTML = `
        <div class="quick-result">
            <div class="quick-icon">${fortune.hexagram}</div>
            <div class="quick-title">${fortune.title}</div>
            <div class="quick-poem">${fortune.poem}</div>
            <div class="quick-tarot">「${tarot.message}」</div>
            <button onclick="window.location.reload()">再求一签</button>
        </div>
    `;
    
    document.body.innerHTML = quickResultHTML;
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', () => {
    const app = new DivineWristApp();
    
    // 检查是否需要快速模式
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('mode') === 'quick') {
        showQuickResult();
    }
});

// 导出供外部使用
window.DivineWristApp = DivineWristApp;
window.getRandomFortune = getRandomFortune;
window.getQuickTarotMessage = getQuickTarotMessage;