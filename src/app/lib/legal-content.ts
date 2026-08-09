import type { LangCode } from "./i18n";

export interface LegalSection {
  heading: string;
  body: string;
}

export interface LegalContent {
  title: string;
  intro: string;
  sections: LegalSection[];
  updated: string;
}

export const privacyContent: Record<LangCode, LegalContent> = {
  en: {
    title: "Privacy Policy",
    intro: "Your privacy is important to us. This policy explains how CropImageArt handles your data.",
    sections: [
      {
        heading: "Images Are Processed Locally",
        body: "All image processing happens entirely in your browser. Your images are never uploaded to any server. We do not have access to, store, or transmit your photos. This means your photos remain completely private and secure on your own device.",
      },
      {
        heading: "No Data Collection",
        body: "We do not collect, store, or share any personal information. There is no user registration, no analytics tracking, and no cookies used for tracking purposes. The only cookie we set is for remembering your language preference.",
      },
      {
        heading: "Third-Party Services",
        body: "CropImageArt does not use any third-party analytics, advertising, or tracking services. Your usage of the tool is completely private.",
      },
      {
        heading: "Contact",
        body: "If you have any questions about this privacy policy, please contact us at uncleleofan@gmail.com.",
      },
    ],
    updated: "2026-08-10",
  },
  "zh-CN": {
    title: "隐私政策",
    intro: "我们重视您的隐私。本政策说明了 CropImageArt 如何处理您的数据。",
    sections: [
      {
        heading: "图片仅在本地处理",
        body: "所有图片处理完全在您的浏览器中进行。您的图片绝不会上传到任何服务器。我们无法访问、存储或传输您的照片。这意味着您的照片完全保留在您自己的设备上，绝对私密和安全。",
      },
      {
        heading: "不收集任何数据",
        body: "我们不收集、存储或分享任何个人信息。无需用户注册，不使用分析追踪，也不使用追踪性 Cookie。我们设置的唯一 Cookie 用于记住您的语言偏好。",
      },
      {
        heading: "第三方服务",
        body: "CropImageArt 不使用任何第三方分析、广告或追踪服务。您对该工具的使用是完全私密的。",
      },
      {
        heading: "联系方式",
        body: "如果您对本隐私政策有任何疑问，请通过 uncleleofan@gmail.com 联系我们。",
      },
    ],
    updated: "2026-08-10",
  },
  "zh-TW": {
    title: "隱私政策",
    intro: "我們重視您的隱私。本政策說明了 CropImageArt 如何處理您的資料。",
    sections: [
      {
        heading: "圖片僅在本地處理",
        body: "所有圖片處理完全在您的瀏覽器中進行。您的圖片絕不會上傳到任何伺服器。我們無法存取、儲存或傳輸您的照片。這意味著您的照片完全保留在您自己的裝置上，絕對私密和安全。",
      },
      {
        heading: "不收集任何資料",
        body: "我們不收集、儲存或分享任何個人資訊。無需使用者註冊，不使用分析追蹤，也不使用追蹤性 Cookie。我們設定的唯一 Cookie 用於記住您的語言偏好。",
      },
      {
        heading: "第三方服務",
        body: "CropImageArt 不使用任何第三方分析、廣告或追蹤服務。您對該工具的使用是完全私密的。",
      },
      {
        heading: "聯絡方式",
        body: "如果您對本隱私政策有任何疑問，請透過 uncleleofan@gmail.com 與我們聯絡。",
      },
    ],
    updated: "2026-08-10",
  },
  ja: {
    title: "プライバシーポリシー",
    intro: "お客様のプライバシーは重要です。このポリシーでは、CropImageArt がデータをどのように扱うかを説明します。",
    sections: [
      {
        heading: "画像はローカルで処理されます",
        body: "すべての画像処理は完全にお客様のブラウザ内で行われます。画像がサーバーにアップロードされることは一切ありません。お客様の写真にアクセスしたり、保存したり、送信したりすることはありません。写真はお客様のデバイス上に完全に保持され、完全にプライベートで安全です。",
      },
      {
        heading: "データ収集は行いません",
        body: "個人情報の収集、保存、共有は一切行いません。ユーザー登録、分析トラッキング、追跡用 Cookie は一切使用していません。設定する唯一の Cookie は、言語設定を記憶するためのものです。",
      },
      {
        heading: "サードパーティサービス",
        body: "CropImageArt は、第三者の分析、広告、追跡サービスを一切使用していません。ツールの使用は完全にプライベートです。",
      },
      {
        heading: "お問い合わせ",
        body: "このプライバシーポリシーについてご質問がある場合は、uncleleofan@gmail.com までご連絡ください。",
      },
    ],
    updated: "2026-08-10",
  },
  ko: {
    title: "개인정보 처리방침",
    intro: "귀하의 개인정보는 중요합니다. 본 방침은 CropImageArt가 데이터를 처리하는 방법을 설명합니다.",
    sections: [
      {
        heading: "이미지는 로컬에서 처리됩니다",
        body: "모든 이미지 처리는 완전히 귀하의 브라우저에서 이루어집니다. 이미지가 서버에 업로드되는 일은 절대 없습니다. 당사는 귀하의 사진에 접근하거나 저장하거나 전송하지 않습니다. 즉, 귀하의 사진은 귀하의 기기에 완전히 보관되며 완전히 비공개로 안전하게 유지됩니다.",
      },
      {
        heading: "데이터 수집 없음",
        body: "당사는 어떠한 개인정보도 수집, 저장 또는 공유하지 않습니다. 사용자 등록, 분석 추적, 추적용 쿠키를 전혀 사용하지 않습니다. 설정하는 유일한 쿠키는 언어 기본 설정을 기억하기 위한 것입니다.",
      },
      {
        heading: "제3자 서비스",
        body: "CropImageArt는 제3자 분석, 광고 또는 추적 서비스를 전혀 사용하지 않습니다. 도구 사용은 완전히 비공개입니다.",
      },
      {
        heading: "문의하기",
        body: "본 개인정보 처리방침에 대해 질문이 있으시면 uncleleofan@gmail.com으로 문의해 주세요.",
      },
    ],
    updated: "2026-08-10",
  },
  es: {
    title: "Política de Privacidad",
    intro: "Su privacidad es importante para nosotros. Esta política explica cómo CropImageArt maneja sus datos.",
    sections: [
      {
        heading: "Las Imágenes se Procesan Localmente",
        body: "Todo el procesamiento de imágenes ocurre completamente en su navegador. Sus imágenes nunca se suben a ningún servidor. No tenemos acceso, no almacenamos ni transmitimos sus fotos. Sus fotos permanecen completamente privadas y seguras en su propio dispositivo.",
      },
      {
        heading: "Sin Recopilación de Datos",
        body: "No recopilamos, almacenamos ni compartimos información personal. No hay registro de usuario, ni seguimiento analítico, ni cookies de rastreo. La única cookie que establecemos es para recordar su preferencia de idioma.",
      },
      {
        heading: "Servicios de Terceros",
        body: "CropImageArt no utiliza servicios de análisis, publicidad o seguimiento de terceros. Su uso de la herramienta es completamente privado.",
      },
      {
        heading: "Contacto",
        body: "Si tiene preguntas sobre esta política de privacidad, contáctenos en uncleleofan@gmail.com.",
      },
    ],
    updated: "2026-08-10",
  },
  fr: {
    title: "Politique de Confidentialité",
    intro: "Votre vie privée est importante pour nous. Cette politique explique comment CropImageArt traite vos données.",
    sections: [
      {
        heading: "Les Images Sont Traitées Localement",
        body: "Tout le traitement d'image se fait entièrement dans votre navigateur. Vos images ne sont jamais téléchargées sur un serveur. Nous n'avons pas accès à vos photos, nous ne les stockons ni ne les transmettons. Vos photos restent donc totalement privées et sécurisées sur votre propre appareil.",
      },
      {
        heading: "Aucune Collecte de Données",
        body: "Nous ne collectons, ne stockons ni ne partageons aucune information personnelle. Il n'y a pas d'inscription, pas de suivi analytique, et aucun cookie de pistage. Le seul cookie que nous utilisons sert à mémoriser votre préférence de langue.",
      },
      {
        heading: "Services Tiers",
        body: "CropImageArt n'utilise aucun service tiers d'analyse, de publicité ou de suivi. Votre utilisation de l'outil est totalement privée.",
      },
      {
        heading: "Contact",
        body: "Si vous avez des questions sur cette politique de confidentialité, contactez-nous à uncleleofan@gmail.com.",
      },
    ],
    updated: "2026-08-10",
  },
  de: {
    title: "Datenschutzerklärung",
    intro: "Ihre Privatsphäre ist uns wichtig. Diese Erklärung erläutert, wie CropImageArt mit Ihren Daten umgeht.",
    sections: [
      {
        heading: "Bilder Werden Lokal Verarbeitet",
        body: "Die gesamte Bildverarbeitung findet ausschließlich in Ihrem Browser statt. Ihre Bilder werden niemals auf einen Server hochgeladen. Wir haben keinen Zugriff auf Ihre Fotos, speichern sie nicht und übertragen sie nicht. Ihre Fotos bleiben vollständig privat und sicher auf Ihrem eigenen Gerät.",
      },
      {
        heading: "Keine Datenerfassung",
        body: "Wir erfassen, speichern oder teilen keine personenbezogenen Daten. Es gibt keine Benutzerregistrierung, kein Analyse-Tracking und keine Tracking-Cookies. Das einzige Cookie, das wir setzen, dient zum Speichern Ihrer Spracheinstellung.",
      },
      {
        heading: "Drittanbieter-Dienste",
        body: "CropImageArt verwendet keine Analyse-, Werbe- oder Tracking-Dienste von Drittanbietern. Ihre Nutzung des Tools ist vollständig privat.",
      },
      {
        heading: "Kontakt",
        body: "Wenn Sie Fragen zu dieser Datenschutzerklärung haben, kontaktieren Sie uns unter uncleleofan@gmail.com.",
      },
    ],
    updated: "2026-08-10",
  },
  pt: {
    title: "Política de Privacidade",
    intro: "Sua privacidade é importante para nós. Esta política explica como o CropImageArt trata seus dados.",
    sections: [
      {
        heading: "Imagens São Processadas Localmente",
        body: "Todo o processamento de imagem acontece inteiramente no seu navegador. Suas imagens nunca são enviadas para nenhum servidor. Não temos acesso, não armazenamos nem transmitimos suas fotos. Suas fotos permanecem completamente privadas e seguras no seu próprio dispositivo.",
      },
      {
        heading: "Nenhuma Coleta de Dados",
        body: "Não coletamos, armazenamos ou compartilhamos informações pessoais. Não há registro de usuário, rastreamento analítico ou cookies de rastreamento. O único cookie que usamos é para lembrar sua preferência de idioma.",
      },
      {
        heading: "Serviços de Terceiros",
        body: "O CropImageArt não usa serviços de análise, publicidade ou rastreamento de terceiros. Seu uso da ferramenta é completamente privado.",
      },
      {
        heading: "Contato",
        body: "Se tiver dúvidas sobre esta política de privacidade, entre em contato pelo uncleleofan@gmail.com.",
      },
    ],
    updated: "2026-08-10",
  },
};

