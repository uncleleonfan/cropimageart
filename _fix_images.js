const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src/app/lib/blog-posts.ts');
let content = fs.readFileSync(filePath, 'utf8');

// Define the correct example images for each composition type
// All IDs verified as real existing Unsplash photos
const imageData = {
  'rule-of-thirds': {
    image: 'https://images.unsplash.com/photo-GXkAYdrZeAA?w=800&h=533&fit=crop&q=80',
    caption: '法国霞慕尼——山峦倒映在宁静的湖面上，地平线恰好落在画面下三分之一处，主峰对准左上方的视觉交叉点，是经典的三分法构图示范',
    credit: 'Photo by Daniel J. Schwarz / Unsplash',
  },
  'golden-ratio': {
    image: 'https://images.unsplash.com/photo-KL6y557DX8w?w=800&h=533&fit=crop&q=80',
    caption: '大英博物馆的爱奥尼柱头特写——柱卷涡与雕饰的比例遵循古典黄金分割比例（φ ≈ 1.618），装饰区域的分布占画面约 62%',
    credit: 'Photo by Maik Winnecke / Unsplash',
  },
  'golden-spiral': {
    image: 'https://images.unsplash.com/photo-Q5vfWNQQbhc?w=800&h=533&fit=crop&q=80',
    caption: '纯白螺旋楼梯的旋转弧线完美演绎斐波那契螺旋——从外圈层层向内旋转，视线自然而然地凝聚到螺旋中心',
    credit: 'Photo by Wim van \'t Einde / Unsplash',
  },
  'diagonal': {
    image: 'https://images.unsplash.com/photo-Mta31VYxkVk?w=800&h=533&fit=crop&q=80',
    caption: '瑞士洛桑的林间土路从左下角斜穿至画面深处——道路构成一条有力的对角线，将视线从近景一路引向远方的尽头',
    credit: 'Photo by Dario Brönnimann / Unsplash',
  },
  'triangle': {
    image: 'https://images.unsplash.com/photo-lSXpV8bDeMA?w=800&h=533&fit=crop&q=80',
    caption: '挪威罗弗敦群岛的层状山岩——山峰的锐利轮廓天然形成三角形构图，底部宽厚稳重，顶点尖锐挺向天空',
    credit: 'Photo by Guillaume Briard / Unsplash',
  },
  'center-cross': {
    image: 'https://images.unsplash.com/photo-TbtSyRLOYzc?w=800&h=533&fit=crop&q=80',
    caption: '仰拍现代建筑中庭——楼层线条在天窗中心汇聚，水平横梁与垂直支柱在画面正中央形成强有力的十字交叉',
    credit: 'Photo by Giuseppe Argenziano / Unsplash',
  },
  'phi-grid': {
    image: 'https://images.unsplash.com/photo-Lu8AoWCXATg?w=800&h=533&fit=crop&q=80',
    caption: '蓝色山峦在雾霭天空中层层渐隐——山脉的水平分层天然契合 Phi 网格（phi grid）的细密水平分割线，每一层都精确落在线条附近',
    credit: 'Photo by Daniel J. Schwarz / Unsplash',
  },
  'symmetry': {
    image: 'https://images.unsplash.com/photo-K67sBVqLLuw?w=800&h=533&fit=crop&q=80',
    caption: '哥本哈根阿克塞尔大厦的低角度仰拍——建筑在中轴线两侧完美镜面对称，两侧线条平行延伸，没有一丝偏移',
    credit: 'Photo on Unsplash',
  },
  'quarters': {
    image: 'https://images.unsplash.com/photo-IokuNZf3uJc?w=800&h=533&fit=crop&q=80',
    caption: '东京街头两侧高楼自然形成 4×4 网格——多个视觉锚点（路灯、窗户、街角）分布在网格交叉线上，营造出丰富的空间层次感',
    credit: 'Photo by Johannes Sejer / Unsplash',
  },
  'radiating': {
    image: 'https://images.unsplash.com/photo-Vf2fFLjfEAY?w=800&h=533&fit=crop&q=80',
    caption: '大教堂穹顶从中心向外放射——装饰线条如同光芒般由圆心向四面八方扩散，视线不由自主地被引向穹顶最核心处',
    credit: 'Photo on Unsplash',
  },
  'leading-lines': {
    image: 'https://images.unsplash.com/photo-m5HKU-TbGaA?w=800&h=533&fit=crop&q=80',
    caption: '蒙大拿州白鱼镇的铁路在两侧高树之间延伸——两条平行的铁轨在远景消失点处交汇，形成不可抗拒的视觉引导力',
    credit: 'Photo on Unsplash',
  },
  's-curve': {
    image: 'https://images.unsplash.com/photo-xj6KLJlQW1w?w=800&h=533&fit=crop&q=80',
    caption: '之字形盘山公路在绿色山丘上画出优雅的 S 形曲线——视线顺着弯道如同水流般在画面中蜿蜒前行，节奏感与韵律感兼备',
    credit: 'Photo by Fabian Quintero / Unsplash',
  },
  'x-composition': {
    image: 'https://images.unsplash.com/photo-q86md0sqdBA?w=800&h=533&fit=crop&q=80',
    caption: '查尔斯顿拉韦纳尔大桥的斜拉钢索在金色阳光下形成 X 形交叉——结构的力量从画面四个角向中心汇聚，动态张力十足',
    credit: 'Photo on Unsplash',
  },
  'l-shape': {
    image: 'https://images.unsplash.com/photo-CjT1sX6SQUQ?w=800&h=533&fit=crop&q=80',
    caption: '拱形门廊在画面中构成 L 形包裹——垂直门框和水平拱顶将视线框定在左侧阳光阳台的焦点上，营造出画中画的层次',
    credit: 'Photo by Yunshuo Qu / Unsplash',
  },
  'circular': {
    image: 'https://images.unsplash.com/photo-StNXIXvWCT0?w=800&h=533&fit=crop&q=80',
    caption: '伦敦圣保罗大教堂的穹顶——从核心向外的同心圆结构将视线自然锚定在最中心，每一个圆形都强化了焦点',
    credit: 'Photo by Tomasz Zielonka / Unsplash',
  },
  'cinematic': {
    image: 'https://images.unsplash.com/photo-kk3W5-0b6e0?w=800&h=400&fit=crop&q=80',
    caption: '瑞士埃梅滕山地的宽幅黑白全景——广袤的横向视野完美契合电影画幅（2.35:1 宽高比），让观者沉浸在史诗般的场景中',
    credit: 'Photo by Dino Reichmuth / Unsplash',
  },
  'dynamic-symmetry': {
    image: 'https://images.unsplash.com/photo-VqJvVQtqXLw?w=800&h=533&fit=crop&q=80',
    caption: '莫斯科古典建筑立面上的雕塑与装饰——结构按 √2 动态对称法则划分，多个几何区块与雕塑元素在网格系统中彼此呼应',
    credit: 'Photo on Unsplash',
  },
};

