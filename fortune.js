// 签文库 - 中西融合神秘风格
const fortuneDatabase = [
    {
        number: 1,
        type: "上上签",
        title: "天启之兆",
        poem: "星辰归位，命运之轮正位转动",
        hexagram: "䷀",
        constellation: "♈",
        eastInterpret: "卦象乾为天，六爻皆阳，主大吉大利。此时天道酬勤，诸事顺遂，如日中天之势。五行属金，金生水，智慧通达，财运亨通。",
        westInterpret: "白羊座守护星火星与金星呈吉相位，能量充沛，适合开启新篇章。塔罗牌命运之轮正位，预示转机已至，把握当下可获突破。",
        luckyColor: "金色",
        luckyNumber: 9,
        luckyStar: "太阳",
        weight: 1 // 稀有度，1最稀有，10最常见
    },
    {
        number: 2,
        type: "上签",
        title: "月华流照",
        poem: "月上柳梢头，人约黄昏后",
        hexagram: "䷁",
        constellation: "♉",
        eastInterpret: "坤卦之象，地势坤，君子以厚德载物。此时宜稳不宜急，守正待时，自有贵人相助。五行属土，根基稳固，稳步前行。",
        westInterpret: "金牛座守护星金星进入有利宫位，财运上升，感情运势佳。塔罗牌恋人牌正位，预示缘分将至，真诚待人可得真心回报。",
        luckyColor: "粉色",
        luckyNumber: 6,
        luckyStar: "金星",
        weight: 3
    },
    {
        number: 3,
        type: "上签",
        title: "星辰指引",
        poem: "星河浩瀚，一道专属你的光芒正在靠近",
        hexagram: "䷂",
        constellation: "♊",
        eastInterpret: "坎卦之象，水流不息，主智慧流通。此时思维敏捷，适合学习新知，突破瓶颈。五行属水，水生木，创意迸发，灵感如泉。",
        westInterpret: "双子座守护星水星活跃，沟通运势极佳，适合表达自我。塔罗牌魔术师正位，预示你有能力创造想要的一切。",
        luckyColor: "银色",
        luckyNumber: 3,
        luckyStar: "水星",
        weight: 4
    },
    {
        number: 4,
        type: "中上签",
        title: "风起云涌",
        poem: "云卷云舒，变化中蕴藏机遇",
        hexagram: "䷄",
        constellation: "♌",
        eastInterpret: "巽卦之象，风行天上，主变动中求稳。此时虽有波折，但转机暗藏，宜顺势而为，不可强求。五行属木，木生火，生机盎然。",
        westInterpret: "狮子座守护星太阳光芒闪耀，自信能量充沛。塔罗牌力量牌正位，预示内心强大，可克服一切障碍。",
        luckyColor: "橙色",
        luckyNumber: 1,
        luckyStar: "太阳",
        weight: 5
    },
    {
        number: 5,
        type: "中签",
        title: "守静待时",
        poem: "静水流深，最好的答案在等待中被看见",
        hexagram: "䷆",
        constellation: "♍",
        eastInterpret: "艮卦之象，山止于此，宜静不宜动。此时当守正自持，不急不躁，时机一到，自有转机。五行属土，稳中求进。",
        westInterpret: "处女座守护星水星进入分析相位，适合反思规划。塔罗牌隐士正位，预示答案在静心中找到。",
        luckyColor: "白色",
        luckyNumber: 4,
        luckyStar: "水星",
        weight: 6
    },
    {
        number: 6,
        type: "中签",
        title: "水火相济",
        poem: "阴阳调和，在矛盾中寻找平衡",
        hexagram: "䷇",
        constellation: "♎",
        eastInterpret: "离卦之象，火光通明，主热情与智慧交融。此时宜把握火候，不可太过不及，中庸之道可得和谐。五行属火，火生土，温暖转化。",
        westInterpret: "天秤座守护星金星在和谐相位，人际关系顺畅。塔罗牌正义牌正位，预示平衡公正，因果有序。",
        luckyColor: "蓝色",
        luckyNumber: 7,
        luckyStar: "金星",
        weight: 7
    },
    {
        number: 7,
        type: "中签",
        title: "月明星稀",
        poem: "黑暗中，总有一颗星为你闪烁",
        hexagram: "䷈",
        constellation: "♏",
        eastInterpret: "兑卦之象，泽水相连，主沟通喜悦。此时宜敞开心扉，与人分享，可得意外之喜。五行属金，金克木，斩断束缚，重获自由。",
        westInterpret: "天蝎座守护星冥王星进入转变相位，深层力量觉醒。塔罗牌死神牌正位，预示旧去新来，重生在即。",
        luckyColor: "紫色",
        luckyNumber: 8,
        luckyStar: "冥王星",
        weight: 6
    },
    {
        number: 8,
        type: "中下签",
        title: "云遮月影",
        poem: "迷雾终将散去，耐心是最好的护身符",
        hexagram: "䷊",
        constellation: "♐",
        eastInterpret: "震卦之象，雷动于下，主先惊后安。此时虽有震动，但终归平静，宜保持定心，不被外扰。五行属木，震动生发。",
        westInterpret: "射手座守护星木星虽有波动，但终将回归正轨。塔罗牌节制牌正位，预示调和耐心，度过难关。",
        luckyColor: "绿色",
        luckyNumber: 5,
        luckyStar: "木星",
        weight: 7
    },
    {
        number: 9,
        type: "下签",
        title: "风雪兼程",
        poem: "寒冬过后必是春天，坚持是最好的魔法",
        hexagram: "䷋",
        constellation: "♑",
        eastInterpret: "否卦之象，天地不交，主暂遇阻碍。此时当守正不移，静待天地重开，否极泰来。五行失调，需养气待时。",
        westInterpret: "摩羯座守护星土星进入考验相位，需付出更多努力。塔罗牌星币五正位，预示困难是暂时的，坚持可破。",
        luckyColor: "灰色",
        luckyNumber: 2,
        luckyStar: "土星",
        weight: 8
    },
    {
        number: 10,
        type: "下签",
        title: "逆风而行",
        poem: "逆风的方向更适合飞翔，此刻磨炼正是你的翅膀",
        hexagram: "䷌",
        constellation: "♒",
        eastInterpret: "讼卦之象，争讼宜慎，主纷扰难免。此时宜退让三分，以和为贵，化解矛盾。五行相克，需用智慧调和。",
        westInterpret: "水瓶座守护星天王星带来变数，需灵活应对。塔罗牌宝剑七正位，预示以智慧化解困境。",
        luckyColor: "青色",
        luckyNumber: 11,
        luckyStar: "天王星",
        weight: 8
    },
    {
        number: 11,
        type: "上上签",
        title: "紫气东来",
        poem: "贵人将至，天时地利人和齐聚",
        hexagram: "䷍",
        constellation: "♓",
        eastInterpret: "大有卦象，火在天上，主大有收获。此时运势鼎盛，宜把握良机，大胆进取。五行火旺，事业腾达之兆。",
        westInterpret: "双鱼座守护星海王星进入灵感相位，直觉敏锐。塔罗牌月亮牌正位，预示梦境成真，灵性指引正确道路。",
        luckyColor: "紫色",
        luckyNumber: 12,
        luckyStar: "海王星",
        weight: 2
    },
    {
        number: 12,
        type: "上签",
        title: "花开时节",
        poem: "等待的花朵终将绽放，美好正在酝酿",
        hexagram: "䷎",
        constellation: "☽",
        eastInterpret: "豫卦之象，雷出地奋，主欢乐将至。此时心情愉悦，宜分享喜悦，好运相传。五行木土调和，生机与稳固并存。",
        westInterpret: "月亮进入满月相位，能量充盈圆满。塔罗牌圣杯三正位，预示庆祝时刻，收获丰盛。",
        luckyColor: "淡黄色",
        luckyNumber: 3,
        luckyStar: "月亮",
        weight: 3
    },
    {
        number: 13,
        type: "上签",
        title: "龙凤呈祥",
        poem: "阴阳相合，命中注定的相遇正在靠近",
        hexagram: "䷏",
        constellation: "♀",
        eastInterpret: "随卦之象，泽随雷动，主顺应时势。此时宜顺势而为，跟随直觉，自有惊喜。五行金木相制，化解束缚。",
        westInterpret: "金星进入恋爱宫位，姻缘运势上升。塔罗牌恋人牌正位，预示命中之人将现。",
        luckyColor: "红色",
        luckyNumber: 6,
        luckyStar: "金星",
        weight: 4
    },
    {
        number: 14,
        type: "中上签",
        title: "日出东方",
        poem: "新的开始正在召唤，勇敢迈出第一步",
        hexagram: "䷐",
        constellation: "☉",
        eastInterpret: "蛊卦之象，风落山下，主革故鼎新。此时宜振奋精神，去除旧弊，开启新生。五行木风相交，变革之中生机暗藏。",
        westInterpret: "太阳进入白羊座零度，新年能量开启。塔罗牌愚人牌正位，预示新旅程开始，勇敢前行。",
        luckyColor: "金色",
        luckyNumber: 0,
        luckyStar: "太阳",
        weight: 5
    },
    {
        number: 15,
        type: "中签",
        title: "镜花水月",
        poem: "看破而不执着，智慧是最好的答案",
        hexagram: "䷑",
        constellation: "♅",
        eastInterpret: "临卦之象，地泽临水，主以柔克刚。此时宜保持清醒，不被表象迷惑，洞察本质。五行水土相济，静中得智。",
        westInterpret: "天王星带来意外转变，需保持开放心态。塔罗牌宝剑四正位，预示静观其变，等待时机。",
        luckyColor: "透明",
        luckyNumber: 4,
        luckyStar: "天王星",
        weight: 6
    },
    {
        number: 16,
        type: "中签",
        title: "道法自然",
        poem: "顺其自然，不强求才是最好的追求",
        hexagram: "䷒",
        constellation: "♆",
        eastInterpret: "观卦之象，风行地上，主观照万物。此时宜退一步观察，不急于求成，答案自现。五行木土相安，自然之道。",
        westInterpret: "海王星进入灵感相位，直觉增强。塔罗牌圣杯七正位，预示选择众多，需静心分辨。",
        luckyColor: "海蓝色",
        luckyNumber: 7,
        luckyStar: "海王星",
        weight: 6
    },
    {
        number: 17,
        type: "中下签",
        title: "雾里看花",
        poem: "迷雾是暂时的，真相会在耐心后显现",
        hexagram: "䷓",
        constellation: "♄",
        eastInterpret: "噬嗑卦象，火雷噬嗑，主有阻碍需破。此时宜明辨是非，去除障碍，才能前行。五行火木相生，以智慧化解。",
        westInterpret: "土星进入考验宫位，需要耐心与坚持。塔罗牌宝剑八正位，预示束缚是暂时的，等待突破。",
        luckyColor: "深灰色",
        luckyNumber: 8,
        luckyStar: "土星",
        weight: 7
    },
    {
        number: 18,
        type: "下签",
        title: "夜行山路",
        poem: "黑暗是黎明前的考验，相信自己能看见日出",
        hexagram: "䷔",
        constellation: "♂",
        eastInterpret: "贲卦之象，山下有火，主虚饰遮真。此时宜去伪存真，不被表象迷惑，坚守本心。五行火土相生但虚浮。",
        westInterpret: "火星进入冲突相位，需控制情绪。塔罗牌宝剑十正位，预示困难即将过去，黎明在望。",
        luckyColor: "黑色",
        luckyNumber: 10,
        luckyStar: "火星",
        weight: 8
    },
    {
        number: 19,
        type: "下下签",
        title: "逆流而上",
        poem: "最大的逆境往往孕育最大的转机",
        hexagram: "䷕",
        constellation: "☊",
        eastInterpret: "剥卦之象，山崩地剥，主大变动将至。此时当守正不移，以不变应万变，剥极必复。五行失调，需静养身心。",
        westInterpret: "北交点进入灵魂考验相位，此为命运关键点。塔罗牌高塔牌正位，预示破而后立，重生之路。",
        luckyColor: "深红色",
        luckyNumber: 16,
        luckyStar: "月亮北交点",
        weight: 9
    },
    {
        number: 20,
        type: "上上签",
        title: "天降祥瑞",
        poem: "上天眷顾，吉星高照，好运连连",
        hexagram: "䷖",
        constellation: "★",
        eastInterpret: "复卦之象，地雷复苏，主否极泰来。此时生机复现，万物更新，宜把握重生之机。五行木土相济，生机盎然。",
        westInterpret: "流星雨期，天象大吉。塔罗牌世界牌正位，预示圆满达成，命运之环闭合。",
        luckyColor: "七彩",
        luckyNumber: 21,
        luckyStar: "宇宙",
        weight: 1
    }
];

