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
}

export interface BlogPost {
  slug: string;
  compositionType: CompositionType;
  publishedAt: string;
  readTime: Partial<Record<LangCode, string>>;
  content: Partial<Record<LangCode, BlogPostContent>>;
}

export const blogPosts: BlogPost[] = [
  // ─── 1. Rule of Thirds ──────────────────────────────
  {
    slug: "rule-of-thirds",
    compositionType: "thirds",
    publishedAt: "2026-08-09",
    readTime: { en: "8 min", "zh-CN": "8 分钟", "zh-TW": "8 分鐘", ja: "8 分", ko: "8분", es: "8 min", fr: "8 min", de: "8 Min.", pt: "8 min" },
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
      },
      ja: {
        title: "三分割法 完全ガイド",
        subtitle: "写真とトリミングにおける最も基本的な構図ルール — そして最も普遍的に使われる黄金基準",
        intro:
          "写真やデザインの初心者なら、最初に聞く構図のアドバイスはおそらく「三分割法を使え」でしょう。このシンプルなルール — フレームを2本の水平線と2本の垂直線で9等分し、被写体を交点に置く — は、ほぼすべてのカメラと編集アプリのデフォルト設定に組み込まれています。しかし三分割法は「交点にものを置く」以上の深い意味を持っています。この記事では、グリッドの背後にある心理学、古典的な起源、そして現代のSNS戦術までを徹底解説します。",
        sections: [
          {
            heading: "三分割法の視覚心理学",
            body: "人間の視覚システムは構造を求めるようにできています。絵画や写真を見るとき、目は自動的に「興味点」をスキャンします。研究によると、視線は自然に中央に留まらず、端から約3分の1の位置により長く留まります。中央配置は静的で予測可能に感じられますが、中心から外れた要素は動的緊張を生み出し、視線を被写体とフレームの端の間で移動させます。三分割法はこれを活用しています。ルネサンスの画家レオナルド・ダ・ヴィンチやラファエロも同様の比例グリッドを既に使用していました。",
          },
          {
            heading: "4本の線が実際に制御するもの",
            body: "2本の水平線にはそれぞれ異なる役割があります。下3分の1線は「地面」「地平線」「卓上」の参照に適し、上3分の1線は「空」「天井」や余白に適しています。垂直線は被写体の水平位置を制御します — 左または右3分の1は人物ポートレートの定番です。現代のInstagram写真家の重要な戦術：絶対に地平線を中央に置かないこと（完璧な反射対称の場合を除く）。地平線を上または下3分の1に置くことで、空や地面が「物語の空間」になります。",
          },
          {
            heading: "実践的な三分割トリミング",
            body: "CropImageArtで三分割グリッドを有効にすると、4本の線と4つの交点が表示されます。最も効果的なトリミング戦略：まず写真の「主役」を特定します — 人物、建物、木など。次にその主役を4つの交点のいずれかに移動させます。ポートレートでは被写体の目を上の交点に合わせます。風景では最も魅力的な要素を交点に配置します。次に地平線を調整し、水平線のいずれかに合わせます。空が劇的な場合は下3分の1線を使い、前景が豊かな場合は地平線を上3分の1に合わせます。最後に、被写体が向いている方向に余白を残します — 左を向いている人物は右の交点に配置します。",
          },
        ],
        tips: [
          "ポートレート：被写体の目を上部の2つの交点のいずれかに配置",
          "風景：地平線を上または下3分の1に — 中央には絶対に置かない",
          "ストリート写真：視覚的アンカーを交点に配置",
          "SNS：Instagram 4:5比率 + 三分割法 = 最強の組み合わせ",
        ],
      },
      ko: {
        title: "삼분할법 완벽 가이드",
        subtitle: "사진과 크롭에서 가장 기본적인 구도 법칙 — 가장 보편적으로 적용되는 황금 기준",
        intro:
          "사진이나 디자인 초보자라면 처음 듣는 구도 조언은 '삼분할법을 사용하세요'일 것입니다. 프레임을 가로 2개, 세로 2개 선으로 9등분하고 피사체를 교차점에 배치하는 이 단순한 규칙은 거의 모든 카메라와 편집 앱의 기본 설정에 포함되어 있습니다. 하지만 삼분할법은 '교차점에 무언가를 놓는 것' 이상의 깊은 의미를 가지고 있습니다. 이 글에서는 그리드의 심리학, 고전적 뿌리, 현대 SNS 전술까지 분석합니다.",
        sections: [
          {
            heading: "삼분할법의 시각 심리학",
            body: "인간의 시각 시스템은 구조를 찾도록 설계되어 있습니다. 그림이나 사진을 볼 때 눈은 자동으로 '관심 지점'을 스캔합니다. 연구에 따르면 시선은 자연스럽게 중앙에 머물지 않고 가장자리에서 약 1/3 지점에 더 오래 머뭅니다. 중앙 배치는 정적이고 예측 가능하게 느껴지지만, 중심에서 벗어난 요소는 동적 긴장을 만들어내며 시선을 피사체와 프레임 가장자리 사이에서 움직이게 합니다. 삼분할법은 이를 활용합니다. 르네상스 화가 레오나르도 다빈치와 라파엘로도 이미 유사한 비례 그리드를 사용하고 있었습니다.",
          },
          {
            heading: "4개의 선이 실제로 제어하는 것",
            body: "두 개의 가로선은 각각 다른 역할을 합니다. 아래 1/3선은 '지면', '수평선', '테이블 상단'에 적합하고, 위 1/3선은 '하늘', '천장', 여백에 적합합니다. 세로선은 피사체의 수평 위치를 제어합니다 — 왼쪽이나 오른쪽 1/3은 인물 사진의 클래식한 위치입니다. 현대 Instagram 사진가의 중요한 전술: 절대 수평선을 중앙에 두지 마세요(완벽한 반사 대칭인 경우 제외). 수평선을 위나 아래 1/3에 배치하면 하늘이나 지면이 '이야기 공간'이 됩니다.",
          },
          {
            heading: "실전 삼분할 크롭 가이드",
            body: "CropImageArt에서 삼분할 그리드를 활성화하면 4개의 선과 4개의 교차점이 보입니다. 가장 효과적인 크롭 전략: 먼저 사진의 '주인공'을 식별하세요 — 사람, 건물, 나무 등. 그런 다음 주인공을 4개의 교차점 중 하나로 이동시킵니다. 인물 사진은 눈을 위쪽 교차점에 맞춥니다. 풍경은 가장 매력적인 요소를 교차점에 배치합니다. 다음으로 수평선을 조정하여 가로선 중 하나에 맞춥니다. 하늘이 드라마틱하다면 아래 1/3선을 사용하고, 전경이 풍부하다면 위 1/3선에 맞춥니다. 마지막으로 피사체가 향하는 방향에 여백을 남깁니다 — 왼쪽을 바라보는 사람은 오른쪽 교차점에 배치합니다.",
          },
        ],
        tips: [
          "인물 사진: 눈을 위쪽 두 교차점 중 하나에 배치",
          "풍경: 수평선을 위나 아래 1/3에 — 절대 중앙에 두지 마세요",
          "스트리트 사진: 시각적 앵커를 교차점에 배치",
          "SNS: Instagram 4:5 비율 + 삼분할법 = 최고의 조합",
        ],
      },
      es: {
        title: "Guía Completa de la Regla de los Tercios",
        subtitle: "La regla de composición más fundamental en fotografía y recorte — y el estándar dorado más universalmente aplicado",
        intro:
          "Si eres nuevo en fotografía o diseño, el primer consejo de composición que escucharás probablemente sea 'usa la regla de los tercios'. Esta simple regla — divide el encuadre en nueve partes iguales con dos líneas horizontales y dos verticales, luego coloca el sujeto en las intersecciones — está integrada en los ajustes predeterminados de casi todas las cámaras y aplicaciones de edición. Pero la regla de los tercios va mucho más allá de 'poner cosas en las intersecciones'. Este artículo analiza la psicología, las raíces clásicas y las tácticas modernas para redes sociales detrás de la cuadrícula.",
        sections: [
          {
            heading: "La Psicología Visual Detrás de la Regla de los Tercios",
            body: "El sistema visual humano está programado para buscar estructura. Al mirar una pintura o fotografía, nuestros ojos escanean automáticamente en busca de 'puntos de interés'. Los estudios muestran que la mirada no se detiene naturalmente en el centro — permanece más tiempo en posiciones a aproximadamente un tercio de los bordes. La colocación central se siente estática y predecible; los elementos descentrados crean tensión dinámica, haciendo que la mirada viaje entre el sujeto y los bordes del encuadre. La regla de los tercios explota esto. Pintores del Renacimiento como Leonardo da Vinci y Rafael ya usaban cuadrículas proporcionales similares.",
          },
          {
            heading: "Lo Que Realmente Controlan las Cuatro Líneas",
            body: "Las dos horizontales tienen roles distintos: la línea del tercio inferior funciona bien para referencias de 'suelo', 'horizonte' o 'mesa'; la línea del tercio superior se adapta a 'cielo', 'techo' o espacio negativo. Las verticales gobiernan la ubicación horizontal del sujeto — el tercio izquierdo o derecho es territorio clásico del retrato. Una táctica clave de los fotógrafos actuales de Instagram: nunca coloques el horizonte en el centro (a menos que sea una simetría de reflejo perfecta). Colocar el horizonte en el tercio superior o inferior convierte el cielo o el suelo en 'espacio narrativo'.",
          },
          {
            heading: "Recorte Práctico con la Regla de los Tercios",
            body: "Cuando activas la cuadrícula de tercios en CropImageArt, ves cuatro líneas y cuatro intersecciones. La estrategia de recorte más efectiva: primero, identifica al 'héroe' de tu foto — una persona, un edificio, un árbol. Luego intenta mover ese héroe a una de las cuatro intersecciones. Para retratos, alinea los ojos del sujeto con una intersección superior. Para paisajes, coloca el elemento más atractivo en una intersección. Luego, ajusta el horizonte para alinearlo con una de las líneas horizontales. Si el cielo es dramático, usa la línea del tercio inferior para darle más espacio al cielo. Si el primer plano es más rico, alinea el horizonte con el tercio superior. Finalmente, deja espacio en la dirección hacia la que mira el sujeto.",
          },
        ],
        tips: [
          "Retratos: Coloca los ojos del sujeto en una de las dos intersecciones superiores",
          "Paisajes: Alinea el horizonte con el tercio superior o inferior — nunca el centro",
          "Fotografía callejera: Coloca anclas visuales en las intersecciones",
          "Redes sociales: Proporción Instagram 4:5 + regla de tercios = combinación imbatible",
        ],
      },
      fr: {
        title: "Guide Complet de la Règle des Tiers",
        subtitle: "La règle de composition la plus fondamentale en photographie et en recadrage — et le standard doré le plus universellement appliqué",
        intro:
          "Si vous débutez en photographie ou en design, le premier conseil de composition que vous entendrez sera probablement 'utilisez la règle des tiers'. Cette règle simple — divisez le cadre en neuf parties égales avec deux lignes horizontales et deux verticales, puis placez le sujet aux intersections — est intégrée dans les paramètres par défaut de presque tous les appareils photo et applications d'édition. Mais la règle des tiers va bien au-delà de 'mettre des choses aux intersections'. Cet article explore la psychologie, les racines classiques et les tactiques modernes pour les réseaux sociaux derrière cette grille.",
        sections: [
          {
            heading: "La Psychologie Visuelle Derrière la Règle des Tiers",
            body: "Le système visuel humain est programmé pour chercher une structure. En regardant une peinture ou une photographie, nos yeux scannent automatiquement les 'points d'intérêt'. Les recherches montrent que le regard ne s'arrête pas naturellement au centre — il s'attarde plus longtemps aux positions situées à environ un tiers des bords. Le placement central semble statique et prévisible ; les éléments décentrés créent une tension dynamique, faisant voyager le regard entre le sujet et les bords du cadre. La règle des tiers exploite cela. Les peintres de la Renaissance comme Léonard de Vinci et Raphaël utilisaient déjà des grilles proportionnelles similaires.",
          },
          {
            heading: "Ce Que Contrôlent Réellement les Quatre Lignes",
            body: "Les deux horizontales ont chacune des rôles distincts : la ligne du tiers inférieur fonctionne bien pour les références au 'sol', 'horizon' ou 'table' ; la ligne du tiers supérieur convient au 'ciel', 'plafond' ou espace négatif. Les verticales gouvernent le placement horizontal du sujet — le tiers gauche ou droit est le territoire classique du portrait. Une tactique clé des photographes Instagram d'aujourd'hui : ne placez jamais l'horizon au centre (sauf symétrie de réflexion parfaite). Placer l'horizon au tiers supérieur ou inférieur transforme le ciel ou le sol en 'espace narratif'.",
          },
          {
            heading: "Recadrage Pratique avec la Règle des Tiers",
            body: "Lorsque vous activez la grille des tiers dans CropImageArt, vous voyez quatre lignes et quatre intersections. La stratégie de recadrage la plus efficace : d'abord, identifiez le 'héros' de votre photo — une personne, un bâtiment, un arbre. Ensuite, essayez de déplacer ce héros vers l'une des quatre intersections. Pour les portraits, alignez les yeux du sujet sur une intersection supérieure. Pour les paysages, placez l'élément le plus captivant sur une intersection. Ensuite, ajustez l'horizon pour l'aligner sur l'une des lignes horizontales. Si le ciel est spectaculaire, utilisez la ligne du tiers inférieur pour donner plus d'espace au ciel. Si le premier plan est plus riche, alignez l'horizon sur le tiers supérieur. Enfin, laissez de l'espace dans la direction où le sujet regarde.",
          },
        ],
        tips: [
          "Portraits : Placez les yeux du sujet sur l'une des deux intersections supérieures",
          "Paysages : Alignez l'horizon sur le tiers supérieur ou inférieur — jamais au centre",
          "Photo de rue : Placez les ancres visuelles aux intersections",
          "Réseaux sociaux : Ratio Instagram 4:5 + règle des tiers = combo imbattable",
        ],
      },
      de: {
        title: "Vollständiger Leitfaden zur Drittelregel",
        subtitle: "Die grundlegendste Kompositionsregel in Fotografie und Zuschnitt — und der universellste goldene Standard",
        intro:
          "Wenn Sie neu in der Fotografie oder im Design sind, lautet der erste Kompositionstipp wahrscheinlich 'verwende die Drittelregel'. Diese einfache Regel — teile den Rahmen mit zwei horizontalen und zwei vertikalen Linien in neun gleiche Teile und platziere das Motiv an den Schnittpunkten — ist in fast jeder Kamera- und Bearbeitungs-App standardmäßig integriert. Aber die Drittelregel geht weit über 'Dinge an Schnittpunkte setzen' hinaus. Dieser Artikel beleuchtet die Psychologie, die klassischen Wurzeln und die modernen Social-Media-Taktiken hinter dem Raster.",
        sections: [
          {
            heading: "Die Visuelle Psychologie der Drittelregel",
            body: "Das menschliche visuelle System ist darauf programmiert, Struktur zu suchen. Beim Betrachten eines Gemäldes oder Fotos scannen unsere Augen automatisch nach 'Interessenspunkten'. Forschungen zeigen, dass der Blick nicht natürlich im Zentrum verweilt — er bleibt länger an Positionen etwa ein Drittel von den Rändern entfernt. Zentrale Platzierung wirkt statisch und vorhersehbar; dezentrierte Elemente erzeugen dynamische Spannung und lassen den Blick zwischen Motiv und Rahmenkante wandern. Die Drittelregel nutzt dies aus. Renaissance-Maler wie Leonardo da Vinci und Raffael verwendeten bereits ähnliche proportionale Raster.",
          },
          {
            heading: "Was die Vier Linien Tatsächlich Steuern",
            body: "Die beiden Horizontalen haben unterschiedliche Rollen: die untere Drittellinie eignet sich für 'Boden', 'Horizont' oder 'Tischplatte'; die obere Drittellinie passt zu 'Himmel', 'Decke' oder negativem Raum. Die Vertikalen bestimmen die horizontale Platzierung des Motivs — das linke oder rechte Drittel ist klassisches Porträt-Territorium. Eine wichtige Taktik heutiger Instagram-Fotografen: Setzen Sie den Horizont niemals in die Mitte (außer bei perfekter Spiegelsymmetrie). Den Horizont im oberen oder unteren Drittel zu platzieren, macht Himmel oder Boden zum 'narrativen Raum'.",
          },
          {
            heading: "Praktisches Zuschneiden mit der Drittelregel",
            body: "Wenn Sie das Drittelraster in CropImageArt aktivieren, sehen Sie vier Linien und vier Schnittpunkte. Die effektivste Zuschneidestrategie: Identifizieren Sie zunächst den 'Helden' Ihres Fotos — eine Person, ein Gebäude, einen Baum. Versuchen Sie dann, diesen Helden zu einem der vier Schnittpunkte zu bewegen. Bei Porträts richten Sie die Augen des Motivs auf einen oberen Schnittpunkt aus. Bei Landschaften platzieren Sie das faszinierendste Element an einem Schnittpunkt. Passen Sie dann den Horizont an eine der horizontalen Linien an. Wenn der Himmel dramatisch ist, nutzen Sie die untere Drittellinie. Wenn der Vordergrund reicher ist, richten Sie den Horizont am oberen Drittel aus. Lassen Sie schließlich Raum in der Blickrichtung des Motivs.",
          },
        ],
        tips: [
          "Porträts: Platzieren Sie die Augen des Motivs an einem der beiden oberen Schnittpunkte",
          "Landschaften: Richten Sie den Horizont am oberen oder unteren Drittel aus — nie in der Mitte",
          "Straßenfotografie: Setzen Sie visuelle Anker an Schnittpunkte",
          "Social Media: Instagram 4:5-Verhältnis + Drittelregel = unschlagbare Kombination",
        ],
      },
      pt: {
        title: "Guia Completo da Regra dos Terços",
        subtitle: "A regra de composição mais fundamental na fotografia e no recorte — e o padrão dourado mais universalmente aplicado",
        intro:
          "Se você é novo em fotografia ou design, o primeiro conselho de composição que provavelmente ouvirá é 'use a regra dos terços'. Esta regra simples — divida o quadro em nove partes iguais com duas linhas horizontais e duas verticais, depois coloque o assunto nas interseções — está integrada nas configurações padrão de quase todas as câmeras e aplicativos de edição. Mas a regra dos terços vai muito além de 'colocar coisas nas interseções'. Este artigo explora a psicologia, as raízes clássicas e as táticas modernas para redes sociais por trás da grade.",
        sections: [
          {
            heading: "A Psicologia Visual por Trás da Regra dos Terços",
            body: "O sistema visual humano é programado para buscar estrutura. Ao olhar para uma pintura ou fotografia, nossos olhos escaneiam automaticamente em busca de 'pontos de interesse'. Pesquisas mostram que o olhar não repousa naturalmente no centro — permanece mais tempo em posições a cerca de um terço das bordas. A colocação central parece estática e previsível; elementos descentrados criam tensão dinâmica, fazendo o olhar viajar entre o assunto e as bordas do quadro. A regra dos terços explora isso. Pintores renascentistas como Leonardo da Vinci e Rafael já usavam grades proporcionais semelhantes.",
          },
          {
            heading: "O Que as Quatro Linhas Realmente Controlam",
            body: "As duas horizontais têm papéis distintos: a linha do terço inferior funciona bem para referências de 'chão', 'horizonte' ou 'mesa'; a linha do terço superior se adapta a 'céu', 'teto' ou espaço negativo. As verticais governam a colocação horizontal do assunto — o terço esquerdo ou direito é território clássico do retrato. Uma tática chave dos fotógrafos atuais do Instagram: nunca coloque o horizonte no centro (a menos que seja simetria de reflexo perfeita). Colocar o horizonte no terço superior ou inferior transforma o céu ou o chão em 'espaço narrativo'.",
          },
          {
            heading: "Recorte Prático com a Regra dos Terços",
            body: "Quando você ativa a grade de terços no CropImageArt, vê quatro linhas e quatro interseções. A estratégia de recorte mais eficaz: primeiro, identifique o 'herói' da sua foto — uma pessoa, um prédio, uma árvore. Depois tente mover esse herói para uma das quatro interseções. Para retratos, alinhe os olhos do sujeito a uma interseção superior. Para paisagens, coloque o elemento mais atraente em uma interseção. Em seguida, ajuste o horizonte para alinhá-lo com uma das linhas horizontais. Se o céu for dramático, use a linha do terço inferior. Se o primeiro plano for mais rico, alinhe o horizonte ao terço superior. Por fim, deixe espaço na direção para onde o sujeito está olhando.",
          },
        ],
        tips: [
          "Retratos: Coloque os olhos do sujeito em uma das duas interseções superiores",
          "Paisagens: Alinhe o horizonte com o terço superior ou inferior — nunca o centro",
          "Fotografia de rua: Coloque âncoras visuais nas interseções",
          "Redes sociais: Proporção Instagram 4:5 + regra dos terços = combinação imbatível",
        ],
      },
    },
  },

  // ─── 2. Golden Ratio ──────────────────────────────
  {
    slug: "golden-ratio",
    compositionType: "golden-ratio",
    publishedAt: "2026-08-09",
    readTime: { en: "9 min", "zh-CN": "9 分钟", "zh-TW": "9 分鐘", ja: "9 分", ko: "9분", es: "9 min", fr: "9 min", de: "9 Min.", pt: "9 min" },
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
      },
      ja: {
        title: "黄金比構図：1.618の魔法",
        subtitle: "パルテノン神殿から現代写真まで、この神秘的な数字が人間の美学を形作る仕組み",
        intro:
          "φ（ファイ）= 1.6180339887… は人類史上最も神話化された数字かもしれません。「黄金比」「神聖比例」として知られ、ダ・ヴィンチの『ウィトルウィウス的人体図』、ル・コルビュジエのモデュロール、貝殻の螺旋、銀河の渦巻き腕に現れます。写真構図において、黄金比グリッドは三分割法の「アップグレード版」— より洗練された数学的関係が微妙な視覚バランスを生み出します。",
        sections: [
          {
            heading: "数学と直感",
            body: "黄金比の数学的定義はシンプルです：線分を a と b に分割し、a/b = (a+b)/a となる場合、その比率は φ ≈ 1.618 です。抽象的ですが、視覚的には「不均等でありながら均衡のとれた」関係を作り出します。三分割法は 1:1:1 で分割しますが、黄金比は約 1:1.618:1 — 中央のゾーンが両側より大きくなります。この非対称性は自然界で最も一般的な分布パターンです。木の枝分かれ、花びらの配列、人体のプロポーションはすべて φ に近似します。フレームに適用すると、結果として得られる分割線は「ちょうど良い」感覚をもたらします。",
          },
          {
            heading: "黄金比 vs 三分割法：使い分け",
            body: "三分割法は迅速な判断に優れ、黄金比は慎重な洗練に報います。中核的な違い：三分割法は均等に分割し（33/33/33）、黄金比は不均等に分割します（約 38/62）。つまり、黄金比グリッドは視線をより決定的に一方の側に引き寄せ、より大きな「被写体ゾーン」とより小さな「余白ゾーン」を作ります。被写体がすでに大きく目立つ場合、黄金比が三分割法を上回ることが多いです。要素が散在している場合は、三分割法の均等分割がより適しているでしょう。",
          },
          {
            heading: "実践的な黄金比トリミング",
            body: "CropImageArt で黄金比グリッドに切り替えると、等間隔ではない2組の垂直分割線と2組の水平分割線が表示されます。トリミングの核心的アプローチ：フレーム内で最も「重い」視覚要素を見つけ、それを広いゾーンに配置し、狭いゾーンをネガティブスペースとして確保します。例えば、左に人物、右に空白がある写真では、垂直線を人物の端に合わせ、被写体に幅の62%を占めさせます。水平方向：前景が魅力的なら地平線を高く（前景が62%）、空が主役なら地平線を低く（空が62%）。4つの交点の視覚的重みも異なり、通常は左上の交点が最も注目を集めます。",
          },
        ],
        tips: [
          "被写体が目立つ場合は黄金比、要素が散在している場合は三分割法",
          "左上の黄金分割点が最も高い視覚的重みを持つ",
          "風景では、より魅力的な部分にフレームの62%を割り当てる",
          "黄金螺旋と組み合わせるとさらに効果的",
        ],
      },
      ko: {
        title: "황금비율 구도: 1.618의 마법",
        subtitle: "파르테논 신전부터 현대 사진까지, 이 신비로운 숫자가 인간의 미학을 형성하는 방식",
        intro:
          "φ(파이) = 1.6180339887…는 인류 역사상 가장 신화화된 숫자일 것입니다. '황금비율' 또는 '신성한 비율'로 알려진 이 숫자는 다빈치의 '비트루비우스적 인간', 르 코르뷔지에의 모듈로, 조개껍질의 나선, 은하의 나선팔에 나타납니다. 사진 구도에서 황금비율 그리드는 삼분할법의 '업그레이드' — 더 정교한 수학적 관계가 더 미묘한 시각적 균형을 만들어냅니다.",
        sections: [
          {
            heading: "수학과 직관",
            body: "황금비율의 수학적 정의는 간단합니다: 선분을 a와 b로 나누고 a/b = (a+b)/a가 성립하면 그 비율은 φ ≈ 1.618입니다. 추상적으로 들리지만 시각적으로는 '불균등하지만 균형 잡힌' 관계를 만듭니다. 삼분할법은 1:1:1로 나누지만, 황금비율은 약 1:1.618:1로 나눕니다 — 중앙 영역이 양쪽보다 큽니다. 이 비대칭성은 나뭇가지, 꽃잎 배열, 인체 비율 모두 φ에 근사하는 자연의 가장 일반적인 분포 패턴입니다.",
          },
          {
            heading: "황금비율 vs 삼분할법: 언제 무엇을 사용할까",
            body: "삼분할법은 빠른 결정에 탁월하고, 황금비율은 신중한 다듬기에 보답합니다. 핵심 차이: 삼분할법은 균등하게 나누고(33/33/33), 황금비율은 불균등하게 나눕니다(약 38/62). 이는 황금비율 그리드가 시선을 더 결정적으로 한쪽으로 끌어당겨 더 큰 '피사체 영역'과 더 작은 '여백 영역'을 만든다는 뜻입니다. 피사체가 이미 크고 두드러진 경우 황금비율이 삼분할법을 능가하는 경우가 많습니다. 요소가 흩어져 있다면 삼분할법이 더 적합할 수 있습니다.",
          },
          {
            heading: "실전 황금비율 크롭",
            body: "CropImageArt에서 황금비율 그리드로 전환하면 등간격이 아닌 두 세트의 수직 분할선과 두 세트의 수평 분할선이 표시됩니다. 핵심 크롭 접근법: 프레임에서 가장 무거운 시각적 요소를 찾아 넓은 영역에 배치하고 좁은 영역은 여백으로 남깁니다. 예를 들어 왼쪽에 인물이 있고 오른쪽이 비어 있는 사진에서는 수직선을 인물의 가장자리에 맞춰 피사체가 너비의 62%를 차지하게 합니다. 수평: 전경이 매력적이면 지평선을 더 높게(전경이 62%), 하늘이 주인공이면 지평선을 더 낮게(하늘이 62%).",
          },
        ],
        tips: [
          "피사체가 두드러지면 황금비율, 요소가 분산되어 있으면 삼분할법",
          "좌상단 황금분할점이 가장 높은 시각적 무게를 가짐",
          "풍경에서는 더 매력적인 부분이 프레임의 62%를 차지하도록",
          "황금나선과 함께 사용하면 더욱 강력한 결과",
        ],
      },
      es: {
        title: "Composición de Proporción Áurea: La Magia del 1.618",
        subtitle: "Del Partenón a la fotografía moderna, cómo este número misterioso moldea la estética humana",
        intro:
          "φ (phi) = 1.6180339887… puede ser el número más mitificado de la historia. Conocido como 'proporción áurea' o 'proporción divina', aparece en el 'Hombre de Vitruvio' de Da Vinci, el Modulor de Le Corbusier, las espirales de las conchas y los brazos de las galaxias. En composición fotográfica, la cuadrícula de proporción áurea es una 'mejora' de la regla de los tercios.",
        sections: [
          {
            heading: "Matemáticas e Intuición",
            body: "La definición matemática es simple: si un segmento se divide en partes a y b tales que a/b = (a+b)/a, la razón es φ ≈ 1.618. Suena abstracto, pero visualmente crea una relación 'desigual pero equilibrada'. Los tercios dividen en 1:1:1; la proporción áurea divide aproximadamente en 1:1.618:1 — la zona central es mayor que los lados. Esta asimetría es el patrón de distribución más común de la naturaleza: ramas de árboles, disposición de pétalos, proporciones del cuerpo humano.",
          },
          {
            heading: "Proporción Áurea vs. Tercios: Cuándo Usar Cuál",
            body: "Los tercios destacan en decisiones rápidas; la proporción áurea recompensa el refinamiento cuidadoso. Los tercios dividen uniformemente (33/33/33), la proporción áurea no (aproximadamente 38/62). Esto significa que la cuadrícula áurea atrae la mirada más decisivamente hacia un lado, creando una 'zona de sujeto' más grande y una 'zona de respiración' más pequeña. Si el sujeto ya es grande y prominente, la proporción áurea suele superar a los tercios.",
          },
          {
            heading: "Recorte Práctico con Proporción Áurea",
            body: "Al cambiar a la cuadrícula de Proporción Áurea en CropImageArt, verás dos conjuntos de divisiones verticales y horizontales no equidistantes. Enfoque principal: encuentra el elemento más pesado del encuadre y colócalo en la zona más amplia, reservando la zona estrecha como espacio negativo. Horizontalmente: si el primer plano es convincente, empuja el horizonte hacia arriba (primer plano al 62%); si el cielo es la estrella, empuja el horizonte hacia abajo (cielo al 62%).",
          },
        ],
        tips: [
          "Usa proporción áurea con sujetos prominentes; tercios con elementos dispersos",
          "La intersección áurea superior izquierda tiene el mayor peso visual",
          "En paisajes, deja que la porción más atractiva ocupe el 62%",
          "Combínala con la espiral áurea para resultados aún mejores",
        ],
      },
      fr: {
        title: "Composition en Nombre d'Or : La Magie du 1.618",
        subtitle: "Du Parthénon à la photographie moderne, comment ce nombre mystérieux façonne l'esthétique humaine",
        intro:
          "φ (phi) = 1.6180339887… est peut-être le nombre le plus mythifié de l'histoire. Connu sous le nom de 'nombre d'or' ou 'divine proportion', il apparaît dans l'Homme de Vitruve de Vinci, le Modulor de Le Corbusier, les spirales des coquillages et les bras des galaxies. En composition photographique, la grille du nombre d'or est une version 'améliorée' de la règle des tiers.",
        sections: [
          {
            heading: "Mathématiques et Intuition",
            body: "La définition mathématique est simple : si un segment est divisé en parties a et b telles que a/b = (a+b)/a, alors le rapport est φ ≈ 1.618. Cela semble abstrait, mais visuellement, cela crée une relation 'inégale mais équilibrée'. Les tiers divisent en 1:1:1 ; le nombre d'or divise environ en 1:1.618:1 — la zone médiane est plus grande. Cette asymétrie est le motif de distribution le plus courant dans la nature.",
          },
          {
            heading: "Nombre d'Or vs Règle des Tiers : Quand Utiliser Quoi",
            body: "Les tiers excellent dans les décisions rapides ; le nombre d'or récompense le raffinement soigné. Différence clé : les tiers divisent uniformément (33/33/33), le nombre d'or non (environ 38/62). La grille du nombre d'or attire le regard plus décisivement vers un côté, créant une 'zone sujet' plus grande et une 'zone de respiration' plus petite. Si le sujet est déjà grand et proéminent, le nombre d'or surpasse souvent les tiers.",
          },
          {
            heading: "Recadrage Pratique au Nombre d'Or",
            body: "En passant à la grille du Nombre d'Or dans CropImageArt, vous verrez deux ensembles de divisions verticales et horizontales non équidistantes. Approche principale : trouvez l'élément visuel le plus lourd et placez-le dans la zone large, en réservant la zone étroite comme espace négatif. Horizontalement : si le premier plan est captivant, poussez l'horizon plus haut (premier plan à 62%) ; si le ciel est la vedette, poussez l'horizon plus bas (ciel à 62%).",
          },
        ],
        tips: [
          "Utilisez le nombre d'or avec des sujets proéminents ; les tiers pour les éléments dispersés",
          "L'intersection dorée supérieure gauche a le plus grand poids visuel",
          "En paysage, laissez la portion la plus captivante occuper 62%",
          "Associez à la spirale dorée pour des résultats encore plus forts",
        ],
      },
      de: {
        title: "Goldener-Schnitt-Komposition: Die Magie der 1.618",
        subtitle: "Vom Parthenon zur modernen Fotografie, wie diese mysteriöse Zahl die menschliche Ästhetik prägt",
        intro:
          "φ (Phi) = 1.6180339887… ist vielleicht die am meisten mythologisierte Zahl der Menschheitsgeschichte. Bekannt als 'Goldener Schnitt' oder 'göttliche Proportion', erscheint sie in Da Vincis 'Vitruvianischem Menschen', Le Corbusiers Modulor, den Spiralen von Muscheln und den Armen von Galaxien. In der fotografischen Komposition ist das Goldener-Schnitt-Raster eine 'verbesserte' Drittelregel.",
        sections: [
          {
            heading: "Mathematik und Intuition",
            body: "Die mathematische Definition ist einfach: Wird eine Strecke in Teile a und b geteilt, sodass a/b = (a+b)/a, dann ist das Verhältnis φ ≈ 1.618. Es klingt abstrakt, aber visuell schafft es eine 'ungleiche, aber ausgewogene' Beziehung. Die Drittel teilen gleichmäßig (33/33/33); der Goldene Schnitt teilt ungefähr 1:1.618:1 — die mittlere Zone ist größer. Diese Asymmetrie ist das häufigste Verteilungsmuster der Natur.",
          },
          {
            heading: "Goldener Schnitt vs. Drittelregel: Wann Was Verwenden",
            body: "Die Drittelregel eignet sich für schnelle Entscheidungen; der Goldene Schnitt belohnt sorgfältige Verfeinerung. Kernunterschied: Drittel teilen gleichmäßig (33/33/33), der Goldene Schnitt ungleichmäßig (ca. 38/62). Das Goldener-Schnitt-Raster zieht den Blick entschiedener zu einer Seite und schafft eine größere 'Motivzone' und eine kleinere 'Atemzone'. Wenn das Motiv bereits groß und markant ist, übertrifft der Goldene Schnitt oft die Drittel.",
          },
          {
            heading: "Praktisches Zuschneiden mit dem Goldenen Schnitt",
            body: "Beim Wechsel zum Goldener-Schnitt-Raster in CropImageArt sehen Sie zwei Sätze nicht-äquidistanter vertikaler und horizontaler Linien. Kernansatz: Finden Sie das schwerste visuelle Element und platzieren Sie es in der breiteren Zone, die schmalere Zone als Negativraum. Horizontal: Ist der Vordergrund fesselnd, schieben Sie den Horizont höher (Vordergrund 62%); ist der Himmel der Star, schieben Sie den Horizont tiefer (Himmel 62%).",
          },
        ],
        tips: [
          "Goldener Schnitt bei markanten Motiven; Drittel bei verstreuten Elementen",
          "Der obere linke Goldene-Schnitt-Punkt hat das höchste visuelle Gewicht",
          "In Landschaften: Der fesselndere Teil sollte 62% einnehmen",
          "Kombinieren Sie mit der Goldenen Spirale für noch stärkere Ergebnisse",
        ],
      },
      pt: {
        title: "Composição em Proporção Áurea: A Magia do 1.618",
        subtitle: "Do Partenon à fotografia moderna, como este número misterioso molda a estética humana",
        intro:
          "φ (phi) = 1.6180339887… pode ser o número mais mitificado da história humana. Conhecido como 'proporção áurea' ou 'proporção divina', aparece no 'Homem Vitruviano' de Da Vinci, no Modulor de Le Corbusier, nas espirais das conchas e nos braços das galáxias. Na composição fotográfica, a grade da proporção áurea é uma 'melhoria' da regra dos terços.",
        sections: [
          {
            heading: "Matemática e Intuição",
            body: "A definição matemática é simples: se um segmento é dividido em partes a e b tais que a/b = (a+b)/a, então a razão é φ ≈ 1.618. Parece abstrato, mas visualmente cria uma relação 'desigual mas equilibrada'. Os terços dividem em 1:1:1; a proporção áurea divide aproximadamente em 1:1.618:1 — a zona central é maior. Esta assimetria é o padrão de distribuição mais comum da natureza.",
          },
          {
            heading: "Proporção Áurea vs. Terços: Quando Usar Qual",
            body: "Os terços se destacam em decisões rápidas; a proporção áurea recompensa o refinamento cuidadoso. Diferença central: os terços dividem uniformemente (33/33/33), a proporção áurea não (aproximadamente 38/62). A grade áurea atrai o olhar mais decisivamente para um lado, criando uma 'zona do assunto' maior e uma 'zona de respiração' menor. Se o assunto já é grande e proeminente, a proporção áurea geralmente supera os terços.",
          },
          {
            heading: "Recorte Prático com Proporção Áurea",
            body: "Ao mudar para a grade de Proporção Áurea no CropImageArt, você verá dois conjuntos de divisões verticais e horizontais não equidistantes. Abordagem central: encontre o elemento visual mais pesado e coloque-o na zona mais larga, reservando a zona estreita como espaço negativo. Horizontalmente: se o primeiro plano for atraente, empurre o horizonte para cima (primeiro plano a 62%); se o céu for a estrela, empurre o horizonte para baixo (céu a 62%).",
          },
        ],
        tips: [
          "Use proporção áurea com assuntos proeminentes; terços com elementos dispersos",
          "A interseção áurea superior esquerda tem o maior peso visual",
          "Em paisagens, deixe a porção mais atraente ocupar 62%",
          "Combine com a espiral áurea para resultados ainda melhores",
        ],
      },
    },
  },

  // ─── 3. Golden Spiral ─────────────────────────────
  {
    slug: "golden-spiral",
    compositionType: "golden-spiral",
    publishedAt: "2026-08-09",
    readTime: { en: "10 min", "zh-CN": "10 分钟", "zh-TW": "10 分鐘" },
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
      },
      ja: {
        title: "黄金螺旋：自然の構図コード",
        subtitle: "フィボナッチ数列が作り出す抗えない視覚的流れ",
        intro:
          "オウムガイの殻、ヒマワリの花、ハリケーンの形、銀河の渦巻き腕 — すべてが同じ数学的法則、フィボナッチ螺旋（黄金螺旋）に従っています。この優雅な曲線は写真構図において非常に強力なツールです。三分割法がフレームを「切断」するのに対し、黄金螺旋は視線を「誘導」します。視聴者の目は無意識に螺旋の経路に沿って移動し、最終的に中心に達します。",
        sections: [
          {
            heading: "フィボナッチから黄金螺旋へ",
            body: "フィボナッチ数列（1, 1, 2, 3, 5, 8, 13, 21…）では、隣接する数字の比が φ に収束します。この数列の数字を辺の長さとする正方形を描き、各正方形に四分円弧を内接させると黄金螺旋が得られます。この螺旋のユニークな点：外側から内側に向かって一定の比例率で収縮します。視覚的には、視線が螺旋上のどこに着地しても、自然と次の小さな弧へと「滑り込み」、中心に到達するまで止まりません。",
          },
          {
            heading: "黄金螺旋に適した写真のタイプ",
            body: "黄金螺旋が最も輝くのは、「整理」が必要なほど要素が豊富な写真です。ストリート写真では、螺旋が最も重要な要素を中心に置き、周囲の要素を弧に沿って配置するのを助けます。静物や料理写真では、複数のオブジェクトの中から「視覚経路」を見つけるのに役立ちます。自然写真は螺旋の天国です — 曲がりくねった川、山道、枝の方向…これらは本質的に螺旋的な要素であり、黄金螺旋グリッドを重ねると驚くべき調和を生み出します。",
          },
          {
            heading: "黄金螺旋でのトリミング",
            body: "CropImageArt で黄金螺旋を有効にすると、隅から始まって内側に渦巻く曲線が表示されます。トリミングで最も重要なのは、螺旋の開始角を決めることです。一般に、螺旋の始点（最大の弧）には「二次的だが目を引く要素」を置き、螺旋の終点（中心）は「最も重要な被写体」の居場所です。例えば海景写真：螺旋が右上のカモメから始まり → 海岸線に沿って曲がり → 最終的に左下の灯台に焦点を当てます。トリミング時には螺旋がカバーしない領域を切り取り、フレームをすっきりさせることができます。",
          },
        ],
        tips: [
          "螺旋の中心 = フレームで最も重要な要素",
          "螺旋の始点 = 二次的だが目を引く要素",
          "自然風景（川、山）は螺旋構図の天然素材",
          "螺旋を回転/反転して写真の内容に合わせる",
        ],
      },
      ko: {
        title: "황금나선: 자연의 구도 코드",
        subtitle: "피보나치 수열이 만들어내는 저항할 수 없는 시각적 흐름",
        intro:
          "앵무조개 껍질, 해바라기 꽃, 허리케인의 모양, 은하의 나선팔 — 이 모든 것은 동일한 수학적 법칙인 피보나치 나선, 즉 '황금나선'을 따릅니다. 이 우아한 곡선은 사진 구도에서 매우 강력한 도구입니다. 삼분할법이 프레임을 '절단'하는 반면, 황금나선은 시선을 '유도'합니다. 보는 사람의 눈은 무의식적으로 나선 경로를 따라 이동하다가 결국 중심에 머물게 됩니다.",
        sections: [
          {
            heading: "피보나치에서 황금나선까지",
            body: "피보나치 수열(1, 1, 2, 3, 5, 8, 13, 21…)에서 인접한 숫자의 비율은 φ로 수렴합니다. 이 수열의 숫자를 한 변으로 하는 정사각형을 그리고 각 정사각형에 1/4 원호를 내접시키면 황금나선이 만들어집니다. 이 나선의 독특한 점: 바깥쪽에서 안쪽으로 일정한 비율로 수축합니다. 시각적으로 이는 시선이 나선의 어느 지점에 떨어지든 자연스럽게 다음 작은 호로 '미끄러져 들어가' 중심에 도달할 때까지 멈추지 않는다는 것을 의미합니다.",
          },
          {
            heading: "황금나선에 적합한 사진 유형",
            body: "황금나선은 '정리'가 필요할 만큼 요소가 풍부한 사진에서 가장 빛을 발합니다. 스트리트 사진에서는 나선이 가장 중요한 요소를 중심에 배치하고 주변 요소를 호를 따라 배열하는 데 도움을 줍니다. 정물이나 음식 사진에서는 여러 사물 사이에서 '시각적 경로'를 찾는 데 유용합니다. 자연 사진은 나선의 천국입니다 — 구불구불한 강, 산길, 나뭇가지의 방향… 이러한 본질적으로 나선형인 요소들은 황금나선 그리드를 겹치면 놀라운 조화를 만들어냅니다.",
          },
          {
            heading: "황금나선으로 크롭하기",
            body: "CropImageArt에서 황금나선을 활성화하면 한쪽 모서리에서 시작해 안쪽으로 소용돌이치는 곡선이 표시됩니다. 크롭에서 가장 중요한 것은 나선이 시작되는 모서리를 결정하는 것입니다. 일반적으로 나선의 시작점(가장 큰 호)에는 '이차적이지만 눈에 띄는 요소'를, 나선의 끝점(중심)에는 '가장 중요한 피사체'를 배치합니다. 예를 들어 바다 풍경: 나선이 오른쪽 상단의 갈매기에서 시작 → 해안선을 따라 구부러짐 → 최종적으로 왼쪽 하단의 등대에 초점을 맞춥니다. 크롭 시 나선이 덮지 않는 영역을 잘라내어 프레임을 깔끔하게 만듭니다.",
          },
        ],
        tips: [
          "나선의 중심 = 프레임에서 가장 중요한 요소",
          "나선의 시작점 = 이차적이지만 눈에 띄는 요소",
          "자연 풍경(강, 산)은 나선 구도의 천연 소재",
          "나선을 회전/반전하여 사진 내용에 맞추기",
        ],
      },
      es: {
        title: "Espiral Áurea: El Código de Composición de la Naturaleza",
        subtitle: "Cómo la secuencia de Fibonacci crea un flujo visual irresistible",
        intro:
          "La concha del nautilo, la cabeza del girasol, la forma de un huracán, los brazos espirales de una galaxia — todos siguen la misma regla matemática: la espiral de Fibonacci, comúnmente llamada 'espiral áurea'. Esta curva elegante es una herramienta de composición extremadamente poderosa: a diferencia de los tercios, que 'cortan' el encuadre, la espiral áurea 'guía' la mirada.",
        sections: [
          {
            heading: "De Fibonacci a la Espiral Áurea",
            body: "En la secuencia de Fibonacci (1, 1, 2, 3, 5, 8, 13, 21…), la razón de números adyacentes converge hacia φ. Al dibujar cuadrados con estos números como lados e inscribir arcos de cuarto de círculo, se obtiene la espiral áurea. Lo que la hace única: se contrae de afuera hacia adentro a una tasa proporcional constante. Visualmente, donde sea que caiga tu mirada en la espiral, se 'desliza' naturalmente hacia el siguiente arco más pequeño hasta llegar al centro.",
          },
          {
            heading: "Qué Tipos de Fotos se Adaptan a la Espiral Áurea",
            body: "La espiral áurea brilla con fotos ricas en elementos que necesitan 'organización'. En fotografía callejera, la espiral ayuda a colocar el elemento más importante en el centro, con los elementos circundantes dispuestos a lo largo de los arcos. En naturaleza muerta o comida, ayuda a encontrar un 'camino visual' a través de múltiples objetos. La fotografía de naturaleza es el paraíso de la espiral — ríos sinuosos, carreteras de montaña, la dirección de las ramas.",
          },
          {
            heading: "Recorte con la Espiral Áurea",
            body: "Al activar la Espiral Áurea en CropImageArt, verás una curva que comienza en una esquina y gira hacia adentro. El paso más crucial es decidir desde qué esquina comienza la espiral. Generalmente, el punto de inicio (el arco más grande) debe contener 'elementos secundarios pero llamativos', mientras que el punto final (centro) debe albergar al 'sujeto más importante'. Al recortar, puedes eliminar áreas que la espiral no cubre, limpiando el encuadre.",
          },
        ],
        tips: [
          "Centro de la espiral = el elemento más importante del encuadre",
          "Punto de inicio = elementos secundarios pero llamativos",
          "Paisajes naturales (ríos, montañas) son ideales para la espiral",
          "Gira/invierte la espiral para adaptarla al contenido de tu foto",
        ],
      },
      fr: {
        title: "Spirale d'Or : Le Code de Composition de la Nature",
        subtitle: "Comment la suite de Fibonacci crée un flux visuel irrésistible",
        intro:
          "La coquille du nautile, la tête du tournesol, la forme d'un ouragan, les bras spiraux d'une galaxie — tous suivent la même règle mathématique : la spirale de Fibonacci, communément appelée 'spirale d'or'. Cette courbe élégante est un outil de composition extrêmement puissant : contrairement aux tiers qui 'découpent' le cadre, la spirale d'or 'guide' le regard.",
        sections: [
          {
            heading: "De Fibonacci à la Spirale d'Or",
            body: "Dans la suite de Fibonacci (1, 1, 2, 3, 5, 8, 13, 21…), le rapport des nombres adjacents converge vers φ. En dessinant des carrés avec ces nombres comme côtés et en y inscrivant des arcs de quart de cercle, on obtient la spirale d'or. Ce qui la rend unique : elle se contracte de l'extérieur vers l'intérieur à un taux proportionnel constant. Visuellement, où que votre regard tombe sur la spirale, il 'glisse' naturellement vers l'arc suivant jusqu'à atteindre le centre.",
          },
          {
            heading: "Quels Types de Photos Conviennent à la Spirale d'Or",
            body: "La spirale d'or brille avec des photos riches en éléments nécessitant une 'organisation'. En photo de rue, la spirale aide à placer l'élément le plus important au centre, les éléments environnants s'alignant le long des arcs. En nature morte ou cuisine, elle aide à trouver un 'chemin visuel' parmi plusieurs objets. La photo de nature est le paradis de la spirale — rivières sinueuses, routes de montagne, direction des branches.",
          },
          {
            heading: "Recadrage avec la Spirale d'Or",
            body: "En activant la Spirale d'Or dans CropImageArt, vous verrez une courbe qui commence d'un coin et tourne vers l'intérieur. L'étape la plus cruciale est de décider de quel coin la spirale commence. Généralement, le point de départ (le plus grand arc) doit contenir des 'éléments secondaires mais accrocheurs', tandis que le point d'arrivée (centre) doit abriter le 'sujet le plus important'. Lors du recadrage, vous pouvez couper les zones non couvertes par la spirale.",
          },
        ],
        tips: [
          "Centre de la spirale = l'élément le plus important du cadre",
          "Point de départ = éléments secondaires mais accrocheurs",
          "Paysages naturels (rivières, montagnes) sont parfaits pour la spirale",
          "Faites pivoter/inversez la spirale pour l'adapter à votre photo",
        ],
      },
      de: {
        title: "Goldene Spirale: Der Kompositionscode der Natur",
        subtitle: "Wie die Fibonacci-Folge einen unwiderstehlichen visuellen Fluss erzeugt",
        intro:
          "Die Nautilus-Schale, der Sonnenblumenkopf, die Form eines Hurrikans, die Spiralarme einer Galaxie — alle folgen derselben mathematischen Regel: der Fibonacci-Spirale, allgemein 'Goldene Spirale' genannt. Diese elegante Kurve ist ein enorm mächtiges Kompositionswerkzeug: Anders als die Drittel, die den Rahmen 'zerschneiden', 'führt' die Goldene Spirale den Blick.",
        sections: [
          {
            heading: "Von Fibonacci zur Goldenen Spirale",
            body: "In der Fibonacci-Folge (1, 1, 2, 3, 5, 8, 13, 21…) konvergiert das Verhältnis benachbarter Zahlen gegen φ. Zeichnet man Quadrate mit diesen Zahlen als Seitenlängen und beschreibt Viertelkreisbögen darin, erhält man die Goldene Spirale. Das Besondere: Sie zieht sich von außen nach innen mit konstanter proportionaler Rate zusammen. Visuell bedeutet dies: Wo auch immer Ihr Blick auf der Spirale landet, 'rutscht' er natürlich zum nächsten kleineren Bogen, bis er das Zentrum erreicht.",
          },
          {
            heading: "Welche Fotos zur Goldenen Spirale passen",
            body: "Die Goldene Spirale glänzt bei elementreichen Fotos, die 'Ordnung' brauchen. In der Straßenfotografie hilft die Spirale, das wichtigste Element ins Zentrum zu setzen, mit umgebenden Elementen entlang der Bögen. In Stillleben oder Food-Fotografie hilft sie, einen 'visuellen Pfad' durch mehrere Objekte zu finden. Naturfotografie ist das Paradies der Spirale — gewundene Flüsse, Bergstraßen, Astrichtungen.",
          },
          {
            heading: "Zuschneiden mit der Goldenen Spirale",
            body: "Beim Aktivieren der Goldenen Spirale in CropImageArt sehen Sie eine Kurve, die von einer Ecke beginnt und sich nach innen windet. Der entscheidende Schritt ist die Wahl der Startecke. Allgemein sollte der Startpunkt (der größte Bogen) 'sekundäre, aber auffällige Elemente' enthalten, während der Endpunkt (Zentrum) das 'wichtigste Motiv' beherbergt. Beim Zuschneiden können Sie Bereiche entfernen, die die Spirale nicht abdeckt.",
          },
        ],
        tips: [
          "Spiralzentrum = das wichtigste Element im Bild",
          "Startpunkt = sekundäre, aber auffällige Elemente",
          "Naturlandschaften (Flüsse, Berge) sind ideal für die Spirale",
          "Spirale drehen/spiegeln, um sie an den Fotoinhalt anzupassen",
        ],
      },
      pt: {
        title: "Espiral Áurea: O Código de Composição da Natureza",
        subtitle: "Como a sequência de Fibonacci cria um fluxo visual irresistível",
        intro:
          "A concha do náutilo, a cabeça do girassol, a forma de um furacão, os braços espirais de uma galáxia — todos seguem a mesma regra matemática: a espiral de Fibonacci, comumente chamada de 'espiral áurea'. Esta curva elegante é uma ferramenta de composição extremamente poderosa: diferente dos terços que 'cortam' o quadro, a espiral áurea 'guia' o olhar.",
        sections: [
          {
            heading: "De Fibonacci à Espiral Áurea",
            body: "Na sequência de Fibonacci (1, 1, 2, 3, 5, 8, 13, 21…), a razão de números adjacentes converge para φ. Desenhando quadrados com estes números como lados e inscrevendo arcos de quarto de círculo, obtém-se a espiral áurea. O que a torna única: ela se contrai de fora para dentro a uma taxa proporcional constante. Visualmente, onde quer que seu olhar caia na espiral, ele 'desliza' naturalmente para o próximo arco menor até chegar ao centro.",
          },
          {
            heading: "Que Tipos de Fotos se Adequam à Espiral Áurea",
            body: "A espiral áurea brilha com fotos ricas em elementos que precisam de 'organização'. Na fotografia de rua, a espiral ajuda a colocar o elemento mais importante no centro, com os elementos circundantes dispostos ao longo dos arcos. Em natureza morta ou comida, ajuda a encontrar um 'caminho visual' através de vários objetos. A fotografia de natureza é o paraíso da espiral — rios sinuosos, estradas de montanha, direção dos galhos.",
          },
          {
            heading: "Recorte com a Espiral Áurea",
            body: "Ao ativar a Espiral Áurea no CropImageArt, você verá uma curva que começa de um canto e gira para dentro. O passo mais crucial é decidir de qual canto a espiral começa. Geralmente, o ponto de partida (o maior arco) deve conter 'elementos secundários mas chamativos', enquanto o ponto final (centro) deve abrigar o 'assunto mais importante'. Ao recortar, você pode remover áreas não cobertas pela espiral, limpando o quadro.",
          },
        ],
        tips: [
          "Centro da espiral = o elemento mais importante do quadro",
          "Ponto de partida = elementos secundários mas chamativos",
          "Paisagens naturais (rios, montanhas) são ideais para a espiral",
          "Gire/inverta a espiral para adaptá-la ao conteúdo da foto",
        ],
      },
    },
  },

  {
    slug: "diagonal-method",
    compositionType: "diagonal",
    publishedAt: "2026-08-09",
    readTime: { en: "7 min", "zh-CN": "7 分钟", "zh-TW": "7 分鐘" },
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
      },
      ja: {
        title: "対角線構図法：ダイナミズム、緊張、エネルギー",
        subtitle: "なぜ45度がフレーム内で最もダイナミックな線なのか",
        intro:
          "水平線は安定感、垂直線は荘厳感、そして対角線はエネルギー感をもたらします。対角線構図法は2006年にオランダの写真家エドウィン・ウェストホフによって提唱されました。彼は「美しい写真」の大多数で、重要な要素が隅から隅への45度線上に配置されていることを発見しました。これは偶然ではありません。人間の視覚システムは斜め方向の情報を水平/垂直よりもはるかに効率的に処理するためです。",
        sections: [
          {
            heading: "対角線法の科学的基盤",
            body: "ウェストホフの研究によると、対角線が通過する領域（「対角線帯」）は、人間の目が矩形画像を見る際に自然に走査する経路です。対角線法の3つの原則：① 最も重要な要素は対角線上または触れる位置に配置する。② 二次的要素はもう一方の対角線上に配置できる。③ 両方の対角線を同時に使用して交差ガイドを作成できる。対角線法は「線形」の主題 — 道路、川、橋、手すりなどに特に適しています。",
          },
          {
            heading: "対角線法の実戦シナリオ",
            body: "対角線構図は以下のシナリオで特に優れています：ストリート写真 — 歩道の線、建物の縁、群衆の流れ；スポーツ写真 — アスリートの体の傾き、コートライン、動きの軌跡；旅行写真 — 山を登る石段、曲がりくねった路地、車窓からの風景。重要なのは、線がフレームの大部分を横切り、視覚的に長方形を「切断」しているかどうかです。",
          },
          {
            heading: "対角線法トリミングガイド",
            body: "CropImageArt で対角線法グリッドを選択すると、4つの角から放射状に伸びる45度のガイドラインが表示されます。トリミングの核心は：① 写真の中で最も目立つ斜線または斜めに配置された要素を見つける。② それらの要素が対角線により近づくように回転またはトリミングする。③ 対角線を妨げる端の要素を切り取る。写真に自然な対角線がない場合は、傾斜トリミング（意図的に角度をつけて回転）でダイナミズムを注入できます。",
          },
        ],
        tips: [
          "道路、川、建築などの線形主題に最適",
          "フレームを傾けることで対角線を「作成」できる",
          "2本の対角線の交点が最も目を引く場所",
          "三角形構図との相性が特に良い",
        ],
      },
      ko: {
        title: "대각선 구도법: 역동성, 긴장, 에너지",
        subtitle: "왜 45도가 프레임에서 가장 역동적인 선인가",
        intro:
          "수평선은 안정감, 수직선은 엄숙함, 그리고 대각선은 에너지를 줍니다. 대각선 구도법은 2006년 네덜란드 사진작가이자 교육자인 에드윈 웨스트호프가 제안했습니다. 그는 대다수의 '아름다운 사진'에서 중요한 요소들이 모서리에서 모서리로 이어지는 45도 선을 따라 배열되어 있음을 발견했습니다. 이는 우연이 아닙니다. 인간의 시각 시스템은 대각선 방향 정보를 수평/수직보다 훨씬 효율적으로 처리합니다.",
        sections: [
          {
            heading: "대각선법의 과학적 기초",
            body: "웨스트호프의 연구에 따르면, 대각선이 통과하는 영역('대각선 밴드')은 인간의 눈이 직사각형 이미지를 볼 때 자연스럽게 스캔하는 경로입니다. 대각선법의 3가지 원칙: ① 가장 중요한 요소는 대각선 위나 접촉하는 위치에 배치한다. ② 2차적 요소는 다른 대각선 위에 배치할 수 있다. ③ 양쪽 대각선을 동시에 사용하여 교차 가이드를 만들 수 있다. 대각선법은 도로, 강, 다리, 난간 등 '선형' 주제에 특히 적합합니다.",
          },
          {
            heading: "대각선법 실전 시나리오",
            body: "대각선 구도는 다음 시나리오에서 특히 뛰어납니다: 스트리트 사진 — 보도 라인, 건물 가장자리, 군중의 흐름; 스포츠 사진 — 선수의 몸 기울기, 코트 라인, 움직임 궤적; 여행 사진 — 산을 오르는 돌계단, 구불구불한 골목, 차창 밖 풍경. 핵심은 선이 프레임의 대부분을 가로지르며 시각적으로 직사각형을 '절단'하는지 여부입니다.",
          },
          {
            heading: "대각선법 크롭 가이드",
            body: "CropImageArt에서 대각선법 그리드를 선택하면 네 모서리에서 방사되는 45도 가이드라인이 표시됩니다. 크롭의 핵심: ① 사진에서 가장 두드러진 사선 또는 대각선으로 배열된 요소를 찾는다. ② 해당 요소들이 대각선에 더 가까워지도록 회전 또는 크롭한다. ③ 대각선을 방해하는 가장자리 요소를 잘라낸다. 자연스러운 대각선이 없는 사진은 틸트 크롭(의도적 각도 회전)을 시도하여 역동성을 주입할 수 있습니다.",
          },
        ],
        tips: [
          "도로, 강, 건축 등 선형 주제에 최적",
          "프레임을 기울여 대각선을 '창조'할 수 있음",
          "두 대각선의 교차점이 가장 눈에 띄는 지점",
          "삼각형 구도와 특히 잘 어울림",
        ],
      },
      es: {
        title: "Método Diagonal: Dinamismo, Tensión y Energía",
        subtitle: "Por qué la línea de 45 grados es la más dinámica del encuadre",
        intro:
          "Las líneas horizontales transmiten estabilidad, las verticales solemnidad — y las diagonales energía. El Método Diagonal fue propuesto por el fotógrafo holandés Edwin Westhoff en 2006. Descubrió que en la mayoría de las 'fotografías bellas', los elementos importantes se disponen a lo largo de líneas de 45 grados. No es coincidencia: el sistema visual humano procesa la información diagonal mucho más eficientemente que la horizontal o vertical.",
        sections: [
          {
            heading: "Base Científica del Método Diagonal",
            body: "La investigación de Westhoff muestra que el área recorrida por las diagonales (la 'banda diagonal') es el camino que el ojo escanea naturalmente al ver una imagen rectangular. Los tres principios: ① El elemento más importante debe caer sobre o tocar una diagonal. ② Los elementos secundarios pueden caer en la otra diagonal. ③ Ambas diagonales pueden usarse simultáneamente. El método diagonal es ideal para temas 'lineales': carreteras, ríos, puentes, barandillas.",
          },
          {
            heading: "Escenarios de Batalla del Método Diagonal",
            body: "La composición diagonal destaca en: fotografía callejera — líneas de aceras, bordes de edificios, flujo de multitudes; fotografía deportiva — inclinación corporal, líneas de la cancha, trayectorias de movimiento; fotografía de viajes — escalones de piedra, callejones serpenteantes, líneas del paisaje desde la ventana. La clave es si la línea atraviesa la mayor parte del encuadre 'cortando' visualmente el rectángulo.",
          },
          {
            heading: "Guía de Recorte Diagonal",
            body: "Al seleccionar la cuadrícula Diagonal en CropImageArt, verás líneas guía de 45° desde las cuatro esquinas. El núcleo del recorte: ① Encuentra la diagonal más prominente en tu foto. ② Rota o recorta para acercar esos elementos a una diagonal verdadera. ③ Elimina elementos del borde que interfieran. Si tu foto carece de diagonales, prueba el recorte inclinado — rotar deliberadamente para inyectar dinamismo.",
          },
        ],
        tips: [
          "Ideal para temas lineales: carreteras, ríos, arquitectura",
          "Puedes crear diagonales inclinando el encuadre",
          "La intersección de dos diagonales es el punto más llamativo",
          "Combina especialmente bien con la composición triangular",
        ],
      },
      fr: {
        title: "Méthode Diagonale : Dynamisme, Tension et Énergie",
        subtitle: "Pourquoi la ligne à 45 degrés est la plus dynamique du cadre",
        intro:
          "Les lignes horizontales évoquent la stabilité, les verticales la solennité — et les diagonales l'énergie. La Méthode Diagonale a été proposée par le photographe néerlandais Edwin Westhoff en 2006. Il a découvert que dans la majorité des 'belles photos', les éléments importants sont disposés le long de lignes à 45 degrés. Ce n'est pas un hasard : le système visuel humain traite l'information diagonale bien plus efficacement.",
        sections: [
          {
            heading: "Base Scientifique de la Méthode Diagonale",
            body: "Les recherches de Westhoff montrent que la zone parcourue par les diagonales (la 'bande diagonale') est le chemin que l'œil scanne naturellement en regardant une image rectangulaire. Les trois principes : ① L'élément le plus important doit tomber sur ou toucher une diagonale. ② Les éléments secondaires peuvent tomber sur l'autre diagonale. ③ Les deux diagonales peuvent être utilisées simultanément. La méthode diagonale est idéale pour les sujets 'linéaires' : routes, rivières, ponts, rambardes.",
          },
          {
            heading: "Scénarios de Combat de la Méthode Diagonale",
            body: "La composition diagonale excelle dans : photo de rue — lignes de trottoirs, bords de bâtiments, flux de foule ; photo sportive — inclinaison du corps, lignes du terrain, trajectoires ; photo de voyage — escaliers de pierre, ruelles sinueuses, lignes de paysage depuis la fenêtre. La clé est que la ligne traverse la majeure partie du cadre en 'coupant' visuellement le rectangle.",
          },
          {
            heading: "Guide de Recadrage Diagonal",
            body: "En sélectionnant la grille Diagonale dans CropImageArt, vous verrez des lignes directrices à 45° depuis les quatre coins. Le cœur du recadrage : ① Trouvez la diagonale la plus proéminente dans votre photo. ② Faites pivoter ou recadrez pour rapprocher ces éléments d'une vraie diagonale. ③ Supprimez les éléments de bord qui interfèrent. Si votre photo manque de diagonales, essayez le recadrage incliné — rotation délibérée pour injecter du dynamisme.",
          },
        ],
        tips: [
          "Idéal pour les sujets linéaires : routes, rivières, architecture",
          "Vous pouvez créer des diagonales en inclinant le cadre",
          "L'intersection de deux diagonales est le point le plus accrocheur",
          "S'associe particulièrement bien avec la composition triangulaire",
        ],
      },
      de: {
        title: "Diagonal-Methode: Dynamik, Spannung und Energie",
        subtitle: "Warum die 45-Grad-Linie die dynamischste Linie im Bild ist",
        intro:
          "Horizontale Linien wirken stabil, vertikale feierlich — und diagonale energisch. Die Diagonal-Methode wurde 2006 vom niederländischen Fotografen Edwin Westhoff vorgeschlagen. Er entdeckte, dass bei den meisten 'schönen Fotos' wichtige Elemente entlang 45-Grad-Linien angeordnet sind. Kein Zufall: Das menschliche Sehsystem verarbeitet diagonale Informationen viel effizienter als horizontale oder vertikale.",
        sections: [
          {
            heading: "Wissenschaftliche Grundlage der Diagonal-Methode",
            body: "Westhoffs Forschung zeigt, dass der von Diagonalen durchzogene Bereich (das 'Diagonalband') der Pfad ist, den das Auge beim Betrachten eines rechteckigen Bildes natürlich scannt. Die drei Prinzipien: ① Das wichtigste Element sollte auf einer Diagonalen liegen oder sie berühren. ② Sekundäre Elemente können auf der anderen Diagonalen liegen. ③ Beide Diagonalen können gleichzeitig verwendet werden. Die Diagonal-Methode eignet sich besonders für 'lineare' Motive: Straßen, Flüsse, Brücken, Geländer.",
          },
          {
            heading: "Bewährte Diagonal-Methoden-Szenarien",
            body: "Die Diagonal-Komposition glänzt in: Straßenfotografie — Gehweglinien, Gebäudekanten, Menschenströme; Sportfotografie — Körperneigung, Spielfeldlinien, Bewegungsbahnen; Reisefotografie — Steinstufen, verwinkelte Gassen, Landschaftslinien vom Fenster aus. Entscheidend ist, ob die Linie den Großteil des Rahmens durchquert und das Rechteck visuell 'zerschneidet'.",
          },
          {
            heading: "Diagonal-Zuschneide-Leitfaden",
            body: "Beim Auswählen des Diagonal-Rasters in CropImageArt sehen Sie 45°-Führungslinien von allen vier Ecken. Kern des Zuschnitts: ① Finden Sie die markanteste Diagonale in Ihrem Foto. ② Drehen oder schneiden Sie zu, um diese Elemente einer echten Diagonalen anzunähern. ③ Entfernen Sie störende Randelemente. Fehlen natürliche Diagonalen, versuchen Sie Schrägzuschnitt — bewusstes Drehen, um Dynamik einzubringen.",
          },
        ],
        tips: [
          "Ideal für lineare Motive: Straßen, Flüsse, Architektur",
          "Diagonalen können durch Kippen des Rahmens erzeugt werden",
          "Die Kreuzung zweier Diagonalen ist der auffälligste Punkt",
          "Kombiniert besonders gut mit Dreieckskomposition",
        ],
      },
      pt: {
        title: "Método Diagonal: Dinamismo, Tensão e Energia",
        subtitle: "Por que a linha de 45 graus é a mais dinâmica do quadro",
        intro:
          "Linhas horizontais transmitem estabilidade, verticais solenidade — e diagonais energia. O Método Diagonal foi proposto pelo fotógrafo holandês Edwin Westhoff em 2006. Ele descobriu que na maioria das 'belas fotografias', elementos importantes estão dispostos ao longo de linhas de 45 graus. Não é coincidência: o sistema visual humano processa informações diagonais com muito mais eficiência.",
        sections: [
          {
            heading: "Base Científica do Método Diagonal",
            body: "A pesquisa de Westhoff mostra que a área percorrida pelas diagonais (a 'faixa diagonal') é o caminho que o olho escaneia naturalmente ao ver uma imagem retangular. Os três princípios: ① O elemento mais importante deve cair sobre ou tocar uma diagonal. ② Elementos secundários podem cair na outra diagonal. ③ Ambas as diagonais podem ser usadas simultaneamente. O método diagonal é ideal para temas 'lineares': estradas, rios, pontes, grades.",
          },
          {
            heading: "Cenários de Batalha do Método Diagonal",
            body: "A composição diagonal se destaca em: fotografia de rua — linhas de calçadas, bordas de prédios, fluxo de multidões; fotografia esportiva — inclinação corporal, linhas da quadra, trajetórias; fotografia de viagem — degraus de pedra, vielas sinuosas, linhas da paisagem pela janela. A chave é se a linha atravessa a maior parte do quadro 'cortando' visualmente o retângulo.",
          },
          {
            heading: "Guia de Recorte Diagonal",
            body: "Ao selecionar a grade Diagonal no CropImageArt, você verá linhas guia de 45° a partir dos quatro cantos. O núcleo do recorte: ① Encontre a diagonal mais proeminente na sua foto. ② Gire ou recorte para aproximar esses elementos de uma diagonal verdadeira. ③ Remova elementos de borda que interfiram. Se sua foto carece de diagonais naturais, tente o recorte inclinado — rotação deliberada para injetar dinamismo.",
          },
        ],
        tips: [
          "Ideal para temas lineares: estradas, rios, arquitetura",
          "Você pode criar diagonais inclinando o quadro",
          "A interseção de duas diagonais é o ponto mais chamativo",
          "Combina especialmente bem com a composição triangular",
        ],
      },
    },
  },

  // ─── 5. Triangle ───────────────────────────────────
  {
    slug: "triangle-composition",
    compositionType: "triangle",
    publishedAt: "2026-08-09",
    readTime: { en: "8 min", "zh-CN": "8 分钟", "zh-TW": "8 分鐘" },
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
      },
      ja: {
        title: "三角形構図：安定と緊張の完璧なバランス",
        subtitle: "正三角形、逆三角形、斜め三角形 — 3つの基本形の使い分け方",
        intro:
          "三角形は人類が最初に認識した安定した構造です。絵画と写真において、三角形構図（ピラミッド構図とも呼ばれる）は最も古く、最も信頼できるアプローチの一つです。三角形は散らばった要素をまとまりのある方向性のある視覚的全体に組織化できます。ルネサンスの宗教画はほぼ普遍的に三角形構図を採用していました。",
        sections: [
          {
            heading: "三角形構図の3つの基本形",
            body: "① 正三角形（底辺が下、頂点が上）：最も安定し、荘重な感覚。② 逆三角形（頂点が下、底辺が上）：不安定さと緊張感を生み出す。③ 斜め三角形（一辺が傾いている）：動感と方向性をもたらす。三角形構図の素晴らしさは、一見無関係な物体を一つの全体にまとめる能力にあります。静物写真では3つのアイテムを三角形の頂点に配置でき、ポートレートでは頭が頂点、手や肩が底辺の端点となります。",
          },
          {
            heading: "三角形構図に適した写真のタイプ",
            body: "三角形構図は以下のシナリオで特に優れています：グループポートレート — 人々を自然に三角形に配置（中央後方に最も背の高い人）。静物と料理写真 — 主要なオブジェクト3つが三角形の頂点を形成。建築写真 — 建物、塔、橋はしばしば自然な三角形構造を持っています。風景写真 — 山のシルエット自体が三角形であり、前景の岩、中景の木々、遠景の山頂も三角形の階層を形成できます。",
          },
          {
            heading: "三角形構図トリミングガイド",
            body: "CropImageArt で三角形モードに切り替えると、主動対角線と、角から中心に向かって伸びる2本の破線補助線が表示されます。トリミング方法：① 最も重要な要素を主動対角線上またはその近くに配置する。② 補助線を使用して二次的要素を整列させる。③ 対角線と補助線の交点が「重心」を示す。三角形構図の「底辺」は通常、より重い視覚的質量（広い地面、暗い前景）が必要で、頂点はより軽い要素（空、余白）が必要です。トリミング時に底辺と頂点の比率を調整してください。",
          },
        ],
        tips: [
          "正三角形 = 安定と荘重、逆三角形 = 緊張、斜め三角形 = 動感",
          "3つの主要要素を三角形の3つの頂点に配置",
          "底辺は「重く」、頂点は「軽く」",
          "グループポートレートの自然な選択",
        ],
      },
      ko: {
        title: "삼각형 구도: 안정과 긴장의 완벽한 균형",
        subtitle: "정삼각형, 역삼각형, 사선 삼각형 — 세 가지 기본 형태의 활용법",
        intro:
          "삼각형은 인류가 처음 인식한 안정적인 구조입니다. 회화와 사진에서 삼각형 구도(피라미드 구도)는 가장 오래되고 가장 신뢰할 수 있는 접근법 중 하나입니다. 삼각형은 흩어진 요소들을 하나의 응집력 있는 방향성 있는 시각적 전체로 조직화할 수 있습니다. 르네상스 종교화는 거의 보편적으로 삼각형 구도를 채택했습니다.",
        sections: [
          {
            heading: "삼각형 구도의 세 가지 기본 형태",
            body: "① 정삼각형(밑변이 아래, 꼭지점이 위): 가장 안정적이고 엄숙한 느낌. ② 역삼각형(꼭지점이 아래, 밑변이 위): 불안정감과 긴장감 조성. ③ 사선 삼각형(한 변이 기울어짐): 동적 움직임과 방향성 부여. 삼각형 구도의 뛰어난 점은 겉보기에 무관한 물체들을 하나의 전체로 통합하는 능력입니다. 정물 사진에서는 세 개의 항목을 삼각형의 꼭지점에 배치할 수 있고, 인물 사진에서는 머리가 꼭지점, 손이나 어깨가 밑변의 끝점이 됩니다.",
          },
          {
            heading: "삼각형 구도에 적합한 사진 유형",
            body: "삼각형 구도는 다음 시나리오에서 특히 뛰어납니다: 그룹 인물 사진 — 사람들을 자연스럽게 삼각형으로 배치(중앙 뒤쪽에 가장 키 큰 사람). 정물 및 음식 사진 — 세 개의 주요 사물이 삼각형의 꼭지점을 형성. 건축 사진 — 건물, 탑, 다리는 종종 자연스러운 삼각형 구조를 가집니다. 풍경 사진 — 산의 실루엣 자체가 삼각형이며, 전경의 바위, 중경의 나무, 원경의 봉우리도 삼각형 계층을 형성할 수 있습니다.",
          },
          {
            heading: "삼각형 구도 크롭 가이드",
            body: "CropImageArt에서 삼각형 모드로 전환하면 주 대각선과 모서리에서 중심으로 뻗은 두 개의 점선 보조선이 표시됩니다. 크롭 방법: ① 가장 중요한 요소를 주 대각선 위나 근처에 배치한다. ② 보조선을 사용하여 2차 요소를 정렬한다. ③ 대각선과 보조선의 교차점이 '무게 중심'을 나타낸다. 삼각형 구도의 '밑변'은 보통 더 무거운 시각적 질량(넓은 지면, 어두운 전경)이 필요하고, 꼭지점은 더 가벼운 요소(하늘, 여백)가 필요합니다. 크롭 시 밑변과 꼭지점의 비율을 조정하세요.",
          },
        ],
        tips: [
          "정삼각형 = 안정과 엄숙, 역삼각형 = 긴장, 사선 삼각형 = 동적 움직임",
          "세 개의 주요 요소를 삼각형의 세 꼭지점에 배치",
          "밑변은 '무겁게', 꼭지점은 '가볍게'",
          "그룹 인물 사진의 자연스러운 선택",
        ],
      },
      es: {
        title: "Composición Triangular: El Equilibrio Perfecto entre Estabilidad y Tensión",
        subtitle: "Triángulo normal, invertido y oblicuo — cómo usar las tres formas básicas",
        intro:
          "El triángulo es la primera estructura estable que la humanidad reconoció. En pintura y fotografía, la composición triangular (también llamada composición piramidal) es uno de los enfoques más antiguos y confiables. Un triángulo puede organizar elementos dispersos en un todo visual cohesivo y direccional. Las pinturas religiosas del Renacimiento empleaban casi universalmente la composición triangular.",
        sections: [
          {
            heading: "Las Tres Formas Básicas de la Composición Triangular",
            body: "① Triángulo normal (base abajo, vértice arriba): el más estable y solemne. ② Triángulo invertido (vértice abajo, base arriba): crea inestabilidad y tensión. ③ Triángulo oblicuo (un lado inclinado): aporta dinamismo y direccionalidad. La genialidad de la composición triangular reside en su capacidad de unir objetos aparentemente inconexos en un todo. En bodegones, tres objetos pueden colocarse en los vértices; en retratos, la cabeza forma el vértice con manos u hombros como base.",
          },
          {
            heading: "Qué Fotos se Adaptan a la Composición Triangular",
            body: "La composición triangular destaca en: retratos de grupo — dispón a las personas en un triángulo natural. Bodegones y comida — tres objetos principales forman los vértices. Arquitectura — edificios, torres, puentes tienen estructuras triangulares naturales. Paisajes — la silueta de una montaña es en sí misma un triángulo; rocas en primer plano, árboles en plano medio y picos lejanos también forman una jerarquía triangular implícita.",
          },
          {
            heading: "Guía de Recorte Triangular",
            body: "Al cambiar al modo Triángulo en CropImageArt, verás una diagonal principal y dos líneas auxiliares discontinuas desde las esquinas hacia el centro. Método de recorte: ① Coloca el elemento más importante sobre o cerca de la diagonal principal. ② Usa las líneas auxiliares para alinear elementos secundarios. ③ La intersección marca el 'centro de gravedad'. La 'base' de un triángulo necesita más masa visual (suelo amplio, primer plano oscuro), mientras que el vértice necesita elementos más ligeros (cielo, espacio negativo).",
          },
        ],
        tips: [
          "Triángulo normal = estable y solemne, invertido = tensión, oblicuo = dinamismo",
          "Coloca tres elementos principales en los tres vértices del triángulo",
          "La base debe ser 'pesada', el vértice 'ligero'",
          "Elección natural para retratos de grupo",
        ],
      },
      fr: {
        title: "Composition Triangulaire : L'Équilibre Parfait entre Stabilité et Tension",
        subtitle: "Triangle normal, inversé et oblique — comment utiliser les trois formes de base",
        intro:
          "Le triangle est la première structure stable que l'humanité a reconnue. En peinture et photographie, la composition triangulaire (aussi appelée composition pyramidale) est l'une des approches les plus anciennes et les plus fiables. Un triangle peut organiser des éléments épars en un tout visuel cohérent et directionnel. Les peintures religieuses de la Renaissance employaient presque universellement la composition triangulaire.",
        sections: [
          {
            heading: "Les Trois Formes de Base de la Composition Triangulaire",
            body: "① Triangle normal (base en bas, sommet en haut) : le plus stable et solennel. ② Triangle inversé (sommet en bas, base en haut) : crée instabilité et tension. ③ Triangle oblique (un côté incliné) : apporte dynamisme et directionnalité. La force de la composition triangulaire réside dans sa capacité à unir des objets apparemment sans rapport en un tout. En nature morte, trois objets aux sommets du triangle ; en portrait, la tête au sommet, les mains ou épaules comme base.",
          },
          {
            heading: "Quelles Photos Conviennent à la Composition Triangulaire",
            body: "La composition triangulaire excelle dans : portraits de groupe — disposez les personnes en triangle naturel. Natures mortes et cuisine — trois objets principaux forment les sommets. Architecture — bâtiments, tours, ponts ont des structures triangulaires naturelles. Paysages — la silhouette d'une montagne est elle-même un triangle ; rochers au premier plan, arbres au deuxième plan et pics lointains forment une hiérarchie triangulaire implicite.",
          },
          {
            heading: "Guide de Recadrage Triangulaire",
            body: "En passant en mode Triangle dans CropImageArt, vous verrez une diagonale principale et deux lignes auxiliaires en pointillés des coins vers le centre. Méthode de recadrage : ① Placez l'élément le plus important sur ou près de la diagonale principale. ② Utilisez les lignes auxiliaires pour aligner les éléments secondaires. ③ L'intersection marque le 'centre de gravité'. La 'base' d'un triangle a besoin de plus de masse visuelle (sol large, premier plan sombre), tandis que le sommet a besoin d'éléments plus légers (ciel, espace négatif).",
          },
        ],
        tips: [
          "Triangle normal = stable et solennel, inversé = tension, oblique = dynamisme",
          "Placez trois éléments principaux aux trois sommets du triangle",
          "La base doit être 'lourde', le sommet 'léger'",
          "Choix naturel pour les portraits de groupe",
        ],
      },
      de: {
        title: "Dreieckskomposition: Die perfekte Balance von Stabilität und Spannung",
        subtitle: "Normales, umgekehrtes und schräges Dreieck — wie man die drei Grundformen einsetzt",
        intro:
          "Das Dreieck ist die erste stabile Struktur, die die Menschheit erkannte. In Malerei und Fotografie ist die Dreieckskomposition (auch Pyramidenkomposition) einer der ältesten und zuverlässigsten Ansätze. Ein Dreieck kann verstreute Elemente zu einem zusammenhängenden, richtungsweisenden visuellen Ganzen organisieren. Renaissance-Gemälde verwendeten fast universell die Dreieckskomposition.",
        sections: [
          {
            heading: "Die Drei Grundformen der Dreieckskomposition",
            body: "① Normales Dreieck (Basis unten, Spitze oben): am stabilsten und feierlichsten. ② Umgekehrtes Dreieck (Spitze unten, Basis oben): erzeugt Instabilität und Spannung. ③ Schräges Dreieck (eine Seite geneigt): bringt Dynamik und Richtung. Die Brillanz der Dreieckskomposition liegt in ihrer Fähigkeit, scheinbar zusammenhanglose Objekte zu einem Ganzen zu vereinen. Bei Stillleben drei Objekte an den Scheitelpunkten; bei Porträts der Kopf als Spitze, Hände oder Schultern als Basis.",
          },
          {
            heading: "Welche Fotos zur Dreieckskomposition passen",
            body: "Die Dreieckskomposition glänzt bei: Gruppenporträts — Personen natürlich im Dreieck anordnen. Stillleben und Food-Fotografie — drei Hauptobjekte bilden die Scheitelpunkte. Architektur — Gebäude, Türme, Brücken haben natürliche Dreiecksstrukturen. Landschaften — die Silhouette eines Berges ist selbst ein Dreieck; Vordergrundfelsen, Mittelgrundbäume und ferne Gipfel bilden eine implizite Dreieckshierarchie.",
          },
          {
            heading: "Dreiecks-Zuschneide-Leitfaden",
            body: "Im Dreiecksmodus von CropImageArt sehen Sie eine Hauptdiagonale und zwei gestrichelte Hilfslinien von den Ecken zur Mitte. Zuschneidemethode: ① Platzieren Sie das wichtigste Element auf oder nahe der Hauptdiagonalen. ② Verwenden Sie die Hilfslinien zur Ausrichtung sekundärer Elemente. ③ Die Kreuzung markiert den 'Schwerpunkt'. Die 'Basis' eines Dreiecks braucht mehr visuelle Masse (breiter Boden, dunkler Vordergrund), während die Spitze leichtere Elemente braucht (Himmel, Negativraum).",
          },
        ],
        tips: [
          "Normales Dreieck = stabil und feierlich, umgekehrt = Spannung, schräg = Dynamik",
          "Drei Hauptelemente an den drei Scheitelpunkten platzieren",
          "Die Basis sollte 'schwer', die Spitze 'leicht' sein",
          "Natürliche Wahl für Gruppenporträts",
        ],
      },
      pt: {
        title: "Composição Triangular: O Equilíbrio Perfeito entre Estabilidade e Tensão",
        subtitle: "Triângulo normal, invertido e oblíquo — como usar as três formas básicas",
        intro:
          "O triângulo é a primeira estrutura estável que a humanidade reconheceu. Na pintura e fotografia, a composição triangular (também chamada de composição piramidal) é uma das abordagens mais antigas e confiáveis. Um triângulo pode organizar elementos dispersos em um todo visual coeso e direcional. As pinturas religiosas da Renascença empregavam quase universalmente a composição triangular.",
        sections: [
          {
            heading: "As Três Formas Básicas da Composição Triangular",
            body: "① Triângulo normal (base embaixo, vértice em cima): o mais estável e solene. ② Triângulo invertido (vértice embaixo, base em cima): cria instabilidade e tensão. ③ Triângulo oblíquo (um lado inclinado): traz dinamismo e direcionalidade. A genialidade da composição triangular está na capacidade de unir objetos aparentemente desconexos em um todo. Em natureza morta, três itens nos vértices; em retratos, a cabeça no vértice, mãos ou ombros como base.",
          },
          {
            heading: "Que Fotos se Adequam à Composição Triangular",
            body: "A composição triangular se destaca em: retratos de grupo — disponha as pessoas em triângulo natural. Natureza morta e comida — três objetos principais formam os vértices. Arquitetura — prédios, torres, pontes têm estruturas triangulares naturais. Paisagens — a silhueta de uma montanha é em si um triângulo; rochas no primeiro plano, árvores no plano médio e picos distantes formam uma hierarquia triangular implícita.",
          },
          {
            heading: "Guia de Recorte Triangular",
            body: "No modo Triângulo do CropImageArt, você verá uma diagonal principal e duas linhas auxiliares tracejadas dos cantos para o centro. Método de recorte: ① Coloque o elemento mais importante sobre ou perto da diagonal principal. ② Use as linhas auxiliares para alinhar elementos secundários. ③ A interseção marca o 'centro de gravidade'. A 'base' de um triângulo precisa de mais massa visual (chão amplo, primeiro plano escuro), enquanto o vértice precisa de elementos mais leves (céu, espaço negativo).",
          },
        ],
        tips: [
          "Triângulo normal = estável e solene, invertido = tensão, oblíquo = dinamismo",
          "Coloque três elementos principais nos três vértices do triângulo",
          "A base deve ser 'pesada', o vértice 'leve'",
          "Escolha natural para retratos de grupo",
        ],
      },
    },
  },

  // ─── 6. Center Cross ──────────────────────────────
  {
    slug: "center-cross",
    compositionType: "cross",
    publishedAt: "2026-08-09",
    readTime: { en: "7 min", "zh-CN": "7 分钟", "zh-TW": "7 分鐘" },
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
      },
      ja: {
        title: "センタークロス構図：中心の力",
        subtitle: "誰かが言った「中央配置は退屈だ」— それは間違い。中心構図が最強の選択肢となる時",
        intro:
          "多くの写真入門書は「初心者は被写体を中央に置くな」と教えます。しかし、ウェス・アンダーソン、スタンリー・キューブリック、杉本博司を見てください — 彼らは中央構図の達人です。中心に置くという選択は、その理由を理解していれば、並外れた視覚的インパクトを生み出すことができます。十字線グリッドはその理由を「見る」助けとなります。",
        sections: [
          {
            heading: "中央構図が機能する時",
            body: "対称的なシーン — 反射、建築のアトリウム、トンネルの終わり — これらはフレームがすでに対称性についてのものであるため、自然に中央構図に適しています。直接の視線 — 被写体がカメラをまっすぐ見つめるポートレートや、動物の直接のアイコンタクト — 中央配置はこの「アイコンタクト」を強化します。孤独感 — 広大な空間の中の一人の人物 — 中央配置は空虚と孤独の対比を増幅します。ミニマリズム — 究極のシンプルさと秩序を求めるなら、中央構図は最も純粋な表現です。",
          },
          {
            heading: "クロスグリッドでのトリミング実践",
            body: "CropImageArt でセンタークロスモードに切り替えると、垂直線と水平線が正確な中心で交差し、小さな円でマークされています。クロスグリッドを使ったトリミング：① 被写体の視覚的重心（必ずしも幾何学的中心ではない）がクロスの交点に合うようにする — 人物なら目や顔の中心、建築なら構造的中心。② 水平線を使って地平線や背景の水平基準を整列させる。③ クロスの4つの象限が「正と負の空間」になる — 被写体が中央の交差ゾーンを占め、4つの象限が呼吸空間として機能する。トリミングの鍵は、4つの象限すべてが被写体に均等に「奉仕」する境界を見つけることです。",
          },
        ],
        tips: [
          "被写体が「十分に強い」必要がある",
          "対称的なシーンは中央構図の自然なパートナー",
          "カメラを直視するポートレートは中央配置が最適",
          "対称グリッドと組み合わせると効果倍増",
        ],
      },
      ko: {
        title: "센터 크로스 구도: 중심의 힘",
        subtitle: "누군가 '중앙 배치는 지루하다'고 말했다면 — 그건 틀렸습니다. 중앙 구도가 최강일 때",
        intro:
          "많은 사진 입문서는 '초보자는 피사체를 중앙에 두지 마라'고 가르칩니다. 하지만 웨스 앤더슨, 스탠리 큐브릭, 스기모토 히로시를 보세요 — 그들은 중앙 구도의 대가들입니다. 중앙 배치를 선택하는 것은 그 이유를 이해한다면 엄청난 시각적 임팩트를 만들어낼 수 있습니다. 십자선 그리드는 그 이유를 '보는' 데 도움을 줍니다.",
        sections: [
          {
            heading: "중앙 구도가 효과적인 순간",
            body: "대칭적 장면 — 반사, 건축 아트리움, 터널의 끝 — 이것들은 프레임이 이미 대칭에 관한 것이기 때문에 자연스럽게 중앙 구도에 적합합니다. 직접적인 시선 — 피사체가 카메라를 똑바로 응시하는 인물 사진, 동물의 직접적인 아이컨택 — 중앙 배치는 이 '아이컨택'을 강화합니다. 고립감 — 광활한 공간 속 한 사람 — 중앙 배치는 공허함과 고독의 대비를 증폭시킵니다. 미니멀리즘 — 최고의 단순함과 질서를 추구한다면 중앙 구도가 가장 순수한 표현입니다.",
          },
          {
            heading: "십자 그리드로 크롭 실습",
            body: "CropImageArt에서 센터 크로스 모드로 전환하면 수직선과 수평선이 정확한 중심에서 교차하며 작은 원으로 표시됩니다. 십자 그리드를 사용한 크롭: ① 피사체의 시각적 무게 중심(반드시 기하학적 중심은 아님)이 십자 교차점과 일치하도록 — 인물은 눈이나 얼굴 중심, 건축은 구조적 중심. ② 수평선을 사용해 지평선이나 배경의 수평 기준을 정렬. ③ 십자의 4개 사분면이 '양과 음의 공간'이 됨 — 피사체는 중앙 교차 영역을 차지하고 4개 사분면은 여백으로 기능. 크롭의 핵심은 4개 사분면 모두가 피사체에 균등하게 '봉사'하는 경계를 찾는 것입니다.",
          },
        ],
        tips: [
          "피사체가 '충분히 강해야' 중앙 구도가 효과적",
          "대칭적 장면은 중앙 구도의 자연스러운 파트너",
          "카메라를 직시하는 인물 사진은 중앙 배치가 최적",
          "대칭 그리드와 함께 사용하면 효과 배가",
        ],
      },
      es: {
        title: "Composición de Cruz Central: El Poder del Centro",
        subtitle: "Alguien dijo 'colocar en el centro es aburrido' — está equivocado. Cuándo la composición central es la opción más poderosa",
        intro:
          "Muchos manuales de fotografía enseñan 'no coloques al sujeto en el centro'. Pero mira a Wes Anderson, Stanley Kubrick, Hiroshi Sugimoto — son maestros de la composición central. Elegir colocar en el centro, cuando entiendes el porqué, puede crear un impacto visual extraordinario. La cuadrícula de cruz te ayuda a 'ver' ese porqué.",
        sections: [
          {
            heading: "Cuándo Funciona la Composición Central",
            body: "Escenas simétricas: reflejos, atrios arquitectónicos, el final de un túnel — se adaptan naturalmente a la composición central porque el encuadre ya trata sobre simetría. Mirada directa: retratos donde el sujeto mira directamente a cámara, vida salvaje con contacto visual directo — la colocación central intensifica este 'contacto visual'. Aislamiento: la soledad de una sola figura en un vasto espacio — la colocación central amplifica el contraste entre vacío y soledad. Minimalismo: si buscas la máxima simplicidad y orden, la composición central es la expresión más pura.",
          },
          {
            heading: "Recorte Práctico con la Cuadrícula Cruz",
            body: "Al cambiar al modo Cruz Central en CropImageArt, verás una línea vertical y horizontal que se cruzan en el centro exacto, marcado con un círculo. Al recortar con la cuadrícula cruz: ① Asegúrate de que el centro de gravedad visual del sujeto se alinee con la intersección — para personas, suelen ser los ojos; para arquitectura, el centro estructural. ② Usa la línea horizontal para alinear el horizonte. ③ Los cuatro cuadrantes se convierten en 'espacio positivo y negativo' — el sujeto ocupa la zona central, los cuadrantes sirven como espacio de respiración.",
          },
        ],
        tips: [
          "El sujeto debe ser 'lo suficientemente fuerte' para la composición central",
          "Las escenas simétricas son compañeras naturales de la composición central",
          "Retratos con mirada directa a cámara: la ubicación central es la mejor opción",
          "Combínala con la cuadrícula de simetría para duplicar el impacto",
        ],
      },
      fr: {
        title: "Composition en Croix Centrale : Le Pouvoir du Centre",
        subtitle: "Quelqu'un a dit 'placer au centre est ennuyeux' — c'est faux. Quand la composition centrale est le choix le plus puissant",
        intro:
          "Beaucoup de manuels photo enseignent 'ne placez pas le sujet au centre'. Mais regardez Wes Anderson, Stanley Kubrick, Hiroshi Sugimoto — ce sont des maîtres de la composition centrale. Choisir de placer au centre, quand vous comprenez pourquoi, peut créer un impact visuel extraordinaire. La grille en croix vous aide à 'voir' ce pourquoi.",
        sections: [
          {
            heading: "Quand la Composition Centrale Fonctionne",
            body: "Scènes symétriques : reflets, atriums architecturaux, le bout d'un tunnel — s'adaptent naturellement car le cadre est déjà 'sur' la symétrie. Regard direct : portraits où le sujet regarde droit vers l'objectif, faune avec contact visuel direct — le placement central intensifie ce 'contact visuel'. Isolement : la solitude d'une figure unique dans un vaste espace — le placement central amplifie le contraste entre vide et solitude. Minimalisme : si vous recherchez la simplicité et l'ordre ultimes, la composition centrale est l'expression la plus pure.",
          },
          {
            heading: "Recadrage Pratique avec la Grille en Croix",
            body: "En mode Croix Centrale dans CropImageArt, une ligne verticale et horizontale se croisent au centre exact, marqué d'un cercle. Pour recadrer : ① Assurez-vous que le centre de gravité visuel du sujet s'aligne avec l'intersection — pour les personnes, les yeux ; pour l'architecture, le centre structurel. ② Utilisez la ligne horizontale pour aligner l'horizon. ③ Les quatre quadrants deviennent 'espace positif et négatif' — le sujet occupe la zone centrale, les quadrants servent d'espace de respiration.",
          },
        ],
        tips: [
          "Le sujet doit être 'assez fort' pour la composition centrale",
          "Les scènes symétriques sont des partenaires naturels",
          "Portraits avec regard direct : le placement central est optimal",
          "Associez à la grille de symétrie pour un impact doublé",
        ],
      },
      de: {
        title: "Mittelkreuz-Komposition: Die Kraft der Mitte",
        subtitle: "Jemand sagte 'Mittenplatzierung ist langweilig' — das ist falsch. Wann die zentrale Komposition die stärkste Wahl ist",
        intro:
          "Viele Fotohandbücher lehren 'Setzen Sie das Motiv nicht in die Mitte'. Aber sehen Sie sich Wes Anderson, Stanley Kubrick, Hiroshi Sugimoto an — sie sind Meister der zentralen Komposition. Die Wahl der Mitte kann, wenn man das Warum versteht, außergewöhnliche visuelle Wirkung erzeugen. Das Kreuzraster hilft, dieses Warum zu 'sehen'.",
        sections: [
          {
            heading: "Wann die Zentrale Komposition Funktionier",
            body: "Symmetrische Szenen: Spiegelungen, architektonische Atrien, das Ende eines Tunnels — passen natürlich, da der Rahmen bereits 'über' Symmetrie ist. Direkter Blick: Porträts, bei denen das Motiv direkt in die Kamera schaut, Tieraufnahmen mit direktem Augenkontakt — zentrale Platzierung verstärkt diesen 'Augenkontakt'. Isolation: die Einsamkeit einer einzelnen Figur im weiten Raum — zentrale Platzierung verstärkt den Kontrast. Minimalismus: Wenn Sie nach ultimativer Einfachheit und Ordnung streben, ist die zentrale Komposition der reinste Ausdruck.",
          },
          {
            heading: "Praktisches Zuschneiden mit dem Kreuzraster",
            body: "Im Mittelkreuz-Modus von CropImageArt kreuzen sich eine vertikale und horizontale Linie im exakten Zentrum, markiert durch einen Kreis. Beim Zuschneiden: ① Stellen Sie sicher, dass der visuelle Schwerpunkt des Motivs mit der Kreuzung übereinstimmt — bei Personen die Augen, bei Architektur das strukturelle Zentrum. ② Nutzen Sie die Horizontlinie zur Ausrichtung des Horizonts. ③ Die vier Quadranten werden zu 'Positiv- und Negativraum' — das Motiv besetzt die zentrale Zone, die Quadranten dienen als Atemraum.",
          },
        ],
        tips: [
          "Das Motiv muss 'stark genug' für die zentrale Komposition sein",
          "Symmetrische Szenen sind natürliche Partner",
          "Porträts mit direktem Blick: zentrale Platzierung ist optimal",
          "Kombinieren Sie mit dem Symmetrie-Raster für doppelte Wirkung",
        ],
      },
      pt: {
        title: "Composição em Cruz Central: O Poder do Centro",
        subtitle: "Alguém disse 'colocar no centro é entediante' — está errado. Quando a composição central é a escolha mais poderosa",
        intro:
          "Muitos manuais de fotografia ensinam 'não coloque o assunto no centro'. Mas veja Wes Anderson, Stanley Kubrick, Hiroshi Sugimoto — eles são mestres da composição central. Escolher colocar no centro, quando você entende o porquê, pode criar um impacto visual extraordinário. A grade em cruz ajuda a 'ver' esse porquê.",
        sections: [
          {
            heading: "Quando a Composição Central Funciona",
            body: "Cenas simétricas: reflexos, átrios arquitetônicos, o fim de um túnel — se adaptam naturalmente porque o quadro já é 'sobre' simetria. Olhar direto: retratos onde o assunto olha diretamente para a câmera, vida selvagem com contato visual direto — a colocação central intensifica esse 'contato visual'. Isolamento: a solidão de uma única figura em um vasto espaço — a colocação central amplifica o contraste entre vazio e solidão. Minimalismo: se você busca a máxima simplicidade e ordem, a composição central é a expressão mais pura.",
          },
          {
            heading: "Recorte Prático com a Grade em Cruz",
            body: "No modo Cruz Central do CropImageArt, uma linha vertical e horizontal se cruzam no centro exato, marcado por um círculo. Ao recortar: ① Certifique-se de que o centro de gravidade visual do assunto se alinhe com a interseção — para pessoas, geralmente os olhos; para arquitetura, o centro estrutural. ② Use a linha horizontal para alinhar o horizonte. ③ Os quatro quadrantes tornam-se 'espaço positivo e negativo' — o assunto ocupa a zona central, os quadrantes servem como espaço de respiração.",
          },
        ],
        tips: [
          "O assunto precisa ser 'forte o suficiente' para a composição central",
          "Cenas simétricas são parceiras naturais da composição central",
          "Retratos com olhar direto: a colocação central é a melhor opção",
          "Combine com a grade de simetria para impacto dobrado",
        ],
      },
    },
  },

  // ─── 7. Symmetry ──────────────────────────────────
  {
    slug: "symmetry",
    compositionType: "symmetry",
    publishedAt: "2026-08-09",
    readTime: { en: "8 min", "zh-CN": "8 分钟", "zh-TW": "8 分鐘" },
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
      },
      ja: {
        title: "対称構図：視覚的秩序の究極の表現",
        subtitle: "『グランド・ブダペスト・ホテル』から建築写真まで、完璧な対称性が私たちを魅了する理由",
        intro:
          "ウェス・アンダーソンの『グランド・ブダペスト・ホテル』は、おそらく映画における対称構図への最も熱烈な賛辞です。対称性への人間の魅力は進化生物学に根ざしています。対称的な顔は健康な遺伝子を示し、対称的な環境は秩序と安全を示します。写真において、対称構図は最もインパクトがあり、かつ最も難しいアプローチの一つです。完璧な対称性が目を惹きつけるからインパクトがあり、カメラ内で完璧な対称性を達成するのが難しいから挑戦的です。",
        sections: [
          {
            heading: "3種類の対称性",
            body: "① 反射対称 — 最も一般的で、フレームが軸に沿って左右（または上下）に鏡像化されます。水面の反射、建物の正面、トンネル。② 回転対称 — フレームが中心点の周りで回転すると自身と一致します。円形ドーム、螺旋階段、円卓の俯瞰ショット。③ 並進対称 — パターンが水平または垂直に繰り返されます。フェンス、窓の配列、本の列。これら3つのタイプを理解することで、トリミング時に写真の中の潜在的な対称構造を特定できます。",
          },
          {
            heading: "「完璧な対称」のトリミングテクニック",
            body: "CropImageArt の対称グリッド（太い垂直中心線 + 水平参照線）を使用したトリミング：① まず画像内の「対称であるべき」軸を特定します — 建築なら通常は正面玄関の中心線、反射なら水面と実景の境界線。② この軸が真の垂直線になるように画像を回転します — 0.5度の回転でも最終的な対称性を劇的に改善します。③ 垂直軸の両側を均等にトリミングします — 両側のピクセル幅を完全に同一にします。④ 最後に「視覚的対称性」をチェックします — 数学的対称性が視覚的対称性と等しいとは限りません。",
          },
        ],
        tips: [
          "建築、反射、トンネルは自然な対称シーン",
          "微小回転（0.5～2度）で対称性を完璧に",
          "中軸線の両側のピクセル幅を完全に同一に",
          "数学的対称 ≠ 視覚的対称 — 色彩と明るさのバランスに注意",
        ],
      },
      ko: {
        title: "대칭 구도: 시각적 질서의 궁극적 표현",
        subtitle: "'그랜드 부다페스트 호텔'부터 건축 사진까지, 완벽한 대칭이 우리를 매료시키는 이유",
        intro:
          "웨스 앤더슨의 '그랜드 부다페스트 호텔'은 아마도 영화에서 대칭 구도에 대한 가장 열렬한 찬사일 것입니다. 대칭에 대한 인간의 매혹은 진화 생물학에 뿌리를 두고 있습니다. 대칭적인 얼굴은 건강한 유전자를, 대칭적인 환경은 질서와 안전을 나타냅니다. 사진에서 대칭 구도는 가장 임팩트 있고 가장 도전적인 접근법 중 하나입니다.",
        sections: [
          {
            heading: "세 가지 유형의 대칭",
            body: "① 반사 대칭 — 가장 일반적이며, 프레임이 축을 따라 좌우(또는 상하)로 거울처럼 반사됩니다. 물 반사, 건물 정면, 터널. ② 회전 대칭 — 프레임이 중심점을 기준으로 회전할 때 자신과 일치합니다. 원형 돔, 나선 계단, 원탁의 탑뷰. ③ 병진 대칭 — 패턴이 수평 또는 수직으로 반복됩니다. 울타리, 창문 배열, 책의 열. 이 세 가지 유형을 이해하면 크롭할 때 사진 속 잠재적 대칭 구조를 식별하는 데 도움이 됩니다.",
          },
          {
            heading: "'완벽한 대칭' 크롭 테크닉",
            body: "CropImageArt의 대칭 그리드(굵은 수직 중심선 + 수평 참조선)를 사용한 크롭: ① 먼저 이미지에서 '대칭이어야 할' 축을 식별합니다 — 건축은 보통 정문의 중심선, 반사는 물과 실경의 경계선. ② 이 축이 진정한 수직선이 되도록 이미지를 회전합니다 — 0.5도 회전만으로도 최종 대칭이 극적으로 개선됩니다. ③ 수직 축 양쪽을 균등하게 크롭합니다 — 양쪽 픽셀 너비를 완전히 동일하게 만듭니다. ④ 마지막으로 '시각적 대칭'을 확인합니다 — 수학적 대칭이 시각적 대칭과 같지 않을 수 있습니다.",
          },
        ],
        tips: [
          "건축, 반사, 터널은 자연스러운 대칭 장면",
          "미세 회전(0.5~2도)으로 대칭 완성도 향상",
          "중심축 양쪽 픽셀 너비를 완전히 동일하게",
          "수학적 대칭 ≠ 시각적 대칭 — 색상과 밝기 균형에 주의",
        ],
      },
      es: {
        title: "Composición Simétrica: La Expresión Definitiva del Orden Visual",
        subtitle: "De 'El Gran Hotel Budapest' a la fotografía arquitectónica, por qué la simetría perfecta nos cautiva",
        intro:
          "'El Gran Hotel Budapest' de Wes Anderson es quizás el tributo más ferviente del cine a la composición simétrica. La fascinación humana por la simetría tiene raíces en la biología evolutiva: los rostros simétricos señalan genes saludables; los entornos simétricos señalan orden y seguridad. En fotografía, la composición simétrica es uno de los enfoques más impactantes — y más desafiantes.",
        sections: [
          {
            heading: "Tres Tipos de Simetría",
            body: "① Simetría reflectiva — la más común, el encuadre se refleja izquierda-derecha (o arriba-abajo) a lo largo de un eje. Reflejos en agua, fachadas de edificios, túneles. ② Simetría rotacional — el encuadre coincide consigo mismo al girar alrededor de un punto central. Cúpulas circulares, escaleras de caracol, tomas cenitales de mesas redondas. ③ Simetría traslacional — los patrones se repiten horizontal o verticalmente. Vallas, hileras de ventanas, filas de libros. Comprender estos tipos te ayuda a identificar estructuras simétricas potenciales al recortar.",
          },
          {
            heading: "Técnica de Recorte para 'Simetría Perfecta'",
            body: "Usando la cuadrícula de Simetría de CropImageArt (línea central vertical gruesa + línea de referencia horizontal): ① Identifica el eje 'que debería ser simétrico' en tu imagen — para arquitectura, la línea central de la entrada principal; para reflejos, la línea divisoria entre agua y escena real. ② Rota la imagen para que este eje sea una verdadera línea vertical — incluso una rotación de 0.5° mejora drásticamente la simetría final. ③ Recorta uniformemente a ambos lados del eje vertical — haz que el ancho en píxeles sea idéntico en ambos lados. ④ Verifica la 'simetría visual' — la simetría matemática no siempre equivale a simetría visual.",
          },
        ],
        tips: [
          "Arquitectura, reflejos y túneles son escenas simétricas naturales",
          "Micro-rotación (0.5–2 grados) puede perfeccionar la simetría",
          "Asegura anchos de píxeles idénticos a ambos lados del eje central",
          "Simetría matemática ≠ simetría visual — equilibra color y brillo",
        ],
      },
      fr: {
        title: "Composition Symétrique : L'Expression Ultime de l'Ordre Visuel",
        subtitle: "Du 'Grand Budapest Hotel' à la photo d'architecture, pourquoi la symétrie parfaite nous captive",
        intro:
          "'Le Grand Budapest Hotel' de Wes Anderson est peut-être le plus fervent hommage du cinéma à la composition symétrique. La fascination humaine pour la symétrie est ancrée dans la biologie évolutive : les visages symétriques signalent des gènes sains ; les environnements symétriques signalent l'ordre et la sécurité. En photographie, la composition symétrique est l'une des approches les plus percutantes — et les plus exigeantes.",
        sections: [
          {
            heading: "Trois Types de Symétrie",
            body: "① Symétrie réflective — la plus courante, le cadre se reflète gauche-droite (ou haut-bas) le long d'un axe. Reflets d'eau, façades de bâtiments, tunnels. ② Symétrie rotationnelle — le cadre coïncide avec lui-même après rotation autour d'un point central. Dômes circulaires, escaliers en colimaçon, vues plongeantes de tables rondes. ③ Symétrie translationnelle — les motifs se répètent horizontalement ou verticalement. Clôtures, rangées de fenêtres, files de livres. Comprendre ces types vous aide à identifier les structures symétriques potentielles lors du recadrage.",
          },
          {
            heading: "Technique de Recadrage pour une 'Symétrie Parfaite'",
            body: "Avec la grille de Symétrie de CropImageArt (ligne centrale verticale épaisse + ligne de référence horizontale) : ① Identifiez l'axe 'qui devrait être symétrique' — pour l'architecture, la ligne centrale de l'entrée principale ; pour les reflets, la ligne de partage entre l'eau et la scène réelle. ② Faites pivoter l'image pour que cet axe devienne une vraie ligne verticale — même une rotation de 0,5° améliore radicalement la symétrie. ③ Recadrez uniformément des deux côtés de l'axe vertical — largeur en pixels identique des deux côtés. ④ Vérifiez la 'symétrie visuelle' — la symétrie mathématique n'égale pas toujours la symétrie visuelle.",
          },
        ],
        tips: [
          "Architecture, reflets et tunnels sont des scènes symétriques naturelles",
          "Micro-rotation (0,5–2 degrés) peut perfectionner la symétrie",
          "Assurez des largeurs de pixels identiques des deux côtés de l'axe",
          "Symétrie mathématique ≠ symétrie visuelle — équilibrez couleur et luminosité",
        ],
      },
      de: {
        title: "Symmetrie-Komposition: Der ultimative Ausdruck visueller Ordnung",
        subtitle: "Vom 'Grand Budapest Hotel' zur Architekturfotografie, warum perfekte Symmetrie uns fesselt",
        intro:
          "Wes Andersons 'Grand Budapest Hotel' ist vielleicht die leidenschaftlichste Hommage des Kinos an die symmetrische Komposition. Die menschliche Faszination für Symmetrie wurzelt in der Evolutionsbiologie: symmetrische Gesichter signalisieren gesunde Gene; symmetrische Umgebungen signalisieren Ordnung und Sicherheit. In der Fotografie ist die symmetrische Komposition einer der wirkungsvollsten — und anspruchsvollsten — Ansätze.",
        sections: [
          {
            heading: "Drei Arten von Symmetrie",
            body: "① Reflexionssymmetrie — am häufigsten, der Rahmen spiegelt sich links-rechts (oder oben-unten) entlang einer Achse. Wasserreflexionen, Gebäudefassaden, Tunnel. ② Rotationssymmetrie — der Rahmen deckt sich bei Drehung um einen Mittelpunkt mit sich selbst. Runde Kuppeln, Wendeltreppen, Draufsichten auf runde Tische. ③ Translationssymmetrie — Muster wiederholen sich horizontal oder vertikal. Zäune, Fensterreihen, Bücherreihen. Das Verständnis dieser Typen hilft, potenzielle symmetrische Strukturen beim Zuschneiden zu erkennen.",
          },
          {
            heading: "Zuschneidetechnik für 'Perfekte Symmetrie'",
            body: "Mit dem Symmetrie-Raster von CropImageArt (dicke vertikale Mittellinie + horizontale Referenzlinie): ① Identifizieren Sie die 'sollte-symmetrisch-sein'-Achse — bei Architektur die Mittellinie des Haupteingangs; bei Reflexionen die Trennlinie zwischen Wasser und realer Szene. ② Drehen Sie das Bild, bis diese Achse eine echte Vertikale ist — selbst 0,5° verbessern die Symmetrie drastisch. ③ Schneiden Sie gleichmäßig auf beiden Seiten der vertikalen Achse zu — Pixelbreite auf beiden Seiten identisch. ④ Prüfen Sie die 'visuelle Symmetrie' — mathematische Symmetrie ≠ visuelle Symmetrie.",
          },
        ],
        tips: [
          "Architektur, Reflexionen und Tunnel sind natürliche Symmetrie-Szenen",
          "Mikro-Rotation (0,5–2 Grad) kann die Symmetrie perfektionieren",
          "Pixelbreite auf beiden Seiten der Mittelachse identisch halten",
          "Mathematische Symmetrie ≠ visuelle Symmetrie — auf Farb- und Helligkeitsbalance achten",
        ],
      },
      pt: {
        title: "Composição Simétrica: A Expressão Definitiva da Ordem Visual",
        subtitle: "Do 'Grand Budapest Hotel' à fotografia arquitetônica, por que a simetria perfeita nos cativa",
        intro:
          "'O Grande Hotel Budapeste' de Wes Anderson é talvez o mais fervoroso tributo do cinema à composição simétrica. O fascínio humano pela simetria está enraizado na biologia evolutiva: rostos simétricos sinalizam genes saudáveis; ambientes simétricos sinalizam ordem e segurança. Na fotografia, a composição simétrica é uma das abordagens mais impactantes — e mais desafiadoras.",
        sections: [
          {
            heading: "Três Tipos de Simetria",
            body: "① Simetria reflexiva — a mais comum, o quadro se espelha esquerda-direita (ou cima-baixo) ao longo de um eixo. Reflexos na água, fachadas de prédios, túneis. ② Simetria rotacional — o quadro coincide consigo mesmo ao girar em torno de um ponto central. Cúpulas circulares, escadas em caracol, vistas aéreas de mesas redondas. ③ Simetria translacional — padrões se repetem horizontal ou verticalmente. Cercas, fileiras de janelas, filas de livros. Compreender esses tipos ajuda a identificar estruturas simétricas potenciais ao recortar.",
          },
          {
            heading: "Técnica de Recorte para 'Simetria Perfeita'",
            body: "Usando a grade de Simetria do CropImageArt (linha central vertical grossa + linha de referência horizontal): ① Identifique o eixo 'que deveria ser simétrico' na sua imagem — para arquitetura, a linha central da entrada principal; para reflexos, a linha divisória entre água e cena real. ② Gire a imagem para que este eixo se torne uma linha vertical verdadeira — mesmo uma rotação de 0,5° melhora drasticamente a simetria final. ③ Recorte uniformemente em ambos os lados do eixo vertical — largura em pixels idêntica nos dois lados. ④ Verifique a 'simetria visual' — simetria matemática nem sempre equivale a simetria visual.",
          },
        ],
        tips: [
          "Arquitetura, reflexos e túneis são cenas simétricas naturais",
          "Micro-rotação (0,5–2 graus) pode aperfeiçoar a simetria",
          "Garanta larguras de pixels idênticas em ambos os lados do eixo",
          "Simetria matemática ≠ simetria visual — equilibre cor e brilho",
        ],
      },
    },
  },

  // ─── 8. Leading Lines ─────────────────────────────
  {
    slug: "leading-lines",
    compositionType: "leading-lines",
    publishedAt: "2026-08-09",
    readTime: { en: "9 min", "zh-CN": "9 分钟", "zh-TW": "9 分鐘" },
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
      },
      ja: {
        title: "誘導線構図：視線をリードする技法",
        subtitle: "道路、川、階段 — 線を使って見る人の視線を誘導する方法",
        intro:
          "誘導線は構図の世界で最も強力でありながら、最も過小評価されているツールの一つです。三分割法や黄金比が「どこに置くか」を教えるのに対し、誘導線は「どう動かすか」を教えます。うまく配置された誘導線は、見る人の視線をフレーム内で方向付け、指定された経路をたどらせ、選ばれた終点に到達させます。",
        sections: [
          {
            heading: "自然と人工の誘導線",
            body: "誘導線は大きく2つのカテゴリーに分かれます。自然の線 — 川、海岸線、稜線、雲の形成 — これらは有機的で柔らかく、風景や自然写真に最適です。人工の線 — 道路、線路、橋、フェンス、階段、廊下 — これらはより正確で剛直であり、強い方向感を生み出します。最も効果的な誘導線は通常、曲線です — 直線は視線をフレームの外に素早く導きますが、曲線は視覚的な旅を作り出します。",
          },
          {
            heading: "誘導線の「入口」と「出口」",
            body: "誘導線の質は2つの要素にかかっています。入口点と終点です。入口点（誘導線が始まる場所）は通常、フレームの隅または端にあるべきです — これにより見る人は「線に引き込まれている」と感じます。終点（誘導線が指し示す場所）は「コンテンツ」のある位置であるべきです — 山頂、人物、ドア。終点に何もなければ、見る人は失望します。トリミング時には、誘導線の経路上の邪魔物を切り取ることが一般的です。",
          },
          {
            heading: "誘導線トリミング実践",
            body: "CropImageArt で誘導線モードに切り替えると、角から中心領域を指すラインが表示されます。トリミング手順：① 写真の中で最も効果的な自然の誘導線を特定する。② 誘導線の起点が隅または端に近づくようにクロップ枠を調整する。③ 終点が意味のある要素を指すようにする — 必要に応じてクロップで「移動」させる。④ 誘導線を遮る邪魔な要素を取り除く。⑤ クロップ比率を使って誘導方向を強化する — 横構図（16:9）は水平方向の誘導を、縦構図（9:16）は垂直方向の誘導を強化します。",
          },
        ],
        tips: [
          "起点が隅/端 = 招待、起点が中央 = フレーム外へ",
          "終点にはコンテンツが必要、さもなければ見る人は失望する",
          "経路上の邪魔物を取り除き、線路をきれいに保つ",
          "横構図で水平誘導、縦構図で垂直誘導を強化",
        ],
      },
      ko: {
        title: "유도선 구도: 시선을 이끄는 기술",
        subtitle: "길, 강, 계단 — 선을 사용해 보는 사람의 시선을 유도하는 방법",
        intro:
          "유도선은 구도의 세계에서 가장 강력하면서도 가장 과소평가된 도구 중 하나입니다. 삼분할법과 황금비율이 '어디에 놓을지'를 가르친다면, 유도선은 '어떻게 움직일지'를 가르칩니다. 잘 배치된 유도선은 보는 사람의 시선을 프레임 안으로 방향 지어 지정된 경로를 따르게 하고 선택된 종착점에 도달하게 합니다.",
        sections: [
          {
            heading: "자연과 인공의 유도선",
            body: "유도선은 크게 두 가지 범주로 나뉩니다. 자연적 선 — 강, 해안선, 산등성이, 구름 형성 — 유기적이고 부드러우며 풍경과 자연 사진에 이상적입니다. 인공적 선 — 도로, 철로, 다리, 울타리, 계단, 복도 — 더 정확하고 딱딱하며 강한 방향감을 만듭니다. 가장 효과적인 유도선은 보통 곡선입니다 — 직선은 시선을 프레임 밖으로 빠르게 이끌지만, 곡선은 시각적 여정을 만듭니다.",
          },
          {
            heading: "유도선의 '입구'와 '출구'",
            body: "유도선의 품질은 두 가지 요소에 달려 있습니다: 진입점과 종착점. 진입점(유도선이 시작되는 곳)은 보통 프레임의 모서리나 가장자리에 있어야 합니다 — 이는 보는 사람이 '선에 이끌려 들어간다'고 느끼게 합니다. 종착점(유도선이 가리키는 곳)은 '내용'이 있는 위치여야 합니다 — 산봉우리, 인물, 문. 종착점에 아무것도 없으면 보는 사람은 실망합니다. 크롭 시 유도선 경로 위의 방해물을 잘라내는 것이 일반적입니다.",
          },
          {
            heading: "유도선 크롭 실전",
            body: "CropImageArt에서 유도선 모드로 전환하면 모서리에서 중앙 영역을 가리키는 선이 표시됩니다. 크롭 단계: ① 사진에서 가장 효과적인 자연 유도선을 식별한다. ② 유도선의 시작점이 모서리나 가장자리에 가까워지도록 크롭 프레임을 조정한다. ③ 종착점이 의미 있는 요소를 가리키도록 한다 — 필요시 크롭으로 '이동'시킨다. ④ 유도선을 방해하는 요소를 제거한다. ⑤ 크롭 비율로 유도 방향을 강화한다 — 가로 구도(16:9)는 수평 유도를, 세로 구도(9:16)는 수직 유도를 강화한다.",
          },
        ],
        tips: [
          "시작점이 모서리/가장자리 = 초대, 시작점이 중앙 = 프레임 밖으로",
          "종착점에는 내용이 필요, 그렇지 않으면 보는 사람은 실망",
          "경로 위의 방해물 제거, 선로를 깨끗하게 유지",
          "가로 구도로 수평 유도, 세로 구도로 수직 유도 강화",
        ],
      },
      es: {
        title: "Líneas Guía: El Arte de Dirigir la Mirada",
        subtitle: "Carreteras, ríos, escaleras — cómo usar líneas para guiar la mirada del espectador",
        intro:
          "Las líneas guía son una de las herramientas más poderosas — e infravaloradas — en el mundo de la composición. Mientras los tercios y la proporción áurea enseñan 'dónde colocar', las líneas guía enseñan 'cómo moverse'. Una línea guía bien colocada orienta la mirada del espectador dentro del encuadre, haciéndola seguir un camino y llegar a un destino.",
        sections: [
          {
            heading: "Líneas Guía Naturales vs. Artificiales",
            body: "Las líneas guía se dividen en dos categorías. Líneas naturales — ríos, costas, crestas montañosas, formaciones de nubes — orgánicas y suaves, ideales para paisajes y naturaleza. Líneas artificiales — carreteras, vías férreas, puentes, vallas, escaleras, pasillos — más precisas y rígidas, crean un fuerte sentido de dirección. Las líneas guía más efectivas suelen ser curvas — las rectas sacan la mirada del encuadre rápidamente, mientras que las curvas crean un viaje visual.",
          },
          {
            heading: "'Entrada' y 'Salida' de las Líneas Guía",
            body: "La calidad de una línea guía depende de dos factores: punto de entrada y punto final. El punto de entrada debe estar generalmente en una esquina o borde del encuadre — así el espectador siente que 'la línea lo atrae'. El punto final debe ser una ubicación con 'contenido' — una cima, una persona, una puerta. Si el punto final no tiene nada, el espectador se siente decepcionado. Al recortar, una operación común es eliminar distracciones en el camino de la línea guía.",
          },
          {
            heading: "Recorte Práctico con Líneas Guía",
            body: "Al cambiar al modo Líneas Guía en CropImageArt, verás líneas desde las esquinas hacia el área central. Pasos: ① Identifica la línea guía natural más efectiva en tu foto. ② Ajusta el marco de recorte para que el inicio de la línea esté cerca de una esquina o borde. ③ Asegúrate de que el punto final apunte a un elemento significativo. ④ Elimina elementos que interrumpan la línea guía. ⑤ Usa la proporción de recorte para reforzar la dirección — horizontal (16:9) para guía horizontal, vertical (9:16) para guía vertical.",
          },
        ],
        tips: [
          "Inicio en esquina/borde = invitación; inicio en centro = saca del encuadre",
          "El punto final debe tener contenido, o el espectador se decepcionará",
          "Elimina distracciones en el camino, mantén la línea limpia",
          "Formato horizontal refuerza guía horizontal; vertical, guía vertical",
        ],
      },
      fr: {
        title: "Lignes Directrices : L'Art de Diriger le Regard",
        subtitle: "Routes, rivières, escaliers — comment utiliser les lignes pour guider le regard du spectateur",
        intro:
          "Les lignes directrices sont l'un des outils les plus puissants — et les plus sous-estimés — du monde de la composition. Alors que les tiers et le nombre d'or enseignent 'où placer', les lignes directrices enseignent 'comment se déplacer'. Une ligne directrice bien placée oriente le regard du spectateur dans le cadre, lui faisant suivre un chemin et atteindre une destination.",
        sections: [
          {
            heading: "Lignes Directrices Naturelles vs. Artificielles",
            body: "Les lignes directrices se divisent en deux catégories. Lignes naturelles — rivières, littoraux, crêtes montagneuses, formations nuageuses — organiques et douces, idéales pour les paysages. Lignes artificielles — routes, voies ferrées, ponts, clôtures, escaliers, couloirs — plus précises et rigides, créant un fort sens de direction. Les lignes directrices les plus efficaces sont généralement des courbes — les lignes droites font sortir le regard du cadre rapidement, tandis que les courbes créent un voyage visuel.",
          },
          {
            heading: "'Entrée' et 'Sortie' des Lignes Directrices",
            body: "La qualité d'une ligne directrice dépend de deux facteurs : point d'entrée et point final. Le point d'entrée doit généralement être dans un coin ou un bord du cadre — le spectateur a l'impression que 'la ligne l'attire'. Le point final doit être un emplacement avec du 'contenu' — un sommet, une personne, une porte. Si le point final est vide, le spectateur est déçu. Lors du recadrage, une opération courante consiste à supprimer les distractions sur le chemin de la ligne directrice.",
          },
          {
            heading: "Recadrage Pratique avec Lignes Directrices",
            body: "En mode Lignes Directrices dans CropImageArt, vous verrez des lignes des coins vers la zone centrale. Étapes : ① Identifiez la ligne directrice naturelle la plus efficace dans votre photo. ② Ajustez le cadre pour que le début de la ligne soit proche d'un coin ou d'un bord. ③ Assurez-vous que le point final pointe vers un élément significatif. ④ Supprimez les éléments qui interrompent la ligne directrice. ⑤ Utilisez la proportion de recadrage pour renforcer la direction — horizontal (16:9) pour guide horizontal, vertical (9:16) pour guide vertical.",
          },
        ],
        tips: [
          "Début dans un coin/bord = invitation ; début au centre = fait sortir du cadre",
          "Le point final doit avoir du contenu, sinon le spectateur sera déçu",
          "Supprimez les distractions sur le chemin, gardez la ligne propre",
          "Format horizontal renforce le guide horizontal ; vertical, le guide vertical",
        ],
      },
      de: {
        title: "Führungslinien: Die Kunst, den Blick zu lenken",
        subtitle: "Straßen, Flüsse, Treppen — wie man Linien nutzt, um den Blick des Betrachters zu führen",
        intro:
          "Führungslinien sind eines der mächtigsten — und am meisten unterschätzten — Werkzeuge in der Kompositionswelt. Während Drittel und Goldener Schnitt lehren, 'wohin zu platzieren', lehren Führungslinien, 'wie zu bewegen'. Eine gut platzierte Führungslinie lenkt den Blick des Betrachters im Rahmen, lässt ihn einem Weg folgen und ein Ziel erreichen.",
        sections: [
          {
            heading: "Natürliche vs. Künstliche Führungslinien",
            body: "Führungslinien lassen sich in zwei Kategorien einteilen. Natürliche Linien — Flüsse, Küstenlinien, Bergkämme, Wolkenformationen — organisch und weich, ideal für Landschaften. Künstliche Linien — Straßen, Bahngleise, Brücken, Zäune, Treppen, Flure — präziser und starrer, erzeugen ein starkes Richtungsgefühl. Die effektivsten Führungslinien sind meist Kurven — gerade Linien führen den Blick schnell aus dem Rahmen, während Kurven eine visuelle Reise schaffen.",
          },
          {
            heading: "'Eingang' und 'Ausgang' der Führungslinien",
            body: "Die Qualität einer Führungslinie hängt von zwei Faktoren ab: Eintrittspunkt und Endpunkt. Der Eintrittspunkt sollte meist in einer Ecke oder am Rand des Rahmens liegen — so fühlt sich der Betrachter 'von der Linie hineingezogen'. Der Endpunkt sollte ein Ort mit 'Inhalt' sein — ein Gipfel, eine Person, eine Tür. Ist der Endpunkt leer, ist der Betrachter enttäuscht. Beim Zuschneiden werden oft Ablenkungen auf dem Weg der Führungslinie entfernt.",
          },
          {
            heading: "Praktisches Zuschneiden mit Führungslinien",
            body: "Im Führungslinien-Modus von CropImageArt sehen Sie Linien von den Ecken zum Zentrumsbereich. Schritte: ① Identifizieren Sie die effektivste natürliche Führungslinie in Ihrem Foto. ② Passen Sie den Zuschnitt so an, dass der Linienanfang nahe einer Ecke oder Kante liegt. ③ Stellen Sie sicher, dass der Endpunkt auf ein bedeutungsvolles Element zeigt. ④ Entfernen Sie Elemente, die die Führungslinie unterbrechen. ⑤ Nutzen Sie das Zuschnittverhältnis zur Verstärkung der Richtung — Querformat (16:9) für horizontale, Hochformat (9:16) für vertikale Führung.",
          },
        ],
        tips: [
          "Anfang in Ecke/Kante = Einladung; Anfang in Mitte = führt aus dem Rahmen",
          "Der Endpunkt muss Inhalt haben, sonst ist der Betrachter enttäuscht",
          "Ablenkungen auf dem Weg entfernen, die Linie sauber halten",
          "Querformat verstärkt horizontale, Hochformat vertikale Führung",
        ],
      },
      pt: {
        title: "Linhas Guia: A Arte de Direcionar o Olhar",
        subtitle: "Estradas, rios, escadas — como usar linhas para guiar o olhar do espectador",
        intro:
          "As linhas guia são uma das ferramentas mais poderosas — e mais subestimadas — no mundo da composição. Enquanto os terços e a proporção áurea ensinam 'onde colocar', as linhas guia ensinam 'como se mover'. Uma linha guia bem posicionada orienta o olhar do espectador dentro do quadro, fazendo-o seguir um caminho e chegar a um destino.",
        sections: [
          {
            heading: "Linhas Guia Naturais vs. Artificiais",
            body: "As linhas guia se dividem em duas categorias. Linhas naturais — rios, litorais, cristas de montanhas, formações de nuvens — orgânicas e suaves, ideais para paisagens. Linhas artificiais — estradas, ferrovias, pontes, cercas, escadas, corredores — mais precisas e rígidas, criam um forte senso de direção. As linhas guia mais eficazes são geralmente curvas — linhas retas levam o olhar para fora do quadro rapidamente, enquanto as curvas criam uma jornada visual.",
          },
          {
            heading: "'Entrada' e 'Saída' das Linhas Guia",
            body: "A qualidade de uma linha guia depende de dois fatores: ponto de entrada e ponto final. O ponto de entrada deve geralmente estar em um canto ou borda do quadro — assim o espectador sente que 'a linha o atrai para dentro'. O ponto final deve ser um local com 'conteúdo' — um pico, uma pessoa, uma porta. Se o ponto final não tem nada, o espectador fica decepcionado. Ao recortar, uma operação comum é remover distrações no caminho da linha guia.",
          },
          {
            heading: "Recorte Prático com Linhas Guia",
            body: "No modo Linhas Guia do CropImageArt, você verá linhas dos cantos em direção à área central. Passos: ① Identifique a linha guia natural mais eficaz na sua foto. ② Ajuste o quadro de recorte para que o início da linha fique próximo a um canto ou borda. ③ Certifique-se de que o ponto final aponte para um elemento significativo. ④ Remova elementos que interrompam a linha guia. ⑤ Use a proporção de recorte para reforçar a direção — horizontal (16:9) para guia horizontal, vertical (9:16) para guia vertical.",
          },
        ],
        tips: [
          "Início no canto/borda = convite; início no centro = tira do quadro",
          "O ponto final precisa ter conteúdo, ou o espectador ficará decepcionado",
          "Remova distrações no caminho, mantenha a linha limpa",
          "Formato horizontal reforça guia horizontal; vertical, guia vertical",
        ],
      },
    },
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}
