import { CompositionType } from "./types";
import type { LangCode } from "./i18n";

export interface BlogSection {
  heading: string;
  body: string;
}

export interface BlogPostContent {
  title: string;
  subtitle: string;
  intro: string;
  sections: BlogSection[];
  tips: string[];
  exampleImageCaption: string;
}

export interface BlogPost {
  slug: string;
  compositionType: CompositionType;
  publishedAt: string;
  readTime: Record<LangCode, string>;
  exampleImage: string;
  exampleImageCredit: Record<LangCode, string>;
  content: Record<LangCode, BlogPostContent>;
}

export const blogPosts: BlogPost[] = [
  // ─── 1. Rule of Thirds ──────────────────────────────
  {
    slug: "rule-of-thirds",
    compositionType: "thirds",
    publishedAt: "2026-08-09",
    readTime: { en: "8 min", "zh-CN": "8 分钟", "zh-TW": "8 分鐘" },
    exampleImage:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&h=533&fit=crop&q=80",
    exampleImageCredit: {
      en: "Photo by Nathan Anderson / Unsplash",
      "zh-CN": "Photo by Nathan Anderson / Unsplash",
      "zh-TW": "Photo by Nathan Anderson / Unsplash",
    },
    content: {
      en: {
        title: "The Complete Guide to the Rule of Thirds",
        subtitle: "The most fundamental composition rule in photography and cropping — yet the most universally applied golden standard",
        intro:
          "If you're new to photography or design, the first composition tip you'll likely hear is 'use the rule of thirds.' This simple rule — divide the frame into nine equal parts with two horizontal and two vertical lines, then place your subject at the intersections — is baked into nearly every camera and editing app's default settings. But the rule of thirds goes far beyond 'putting stuff at intersections.' This article unpacks the psychology, classical roots, and modern social-media tactics behind the grid.",
        sections: [
          {
            heading: "The Visual Psychology Behind the Rule of Thirds",
            body: "The human visual system is wired to seek structure. When we look at a painting or photograph, our eyes automatically scan for 'points of interest.' Research shows that our gaze doesn't naturally rest at dead center — it lingers longer at positions about one-third from the edges. Center placement feels static and predictable; off-center elements create dynamic tension, making the eye travel between the subject and the frame's edges. The rule of thirds exploits this: two horizontal and two vertical lines carve the frame into nine equal rectangles, and the four intersections become natural 'visual anchors.' Renaissance painters like Leonardo da Vinci and Raphael were already using similar proportional grids — they just didn't have a camera viewfinder to standardize it.",
          },
          {
            heading: "What the Four Lines Actually Control",
            body: "The two horizontals each have distinct roles: the lower third line works well for 'ground,' 'horizon,' or 'tabletop' references; the upper third line suits 'sky,' 'ceiling,' or negative space. The verticals govern the subject's horizontal placement — the left or right third is classic portrait territory. A key tactic among today's Instagram photographers: never place the horizon dead center (unless you're shooting perfect reflection symmetry). Placing the horizon on the upper or lower third turns sky or ground into 'narrative space' — a sky-dominant frame feels open and airy, while a ground-dominant one feels grounded and intimate.",
          },
          {
            heading: "Practical Rule-of-Thirds Cropping",
            body: "When you enable the thirds grid in CropImageArt, you see four lines and four intersections. The most effective cropping strategy: first, identify the 'hero' of your photo — a person, a building, a tree. Then try moving that hero to one of the four intersections. For portraits, align the subject's eyes to an upper intersection. For landscapes, place the most compelling element (a lone tree, a sunrise) on an intersection. Next, adjust the horizon. Align it with one of the horizontal lines. If the sky is dramatic (spectacular clouds, sunset), use the lower third line to give the sky more room. If the foreground is richer (flowers, textures), align the horizon to the upper third. Finally, leave breathing room in the direction your subject faces — if someone is looking left, place them on the right intersection.",
          },
        ],
        tips: [
          "Portraits: Place the subject's eyes on one of the top two intersections",
          "Landscapes: Align the horizon with the upper or lower third — never the center",
          "Street photography: Place visual anchors (pedestrians, signs) on intersections",
          "Social media: Instagram 4:5 ratio + rule of thirds = an unbeatable combo",
        ],
        exampleImageCaption:
          "Classic Yosemite Valley — the horizon sits on the lower third line while the main peak falls on the right vertical third, creating a textbook rule-of-thirds composition",
      },
      "zh-CN": {
        title: "三分法构图完全指南",
        subtitle: "摄影与裁剪中最基础的构图法则，却也是被应用最广的黄金准则",
        intro:
          "如果你是摄影或设计新手，你听到的第一个构图建议大概率是「用三分法」。这条简单的规则——把画面用两条横线和两条竖线分成九等份，然后把主体放在交叉点上——几乎刻在了每一台相机、每一款修图软件的默认设置里。但三分法远不止「把东西放在交叉点」这么简单。这篇文章将从视觉心理学、经典绘画到现代社交媒体，全面拆解三分法的原理与实战技巧。",
        sections: [
          {
            heading: "三分法的视觉心理学原理",
            body: "人类的视觉系统天生倾向于寻找结构。当我们看一幅画或一张照片时，眼睛会自动扫描画面寻找「兴趣点」。研究表明，视线并不会自然地停留在画面正中央，而是倾向于在偏离中心约 1/3 的位置停留更久。这是因为中央构图给人一种「静止」「呆板」的感觉，而偏离中心的元素会制造一种动态张力——我们的眼睛在主体和画面边缘之间游走，从而产生视觉流动感。三分法正是利用了这一特性，将画面用两条水平线和两条垂直线分为九个等分矩形，四个交点便是天然的「视觉锚点」。文艺复兴时期的画家如达芬奇、拉斐尔就已经在使用类似的分割法则，只不过当时没有相机取景器来将其标准化。",
          },
          {
            heading: "三分法的四条线分别控制什么",
            body: "两条水平线各自承担不同的职责：下三分之一线适合放置「地面」「海平面」「桌面」等水平参考面，上三分之一线则适合放置「天空」「天花板」或留白区域。垂直线则控制主体的水平位置——左或右三分之一处是人物肖像的经典站位。当代 Instagram 摄影师的一个重要技巧是：地平线绝不要放在正中间（除非你拍的是完美的倒影对称）。将地平线放在上或下三分之一处，可以让天空或地面成为「叙事空间」——天空大的画面给人开阔、呼吸感，地面大的画面则给人踏实、亲近感。",
          },
          {
            heading: "三分法裁剪实操指南",
            body: "在 CropImageArt 中打开三分法网格后，你看到的是四条线和四个交点。最有效的裁剪策略是：首先确定你照片中的「主角」是什么——是一个人、一栋建筑、还是一棵树？然后，尝试将该主角移动到四个交点中的某一个。如果是人像，通常将人的眼睛对齐到上方的交点；如果是风景，将最有趣的元素（如孤树、日出）放在交点处。其次，调整地平线。将地平线与上下两条水平线之一对齐。如果天空很精彩（壮观的云彩、日落），用地平线对齐下三分之一线，给天空更多空间；如果前景更有趣（花海、纹理），则将地平线对齐上三分之一线。最后，确保「视线方向」留有空间——如果主体面向左边，它应该在右边的交点上，让左侧有呼吸空间。",
          },
        ],
        tips: [
          "人像摄影：将人物眼睛放在上方两个交点之一",
          "风光摄影：地平线对齐上或下 1/3 线，不要居中",
          "街拍：将视觉焦点（行人、招牌）置于交点处",
          "社交媒体：Instagram 4:5 比例 + 三分法 = 绝佳组合",
        ],
        exampleImageCaption:
          "经典的约塞米蒂山谷——将地平线放在下三分之一线，山谷主峰落在右侧竖向三分线上，形成了教科书级的三分法构图",
      },
      "zh-TW": {
        title: "三分法構圖完全指南",
        subtitle: "攝影與裁剪中最基礎的構圖法則，卻也是被應用最廣的黃金準則",
        intro:
          "如果你是攝影或設計新手，你聽到的第一個構圖建議大概率是「用三分法」。這條簡單的規則——把畫面用兩條橫線和兩條豎線分成九等份，然後把主體放在交叉點上——幾乎刻在了每一台相機、每一款修圖軟體的預設設定裡。但三分法遠不止「把東西放在交叉點」這麼簡單。這篇文章將從視覺心理學、經典繪畫到現代社群媒體，全面拆解三分法的原理與實戰技巧。",
        sections: [
          {
            heading: "三分法的視覺心理學原理",
            body: "人類的視覺系統天生傾向於尋找結構。當我們看一幅畫或一張照片時，眼睛會自動掃描畫面尋找「興趣點」。研究表明，視線並不會自然地停留在畫面正中央，而是傾向於在偏離中心約 1/3 的位置停留更久。這是因為中央構圖給人一種「靜止」「呆板」的感覺，而偏離中心的元素會製造一種動態張力——我們的眼睛在主體和畫面邊緣之間遊走，從而產生視覺流動感。三分法正是利用了這一特性，將畫面用兩條水平線和兩條垂直線分為九個等分矩形，四個交點便是天然的「視覺錨點」。文藝復興時期的畫家如達文西、拉斐爾就已經在使用類似的分割法則，只不過當時沒有相機取景器來將其標準化。",
          },
          {
            heading: "三分法的四條線分別控制什麼",
            body: "兩條水平線各自承擔不同的職責：下三分之一線適合放置「地面」「海平面」「桌面」等水平參考面，上三分之一線則適合放置「天空」「天花板」或留白區域。垂直線則控制主體的水平位置——左或右三分之一處是人物肖像的經典站位。當代 Instagram 攝影師的一個重要技巧是：地平線絕不要放在正中間（除非你拍的是完美的倒影對稱）。將地平線放在上或下三分之一處，可以讓天空或地面成為「敘事空間」——天空大的畫面給人開闊、呼吸感，地面大的畫面則給人踏實、親近感。",
          },
          {
            heading: "三分法裁剪實操指南",
            body: "在 CropImageArt 中開啟三分法網格後，你看到的是四條線和四個交點。最有效的裁剪策略是：首先確定你照片中的「主角」是什麼——是一個人、一棟建築、還是一棵樹？然後，嘗試將該主角移動到四個交點中的某一個。如果是人像，通常將人的眼睛對齊到上方的交點；如果是風景，將最有趣的元素（如孤樹、日出）放在交點處。其次，調整地平線。將地平線與上下兩條水平線之一對齊。如果天空很精彩（壯觀的雲彩、日落），用地平線對齊下三分之一線，給天空更多空間；如果前景更有趣（花海、紋理），則將地平線對齊上三分之一線。最後，確保「視線方向」留有空間——如果主體面向左邊，它應該在右邊的交點上，讓左側有呼吸空間。",
          },
        ],
        tips: [
          "人像攝影：將人物眼睛放在上方兩個交點之一",
          "風光攝影：地平線對齊上或下 1/3 線，不要居中",
          "街拍：將視覺焦點（行人、招牌）置於交點處",
          "社群媒體：Instagram 4:5 比例 + 三分法 = 絕佳組合",
        ],
        exampleImageCaption:
          "經典的優勝美地山谷——將地平線放在下三分之一線，山谷主峰落在右側豎向三分線上，形成了教科書級的三分法構圖",
      },
    },
  },

  // ─── 2. Golden Ratio ──────────────────────────────
  {
    slug: "golden-ratio",
    compositionType: "golden-ratio",
    publishedAt: "2026-08-09",
    readTime: { en: "9 min", "zh-CN": "9 分钟", "zh-TW": "9 分鐘" },
    exampleImage:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=533&fit=crop&q=80",
    exampleImageCredit: {
      en: "Photo by Spencer Davis / Unsplash",
      "zh-CN": "Photo by Spencer Davis / Unsplash",
      "zh-TW": "Photo by Spencer Davis / Unsplash",
    },
    content: {
      en: {
        title: "Golden Ratio Composition: The Magic of 1.618",
        subtitle: "From the Parthenon to modern photography, how this mysterious number shapes human aesthetics",
        intro:
          "φ (phi) = 1.6180339887… may be the most mythologized number in human history. Known as the 'golden ratio' or 'divine proportion,' it appears in Leonardo da Vinci's 'Vitruvian Man,' Le Corbusier's Modulor, the spirals of seashells, and the arms of galaxies. In photographic composition, the golden ratio grid is an 'upgraded' rule of thirds — a more sophisticated mathematical relationship that yields subtler visual balance.",
        sections: [
          {
            heading: "The Math and the Intuition",
            body: "The golden ratio's mathematical definition is simple: if a line segment is divided into parts a and b such that a/b = (a+b)/a, then that ratio is φ ≈ 1.618. It sounds abstract, but visually it creates a relationship that is 'unequal yet balanced.' The rule of thirds splits at 1:1:1 (three equal parts); the golden ratio splits at roughly 1:1.618:1 — the middle zone is larger than the sides. This asymmetry happens to be nature's most common distribution pattern: tree branches, petal arrangements, human body proportions (navel-to-foot vs. total height) all approximate φ. When applied to a frame, the resulting division lines feel 'just right' — neither the rigidity of strict symmetry nor the randomness of arbitrary placement.",
          },
          {
            heading: "Golden Ratio vs. Rule of Thirds: When to Use Which",
            body: "The rule of thirds excels at quick decisions; the golden ratio rewards careful refinement. The core difference: thirds divide uniformly (33/33/33), while the golden ratio divides non-uniformly (roughly 38/62). This means the golden ratio grid pulls the viewer's gaze more decisively toward one side, creating a larger 'subject zone' and a smaller 'breathing zone.' When cropping, if your subject is already large and prominent, the golden ratio often outperforms thirds — it gives the subject more generous space. If your photo has scattered elements needing stronger structural guidance, the equal divisions of thirds may be more suitable.",
          },
          {
            heading: "Practical Golden Ratio Cropping",
            body: "When you switch to the Golden Ratio grid in CropImageArt, you see two sets of vertical divisions and two sets of horizontal divisions. Unlike the thirds grid, these lines are not equally spaced. The core cropping approach: find the heaviest visual element in the frame and place it in the wider zone, reserving the narrower zone as negative space. For example, a photo with a person on the left and empty space on the right can have the vertical line aligned to the person's edge, letting the subject occupy 62% of the width. Horizontally: if the foreground is compelling, push the horizon higher (foreground at 62%); if the sky is the star, push the horizon lower (sky at 62%). The visual weight of the four intersection points also differs — the upper-left intersection is usually the most attention-grabbing (matching most cultures' left-to-right, top-to-bottom reading habits).",
          },
        ],
        tips: [
          "Use golden ratio when the subject is prominent; use thirds when elements are scattered",
          "The upper-left golden intersection has the highest visual weight",
          "In landscapes, let the more compelling portion occupy 62% of the frame",
          "Pair with the golden spiral for even stronger results",
        ],
        exampleImageCaption:
          "Classical colonnade — the spacing between columns and the overall facade proportion closely approximates φ (1.618), with the subject area occupying roughly 62%",
      },
      "zh-CN": {
        title: "黄金比例构图：1.618 的神奇魔力",
        subtitle: "从古希腊帕特农神庙到现代摄影，这个神秘数字如何塑造人类审美",
        intro:
          "φ（phi）= 1.6180339887… 这可能是一个人类历史上最被神化的数字。它被称为「黄金比例」「神圣比例」，从达芬奇的《维特鲁威人》到勒·柯布西耶的建筑模度，从贝壳的螺旋到银河系的旋臂，φ 作为自然界的「设计密码」无处不在。在摄影构图中，黄金比例网格是三分法的「升级版」——更复杂的数学关系带来更微妙的视觉平衡。",
        sections: [
          {
            heading: "黄金比例的数学与直觉",
            body: "黄金比例的数学定义很简单：如果一条线段被分成两段 a 和 b，且 a/b = (a+b)/a，那么这个比例就是 φ ≈ 1.618。这听起来很抽象，但在视觉上它创造了一种「不等但均衡」的关系。三分法的分割比例是 1:1:1（三等分），而黄金比例的分割比例约为 1:1.618:1——中间的区域比两边更大。这种不对称性恰好是自然界最普遍的分布模式：树枝的分叉、花瓣的排列、人体的比例（肚脐到脚底 vs 身高）都近似遵循 φ。当我们将这个比例应用到画面中时，创造出的分割线会给人一种「刚刚好」的直觉——既不是严格对称的拘谨，也不是随意放置的散乱。",
          },
          {
            heading: "黄金比例 vs 三分法：什么时候用哪个",
            body: "三分法适合快速决策，黄金比例适合精雕细琢。两者的核心区别在于：三分法的分割是均匀的（33/33/33），黄金比例的分割是不均匀的（约 38/62）。这就意味着黄金比例网格会引导观众视线更偏向画面的一侧，留下一个更大的「主体区域」和一个较小的「呼吸区域」。在实际裁剪中，如果你的主体本身就很大、很突出，用黄金比例会比三分法更好——因为它给主体留出了更充裕的空间。如果你的照片元素比较分散、需要更强的结构化引导，三分法的均匀分割可能更合适。",
          },
          {
            heading: "黄金比例裁剪实操",
            body: "在 CropImageArt 中切换到 Golden Ratio 网格后，你会看到两组垂直分割线和两组水平分割线。与三分法不同，这些线不是等距的。裁剪时的核心思路是：找到画面中最「重」的视觉元素，将它放在较宽的区域中，用较窄的区域做「负空间」。例如，一张左侧有人物、右侧有留白的照片，可以将垂直线对齐到人物边缘，让人物占据 62% 的宽度。水平方向同理：如果前景精彩，就让地平线偏上方（前景占 62%）；如果天空壮丽，就让地平线偏下方（天空占 62%）。四个交点（黄金分割点）的视觉权重也不同——通常左上交点最引人注目（因为大多数文化的阅读习惯从左到右、从上到下）。",
          },
        ],
        tips: [
          "主体突出时用黄金比例，主体分散时用三分法",
          "左上黄金分割点是视觉权重最高的位置",
          "风景中让精彩的部分占画面 62%",
          "与黄金螺旋配合使用效果更佳",
        ],
        exampleImageCaption:
          "古典柱廊——柱子间距与立面的整体比例接近 φ (1.618)，主体区域占据约 62%，留白区域占约 38%",
      },
      "zh-TW": {
        title: "黃金比例構圖：1.618 的神奇魔力",
        subtitle: "從古希臘帕德嫩神廟到現代攝影，這個神秘數字如何塑造人類審美",
        intro:
          "φ（phi）= 1.6180339887… 這可能是一個人類歷史上最被神化的數字。它被稱為「黃金比例」「神聖比例」，從達文西的《維特魯威人》到勒·柯布西耶的建築模度，從貝殼的螺旋到銀河系的旋臂，φ 作為自然界的「設計密碼」無處不在。在攝影構圖中，黃金比例網格是三分法的「升級版」——更複雜的數學關係帶來更微妙的視覺平衡。",
        sections: [
          {
            heading: "黃金比例的數學與直覺",
            body: "黃金比例的數學定義很簡單：如果一條線段被分成兩段 a 和 b，且 a/b = (a+b)/a，那麼這個比例就是 φ ≈ 1.618。這聽起來很抽象，但在視覺上它創造了一種「不等但均衡」的關係。三分法的分割比例是 1:1:1（三等分），而黃金比例的分割比例約為 1:1.618:1——中間的區域比兩邊更大。這種不對稱性恰好是自然界最普遍的分佈模式：樹枝的分叉、花瓣的排列、人體的比例（肚臍到腳底 vs 身高）都近似遵循 φ。當我們將這個比例應用到畫面中時，創造出的分割線會給人一種「剛剛好」的直覺——既不是嚴格對稱的拘謹，也不是隨意放置的散亂。",
          },
          {
            heading: "黃金比例 vs 三分法：什麼時候用哪個",
            body: "三分法適合快速決策，黃金比例適合精雕細琢。兩者的核心區別在於：三分法的分割是均勻的（33/33/33），黃金比例的分割是不均勻的（約 38/62）。這就意味著黃金比例網格會引導觀眾視線更偏向畫面的一側，留下一個更大的「主體區域」和一個較小的「呼吸區域」。在實際裁剪中，如果你的主體本身就很大、很突出，用黃金比例會比三分法更好——因為它給主體留出了更充裕的空間。如果你的照片元素比較分散、需要更強的結構化引導，三分法的均勻分割可能更合適。",
          },
          {
            heading: "黃金比例裁剪實操",
            body: "在 CropImageArt 中切換到 Golden Ratio 網格後，你會看到兩組垂直分割線和兩組水平分割線。與三分法不同，這些線不是等距的。裁剪時的核心思路是：找到畫面中最「重」的視覺元素，將它放在較寬的區域中，用較窄的區域做「負空間」。例如，一張左側有人物、右側有留白的照片，可以將垂直線對齊到人物邊緣，讓人物佔據 62% 的寬度。水平方向同理：如果前景精彩，就讓地平線偏上方（前景佔 62%）；如果天空壯麗，就讓地平線偏下方（天空佔 62%）。四個交點（黃金分割點）的視覺權重也不同——通常左上交點最引人注目（因為大多數文化的閱讀習慣從左到右、從上到下）。",
          },
        ],
        tips: [
          "主體突出時用黃金比例，主體分散時用三分法",
          "左上黃金分割點是視覺權重最高的位置",
          "風景中讓精彩的部分佔畫面 62%",
          "與黃金螺旋配合使用效果更佳",
        ],
        exampleImageCaption:
          "古典柱廊——柱子間距與立面的整體比例接近 φ (1.618)，主體區域佔據約 62%，留白區域佔約 38%",
      },
    },
  },

  // ─── 3. Golden Spiral ─────────────────────────────
  {
    slug: "golden-spiral",
    compositionType: "golden-spiral",
    publishedAt: "2026-08-09",
    readTime: { en: "10 min", "zh-CN": "10 分钟", "zh-TW": "10 分鐘" },
    exampleImage:
      "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800&h=533&fit=crop&q=80",
    exampleImageCredit: {
      en: "Photo by Ben Kolde / Unsplash",
      "zh-CN": "Photo by Ben Kolde / Unsplash",
      "zh-TW": "Photo by Ben Kolde / Unsplash",
    },
    content: {
      en: {
        title: "Golden Spiral: Nature's Composition Code",
        subtitle: "How the Fibonacci sequence creates irresistible visual flow",
        intro:
          "The nautilus shell, the sunflower's head, a hurricane's shape, a galaxy's spiral arms — they all follow the same mathematical rule: the Fibonacci spiral, commonly called the 'golden spiral.' This elegant curve is an immensely powerful composition tool in photography: unlike the rule of thirds, which 'slices' the frame, the golden spiral 'guides' the eye — the viewer's gaze unconsciously travels along the spiral path, ultimately resting at its center. For cropping, the golden spiral's value lies in helping you 'rediscover' visual flow within a photo you've already taken.",
        sections: [
          {
            heading: "From Fibonacci to the Golden Spiral",
            body: "In the Fibonacci sequence (1, 1, 2, 3, 5, 8, 13, 21…), the ratio of adjacent numbers converges toward φ. If you draw squares with side lengths from this sequence and inscribe quarter-circle arcs in each, you get the golden spiral. What makes this spiral unique: it contracts from outer to inner at a consistent proportional rate at every step. Visually, this means wherever your eye lands on the spiral, it naturally 'slides' to the next smaller arc segment until it reaches the center. This irresistible visual flow makes the golden spiral the ultimate form of leading-line composition.",
          },
          {
            heading: "What Types of Photos Suit the Golden Spiral",
            body: "The golden spiral truly shines with photos rich in elements that need 'organizing' into visual order. In street photography, where pedestrians and architecture create a complex visual field, the spiral helps you place the most important element (say, a silhouette) at the center, with surrounding elements arranged along the arcs. In still-life or food photography, the spiral helps you find a 'visual path' through multiple objects. Nature photography is the spiral's heaven — winding rivers, mountain roads, the direction of tree branches… these inherently spiral-like elements produce astonishing harmony when overlaid with the golden spiral grid.",
          },
          {
            heading: "Cropping with the Golden Spiral",
            body: "When you enable the Golden Spiral overlay in CropImageArt, you'll see a curve that starts from one corner and spirals inward. The most crucial step in cropping is deciding which corner the spiral starts from — you can rotate or flip the spiral to match your photo. Generally, the starting point (the largest arc) should hold 'secondary but eye-catching elements,' while the spiral's endpoint (center) should be home to your 'most important subject.' For example, a seascape: the spiral starts at the top-right with a seagull → curves along the coastline → ultimately focuses on a lighthouse at the bottom-left. When cropping, you may need to trim away areas the spiral doesn't cover, making the frame cleaner. Note: not every element in the photo has to be 'on the line' — the spiral is a guide, not a shackle.",
          },
        ],
        tips: [
          "Spiral center = the most important element in the frame",
          "Spiral starting point = secondary but eye-catching elements",
          "Natural landscapes (rivers, mountains) are golden spiral naturals",
          "Rotate/flip the spiral to match your photo's content",
        ],
        exampleImageCaption:
          "Spiral staircase — nature and human-made structures alike contain perfect Fibonacci spirals; the eye follows each step downward, ultimately resting at the spiral's center",
      },
      "zh-CN": {
        title: "黄金螺旋：大自然的构图密码",
        subtitle: "斐波那契数列如何创造出让眼睛「停不下来」的视觉流动",
        intro:
          "鹦鹉螺的壳、向日葵的花盘、飓风的形状、星系的旋臂——它们都遵循着同一个数学规律：斐波那契螺旋，也就是我们常说的「黄金螺旋」。这条优美的曲线在摄影中是一个极具威力的构图工具：它不像三分法那样「切割」画面，而是「引导」视线——观众的眼睛会不自觉地沿着螺旋路径游走，最终停留在螺旋的中心。对于裁剪而言，黄金螺旋的价值在于它能帮助你在已经拍摄好的照片中「重新发现」视觉流动。",
        sections: [
          {
            heading: "从斐波那契到黄金螺旋",
            body: "斐波那契数列（1, 1, 2, 3, 5, 8, 13, 21…）中相邻数字的比值会趋近于 φ。如果把每个数字作为边长画正方形，并在每个正方形内画四分之一圆弧，连接起来就形成了黄金螺旋。这个螺旋的独特之处在于：它从外向内收缩，每一步的缩小比例都保持一致。在视觉上，这意味着无论你的视线落在螺旋的哪个位置，都会自然地「滑向」下一个更小的弧段，直到抵达中心。这种不可抗拒的视觉流动感，使得黄金螺旋成为引导线构图的终极形式。",
          },
          {
            heading: "黄金螺旋适合什么类型的照片",
            body: "黄金螺旋最擅长处理的场景是在画面元素丰富、需要「整理」视觉秩序的照片。如果你拍摄的是街景，行人和建筑构成了一个复杂的视觉场，螺旋可以帮助你把最重要的元素（比如一个背影）放在螺旋中心，周围的元素沿着弧线排布。如果你拍摄的是静物或食物，螺旋可以帮你从众多物品中找到一条「视觉动线」。自然摄影是黄金螺旋的天堂——弯曲的河流、盘山公路、树枝的走向……这些本身就蕴含螺旋结构的元素，叠加黄金螺旋网格后会产生令人惊叹的和谐感。",
          },
          {
            heading: "用黄金螺旋进行裁剪",
            body: "打开 CropImageArt 的 Golden Spiral 叠加层后，你会看到一条从画面一角开始、不断旋转收缩的弧线。裁剪时，最关键的一步是决定螺旋从哪个角落开始——你可以旋转或翻转螺旋来适应照片。一般来说，螺旋的起点（弧线最大的那个角）应该放置「次要但吸引眼球的元素」，而螺旋的终点（中心点）是「最重要的主体」。例如一张海景照片：螺旋从右上角的海鸥开始 → 沿着海岸线弯过 → 最终聚焦在左下角的灯塔上。裁剪时，你可能需要裁掉螺旋覆盖不到的区域，让画面更干净。注意：不强制照片中的所有元素都必须「在线」上——螺旋是一种引导，而不是枷锁。",
          },
        ],
        tips: [
          "螺旋中心 = 画面最重要的元素",
          "螺旋起点 = 次要但吸引眼球的元素",
          "自然风景（河流、山脉）是螺旋构图的天然素材",
          "可以旋转/翻转螺旋来匹配照片内容",
        ],
        exampleImageCaption:
          "螺旋楼梯——自然界和人造物中都能找到完美的斐波那契螺旋，视线顺着台阶逐级流转，最终落于螺旋中心",
      },
      "zh-TW": {
        title: "黃金螺旋：大自然的構圖密碼",
        subtitle: "斐波那契數列如何創造出讓眼睛「停不下來」的視覺流動",
        intro:
          "鸚鵡螺的殼、向日葵的花盤、颶風的形狀、星系的旋臂——它們都遵循著同一個數學規律：斐波那契螺旋，也就是我們常說的「黃金螺旋」。這條優美的曲線在攝影中是一個極具威力的構圖工具：它不像三分法那樣「切割」畫面，而是「引導」視線——觀眾的眼睛會不自覺地沿著螺旋路徑遊走，最終停留在螺旋的中心。對於裁剪而言，黃金螺旋的價值在於它能幫助你在已經拍攝好的照片中「重新發現」視覺流動。",
        sections: [
          {
            heading: "從斐波那契到黃金螺旋",
            body: "斐波那契數列（1, 1, 2, 3, 5, 8, 13, 21…）中相鄰數字的比值會趨近於 φ。如果把每個數字作為邊長畫正方形，並在每個正方形內畫四分之一圓弧，連接起來就形成了黃金螺旋。這個螺旋的獨特之處在於：它從外向內收縮，每一步的縮小比例都保持一致。在視覺上，這意味著無論你的視線落在螺旋的哪個位置，都會自然地「滑向」下一個更小的弧段，直到抵達中心。這種不可抗拒的視覺流動感，使得黃金螺旋成為引導線構圖的終極形式。",
          },
          {
            heading: "黃金螺旋適合什麼類型的照片",
            body: "黃金螺旋最擅長處理的場景是在畫面元素豐富、需要「整理」視覺秩序的照片。如果你拍攝的是街景，行人和建築構成了一個複雜的視覺場，螺旋可以幫助你把最重要的元素（比如一個背影）放在螺旋中心，周圍的元素沿著弧線排布。如果你拍攝的是靜物或食物，螺旋可以幫你從眾多物品中找到一條「視覺動線」。自然攝影是黃金螺旋的天堂——彎曲的河流、盤山公路、樹枝的走向……這些本身就蘊含螺旋結構的元素，疊加黃金螺旋網格後會產生令人驚嘆的和諧感。",
          },
          {
            heading: "用黃金螺旋進行裁剪",
            body: "打開 CropImageArt 的 Golden Spiral 疊加層後，你會看到一條從畫面一角開始、不斷旋轉收縮的弧線。裁剪時，最關鍵的一步是決定螺旋從哪個角落開始——你可以旋轉或翻轉螺旋來適應照片。一般來說，螺旋的起點（弧線最大的那個角）應該放置「次要但吸引眼球的元素」，而螺旋的終點（中心點）是「最重要的主體」。例如一張海景照片：螺旋從右上角的海鷗開始 → 沿著海岸線彎過 → 最終聚焦在左下角的燈塔上。裁剪時，你可能需要裁掉螺旋覆蓋不到的區域，讓畫面更乾淨。注意：不強制照片中的所有元素都必須「在線」上——螺旋是一種引導，而不是枷鎖。",
          },
        ],
        tips: [
          "螺旋中心 = 畫面最重要的元素",
          "螺旋起點 = 次要但吸引眼球的元素",
          "自然風景（河流、山脈）是螺旋構圖的天然素材",
          "可以旋轉/翻轉螺旋來匹配照片內容",
        ],
        exampleImageCaption:
          "螺旋樓梯——自然界和人造物中都能找到完美的斐波那契螺旋，視線順著台階逐級流轉，最終落於螺旋中心",
      },
    },
  },

  // ─── 4. Diagonal Method ───────────────────────────
  {
    slug: "diagonal-method",
    compositionType: "diagonal",
    publishedAt: "2026-08-09",
    readTime: { en: "7 min", "zh-CN": "7 分钟", "zh-TW": "7 分鐘" },
    exampleImage:
      "https://images.unsplash.com/photo-1469474968028-56623f3a0fe1?w=800&h=533&fit=crop&q=80",
    exampleImageCredit: {
      en: "Photo by Paul Gilmore / Unsplash",
      "zh-CN": "Photo by Paul Gilmore / Unsplash",
      "zh-TW": "Photo by Paul Gilmore / Unsplash",
    },
    content: {
      en: {
        title: "Diagonal Method: Dynamism, Tension, and Energy",
        subtitle: "Why the 45-degree line is the most dynamic line in the frame",
        intro:
          "Horizontal lines feel stable, vertical lines feel solemn — and diagonal lines feel energetic. The Diagonal Method was proposed by Dutch photographer and educator Edwin Westhoff in 2006. He discovered that in the vast majority of 'beautiful photographs,' the most important elements are arranged along 45-degree lines running from corner to corner. This is no coincidence: the human visual system processes diagonal direction information far more efficiently than horizontal or vertical lines, because most motion in nature — running animals, flying birds, flowing water — occurs along non-orthogonal directions.",
        sections: [
          {
            heading: "The Scientific Basis of the Diagonal Method",
            body: "Westhoff's research shows that the area traversed by a frame's diagonals (what he calls the 'diagonal band') is the path the human eye naturally scans when viewing a rectangular image. In other words, you don't need to train yourself to 'see diagonals' — your eyes already do this. The three principles of the diagonal method: ① The most important element in the image should lie on or touch a diagonal from one corner to another. ② Secondary elements can fall on the other diagonal. ③ Both diagonals can be used simultaneously, creating crossed guidance. Compared to the rule of thirds, the diagonal method is better suited for 'linear' subjects — roads, rivers, bridges, railings, and other inherently linear objects.",
          },
          {
            heading: "Battle-Tested Diagonal Method Scenarios",
            body: "Diagonal composition excels in the following scenarios: street photography — sidewalk lines, building edges, the direction of crowd flow all naturally form diagonals; sports photography — athletes' body lean, court lines, motion trajectories; travel photography — stone steps climbing mountains, winding alleys, landscape lines seen from car windows. A common misconception is that 'only a perfect 45° diagonal counts.' In reality, any line that cuts diagonally across the frame can serve as a diagonal variant. The key is whether the line spans most of the frame and visually 'slices' the rectangle.",
          },
          {
            heading: "Diagonal Method Cropping Guide",
            body: "When you select the Diagonal Method grid in CropImageArt, you'll see 45-degree guidelines radiating from all four corners. The core of cropping isn't to 'move' your subject onto a diagonal, but to adjust the frame to 'enhance' already existing diagonals. Specifically: ① Find the most prominent diagonal line or diagonally arranged elements in your photo. ② Rotate or crop to bring those elements closer to a true diagonal. ③ Trim away edge elements that interfere with the diagonal. If your photo lacks natural diagonal elements, you can also try tilt cropping — deliberately rotating by an angle to inject dynamism into the frame. This is especially effective in concert and street photography.",
          },
        ],
        tips: [
          "Best suited for linear subjects: roads, rivers, architecture",
          "You can create diagonals by tilting the frame",
          "The intersection of two diagonals is the frame's most eye-catching spot",
          "Pairs especially well with triangle composition",
        ],
        exampleImageCaption:
          "Forest path — the road cuts diagonally from the bottom-right to the top-left, forming a strong diagonal line that pulls the gaze from foreground to distance",
      },
      "zh-CN": {
        title: "对角线构图法：动态、张力与能量",
        subtitle: "为什么45度角是画面中最具动势的线",
        intro:
          "水平线给人稳定感，垂直线给人庄严感，而对角线——给人能量感。对角线构图法由荷兰摄影师兼教育家 Edwin Westhoff 在 2006 年提出，他发现绝大多数「好看的照片」，其重要元素都沿着从一角到另一角的 45 度线排列。这并非巧合：人类视觉系统对斜线方向的信息处理效率远高于水平/垂直线，因为自然界中大部分运动（奔跑的动物、飞行的鸟、流动的水）都发生在非正交的方向上。",
        sections: [
          {
            heading: "对角线法的科学基础",
            body: "Westhoff 的研究表明，画面对角线通过的区域（他称为「对角线带」）是人类眼睛在观看矩形画面时自然扫描的路线。换句话说，你不需要刻意训练自己去「看对角线」——你的眼睛本来就会这样做。对角线法的三条原则：① 画面中最重要的元素应该落在或接触从一角到另一角的对角线上；② 次要元素可以落在另一条对角线上；③ 两条对角线可以同时使用，形成交叉引导。与三分法相比，对角线法更适合「线性」主题——道路、河流、桥梁、栏杆等本身就具有线性的物体。",
          },
          {
            heading: "对角线法的实战场景",
            body: "对角线构图在以下场景中表现尤为出色：街拍——人行道的线条、建筑的边缘、人群的走向都自然形成对角线；运动摄影——运动员的身体倾斜、球场的边线、动作的轨迹；旅行摄影——登山的石阶、蜿蜒的小巷、从车窗看到的风景线。一个常见误区是认为「只有 45 度对角线才算」。实际上，任何斜向穿过画面的线条都可以作为对角线的变体。关键是线条是否跨越了画面的大部分区域，是否在视觉上「切开」了矩形。",
          },
          {
            heading: "对角线法裁剪指南",
            body: "在 CropImageArt 中选择 Diagonal Method 网格后，你会看到从四个角发出的 45 度引导线。裁剪的核心不是把主体「移动」到对角线上，而是通过调整画框来「增强」已存在的对角线。具体做法：① 找到照片中最显眼的斜线或斜向排列的元素；② 旋转或裁剪使这些元素更接近对角线；③ 裁掉干扰对角线的边缘元素。如果照片本身缺乏对角线元素，也可以尝试倾斜裁剪（故意旋转一个角度）来为画面注入动感——这在音乐会、街头摄影中非常有效。",
          },
        ],
        tips: [
          "最适合道路、河流、建筑等线性主题",
          "可以通过倾斜画面来「创造」对角线",
          "两条对角线交叉处是画面最引人注目的位置",
          "与三角形构图配合效果更好",
        ],
        exampleImageCaption:
          "林间小道——道路从右下角斜穿画面至左上角，形成一条强烈的对角线，将视线从前景引向远方",
      },
      "zh-TW": {
        title: "對角線構圖法：動態、張力與能量",
        subtitle: "為什麼45度角是畫面中最具動勢的線",
        intro:
          "水平線給人穩定感，垂直線給人莊嚴感，而對角線——給人能量感。對角線構圖法由荷蘭攝影師兼教育家 Edwin Westhoff 在 2006 年提出，他發現絕大多數「好看的照片」，其重要元素都沿著從一角到另一角的 45 度線排列。這並非巧合：人類視覺系統對斜線方向的資訊處理效率遠高於水平/垂直線，因為自然界中大部分運動（奔跑的動物、飛行的鳥、流動的水）都發生在非正交的方向上。",
        sections: [
          {
            heading: "對角線法的科學基礎",
            body: "Westhoff 的研究表明，畫面通過對角線的區域（他稱為「對角線帶」）是人類眼睛在觀看矩形畫面時自然掃描的路線。換句話說，你不需要刻意訓練自己去「看對角線」——你的眼睛本來就會這樣做。對角線法的三條原則：① 畫面中最重要的元素應該落在或接觸從一角到另一角的對角線上；② 次要元素可以落在另一條對角線上；③ 兩條對角線可以同時使用，形成交叉引導。與三分法相比，對角線法更適合「線性」主題——道路、河流、橋樑、欄杆等本身就具有線性的物體。",
          },
          {
            heading: "對角線法的實戰場景",
            body: "對角線構圖在以下場景中表現尤為出色：街拍——人行道的線條、建築的邊緣、人群的走向都自然形成對角線；運動攝影——運動員的身體傾斜、球場的邊線、動作的軌跡；旅行攝影——登山的石階、蜿蜒的小巷、從車窗看到的風景線。一個常見誤區是認為「只有 45 度對角線才算」。實際上，任何斜向穿過畫面的線條都可以作為對角線的變體。關鍵是線條是否跨越了畫面的大部分區域，是否在視覺上「切開」了矩形。",
          },
          {
            heading: "對角線法裁剪指南",
            body: "在 CropImageArt 中選擇 Diagonal Method 網格後，你會看到從四個角發出的 45 度引導線。裁剪的核心不是把主體「移動」到對角線上，而是通過調整畫框來「增強」已存在的對角線。具體做法：① 找到照片中最顯眼的斜線或斜向排列的元素；② 旋轉或裁剪使這些元素更接近對角線；③ 裁掉干擾對角線的邊緣元素。如果照片本身缺乏對角線元素，也可以嘗試傾斜裁剪（故意旋轉一個角度）來為畫面注入動感——這在音樂會、街頭攝影中非常有效。",
          },
        ],
        tips: [
          "最適合道路、河流、建築等線性主題",
          "可以透過傾斜畫面來「創造」對角線",
          "兩條對角線交叉處是畫面最引人注目的位置",
          "與三角形構圖配合效果更好",
        ],
        exampleImageCaption:
          "林間小道——道路從右下角斜穿畫面至左上角，形成一條強烈的對角線，將視線從前景引向遠方",
      },
    },
  },

  // ─── 5. Triangle ───────────────────────────────────
  {
    slug: "triangle-composition",
    compositionType: "triangle",
    publishedAt: "2026-08-09",
    readTime: { en: "8 min", "zh-CN": "8 分钟", "zh-TW": "8 分鐘" },
    exampleImage:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&h=533&fit=crop&q=80",
    exampleImageCredit: {
      en: "Photo by Kalen Emsley / Unsplash",
      "zh-CN": "Photo by Kalen Emsley / Unsplash",
      "zh-TW": "Photo by Kalen Emsley / Unsplash",
    },
    content: {
      en: {
        title: "Triangle Composition: The Perfect Balance of Stability and Tension",
        subtitle: "From Da Vinci's 'The Virgin and Child with Saint Anne' to fashion photography, how triangles create visual hierarchy",
        intro:
          "The triangle is the first stable structure humans recognized — why do tripods have three legs? Because three points define a plane. In painting and photography, triangle composition (also known as pyramid composition) is one of the oldest and most reliable approaches. A triangle can organize scattered elements into a cohesive, directional visual whole. Renaissance religious paintings almost universally employed triangle composition — placing the Virgin at the apex with angels and saints distributed along the base, creating a stable, solemn, sacred atmosphere.",
        sections: [
          {
            heading: "Three Basic Forms of Triangle Composition",
            body: "Triangle composition isn't just one 'triangle' — it has three fundamental variants: ① Upright triangle (apex at top, base at bottom) — the most stable form, conveying solidity, permanence, and monumentality. Ideal for architecture, mountains, and family portraits. ② Inverted triangle (apex at bottom, base at top) — the most unstable form, generating tension, crisis, and visual impact. Suited for suspense, danger, or highly dramatic moments. ③ Slanted triangle — apex leaning to one side, combining stability with dynamism. Most commonly used in still-life and product photography. When shooting or cropping, pay attention not just to the shape, but to the triangle's 'direction' — apex pointing upward suggests ascension, apex pointing downward suggests pressure, apex pointing left or right guides the viewer's gaze.",
          },
          {
            heading: "How to Organize Frame Elements with Triangles",
            body: "The brilliance of triangle composition lies in its ability to unite seemingly unrelated objects into a whole. In still-life photography, you can place three items at the triangle's three vertices — the viewer's eye will naturally cycle between them. In portrait photography, the subject's head forms the apex, with hands or shoulders as the two base endpoints — the classic 'head + shoulders' triangle. In landscape photography, a mountain's silhouette is itself a triangle; foreground rocks, midground trees, and distant peaks can also form an implied triangular hierarchy. Remember one core rule: the triangle doesn't need to be 'drawn' — it's implied by the positional relationships of key elements within the frame.",
          },
          {
            heading: "Practical Triangle Cropping",
            body: "When you switch to Triangle mode in CropImageArt, you'll see a main diagonal (bottom-left to top-right) plus two dashed auxiliary lines extending from the corners toward the center. Cropping method: ① Place the most important element on or near the main diagonal. ② Use the dashed auxiliary lines to align secondary elements. ③ The intersection of the diagonals and the auxiliary lines marks the 'center of gravity.' If your photo has three primary elements, try having them fall on different positions along the three lines. Special note: the 'base' of a triangle composition typically needs heavier visual mass (e.g., a large ground area, dark foreground), while the apex needs lighter elements (sky, negative space). Adjust the base-to-apex ratio during cropping to balance the frame.",
          },
        ],
        tips: [
          "Upright = stability, inverted = tension, slanted = dynamism",
          "Place three primary elements at the triangle's three vertices",
          "The base should feel 'heavy'; the apex should feel 'light'",
          "The natural choice for group portraits",
        ],
        exampleImageCaption:
          "Mountain peaks naturally form an upright triangle — broad, solid base (foothills) with a sharp, towering apex (summit), conveying a monumental, timeless feeling",
      },
      "zh-CN": {
        title: "三角形构图：稳定与张力的完美平衡",
        subtitle: "从达芬奇《圣母子与圣安妮》到时尚摄影，三角形如何塑造视觉层次",
        intro:
          "三角形是人类最早认识的稳定结构——三脚架为什么是三条腿？因为三点确定一个平面。在绘画和摄影中，三角形构图（也叫金字塔构图）是最古老也最可靠的构图方式之一。一个三角形可以将散乱的元素组织成一个有凝聚力、有方向性的视觉整体。文艺复兴时期的宗教画几乎全部采用三角形构图——将圣母放在顶点，天使和圣徒分布在底边两侧，营造出一种稳定、庄严、神圣的氛围。",
        sections: [
          {
            heading: "三角形构图的三种基本形态",
            body: "三角形构图不只是一个「三角形」，它有三种基本变体：① 正三角形（顶点在上，底边在下）——最稳定，给人坚固、永恒、纪念碑式的感受，适合建筑、山峰、全家福合影。② 倒三角形（顶点在下，底边在上）——最不稳定，制造紧张感、危机感和视觉冲击力，适合表现悬疑、危险或极具张力的瞬间。③ 斜三角形——顶点偏向一侧，兼具稳定性和动感，最常用于静物摄影和产品摄影。在拍摄或裁剪时，你需要注意的不只是「形状」，还有三角形的「朝向」——顶点指向上方有上升感，顶点指向下方有压迫感，顶点指向左侧或右侧则引导视线方向。",
          },
          {
            heading: "如何用三角形组织画面元素",
            body: "三角形构图的精妙之处在于它可以将看起来毫无关联的物体组织成一个整体。在静物摄影中，你可以将三个物品分别放在三角形的三个顶点上，观众的眼睛会在三件物品之间形成自然的视觉循环。在人像摄影中，人物的头部是顶点，双手或双肩是底边的两个端点——这就是经典的「头+双肩」三角形。在风光摄影中，山的轮廓本身就是三角形，前景的岩石、中景的树木和远景的山峰也可以形成隐含的三角形层级。记住一条核心法则：三角形不一定要被「画出来」——它是由画面中关键元素的位置关系暗示出来的。",
          },
          {
            heading: "三角形裁剪实操",
            body: "在 CropImageArt 中切换到 Triangle 模式后，你会看到一条主对角线（连接左下到右上），以及从两个对角分别延伸向画面中心的两条辅助线（虚线）。裁剪方法：① 将画面中最重要的元素放置在主对角线或其附近区域；② 使用辅助虚线来对齐次要元素；③ 对角线中心和两条辅助线的交点是「重心」位置。如果你的照片中有三个主要元素，试着让它们分别落在三条线的不同位置。特别注意：三角形构图的「底边」通常需要比较重的视觉质量（比如大面积的地面、深色的前景），而顶点需要比较轻的元素（天空、留白）。裁剪时可以调整底边与顶点的比例来平衡画面。",
          },
        ],
        tips: [
          "正三角 = 稳定庄重，倒三角 = 紧张感，斜三角 = 动感",
          "三个主要元素分别放在三角形的三个顶点",
          "底边要「重」，顶点要「轻」",
          "群体人像的天然选择",
        ],
        exampleImageCaption:
          "山峰轮廓天然形成正三角形——底边宽厚稳重（山脚），顶点尖锐挺拔（山顶），给人庄严、不朽的纪念碑式感受",
      },
      "zh-TW": {
        title: "三角形構圖：穩定與張力的完美平衡",
        subtitle: "從達文西《聖母子與聖安妮》到時尚攝影，三角形如何塑造視覺層次",
        intro:
          "三角形是人類最早認識的穩定結構——三腳架為什麼是三條腿？因為三點確定一個平面。在繪畫和攝影中，三角形構圖（也叫金字塔構圖）是最古老也最可靠的構圖方式之一。一個三角形可以將散亂的元素組織成一個有凝聚力、有方向性的視覺整體。文藝復興時期的宗教畫幾乎全部採用三角形構圖——將聖母放在頂點，天使和聖徒分佈在底邊兩側，營造出一種穩定、莊嚴、神聖的氛圍。",
        sections: [
          {
            heading: "三角形構圖的三種基本形態",
            body: "三角形構圖不只是一個「三角形」，它有三種基本變體：① 正三角形（頂點在上，底邊在下）——最穩定，給人堅固、永恆、紀念碑式的感受，適合建築、山峰、全家福合影。② 倒三角形（頂點在下，底邊在上）——最不穩定，製造緊張感、危機感和視覺衝擊力，適合表現懸疑、危險或極具張力的瞬間。③ 斜三角形——頂點偏向一側，兼具穩定性和動感，最常用於靜物攝影和產品攝影。在拍攝或裁剪時，你需要注意的不只是「形狀」，還有三角形的「朝向」——頂點指向上方有上升感，頂點指向下方有壓迫感，頂點指向左側或右側則引導視線方向。",
          },
          {
            heading: "如何用三角形組織畫面元素",
            body: "三角形構圖的精妙之處在於它可以將看起來毫無關聯的物體組織成一個整體。在靜物攝影中，你可以將三個物品分別放在三角形的三個頂點上，觀眾的眼睛會在三件物品之間形成自然的視覺循環。在人像攝影中，人物的頭部是頂點，雙手或雙肩是底邊的兩個端點——這就是經典的「頭+雙肩」三角形。在風光攝影中，山的輪廓本身就是三角形，前景的岩石、中景的樹木和遠景的山峰也可以形成隱含的三角形層級。記住一條核心法則：三角形不一定要被「畫出來」——它是由畫面中關鍵元素的位置關係暗示出來的。",
          },
          {
            heading: "三角形裁剪實操",
            body: "在 CropImageArt 中切換到 Triangle 模式後，你會看到一條主對角線（連接左下到右上），以及從兩個對角分別延伸向畫面中心的兩條輔助線（虛線）。裁剪方法：① 將畫面中最重要的元素放置在主對角線或其附近區域；② 使用輔助虛線來對齊次要元素；③ 對角線中心和兩條輔助線的交點是「重心」位置。如果你的照片中有三個主要元素，試著讓它們分別落在三條線的不同位置。特別注意：三角形構圖的「底邊」通常需要比較重的視覺質量（比如大面積的地面、深色的前景），而頂點需要比較輕的元素（天空、留白）。裁剪時可以調整底邊與頂點的比例來平衡畫面。",
          },
        ],
        tips: [
          "正三角 = 穩定莊重，倒三角 = 緊張感，斜三角 = 動感",
          "三個主要元素分別放在三角形的三個頂點",
          "底邊要「重」，頂點要「輕」",
          "群體人像的天然選擇",
        ],
        exampleImageCaption:
          "山峰輪廓天然形成正三角形——底邊寬厚穩重（山腳），頂點尖銳挺拔（山頂），給人莊嚴、不朽的紀念碑式感受",
      },
    },
  },

  // ─── 6. Center Cross ──────────────────────────────
  {
    slug: "center-cross",
    compositionType: "cross",
    publishedAt: "2026-08-09",
    readTime: { en: "7 min", "zh-CN": "7 分钟", "zh-TW": "7 分鐘" },
    exampleImage:
      "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&h=533&fit=crop&q=80",
    exampleImageCredit: {
      en: "Photo by Drew Hays / Unsplash",
      "zh-CN": "Photo by Drew Hays / Unsplash",
      "zh-TW": "Photo by Drew Hays / Unsplash",
    },
    content: {
      en: {
        title: "Center Cross Composition: An Underestimated Power",
        subtitle: "'Never put your subject in the center' is photography's biggest lie",
        intro:
          "Almost every introductory photography tutorial repeats the same advice: 'Don't put your subject dead center.' It's good advice — but also a dangerous oversimplification. In fact, a significant portion of the world's most impactful photographs use central composition — National Geographic covers, presidential inaugurations, history's most famous portraits… Center composition works because it creates an undeniable 'presence': the subject confronts the viewer directly, unadorned, unapologetic. The center cross grid is the tool designed to serve precisely this kind of composition.",
        sections: [
          {
            heading: "The Psychology of Central Composition",
            body: "Central composition derives its power from 'gaze.' When a subject is placed dead center, it is 'looking at' the viewer, rather than being 'looked at.' This creates a relationship of equality, even confrontation. Deities in religious paintings are always placed at center — a symbol of authority; ID photos require the head at center — a need for identity confirmation. The intersection of the horizontal and vertical midlines is the frame's only 'zero-vector' position — the sole point with no directional bias. In cropping, choosing center composition is effectively saying: this subject is powerful enough — it needs no supporting lines to help it. But be warned: center composition demands exceptionally high 'content quality' from the subject. A mundane photo at center looks even more mundane; a powerful photo at center looks commanding.",
          },
          {
            heading: "When Center Composition Is Right",
            body: "Symmetrical scenes: reflections, architectural atriums, the end of a tunnel — these naturally suit center composition because the frame is already 'about' symmetry, and the center of symmetry is the most natural focal point. Direct gaze: portraits where the subject looks straight at the camera, wildlife shots with direct animal eye contact — central placement intensifies this 'eye contact.' Isolation: the loneliness of a single figure in a vast space — center placement amplifies the contrast between emptiness and solitude. Minimalism: if you're after ultimate simplicity and order, center composition is the purest expression. Summary: if you want the viewer to feel 'he is looking at me,' use center composition; if you want the viewer to feel 'I am looking at him,' use off-center composition.",
          },
          {
            heading: "Center Cross Cropping Techniques",
            body: "When you switch to Center Cross mode in CropImageArt, you'll see a vertical line and a horizontal line intersecting at the exact center, marked by a small circle. When using the cross grid for cropping: ① Ensure the subject's visual center of gravity (not necessarily its geometric center) aligns with the cross intersection — for people, this is typically the eyes or facial center; for architecture, the structural center. ② Use the horizontal line to align the horizon or any horizontal reference in the background — while the horizon doesn't need to be centered, keeping it centered when you've chosen central composition usually enhances the symmetry. ③ The four quadrants of the cross become 'positive and negative space' — the subject occupies the central intersection zone, with the four quadrants serving as breathing space. The key to cropping is finding the boundary where all four quadrants 'serve' the subject evenly.",
          },
        ],
        tips: [
          "The subject must be 'strong enough' to warrant center placement",
          "Symmetrical scenes are the natural partner of center composition",
          "Portraits with direct eye contact are best at center",
          "Pair with symmetry grid for doubled impact",
        ],
        exampleImageCaption:
          "Building atrium interior — the arch apex falls exactly on the vertical midline, with the horizontal midline cutting through the arch's visual center of gravity, forming a powerful center cross",
      },
      "zh-CN": {
        title: "中心十字构图：被低估的力量",
        subtitle: "「不要把主体放中间」是最大的构图谎言",
        intro:
          "几乎所有入门摄影教程都会告诉你同一句话：「不要把主体放在画面正中央」。这是一个好建议，但也是一个危险的简化。事实上，世界上最有影响力的照片中有相当一部分使用了中央构图——《国家地理》的封面、总统就职典礼、历史上最著名的肖像……中央构图之所以有效，是因为它创造了一种无可辩驳的「在场感」：主体直面观众，没有掩饰，不加修饰。中心十字网格正是服务于这种构图的工具。",
        sections: [
          {
            heading: "中央构图的心理学",
            body: "中央构图的力量来源于「对视」。当一个主体被放在画面正中央时，它是在「看着」观众，而不是「被观众看着」。这创造了一种平等甚至对峙的关系。宗教画中的神像永远被放置在中央——这是权威的象征；证件照的头部也必须在中央——这是身份确认的需要。水平中线和垂直中线的交叉点，是画面中唯一一个没有方向偏好的「零向量」位置。在裁剪时选择中央构图，你实际上是在说：这个主体足够强大，不需要任何方向的辅助线来「帮助」它。但要注意的是，中央构图对主体的「内容质量」要求极高——一张平淡的照片放在正中间会显得更加平淡，而一张强有力的照片放在正中间会显得充满震慑力。",
          },
          {
            heading: "什么时候中央构图是对的",
            body: "对称场景：倒影、建筑中庭、隧道的尽头——这些场景天然适合中央构图，因为画面本身就关于「对称」，而对称的中心就是最自然的焦点。直接对话感：人物直视镜头的肖像、动物直视的野生动物摄影——中央位置强化了这种「目光接触」。孤立感：一个人在空旷环境中的孤独感——中央位置会放大这种空旷与孤独的对比。极简主义：如果你追求极致的简洁和秩序感，中央构图是最纯粹的表达方式。总结：如果你想让观众觉得「他在看我」，用中央构图；如果你想让观众觉得「我在看他」，用偏离中心的构图。",
          },
          {
            heading: "中心十字裁剪技巧",
            body: "切换到 CropImageArt 的 Center Cross 模式后，你会看到一条垂直线和一条水平线交叉于画面正中央，交叉点有一个小圆标记。使用十字网格裁剪时：① 确保主体的视觉重心（不一定是几何中心）与十字交叉点对齐——对于人物，通常是眼睛或面部中心；对于建筑，是结构中心。② 水平线用于对齐地平线或背景中的任何水平参考——虽然水平线不一定要在中间，但当你选择中央构图时，让水平线也居中通常会增强对称感。③ 十字线的四个象限此时变成了构图的「正负空间」——主体占据中央交叉区域，四个象限作为留白空间。裁剪的核心在于找到那个让四个象限「均匀」服务于主体的边界。",
          },
        ],
        tips: [
          "主体需要「足够强」才适合中央构图",
          "对称场景是中央构图的天然搭档",
          "人物直视镜头的肖像首选中央位置",
          "配合对称网格使用效果翻倍",
        ],
        exampleImageCaption:
          "建筑内部中庭——拱门顶端恰好落在画面垂直中线上，水平中线穿过拱门的视觉重心，形成强有力的中心十字",
      },
      "zh-TW": {
        title: "中心十字構圖：被低估的力量",
        subtitle: "「不要把主體放中間」是最大的構圖謊言",
        intro:
          "幾乎所有入門攝影教學都會告訴你同一句話：「不要把主體放在畫面正中央」。這是一個好建議，但也是一個危險的簡化。事實上，世界上最有影響力的照片中有相當一部分使用了中央構圖——《國家地理》的封面、總統就職典禮、歷史上最著名的肖像……中央構圖之所以有效，是因為它創造了一種無可辯駁的「在場感」：主體直面觀眾，沒有掩飾，不加修飾。中心十字網格正是服務於這種構圖的工具。",
        sections: [
          {
            heading: "中央構圖的心理學",
            body: "中央構圖的力量來源於「對視」。當一個主體被放在畫面正中央時，它是在「看著」觀眾，而不是「被觀眾看著」。這創造了一種平等甚至對峙的關係。宗教畫中的神像永遠被放置在中央——這是權威的象徵；證件照的頭部也必須在中央——這是身份確認的需要。水平中線和垂直中線的交叉點，是畫面中唯一一個沒有方向偏好的「零向量」位置。在裁剪時選擇中央構圖，你實際上是在說：這個主體足夠強大，不需要任何方向的輔助線來「幫助」它。但要注意的是，中央構圖對主體的「內容品質」要求極高——一張平淡的照片放在正中間會顯得更加平淡，而一張強有力的照片放在正中間會顯得充滿震懾力。",
          },
          {
            heading: "什麼時候中央構圖是對的",
            body: "對稱場景：倒影、建築中庭、隧道的盡頭——這些場景天然適合中央構圖，因為畫面本身就關於「對稱」，而對稱的中心就是最自然的焦點。直接對話感：人物直視鏡頭的肖像、動物直視的野生動物攝影——中央位置強化了這種「目光接觸」。孤立感：一個人在空曠環境中的孤獨感——中央位置會放大這種空曠與孤獨的對比。極簡主義：如果你追求極致的簡潔和秩序感，中央構圖是最純粹的表達方式。總結：如果你想讓觀眾覺得「他在看我」，用中央構圖；如果你想讓觀眾覺得「我在看他」，用偏離中心的構圖。",
          },
          {
            heading: "中心十字裁剪技巧",
            body: "切換到 CropImageArt 的 Center Cross 模式後，你會看到一條垂直線和一條水平線交叉於畫面正中央，交叉點有一個小圓標記。使用十字網格裁剪時：① 確保主體的視覺重心（不一定是幾何中心）與十字交叉點對齊——對於人物，通常是眼睛或面部中心；對於建築，是結構中心。② 水平線用於對齊地平線或背景中的任何水平參考——雖然水平線不一定要在中間，但當你選擇中央構圖時，讓水平線也居中通常會增強對稱感。③ 十字線的四個象限此時變成了構圖的「正負空間」——主體佔據中央交叉區域，四個象限作為留白空間。裁剪的核心在於找到那個讓四個象限「均勻」服務於主體的邊界。",
          },
        ],
        tips: [
          "主體需要「足夠強」才適合中央構圖",
          "對稱場景是中央構圖的天然搭檔",
          "人物直視鏡頭的肖像首選中央位置",
          "配合對稱網格使用效果翻倍",
        ],
        exampleImageCaption:
          "建築內部中庭——拱門頂端恰好落在畫面垂直中線上，水平中線穿過拱門的視覺重心，形成強有力的中心十字",
      },
    },
  },

  // ─── 7. Symmetry ──────────────────────────────────
  {
    slug: "symmetry",
    compositionType: "symmetry",
    publishedAt: "2026-08-09",
    readTime: { en: "8 min", "zh-CN": "8 分钟", "zh-TW": "8 分鐘" },
    exampleImage:
      "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&h=533&fit=crop&q=80",
    exampleImageCredit: {
      en: "Photo by Benjamin Child / Unsplash",
      "zh-CN": "Photo by Benjamin Child / Unsplash",
      "zh-TW": "Photo by Benjamin Child / Unsplash",
    },
    content: {
      en: {
        title: "Symmetry Composition: The Ultimate Expression of Visual Order",
        subtitle: "From 'The Grand Budapest Hotel' to architectural photography, why perfect symmetry captivates us",
        intro:
          "Wes Anderson's 'The Grand Budapest Hotel' is perhaps cinema's most fervent tribute to symmetrical composition — nearly every shot strictly adheres to a central axis of symmetry. Humanity's fascination with symmetry is rooted in evolutionary biology: symmetrical faces signal healthy genes; symmetrical environments signal order and safety. In photography, symmetrical composition is one of the most impactful — and most challenging — approaches. It's impactful because the human eye is irresistibly drawn to perfect symmetry; it's challenging because 'perfect symmetry' is rarely achievable in-camera and must be refined through cropping.",
        sections: [
          {
            heading: "Three Types of Symmetry",
            body: "Symmetrical composition isn't just 'left-right mirroring.' Three types of symmetry are used in photography: ① Reflective symmetry — the most common, where the frame mirrors left-right (or top-bottom) along an axis. Water reflections, building facades, and tunnels are classic reflective-symmetry scenes. This is what CropImageArt's Symmetry grid primarily serves. ② Rotational symmetry — the frame coincides with itself when rotated around a center point. Circular domes, spiral staircases, and overhead shots of round tables are rotational-symmetry examples. ③ Translational symmetry — patterns repeat horizontally or vertically. Fences, window arrays, and rows of books are translational symmetry. Understanding these three types helps you identify potential symmetrical structures in your photos when cropping.",
          },
          {
            heading: "Cropping 'Perfect Symmetry'",
            body: "Achieving 100% symmetry in-camera is nearly impossible — slight lens offset, hand shake, and the scene's own imperfections all break symmetry. This is exactly where cropping delivers value. When using CropImageArt's Symmetry grid (a bold vertical centerline + a horizontal reference line): ① First, identify the 'should-be-symmetrical' axis in your image — for architecture, it's usually the centerline of the main entrance; for reflections, the dividing line between water and real scene. ② Rotate the image so this axis becomes a true vertical line — even a 0.5-degree rotation dramatically improves the final symmetry. ③ Crop evenly along both sides of the vertical axis — make the pixel width identical on both sides. ④ Finally, check for 'visual symmetry' — sometimes mathematical symmetry doesn't equal visual symmetry. A photo with a red sign on the left and nothing on the right is visually unbalanced, even if geometrically perfect.",
          },
        ],
        tips: [
          "Architecture, reflections, and tunnels are natural symmetry scenes",
          "Micro-rotation (0.5–2 degrees) can perfect the symmetry",
          "Ensure identical pixel width on both sides of the axis",
          "Mathematical symmetry ≠ visual symmetry — watch color and brightness balance",
        ],
        exampleImageCaption:
          "Symmetrical corridor — left-right mirroring in its purest form; arches, columns, and light-shadow patterns are nearly identical on both sides of the central axis",
      },
      "zh-CN": {
        title: "对称构图：秩序之美的终极表达",
        subtitle: "从电影《布达佩斯大饭店》到建筑摄影，完美的对称为何让人沉醉",
        intro:
          "沃斯·安德森的《布达佩斯大饭店》几乎是电影摄影史上对对称构图最狂热的致敬——几乎每一个镜头都严格遵循画面中轴线的对称。人类对对称美的迷恋根植于进化生物学：对称的面孔意味着健康的基因，对称的环境意味着秩序和安全。在摄影中，对称构图是最有冲击力、也最具挑战性的构图方式——有冲击力是因为人眼天生会被完美的对称吸引，有挑战性是因为「完美的对称」在拍摄时往往无法完全实现，需要通过裁剪来精修。",
        sections: [
          {
            heading: "对称的三种类型",
            body: "对称构图不只是「左右镜像」。实际上有三种类型的对称在摄影中被使用：① 反射对称——最常见，画面左右（或上下）沿一条轴线镜像。水面倒影、建筑的正面、隧道都是经典的反射对称场景。这是 CropImageArt 中 Symmetry 网格主打的服务对象。② 旋转对称——画面围绕一个中心点旋转后与自身重合。圆形穹顶、螺旋楼梯、俯拍的圆桌是旋转对称的代表。③ 平移对称——图案在水平或垂直方向上重复。栅栏、窗户阵列、书的排列都是平移对称。理解这三种对称类型有助于你在裁剪时识别画面中的潜在对称结构。",
          },
          {
            heading: "裁剪出「完美对称」的技巧",
            body: "拍摄时几乎不可能做到 100% 对称——镜头轻微的偏移、手持的抖动、场景本身的不完美都会打破对称。这正是裁剪的价值所在。使用 CropImageArt 的 Symmetry 网格（一条加粗的垂直中线 + 一条水平参考线）进行裁剪时：① 首先找出画面中「应该对称」的轴线——对于建筑，通常是正门的中线；对于倒影，是水面与实景的分界线。② 旋转画面让这条轴线变成真正的垂直线——哪怕旋转 0.5 度，最终的对称效果都会有质的飞跃。③ 沿垂直线两侧平均裁剪——让中轴线两侧的像素宽度完全相等。④ 最后检查「视觉对称」——有时候数学对称不等于视觉对称。一张照片中左侧有一个红色标志而右侧没有，即使几何上完美对称，视觉上也是失衡的。",
          },
        ],
        tips: [
          "建筑、倒影、隧道是天然对称场景",
          "旋转微调（0.5-2 度）可以让对称更完美",
          "确保中轴线两侧宽度像素完全一致",
          "数学对称 ≠ 视觉对称，注意色彩和亮度平衡",
        ],
        exampleImageCaption:
          "对称走廊——左右完全镜像是反射对称的极致体现，中轴线两侧的拱门、柱子和光影几乎完全一致",
      },
      "zh-TW": {
        title: "對稱構圖：秩序之美的終極表達",
        subtitle: "從電影《歡迎來到布達佩斯大飯店》到建築攝影，完美的對稱為何讓人沉醉",
        intro:
          "魏斯·安德森的《歡迎來到布達佩斯大飯店》幾乎是電影攝影史上對對稱構圖最狂熱的致敬——幾乎每一個鏡頭都嚴格遵循畫面中軸線的對稱。人類對對稱美的迷戀根植於進化生物學：對稱的面孔意味著健康的基因，對稱的環境意味著秩序和安全。在攝影中，對稱構圖是最有衝擊力、也最具挑戰性的構圖方式——有衝擊力是因為人眼天生會被完美的對稱吸引，有挑戰性是因為「完美的對稱」在拍攝時往往無法完全實現，需要透過裁剪來精修。",
        sections: [
          {
            heading: "對稱的三種類型",
            body: "對稱構圖不只是「左右鏡像」。實際上有三種類型的對稱在攝影中被使用：① 反射對稱——最常見，畫面左右（或上下）沿一條軸線鏡像。水面倒影、建築的正面、隧道都是經典的反射對稱場景。這是 CropImageArt 中 Symmetry 網格主打的服務對象。② 旋轉對稱——畫面圍繞一個中心點旋轉後與自身重合。圓形穹頂、螺旋樓梯、俯拍的圓桌是旋轉對稱的代表。③ 平移對稱——圖案在水平或垂直方向上重複。柵欄、窗戶陣列、書的排列都是平移對稱。理解這三種對稱類型有助於你在裁剪時識別畫面中的潛在對稱結構。",
          },
          {
            heading: "裁剪出「完美對稱」的技巧",
            body: "拍攝時幾乎不可能做到 100% 對稱——鏡頭輕微的偏移、手持的抖動、場景本身的不完美都會打破對稱。這正是裁剪的價值所在。使用 CropImageArt 的 Symmetry 網格（一條加粗的垂直中線 + 一條水平參考線）進行裁剪時：① 首先找出畫面中「應該對稱」的軸線——對於建築，通常是正門的中線；對於倒影，是水面與實景的分界線。② 旋轉畫面讓這條軸線變成真正的垂直線——哪怕旋轉 0.5 度，最終的對稱效果都會有質的飛躍。③ 沿垂直線兩側平均裁剪——讓中軸線兩側的像素寬度完全相等。④ 最後檢查「視覺對稱」——有時候數學對稱不等於視覺對稱。一張照片中左側有一個紅色標誌而右側沒有，即使幾何上完美對稱，視覺上也是失衡的。",
          },
        ],
        tips: [
          "建築、倒影、隧道是天然對稱場景",
          "旋轉微調（0.5-2 度）可以讓對稱更完美",
          "確保中軸線兩側寬度像素完全一致",
          "數學對稱 ≠ 視覺對稱，注意色彩和亮度平衡",
        ],
        exampleImageCaption:
          "對稱走廊——左右完全鏡像是反射對稱的極致體現，中軸線兩側的拱門、柱子和光影幾乎完全一致",
      },
    },
  },

  // ─── 8. Leading Lines ─────────────────────────────
  {
    slug: "leading-lines",
    compositionType: "leading-lines",
    publishedAt: "2026-08-09",
    readTime: { en: "9 min", "zh-CN": "9 分钟", "zh-TW": "9 分鐘" },
    exampleImage:
      "https://images.unsplash.com/photo-1478860409698-8707f313ee8b?w=800&h=533&fit=crop&q=80",
    exampleImageCredit: {
      en: "Photo by Sergey Pesterev / Unsplash",
      "zh-CN": "Photo by Sergey Pesterev / Unsplash",
      "zh-TW": "Photo by Sergey Pesterev / Unsplash",
    },
    content: {
      en: {
        title: "Leading Lines Composition: The Main Thread of Visual Storytelling",
        subtitle: "How to use one or several lines to make viewers 'read' the story you want to tell",
        intro:
          "Leading lines are perhaps the most 'narrative' of all composition techniques. You're not just using lines to guide the viewer's gaze — you're guiding the order of their attention: what to look at first, what next, and where to rest. A good leading line is like the opening of a great article — it invites the audience into the frame and then takes them by the hand through the entire journey. In cropping, the value of leading lines is especially prominent: often, there's too much visual 'noise' in the original shot disrupting the line's effect, and cropping is the process of removing that noise.",
        sections: [
          {
            heading: "Seven Forms of Leading Lines",
            body: "Leading lines aren't just straight lines. They come in multiple forms: ① Straight lines — the most direct. Path edges, railings, building edges — you look where they point. ② Curved lines — S-curves and C-curves make the visual 'journey' more leisurely and elegant; the eye travels slower and observes more carefully. ③ Zigzag lines — Z-shaped or stepped leading lines create 'turns' and 'suspense,' ideal for scenes with multiple points of interest. ④ Implied lines — a person's gaze, a pointing finger, arrow signs — not real lines, but their guiding effect rivals physical ones. ⑤ Frame-within-frame — tree shadows, doorframes, and vignettes at the edges push the eye toward center. ⑥ Repeated elements — a series of repeating objects (lampposts, columns) form a 'dotted leading line.' ⑦ Contrast lines — using light-dark or color contrast to indicate direction. Understanding these forms helps you identify latent leading paths when cropping.",
          },
          {
            heading: "The 'Entry' and 'Exit' of Leading Lines",
            body: "A leading line's quality depends on two factors: the entry point and the destination. The entry point (where the line begins) should ideally be at a corner or edge of the frame — this makes the viewer feel the line 'pulled them into' the image. If the leading line starts at the center, it may lead the viewer's gaze right out of the frame. The destination (where the line points) should be somewhere with 'content' — a mountain peak, a person, a door. If the line leads to nothing, the viewer feels disappointed and deceived. When cropping, a common operation is trimming away distractions along the line's path — ensuring the route from entry to destination is 'clean.'",
          },
          {
            heading: "Practical Leading Lines Cropping",
            body: "Switch to Leading Lines mode in CropImageArt. You'll see guidelines from the corners pointing toward the center area. Cropping steps: ① Identify the most effective natural leading line in your photo. ② Adjust the crop frame so the line's starting point is near a corner or edge — this is the 'invitation to enter' signal. ③ Ensure the destination points to a meaningful element — you can shift the endpoint through cropping if needed. ④ Remove any distractions that break the leading line — even a single branch crossing it perpendicularly. ⑤ Use aspect ratio to reinforce the leading direction — landscape orientation (16:9) strengthens horizontal guidance; portrait orientation (9:16) strengthens vertical guidance.",
          },
        ],
        tips: [
          "Start at corners/edges = invitation to enter; start at center = leads out of frame",
          "The destination must have content or viewers will feel cheated",
          "Remove path distractions to keep the route clean",
          "Landscape crops strengthen horizontal lines; portrait crops strengthen vertical lines",
        ],
        exampleImageCaption:
          "Railway stretching into the distance — train tracks, among nature's most powerful leading lines, pull the gaze from the bottom-left corner all the way to the vanishing point in the distance",
      },
      "zh-CN": {
        title: "引导线构图：视觉叙事的主线路",
        subtitle: "如何用一条或几条线让观众「读到」你想讲的故事",
        intro:
          "引导线（Leading Lines）也许是所有构图技巧中最具有「叙事性」的一个。你不仅是在用线条引导观众的视线，更是在引导他们的注意力顺序——先看哪里，再看哪里，最终停留在哪里。一条好的引导线就像一篇好文章的开头——它邀请观众进入画面，然后牵着他们的手走完整个旅程。在裁剪中，引导线的价值尤其突出：很多时候，拍摄时画面中有太多「噪音」干扰了引导线的效果，裁剪就是去掉这些噪音的过程。",
        sections: [
          {
            heading: "引导线的七种基本形态",
            body: "引导线不只是一条直线。它可以有多种形态：① 直线引导 — 最直接，小路的边缘、栏杆、建筑边缘，指哪看哪。② 曲线引导 — S 形、C 形曲线让视线的「旅程」更悠长优雅，走得更慢、看得更仔细。③ 折线引导 — Z 形或阶梯形引导线制造「转折」和「悬念」，适合有多个趣点的画面。④ 隐含引导 — 人物眼神、手指指向、箭头标志——这些不是真实的线，但引导效果不亚于物理线条。⑤ 边缘引导 — 画面边缘的树影、门框、暗角把视线推向中央。⑥ 重复引导 — 一系列重复的元素（路灯杆、柱子）形成一条「虚线引导」。⑦ 对比引导 — 利用明暗或色彩对比来指出方向。理解这些形态有助于你在裁剪时识别潜在的引导路径。",
          },
          {
            heading: "引导线的「入口」与「出口」",
            body: "一条引导线的质量取决于两个因素：进入点和终点。进入点（引导线开始的地方）通常应该在画面的角落或边缘——这样观众会感觉是「线把他们拉进画面的」。如果引导线的起点在画面中央，它可能会把观众的视线引到画外面去。终点（引导线指向的地方）应该是一个有「内容」的位置——一个山峰、一个人物、一扇门。如果引导线的终点什么都没有，观众会感到失望和被欺骗。在裁剪时，一个常见的操作是裁掉引导线路径上的干扰物——确保从进入点到终点之间的路径是「干净的」。",
          },
          {
            heading: "引导线裁剪实操",
            body: "在 CropImageArt 中切换到 Leading Lines 模式。你会看到从角落指向画面中心区域的引导线。裁剪步骤：① 识别照片中最有效的自然引导线。② 调整裁剪框让引导线的起点接近角落或边缘——这是「邀请进入」的信号。③ 确保终点指向一个有意义的元素——如果需要，可以通过裁剪来「移动」终点位置。④ 移除打断引导线的干扰元素——哪怕是一根与引导线交叉的树枝。⑤ 利用裁剪比例来强化引导方向——横构图（16:9）加强横向引导，竖构图（9:16）加强纵向引导。",
          },
        ],
        tips: [
          "起点在角落/边缘 = 邀请进入；起点在中央 = 送出画面",
          "终点必须有内容，否则观众会失望",
          "移除路径上的干扰物，保持线路干净",
          "横构图加强横向引导，竖构图加强纵向引导",
        ],
        exampleImageCaption:
          "铁路延伸到远方——铁轨作为自然界最强的引导线之一，从画面左下角一路将视线拉向远方的消失点",
      },
      "zh-TW": {
        title: "引導線構圖：視覺敘事的主線路",
        subtitle: "如何用一條或幾條線讓觀眾「讀到」你想講的故事",
        intro:
          "引導線（Leading Lines）也許是所有構圖技巧中最具有「敘事性」的一個。你不僅是在用線條引導觀眾的視線，更是在引導他們的注意力順序——先看哪裡，再看哪裡，最終停留在哪裡。一條好的引導線就像一篇好文章的開頭——它邀請觀眾進入畫面，然後牽著他們的手走完整個旅程。在裁剪中，引導線的價值尤其突出：很多時候，拍攝時畫面中有太多「噪音」干擾了引導線的效果，裁剪就是去掉這些噪音的過程。",
        sections: [
          {
            heading: "引導線的七種基本形態",
            body: "引導線不只是一條直線。它可以有多種形態：① 直線引導 — 最直接，小路的邊緣、欄杆、建築邊緣，指哪看哪。② 曲線引導 — S 形、C 形曲線讓視線的「旅程」更悠長優雅，走得更慢、看得更仔細。③ 折線引導 — Z 形或階梯形引導線製造「轉折」和「懸念」，適合有多個趣點的畫面。④ 隱含引導 — 人物眼神、手指指向、箭頭標誌——這些不是真實的線，但引導效果不亞於物理線條。⑤ 邊緣引導 — 畫面邊緣的樹影、門框、暗角把視線推向中央。⑥ 重複引導 — 一系列重複的元素（路燈桿、柱子）形成一條「虛線引導」。⑦ 對比引導 — 利用明暗或色彩對比來指出方向。理解這些形態有助於你在裁剪時識別潛在的引導路徑。",
          },
          {
            heading: "引導線的「入口」與「出口」",
            body: "一條引導線的品質取決於兩個因素：進入點和終點。進入點（引導線開始的地方）通常應該在畫面的角落或邊緣——這樣觀眾會感覺是「線把他們拉進畫面的」。如果引導線的起點在畫面中央，它可能會把觀眾的視線引到畫外面去。終點（引導線指向的地方）應該是一個有「內容」的位置——一個山峰、一個人物、一扇門。如果引導線的終點什麼都沒有，觀眾會感到失望和被欺騙。在裁剪時，一個常見的操作是裁掉引導線路徑上的干擾物——確保從進入點到終點之間的路径是「乾淨的」。",
          },
          {
            heading: "引導線裁剪實操",
            body: "在 CropImageArt 中切換到 Leading Lines 模式。你會看到從角落指向畫面中心區域的引導線。裁剪步驟：① 識別照片中最有效的自然引導線。② 調整裁剪框讓引導線的起點接近角落或邊緣——這是「邀請進入」的信號。③ 確保終點指向一個有意義的元素——如果需要，可以透過裁剪來「移動」終點位置。④ 移除打斷引導線的干擾元素——哪怕是一根與引導線交叉的樹枝。⑤ 利用裁剪比例來強化引導方向——橫構圖（16:9）加強橫向引導，豎構圖（9:16）加強縱向引導。",
          },
        ],
        tips: [
          "起點在角落/邊緣 = 邀請進入；起點在中央 = 送出畫面",
          "終點必須有內容，否則觀眾會失望",
          "移除路徑上的干擾物，保持線路乾淨",
          "橫構圖加強橫向引導，豎構圖加強縱向引導",
        ],
        exampleImageCaption:
          "鐵路延伸到遠方——鐵軌作為自然界最強的引導線之一，從畫面左下角一路將視線拉向遠方的消失點",
      },
    },
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}