// 塔罗牌扩展库（可单独触发）
const tarotMessages = [
    { message: "命运之轮正在转动，转机即将到来", card: "命运之轮" },
    { message: "你的直觉是正确的，相信内心的声音", card: "女祭司" },
    { message: "新的开始正在召唤，勇敢踏出第一步", card: "愚人" },
    { message: "力量来自内心，你比想象中更强大", card: "力量" },
    { message: "隐士之光照亮前路，答案在静心中找到", card: "隐士" },
    { message: "平衡是此刻的智慧，不过不及方得圆满", card: "节制" },
    { message: "死神带来重生，旧去新来是生命的律动", card: "死神" },
    { message: "太阳照耀着你，光明与喜悦正在靠近", card: "太阳" },
    { message: "月亮指引梦境，直觉是此刻最好的导航", card: "月亮" },
    { message: "星币落地，物质丰盛即将到来", card: "星币ACE" },
    { message: "圣杯满溢，感情与心灵的满足将至", card: "圣杯ACE" },
    { message: "宝剑在手，智慧是此刻最锋利的武器", card: "宝剑ACE" },
    { message: "权杖点燃，行动力与激情正在觉醒", card: "权杖ACE" }
];

// 五行运势解读
const wuxingMessages = {
    wood: { name: "木", trait: "生发、成长、创造力", advice: "适合开始新项目，培养创意，扩展人脉" },
    fire: { name: "火", trait: "热情、光明、行动力", advice: "适合表达自我，付诸行动，传播影响力" },
    earth: { name: "土", trait: "稳固、承载、包容", advice: "适合稳扎稳打，巩固根基，包容协作" },
    metal: { name: "金", trait: "收敛、精准、决断", advice: "适合整理归纳，做出决定，斩断干扰" },
    water: { name: "水", trait: "智慧、流动、适应", advice: "适合学习思考，灵活应变，深入洞察" }
};