export const termsContent: Record<LangCode, LegalContent> = {
  en: {
    title: "Terms of Service",
    intro: "By using CropImageArt, you agree to these terms. Please read them carefully.",
    sections: [
      {
        heading: "Acceptance of Terms",
        body: "By accessing and using CropImageArt, you accept and agree to be bound by these terms. If you do not agree, please do not use the service.",
      },
      {
        heading: "Service Description",
        body: "CropImageArt is a free online tool for cropping images with composition guides. All image processing is performed locally in your browser. We do not host or store your images.",
      },
      {
        heading: "User Responsibilities",
        body: "You are responsible for the images you process using our tool. You must have the right to use and edit any images you upload. We are not responsible for the content of your images.",
      },
      {
        heading: "Intellectual Property",
        body: "The CropImageArt name, logo, and website design are our intellectual property. Your images and their copyright remain entirely yours.",
      },
      {
        heading: "Disclaimer",
        body: 'CropImageArt is provided "as is" without any warranties. We are not liable for any damages arising from the use of this tool. We reserve the right to modify or discontinue the service at any time.',
      },
      {
        heading: "Changes to Terms",
        body: "We may update these terms from time to time. Continued use of the service after changes constitutes acceptance of the new terms.",
      },
      {
        heading: "Contact",
        body: "For questions about these terms, contact us at uncleleofan@gmail.com.",
      },
    ],
    updated: "2026-08-10",
  },
  "zh-CN": {
    title: "服务条款",
    intro: "使用 CropImageArt 即表示您同意以下条款。请仔细阅读。",
    sections: [
      {
        heading: "接受条款",
        body: "访问和使用 CropImageArt 即表示您接受并同意受本条款约束。如果您不同意，请勿使用本服务。",
      },
      {
        heading: "服务说明",
        body: "CropImageArt 是一个免费的在线图片裁剪工具，提供构图辅助线。所有图片处理均在您的浏览器本地完成，我们不会托管或存储您的图片。",
      },
      {
        heading: "用户责任",
        body: "您对自己使用本工具处理的图片负责。您必须拥有上传和编辑图片的合法权利。我们不对您图片的内容负责。",
      },
      {
        heading: "知识产权",
        body: "CropImageArt 的名称、标志和网站设计是我们的知识产权。您的图片及其版权完全属于您。",
      },
      {
        heading: "免责声明",
        body: "CropImageArt 按「原样」提供，不作任何明示或暗示的保证。我们对因使用本工具而产生的任何损失不承担责任。我们保留随时修改或终止服务的权利。",
      },
      {
        heading: "条款变更",
        body: "我们可能会不时更新这些条款。条款变更后继续使用服务即表示接受新条款。",
      },
      {
        heading: "联系方式",
        body: "如对这些条款有任何疑问，请通过 uncleleofan@gmail.com 联系我们。",
      },
    ],
    updated: "2026-08-10",
  },
  "zh-TW": {
    title: "服務條款",
    intro: "使用 CropImageArt 即表示您同意以下條款。請仔細閱讀。",
    sections: [
      {
        heading: "接受條款",
        body: "訪問和使用 CropImageArt 即表示您接受並同意受本條款約束。如果您不同意，請勿使用本服務。",
      },
      {
        heading: "服務說明",
        body: "CropImageArt 是一個免費的線上圖片裁剪工具，提供構圖輔助線。所有圖片處理均在您的瀏覽器本地完成，我們不會託管或儲存您的圖片。",
      },
      {
        heading: "使用者責任",
        body: "您對自己使用本工具處理的圖片負責。您必須擁有上傳和編輯圖片的合法權利。我們不對您圖片的內容負責。",
      },
      {
        heading: "智慧財產權",
        body: "CropImageArt 的名稱、標誌和網站設計是我們的智慧財產權。您的圖片及其版權完全屬於您。",
      },
      {
        heading: "免責聲明",
        body: "CropImageArt 按「原樣」提供，不作任何明示或暗示的保證。我們對因使用本工具而產生的任何損失不承擔責任。我們保留隨時修改或終止服務的權利。",
      },
      {
        heading: "條款變更",
        body: "我們可能會不時更新這些條款。條款變更後繼續使用服務即表示接受新條款。",
      },
      {
        heading: "聯絡方式",
        body: "如對這些條款有任何疑問，請透過 uncleleofan@gmail.com 與我們聯絡。",
      },
    ],
    updated: "2026-08-10",
  },
  ja: {
    title: "利用規約",
    intro: "CropImageArt をご利用いただくことで、以下の規約に同意したものとみなされます。よくお読みください。",
    sections: [
      {
        heading: "規約の承諾",
        body: "CropImageArt にアクセスし利用することにより、本規約に拘束されることに同意したものとみなされます。同意されない場合は、本サービスをご利用にならないでください。",
      },
      {
        heading: "サービスの説明",
        body: "CropImageArt は、構図ガイド付きの無料オンライン画像トリミングツールです。すべての画像処理はお客様のブラウザ内でローカルに実行され、当社が画像をホストまたは保存することはありません。",
      },
      {
        heading: "ユーザーの責任",
        body: "お客様は、本ツールを使用して処理する画像について責任を負います。アップロードする画像について、使用および編集する権利を有している必要があります。当社はお客様の画像の内容について一切責任を負いません。",
      },
      {
        heading: "知的財産権",
        body: "CropImageArt の名称、ロゴ、ウェブサイトデザインは当社の知的財産です。お客様の画像とその著作権は完全にお客様に帰属します。",
      },
      {
        heading: "免責事項",
        body: "CropImageArt は「現状有姿」で提供され、いかなる保証もありません。本ツールの使用により生じたいかなる損害についても、当社は一切の責任を負いません。当社はいつでも本サービスを変更または中止する権利を留保します。",
      },
      {
        heading: "規約の変更",
        body: "当社は随時、本規約を更新することがあります。変更後も継続して本サービスを利用することにより、新しい規約に同意したものとみなされます。",
      },
      {
        heading: "お問い合わせ",
        body: "本規約に関するご質問は、uncleleofan@gmail.com までご連絡ください。",
      },
    ],
    updated: "2026-08-10",
  },
  ko: {
    title: "서비스 약관",
    intro: "CropImageArt를 사용함으로써 귀하는 본 약관에 동의하게 됩니다. 주의 깊게 읽어 주세요.",
    sections: [
      {
        heading: "약관 동의",
        body: "CropImageArt에 접근하고 사용함으로써 귀하는 본 약관에 구속되는 것에 동의합니다. 동의하지 않는 경우 서비스를 사용하지 마십시오.",
      },
      {
        heading: "서비스 설명",
        body: "CropImageArt는 구도 가이드가 포함된 무료 온라인 이미지 자르기 도구입니다. 모든 이미지 처리는 귀하의 브라우저에서 로컬로 수행되며, 당사는 귀하의 이미지를 호스팅하거나 저장하지 않습니다.",
      },
      {
        heading: "사용자 책임",
        body: "귀하는 본 도구를 사용하여 처리하는 이미지에 대한 책임이 있습니다. 업로드하는 모든 이미지에 대해 사용 및 편집 권한이 있어야 합니다. 당사는 귀하의 이미지 내용에 대해 책임을 지지 않습니다.",
      },
      {
        heading: "지식 재산권",
        body: "CropImageArt의 이름, 로고 및 웹사이트 디자인은 당사의 지식 재산입니다. 귀하의 이미지와 그 저작권은 전적으로 귀하에게 있습니다.",
      },
      {
        heading: "면책 조항",
        body: "CropImageArt는 '있는 그대로' 제공되며 어떠한 보증도 하지 않습니다. 본 도구 사용으로 인해 발생하는 어떠한 손해에 대해서도 책임을 지지 않습니다. 당사는 언제든지 서비스를 수정하거나 중단할 권리를 보유합니다.",
      },
      {
        heading: "약관 변경",
        body: "당사는 수시로 본 약관을 업데이트할 수 있습니다. 변경 후에도 서비스를 계속 사용하면 새 약관에 동의한 것으로 간주됩니다.",
      },
      {
        heading: "문의하기",
        body: "본 약관에 대한 질문은 uncleleofan@gmail.com으로 문의해 주세요.",
      },
    ],
    updated: "2026-08-10",
  },
  es: {
    title: "Términos de Servicio",
    intro: "Al usar CropImageArt, usted acepta estos términos. Léalos detenidamente.",
    sections: [
      {
        heading: "Aceptación de los Términos",
        body: "Al acceder y usar CropImageArt, usted acepta y se compromete a cumplir estos términos. Si no está de acuerdo, no utilice el servicio.",
      },
      {
        heading: "Descripción del Servicio",
        body: "CropImageArt es una herramienta gratuita en línea para recortar imágenes con guías de composición. Todo el procesamiento se realiza localmente en su navegador. No alojamos ni almacenamos sus imágenes.",
      },
      {
        heading: "Responsabilidades del Usuario",
        body: "Usted es responsable de las imágenes que procesa con nuestra herramienta. Debe tener derecho a usar y editar las imágenes que sube. No somos responsables del contenido de sus imágenes.",
      },
      {
        heading: "Propiedad Intelectual",
        body: "El nombre, logotipo y diseño web de CropImageArt son nuestra propiedad intelectual. Sus imágenes y sus derechos de autor siguen siendo completamente suyos.",
      },
      {
        heading: "Descargo de Responsabilidad",
        body: 'CropImageArt se proporciona "tal cual", sin garantías de ningún tipo. No somos responsables de ningún daño derivado del uso de esta herramienta. Nos reservamos el derecho de modificar o descontinuar el servicio en cualquier momento.',
      },
      {
        heading: "Cambios en los Términos",
        body: "Podemos actualizar estos términos ocasionalmente. El uso continuado del servicio después de los cambios constituye la aceptación de los nuevos términos.",
      },
      {
        heading: "Contacto",
        body: "Para preguntas sobre estos términos, contáctenos en uncleleofan@gmail.com.",
      },
    ],
    updated: "2026-08-10",
  },
  fr: {
    title: "Conditions d'Utilisation",
    intro: "En utilisant CropImageArt, vous acceptez ces conditions. Veuillez les lire attentivement.",
    sections: [
      {
        heading: "Acceptation des Conditions",
        body: "En accédant et en utilisant CropImageArt, vous acceptez d'être lié par ces conditions. Si vous n'êtes pas d'accord, veuillez ne pas utiliser le service.",
      },
      {
        heading: "Description du Service",
        body: "CropImageArt est un outil en ligne gratuit pour recadrer des images avec des guides de composition. Tout le traitement d'image est effectué localement dans votre navigateur. Nous n'hébergeons ni ne stockons vos images.",
      },
      {
        heading: "Responsabilités de l'Utilisateur",
        body: "Vous êtes responsable des images que vous traitez avec notre outil. Vous devez avoir le droit d'utiliser et de modifier les images que vous téléchargez. Nous ne sommes pas responsables du contenu de vos images.",
      },
      {
        heading: "Propriété Intellectuelle",
        body: "Le nom, le logo et la conception du site CropImageArt sont notre propriété intellectuelle. Vos images et leurs droits d'auteur restent entièrement les vôtres.",
      },
      {
        heading: "Avertissement",
        body: "CropImageArt est fourni « en l'état », sans aucune garantie. Nous ne sommes pas responsables des dommages résultant de l'utilisation de cet outil. Nous nous réservons le droit de modifier ou d'interrompre le service à tout moment.",
      },
      {
        heading: "Modification des Conditions",
        body: "Nous pouvons modifier ces conditions de temps à autre. L'utilisation continue du service après modification vaut acceptation des nouvelles conditions.",
      },
      {
        heading: "Contact",
        body: "Pour toute question concernant ces conditions, contactez-nous à uncleleofan@gmail.com.",
      },
    ],
    updated: "2026-08-10",
  },
  de: {
    title: "Nutzungsbedingungen",
    intro: "Durch die Nutzung von CropImageArt stimmen Sie diesen Bedingungen zu. Bitte lesen Sie sie sorgfältig.",
    sections: [
      {
        heading: "Annahme der Bedingungen",
        body: "Durch den Zugriff auf und die Nutzung von CropImageArt erklären Sie sich mit diesen Bedingungen einverstanden. Wenn Sie nicht einverstanden sind, nutzen Sie den Dienst bitte nicht.",
      },
      {
        heading: "Dienstbeschreibung",
        body: "CropImageArt ist ein kostenloses Online-Tool zum Zuschneiden von Bildern mit Kompositionshilfen. Die gesamte Bildverarbeitung erfolgt lokal in Ihrem Browser. Wir hosten oder speichern Ihre Bilder nicht.",
      },
      {
        heading: "Verantwortlichkeiten des Nutzers",
        body: "Sie sind für die Bilder verantwortlich, die Sie mit unserem Tool bearbeiten. Sie müssen das Recht haben, die von Ihnen hochgeladenen Bilder zu verwenden und zu bearbeiten. Wir sind nicht für den Inhalt Ihrer Bilder verantwortlich.",
      },
      {
        heading: "Geistiges Eigentum",
        body: "Der Name, das Logo und das Website-Design von CropImageArt sind unser geistiges Eigentum. Ihre Bilder und deren Urheberrechte bleiben vollständig Ihr Eigentum.",
      },
      {
        heading: "Haftungsausschluss",
        body: 'CropImageArt wird "wie besehen" ohne jegliche Gewährleistung bereitgestellt. Wir haften nicht für Schäden, die aus der Nutzung dieses Tools entstehen. Wir behalten uns das Recht vor, den Dienst jederzeit zu ändern oder einzustellen.',
      },
      {
        heading: "Änderungen der Bedingungen",
        body: "Wir können diese Bedingungen von Zeit zu Zeit aktualisieren. Die fortgesetzte Nutzung des Dienstes nach Änderungen gilt als Annahme der neuen Bedingungen.",
      },
      {
        heading: "Kontakt",
        body: "Bei Fragen zu diesen Bedingungen kontaktieren Sie uns unter uncleleofan@gmail.com.",
      },
    ],
    updated: "2026-08-10",
  },
  pt: {
    title: "Termos de Serviço",
    intro: "Ao usar o CropImageArt, você concorda com estes termos. Leia atentamente.",
    sections: [
      {
        heading: "Aceitação dos Termos",
        body: "Ao acessar e usar o CropImageArt, você aceita e concorda em se vincular a estes termos. Se não concordar, por favor, não use o serviço.",
      },
      {
        heading: "Descrição do Serviço",
        body: "CropImageArt é uma ferramenta online gratuita para recortar imagens com guias de composição. Todo o processamento de imagem é feito localmente no seu navegador. Não hospedamos nem armazenamos suas imagens.",
      },
      {
        heading: "Responsabilidades do Usuário",
        body: "Você é responsável pelas imagens que processa com nossa ferramenta. Você deve ter o direito de usar e editar as imagens que envia. Não somos responsáveis pelo conteúdo das suas imagens.",
      },
      {
        heading: "Propriedade Intelectual",
        body: "O nome, logotipo e design do site CropImageArt são nossa propriedade intelectual. Suas imagens e seus direitos autorais permanecem totalmente seus.",
      },
      {
        heading: "Isenção de Responsabilidade",
        body: 'O CropImageArt é fornecido "como está", sem garantias de qualquer tipo. Não nos responsabilizamos por quaisquer danos decorrentes do uso desta ferramenta. Reservamo-nos o direito de modificar ou descontinuar o serviço a qualquer momento.',
      },
      {
        heading: "Alterações nos Termos",
        body: "Podemos atualizar estes termos periodicamente. O uso continuado do serviço após as alterações constitui aceitação dos novos termos.",
      },
      {
        heading: "Contato",
        body: "Para dúvidas sobre estes termos, entre em contato pelo uncleleofan@gmail.com.",
      },
    ],
    updated: "2026-08-10",
  },
};