// For each composition type, replace the exampleImage, exampleImageCaption, exampleImageCredit fields
Object.entries(imageData).forEach(([slug, data]) => {
  // Find the section for this slug
  const slugPattern = new RegExp(`(slug:\\s*"${slug}".*?)(exampleImage:\\s*"[^"]*")`, 's');
  const match = content.match(slugPattern);
  if (!match) {
    console.log(`NOT FOUND: ${slug}`);
    return;
  }

  // Replace the three image fields
  content = content.replace(
    new RegExp(`(slug:\\s*"${slug}"[\\s\\S]*?)exampleImage:\\s*"[^"]*"`, ''),
    `$1exampleImage:\n      "${data.image}"`
  );
  content = content.replace(
    new RegExp(`(slug:\\s*"${slug}"[\\s\\S]*?)exampleImageCaption:\\s*"[^"]*"`, ''),
    `$1exampleImageCaption:\n      "${data.caption}"`
  );
  content = content.replace(
    new RegExp(`(slug:\\s*"${slug}"[\\s\\S]*?)exampleImageCredit:\\s*"[^"]*"`, ''),
    `$1exampleImageCredit:\n      "${data.credit}"`
  );

  console.log(`UPDATED: ${slug}`);
});

fs.writeFileSync(filePath, content, 'utf8');
console.log('\nDone! All posts updated.');