// 星座守护解读
const zodiacMessages = {
    aries: { name: "白羊座", guardian: "火星", trait: "勇气、开拓、热情" },
    taurus: { name: "金牛座", guardian: "金星", trait: "稳定、价值、美感" },
    gemini: { name: "双子座", guardian: "水星", trait: "沟通、灵活、好奇" },
    cancer: { name: "巨蟹座", guardian: "月亮", trait: "情感、保护、归属" },
    leo: { name: "狮子座", guardian: "太阳", trait: "自信、创造、领袖" },
    virgo: { name: "处女座", guardian: "水星", trait: "分析、服务、完美" },
    libra: { name: "天秤座", guardian: "金星", trait: "平衡、关系、和谐" },
    scorpio: { name: "天蝎座", guardian: "冥王星", trait: "深度、转化、洞察" },
    sagittarius: { name: "射手座", guardian: "木星", trait: "探索、自由、智慧" },
    capricorn: { name: "摩羯座", guardian: "土星", trait: "责任、成就、坚毅" },
    aquarius: { name: "水瓶座", guardian: "天王星", trait: "创新、独立、人道" },
    pisces: { name: "双鱼座", guardian: "海王星", trait: "直觉、灵性、融合" }
};

// 根据权重随机抽取签文
function getRandomFortune() {
    // 创建加权数组
    const weightedFortunes = [];
    fortuneDatabase.forEach(fortune => {
        // 权重越高越常见，所以反向加权
        const weight = 10 - fortune.weight + 1;
        for (let i = 0; i < weight; i++) {
            weightedFortunes.push(fortune);
        }
    });
    
    // 随机选择
    const randomIndex = Math.floor(Math.random() * weightedFortunes.length);
    return weightedFortunes[randomIndex];
}

// 获取塔罗短消息（用于NFC快速触发）
function getQuickTarotMessage() {
    const randomIndex = Math.floor(Math.random() * tarotMessages.length);
    return tarotMessages[randomIndex];
}

// 根据签文生成综合解读
function generateInterpretation(fortune) {
    // 可以在这里添加更多动态生成逻辑
    return fortune;
}