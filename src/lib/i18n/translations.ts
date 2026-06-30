export type Language = 'th' | 'en'

export interface Translations {
  nav: { comingSoon: string }
  hero: { badge: string; headline: string; headlineAccent: string; description: string }
  howItWorks: {
    heading: string
    headingAccent: string
    subtitle: string
    steps: { label: string; desc: string }[]
  }
  nonCustodial: { heading: string; body1: string; bodyStrong: string; body2: string }
  painPoints: {
    heading: string
    headingAccent: string
    subtitle: string
    items: { problem: string; solution: string }[]
  }
  diagram: {
    heading: string
    headingAccent: string
    subtitle: string
    traditionalLabel: string
    oursLabel: string
    customer: string
    merchant: string
    middleman: string
    middlemanNote: string
    oursNote: string
  }
  preview: {
    heading: string
    headingAccent: string
    subtitle: string
    tabOverview: string
    tabPayIn: string
  }
  pricing: {
    heading: string
    headingAccent: string
    question: string
    answer: string
    models: { title: string; desc: string }[]
    note: string
    ctaText: string
    ctaButton: string
  }
  useCases: {
    heading: string
    headingAccent: string
    subtitle: string
    cards: { title: string; desc: string }[]
  }
  faq: {
    heading: string
    headingAccent: string
    subtitle: string
    items: { q: string; a: string }[]
  }
  footer: {
    description: string
    linksTitle: string
    links: string[]
    legalLinks: { privacy: string; terms: string }
    contactTitle: string
    copyright: string
  }
  privacy: {
    title: string
    intro: string
    sections: {
      heading: string
      intro?: string
      items?: { label: string; text?: string }[]
      text?: string
      contact?: { company: string; address: string; email: string; phone: string }
    }[]
  }
  terms: {
    title: string
    intro: string
    sections: {
      heading: string
      intro?: string
      items?: { label: string; text?: string }[]
      text?: string
      contact?: { company: string; address: string; email: string; phone: string }
    }[]
  }
}

export const translations: Record<Language, Translations> = {
  th: {
    nav: {
      comingSoon: 'เร็ว ๆ นี้',
    },
    hero: {
      badge: 'Non-Custodial QR Payment Gateway',
      headline: 'เงินเข้าบัญชีร้านค้าโดยตรง',
      headlineAccent: 'ไม่ผ่านเราเลย',
      description:
        'Please Payment คือ payment gateway ที่ทำหน้าที่แค่สร้าง QR ให้ลูกค้าสแกนจ่าย เงินทุกบาททุกสตางค์โอนตรงเข้าบัญชีธนาคารของร้านค้าทันที เราไม่มีการพักเงินไว้ที่ระบบของเราเลย',
    },
    painPoints: {
      heading: 'ปัญหาที่ร้านค้าเจอบ่อย',
      headingAccent: 'แล้วเราช่วยแก้ยังไง',
      subtitle: 'เปรียบเทียบปัญหาที่พบกับ payment gateway ทั่วไป กับวิธีที่ Please Payment แก้ให้',
      items: [
        { problem: 'เงินไม่เข้าทันที ต้องรอตัดรอบ T+1, T+3', solution: 'เงินเข้าบัญชีร้านค้าทันทีที่ลูกค้าจ่าย ไม่มีการตัดรอบเลย' },
        { problem: 'กลัวเงินค้างที่ตัวกลาง ถ้าระบบมีปัญหาหรือถูกอายัด', solution: 'เงินไม่เคยผ่านเราเลย จึงไม่มีความเสี่ยงเงินค้างหรือถูกอายัดที่ตัวกลาง' },
        { problem: 'ต้องเปิดบัญชี/wallet ใหม่กับ payment gateway ขั้นตอนยุ่งยาก', solution: 'ใช้บัญชีธนาคารที่ร้านค้ามีอยู่แล้วได้เลย ไม่ต้องเปิดบัญชีใหม่' },
        { problem: 'ต้องนั่งตรวจสลิปโอนเงินเอง เสี่ยงสลิปปลอม', solution: 'ระบบยืนยันการจ่ายเงินอัตโนมัติแบบ real-time ลดความเสี่ยงสลิปปลอมและงานซ้ำซ้อน' },
      ],
    },
    howItWorks: {
      heading: 'วิธี',
      headingAccent: 'การทำงาน',
      subtitle: '4 ขั้นตอนง่าย ๆ ไม่มีเงินผ่านมือเรา',
      steps: [
        { label: '1. สร้าง QR', desc: 'ร้านค้าระบุยอดเงิน ระบบสร้าง QR ให้ทันที' },
        { label: '2. ลูกค้าสแกนจ่าย', desc: 'ลูกค้าสแกนจ่ายผ่านแอพธนาคารตามปกติ' },
        { label: '3. เงินเข้าบัญชีร้านค้า', desc: 'โอนตรงเข้าบัญชีธนาคารร้านค้า ไม่ผ่านเรา' },
        { label: '4. แจ้งผลอัตโนมัติ', desc: 'ระบบร้านค้าได้รับแจ้งทันทีว่าจ่ายเงินสำเร็จ' },
      ],
    },
    nonCustodial: {
      heading: 'ทำไมต้อง Non-Custodial',
      body1: 'payment gateway ทั่วไปมักจะพักเงินลูกค้าไว้ที่บัญชีกลางก่อน แล้วค่อยโอนต่อให้ร้านค้าทีหลัง ซึ่งหมายความว่าเงินของร้านค้าต้อง"ผ่าน"ตัวกลางก่อนเสมอ',
      bodyStrong: 'Please Payment ไม่ทำแบบนั้น',
      body2: ' — เราทำหน้าที่แค่เป็นตัวสร้าง QR และตัวคอยฟัง/แจ้งเตือนเมื่อเงินเข้าเท่านั้น เงินทุกบาทวิ่งจากลูกค้าเข้าบัญชีธนาคารของร้านค้าโดยตรง ร้านค้าจึงไม่ต้องกังวลเรื่องเงินตกค้างหรือความเสี่ยงจากตัวกลาง',
    },
    diagram: {
      heading: 'เปรียบเทียบ',
      headingAccent: 'การไหลของเงิน',
      subtitle: 'มองเห็นความต่างชัด ๆ ระหว่าง payment gateway ทั่วไปกับ Please Payment',
      traditionalLabel: 'Payment Gateway ทั่วไป',
      oursLabel: 'Please Payment',
      customer: 'ลูกค้า',
      merchant: 'ร้านค้า',
      middleman: 'ตัวกลาง',
      middlemanNote: 'เงินพักที่นี่ก่อน',
      oursNote: 'แค่สร้าง QR + แจ้งเตือน (ไม่แตะเงินเลย)',
    },
    preview: {
      heading: 'หน้าจอ',
      headingAccent: 'ของจริง',
      subtitle: 'ตัวอย่างหน้าจอ Merchant Portal ที่ร้านค้าใช้งานจริง (ข้อมูลในภาพเป็นตัวอย่าง)',
      tabOverview: 'ภาพรวม',
      tabPayIn: 'รายการรับเงิน',
    },
    pricing: {
      heading: 'แล้วเรา',
      headingAccent: 'คิดค่าบริการอย่างไร',
      question: '"ในเมื่อเงินไม่ได้ผ่านระบบของ Please Payment เลย แล้วจะหักค่าบริการกันยังไง?"',
      answer: 'คำตอบคือ เราไม่ได้หักค่าบริการแบบอัตโนมัติทันทีที่มีการจ่ายเงิน (เพราะเงินไม่ได้ผ่านเราจริง ๆ) แต่จะ "วางบิล" เรียกเก็บค่าบริการทุกสิ้นเดือนแทน โดยรูปแบบการคิดค่าบริการสามารถเลือกได้ตามที่ตกลงกันในสัญญา เช่น',
      models: [
        { title: '% จากยอดเงิน', desc: 'คิดเป็นเปอร์เซ็นต์จากยอดเงินรวมที่ผ่านระบบในแต่ละเดือน' },
        { title: 'เหมาจ่ายรายเดือน', desc: 'จ่ายอัตราคงที่ต่อเดือน ไม่ว่ายอดเงินจะมากหรือน้อย' },
        { title: 'คิดตามจำนวนครั้ง', desc: 'คิดค่าบริการตามจำนวนรายการที่เกิดขึ้นจริงในแต่ละเดือน' },
      ],
      note: 'อัตราค่าบริการที่แน่นอนขึ้นอยู่กับการเจรจาและความเหมาะสมกับธุรกิจของคุณ',
      ctaText: 'เราเชื่อว่าราคาของเราคุ้มค่ากว่าที่อื่นแน่นอน ขอแค่มาคุยกับเราก่อน',
      ctaButton: 'ติดต่อเราเพื่อขอราคา',
    },
    useCases: {
      heading: 'เอาไปใช้',
      headingAccent: 'ทำอะไรได้บ้าง',
      subtitle: 'ระบบเดียว ใช้ได้กับหลายธุรกิจที่ต้องการรับเงินแบบทันทีและตรงไปตรงมา',
      cards: [
        { title: 'ตู้จำหน่ายสินค้าอัตโนมัติ', desc: 'ลูกค้าเลือกสินค้า ระบบสร้าง QR ตามยอดเงิน พอจ่ายสำเร็จก็เปิด switch ปล่อยสินค้าให้ลูกค้าหยิบได้ทันที' },
        { title: 'ร้านค้าออนไลน์', desc: 'จ่ายเงินเสร็จ ระบบแจ้งกลับอัตโนมัติให้เริ่มแพ็คและจัดส่งสินค้าได้เลย ไม่ต้องรอตรวจสลิปเอง' },
        { title: 'ร้านค้า/SME ทั่วไป', desc: 'รับเงินเข้าบัญชีธนาคารของร้านโดยตรง ไม่ต้องรอตัดรอบหรือกังวลเรื่องเงินพักที่ตัวกลาง' },
        { title: 'งานอีเวนต์ / สมาชิก', desc: 'ขายตั๋วงานหรือสมาชิกผ่าน QR พร้อมระบบแจ้งผลอัตโนมัติเพื่อออกตั๋ว/สิทธิ์ให้ลูกค้าได้ทันที' },
      ],
    },
    faq: {
      heading: 'คำถาม',
      headingAccent: 'ที่พบบ่อย',
      subtitle: 'รวมคำถามที่ร้านค้ามักถามเราบ่อยที่สุด ถ้าไม่พบคำตอบที่ต้องการ ติดต่อเราได้เลย',
      items: [
        {
          q: 'ใช้กับธนาคารอะไรได้บ้าง',
          a: 'ปัจจุบันรองรับ SCB (ธนาคารไทยพาณิชย์) สำหรับการสร้าง QR Bill Payment ลูกค้าสามารถสแกนและจ่ายผ่านแอพธนาคารใดก็ได้ที่รองรับ QR30 / PromptPay มาตรฐาน เรากำลังทยอยเพิ่มธนาคารพาณิชย์อื่น ๆ ในเร็ว ๆ นี้',
        },
        {
          q: 'ลูกค้าต้องดาวน์โหลดแอพอะไรเพิ่มมั้ย',
          a: 'ไม่ต้องเลย ลูกค้าสแกน QR ผ่านแอพธนาคารที่มีอยู่แล้วได้ทันที เพราะเราใช้มาตรฐาน QR30 / PromptPay ที่แอพธนาคารทุกเจ้าในไทยรองรับอยู่แล้ว ไม่มีขั้นตอนสมัครหรือติดตั้งเพิ่มเติมใด ๆ',
        },
        {
          q: 'เงินเข้าบัญชีเร็วแค่ไหน',
          a: 'เร็วกว่า payment gateway ทั่วไปมาก เพราะเงินโอนผ่านระบบธนาคารโดยตรงโดยไม่ผ่านบัญชีพักของเรา โดยทั่วไปเงินเข้าบัญชีภายในไม่กี่วินาทีหลังลูกค้ากดยืนยันการจ่าย ไม่มีการตัดรอบ T+1 หรือ T+3',
        },
        {
          q: 'ถ้าลูกค้าจ่ายแล้วแต่ระบบไม่อัปเดต จะทำยังไง',
          a: 'ระบบของเรามีการแจ้งเตือนอัตโนมัติผ่าน Webhook จากธนาคาร และหาก Webhook ไม่มาถึงด้วยเหตุใดก็ตาม Admin ยังสามารถกดตรวจสอบสถานะการชำระเงินกับธนาคารได้โดยตรงผ่านหน้า dashboard ได้ทุกเมื่อ',
        },
        {
          q: 'ต้องมีทีม developer เองมั้ยถึงจะใช้งานได้',
          a: 'ถ้าใช้ผ่าน Merchant Portal ของเรา ไม่จำเป็นต้องมี developer เลย มี UI ให้จัดการสร้าง QR ดูรายการ และตรวจสอบสถานะได้ครบ หากต้องการผนวกเข้ากับระบบของตัวเอง เรามี REST API พร้อม documentation ให้ต่อได้ทันที',
        },
        {
          q: 'การเชื่อมต่อกับธนาคารปลอดภัยแค่ไหน',
          a: 'เราเชื่อมต่อกับ Open Banking API ของธนาคารโดยตรงผ่าน OAuth / JWT authentication และ HTTPS เต็มรูปแบบ ข้อมูล credential ของธนาคารแต่ละร้านค้าเก็บแยกต่างหากและถูกเข้ารหัสทุกชั้น ไม่มีการแชร์ข้ามร้านค้า',
        },
      ],
    },
    footer: {
      description: 'Non-custodial QR payment gateway — เงินเข้าบัญชีร้านค้าโดยตรง ไม่มีการพักเงินไว้ที่ระบบของเราเลย',
      linksTitle: 'ลิงก์',
      links: ['วิธีการทำงาน', 'การไหลของเงิน', 'เอาไปใช้ทำอะไรได้บ้าง', 'FAQ'],
      legalLinks: { privacy: 'นโยบายความเป็นส่วนตัว', terms: 'ข้อกำหนดการใช้งาน' },
      contactTitle: 'ติดต่อเรา',
      copyright: 'Please Payment — A Dev Hub Product',
    },
    privacy: {
      title: '🛡️ นโยบายความเป็นส่วนตัว',
      intro: 'Please Payment ให้ความสำคัญสูงสุดกับความเป็นส่วนตัวและความปลอดภัยของข้อมูลร้านค้า นโยบายนี้อธิบายวิธีที่เราเก็บรวบรวม ใช้ และปกป้องข้อมูลของคุณ',
      sections: [
        {
          heading: '1. ข้อมูลที่เราเก็บรวบรวม',
          items: [
            { label: 'ข้อมูลร้านค้า', text: 'ชื่อบริษัท ที่อยู่ อีเมล และเบอร์โทรศัพท์ที่ให\'ไว้เมื่อสมัครใช้บริการ' },
            { label: 'ข้อมูลบัญชีธนาคาร', text: 'หมายเลขบัญชีและ credential ที่ร้านค้าให้มาเพื่อเชื่อมต่อกับธนาคาร (เก็บแบบเข้ารหัส)' },
            { label: 'ข้อมูลธุรกรรม', text: 'ยอดเงิน วันเวลา และสถานะของแต่ละรายการชำระเงิน' },
            { label: 'Log การใช้งาน', text: 'IP address เวลาเข้าใช้งาน และ API request logs เพื่อความปลอดภัยและการ debug' },
          ],
        },
        {
          heading: '2. วัตถุประสงค์การใช้ข้อมูล',
          intro: 'เราใช้ข้อมูลของคุณเพื่อ:',
          items: [
            { label: 'ให้บริการสร้าง QR และตรวจสอบสถานะการชำระเงิน' },
            { label: 'ออกใบแจ้งหนี้ค่าบริการรายเดือน' },
            { label: 'แจ้งเตือนและแก้ไขปัญหาที่เกิดขึ้นกับบัญชีหรือธุรกรรม' },
            { label: 'ปรับปรุงและพัฒนาระบบให้ดีขึ้น' },
            { label: 'ปฏิบัติตามข้อกำหนดทางกฎหมายที่เกี่ยวข้อง' },
          ],
        },
        {
          heading: '3. การเปิดเผยข้อมูลแก่บุคคลที่สาม',
          items: [
            { label: 'เราจะไม่ขายหรือให้เช่าข้อมูลของร้านค้าแก่บุคคลภายนอก' },
            { label: 'เราส่งข้อมูลที่จำเป็นไปยังธนาคาร', text: 'เพื่อสร้าง QR และยืนยันการชำระเงินเท่านั้น' },
            { label: 'เราอาจเปิดเผยข้อมูล', text: 'เมื่อกฎหมายกำหนดหรือได้รับคำสั่งจากหน่วยงานที่มีอำนาจ' },
          ],
        },
        {
          heading: '4. ความปลอดภัยของข้อมูล',
          items: [
            { label: 'ข้อมูล credential ทั้งหมดถูกเข้ารหัสก่อนจัดเก็บ', text: 'และไม่เคยถูกบันทึกในรูปแบบ plain text' },
            { label: 'การสื่อสารทั้งหมดใช้ HTTPS / TLS เต็มรูปแบบ' },
            { label: 'ระบบมีการตรวจสอบสิทธิ์ผ่าน JWT', text: 'และ role-based access control' },
            { label: 'เราทำ audit log ทุก action ที่สำคัญ', text: 'เพื่อความโปร่งใส' },
          ],
        },
        {
          heading: '5. สิทธิ์ของร้านค้า',
          intro: 'ร้านค้ามีสิทธิ์:',
          items: [
            { label: 'ขอดู แก้ไข หรือลบข้อมูลส่วนตัวของตนได้ตลอดเวลา' },
            { label: 'ยกเลิกบริการได้ตลอดเวลา', text: 'ข้อมูลจะถูกลบออกจากระบบภายใน 30 วันหลังจากยกเลิก' },
          ],
        },
        {
          heading: '6. การอัปเดตนโยบาย',
          text: 'เราอาจอัปเดตนโยบายนี้เป็นครั้งคราว เวอร์ชันล่าสุดจะอยู่บนเว็บไซต์ของเราเสมอ',
        },
        {
          heading: '7. ติดต่อเรา',
          intro: 'หากมีคำถามเกี่ยวกับนโยบายนี้ กรุณาติดต่อเรา:',
          contact: { company: 'Dev Hub Co., Ltd.', address: '55 Sutthisan Winitchai Road, Din Daeng, Bangkok 10400, Thailand', email: 'contact@dev-hubs.com', phone: '66(0) 94-249-4880' },
        },
      ],
    },
    terms: {
      title: '📋 ข้อกำหนดการใช้งาน',
      intro: 'กรุณาอ่านข้อกำหนดนี้อย่างละเอียดก่อนใช้บริการ Please Payment การใช้บริการของเราถือว่าคุณยอมรับข้อกำหนดทั้งหมดนี้',
      sections: [
        {
          heading: '1. บริการของเรา',
          items: [
            { label: 'Please Payment ให้บริการในฐานะ payment gateway แบบ non-custodial', text: 'โดยทำหน้าที่สร้าง QR Code สำหรับรับชำระเงิน และแจ้งเตือนเมื่อธุรกรรมสำเร็จ' },
            { label: 'เราไม่ได้รับ พัก หรือโอนเงินแทนร้านค้า', text: 'เงินทุกรายการโอนตรงจากลูกค้าไปยังบัญชีธนาคารของร้านค้าผ่านระบบของธนาคาร' },
          ],
        },
        {
          heading: '2. การใช้งานที่ได้รับอนุญาต',
          items: [
            { label: 'บริการนี้ให้ใช้เพื่อรับชำระเงินสำหรับสินค้าหรือบริการ', text: 'ที่ถูกกฎหมายและไม่ขัดต่อศีลธรรมอันดีงามเท่านั้น' },
            { label: 'ร้านค้าต้องมีตัวตนและธุรกิจที่แท้จริง', text: 'มีข้อมูลถูกต้องและสามารถตรวจสอบได้' },
            { label: 'ร้านค้าต้องปฏิบัติตามกฎหมายแห่งราชอาณาจักรไทย', text: 'และระเบียบธนาคารแห่งประเทศไทยทุกประการ' },
          ],
        },
        {
          heading: '3. การใช้งานที่ต้องห้าม',
          items: [
            { label: 'ห้ามใช้บริการเพื่อรับชำระเงินสำหรับสินค้าหรือบริการที่ผิดกฎหมาย', text: 'เช่น ยาเสพติด อาวุธ หรือสื่อลามกอนาจาร' },
            { label: 'ห้ามใช้บริการเพื่อฟอกเงิน หลีกเลี่ยงภาษี หรือกระทำการทุจริตใด ๆ' },
            { label: 'ห้ามใช้บริการสำหรับการพนันหรือการพนันออนไลน์', text: 'หรือธุรกิจที่ขัดต่อนโยบายธนาคารแห่งประเทศไทย' },
            { label: 'ห้ามพยายาม reverse engineer เจาะระบบ', text: 'หรือทำลายความมั่นคงของระบบ' },
          ],
        },
        {
          heading: '4. ความรับผิดชอบของร้านค้า',
          items: [
            { label: 'ร้านค้ารับผิดชอบความถูกต้องของข้อมูลที่ให้แก่เรา', text: 'รวมถึงข้อมูลบัญชีธนาคาร' },
            { label: 'ร้านค้าต้องรักษาความลับของ credential และ API key', text: 'และแจ้งเราทันทีหากสงสัยว่ามีการเข้าถึงโดยไม่ได้รับอนุญาต' },
            { label: 'ร้านค้ารับผิดชอบต่อลูกค้าปลายทางของตนเอง', text: 'ในเรื่องของสินค้า บริการ และการคืนเงิน' },
            { label: 'ร้านค้าต้องชำระค่าบริการตามที่ตกลงกัน', text: 'ตามรอบบิลรายเดือน' },
          ],
        },
        {
          heading: '5. การระงับและยกเลิกบริการ',
          items: [
            { label: 'เราสงวนสิทธิ์ระงับหรือยกเลิกบัญชีโดยทันที', text: 'หากพบการใช้งานที่ผิดเงื่อนไข ผิดกฎหมาย หรือเป็นภัยต่อระบบและผู้ใช้รายอื่น' },
            { label: 'ร้านค้าสามารถยกเลิกบริการได้ตลอดเวลา', text: 'โดยแจ้งมาที่ contact@dev-hubs.com' },
          ],
        },
        {
          heading: '6. ข้อจำกัดความรับผิด',
          items: [
            { label: 'เราไม่รับผิดชอบต่อความเสียหายที่เกิดจากความผิดพลาดของระบบธนาคาร', text: 'หรือปัจจัยภายนอกที่อยู่นอกเหนือการควบคุมของเรา' },
            { label: 'ความรับผิดสูงสุดของเราต่อร้านค้า', text: 'ไม่เกินค่าบริการที่ร้านค้าชำระให้แก่เราในเดือนที่เกิดเหตุ' },
          ],
        },
        {
          heading: '7. ค่าธรรมเนียมและการชำระเงิน',
          items: [
            { label: 'ค่าธรรมเนียมการใช้บริการจะแจ้งให้ทราบในสัญญาหรือใบเสนอราคาที่ตกลงกัน', text: 'โดยอาจแตกต่างกันตามแพ็กเกจที่เลือก' },
            { label: 'Please Payment สงวนสิทธิ์ปรับเปลี่ยนค่าธรรมเนียม', text: 'โดยแจ้งล่วงหน้าไม่น้อยกว่า 30 วันผ่านทางอีเมลหรือบนเว็บไซต์' },
            { label: 'การไม่ชำระค่าบริการภายในกำหนด', text: 'อาจส่งผลให้บัญชีถูกระงับชั่วคราวจนกว่าจะชำระครบ' },
          ],
        },
        {
          heading: '8. ทรัพย์สินทางปัญญา',
          items: [
            { label: 'ซอฟต์แวร์ โค้ด เครื่องหมายการค้า และเนื้อหาทั้งหมดของ Please Payment', text: 'เป็นทรัพย์สินของ Dev Hub Co., Ltd. และได้รับความคุ้มครองตามกฎหมาย' },
            { label: 'ร้านค้าไม่มีสิทธิ์คัดลอก ดัดแปลง หรือนำระบบของเราไปใช้งานในเชิงพาณิชย์', text: 'โดยไม่ได้รับอนุญาตเป็นลายลักษณ์อักษรจากเรา' },
          ],
        },
        {
          heading: '9. การแก้ไขข้อกำหนด',
          items: [
            { label: 'เราสงวนสิทธิ์แก้ไขข้อกำหนดนี้ได้ตลอดเวลา', text: 'โดยแจ้งล่วงหน้าไม่น้อยกว่า 30 วันผ่านทางอีเมลหรือบนเว็บไซต์' },
            { label: 'การใช้บริการต่อไปหลังจากที่ข้อกำหนดฉบับใหม่มีผลบังคับใช้', text: 'ถือว่าร้านค้ายอมรับข้อกำหนดที่แก้ไขแล้วทุกประการ' },
          ],
        },
        {
          heading: '10. กฎหมายที่ใช้บังคับ',
          text: 'ข้อกำหนดนี้อยู่ภายใต้กฎหมายแห่งราชอาณาจักรไทย ข้อพิพาทใด ๆ ให้อยู่ในเขตอำนาจของศาลไทย',
        },
        {
          heading: '11. ติดต่อเรา',
          intro: 'หากมีคำถามเกี่ยวกับข้อกำหนดนี้ หรือพบการใช้งานที่ไม่เหมาะสม กรุณาติดต่อเรา:',
          contact: { company: 'Dev Hub Co., Ltd.', address: '55 Sutthisan Winitchai Road, Din Daeng, Bangkok 10400, Thailand', email: 'contact@dev-hubs.com', phone: '66(0) 94-249-4880' },
        },
      ],
    },
  },
  en: {
    nav: {
      comingSoon: 'Coming soon',
    },
    hero: {
      badge: 'Non-Custodial QR Payment Gateway',
      headline: 'Money goes straight to the merchant',
      headlineAccent: 'never through us',
      description:
        'Please Payment is a payment gateway that only generates a QR code for customers to scan and pay. Every baht is transferred directly into the merchant\'s own bank account — we never hold the money in our system at all.',
    },
    painPoints: {
      heading: 'Common Pain Points,',
      headingAccent: ' Solved',
      subtitle: 'How typical payment gateway problems compare to the Please Payment way.',
      items: [
        { problem: 'Money doesn\'t arrive instantly — you wait for T+1 or T+3 settlement', solution: 'Funds land in your bank account the moment the customer pays — no settlement cycle at all' },
        { problem: 'Worried about funds stuck with a middleman if something goes wrong', solution: 'Your money never passes through us, so there\'s zero risk of funds being held or frozen by a middleman' },
        { problem: 'Opening a new account/wallet with a payment gateway is a hassle', solution: 'Use your existing bank account — no new account or wallet needed' },
        { problem: 'Manually checking payment slips yourself, risking fake slip scams', solution: 'Payments are confirmed automatically in real-time, cutting fake-slip risk and manual work' },
      ],
    },
    howItWorks: {
      heading: 'How It',
      headingAccent: ' Works',
      subtitle: '4 simple steps. No money ever passes through our hands.',
      steps: [
        { label: '1. Generate QR', desc: 'Merchant enters the amount, the system generates a QR instantly' },
        { label: '2. Customer scans & pays', desc: 'Customer scans and pays through their normal banking app' },
        { label: '3. Money goes to merchant', desc: 'Transferred directly to the merchant\'s bank account, never through us' },
        { label: '4. Automatic confirmation', desc: 'The merchant\'s system is notified instantly once payment succeeds' },
      ],
    },
    nonCustodial: {
      heading: 'Why Non-Custodial',
      body1: 'Most payment gateways hold customer funds in a central account first, then transfer it to the merchant later — meaning the merchant\'s money always has to "pass through" a middleman.',
      bodyStrong: 'Please Payment doesn\'t work that way',
      body2: ' — we only generate QR codes and listen for/notify when payment arrives. Every baht flows straight from the customer into the merchant\'s own bank account, so merchants never have to worry about funds being stuck or counterparty risk from a middleman.',
    },
    diagram: {
      heading: 'Money Flow',
      headingAccent: ' Comparison',
      subtitle: 'See the difference clearly between a typical payment gateway and Please Payment.',
      traditionalLabel: 'Typical Payment Gateway',
      oursLabel: 'Please Payment',
      customer: 'Customer',
      merchant: 'Merchant',
      middleman: 'Middleman',
      middlemanNote: 'Money sits here first',
      oursNote: 'Only generates QR + notifies (never touches the money)',
    },
    preview: {
      heading: 'See It',
      headingAccent: ' In Action',
      subtitle: 'A look at the actual Merchant Portal screens (sample data shown).',
      tabOverview: 'Overview',
      tabPayIn: 'Pay-In Requests',
    },
    pricing: {
      heading: 'So How Do We',
      headingAccent: ' Charge You',
      question: '"If the money never passes through Please Payment, how do you deduct your fee?"',
      answer: 'We don\'t deduct a fee automatically at the moment of payment (since the money genuinely never touches our system). Instead, we invoice you monthly. The billing model itself is flexible and agreed upon in the contract, for example:',
      models: [
        { title: '% of Volume', desc: 'A percentage of the total transaction volume processed each month' },
        { title: 'Flat Monthly Fee', desc: 'A fixed monthly rate regardless of transaction volume' },
        { title: 'Per-Transaction', desc: 'Charged based on the actual number of transactions each month' },
      ],
      note: 'The exact rate depends on negotiation and what fits your business best.',
      ctaText: 'We\'re confident our pricing beats the competition — just talk to us first.',
      ctaButton: 'Contact Us for Pricing',
    },
    useCases: {
      heading: 'What Can You',
      headingAccent: ' Build With This',
      subtitle: 'One system, usable across many businesses that need instant, direct settlement.',
      cards: [
        { title: 'Vending Machines', desc: 'Customer selects a product, the system generates a QR for that amount — once paid, the switch opens and releases the product instantly' },
        { title: 'Online Stores', desc: 'Once payment is confirmed, the system automatically notifies you to pack and ship — no need to manually check payment slips' },
        { title: 'Retail / SMEs', desc: 'Receive funds directly into your own bank account — no settlement delays or risk of funds sitting with a middleman' },
        { title: 'Events / Memberships', desc: 'Sell tickets or memberships via QR, with automatic confirmation so you can issue tickets/access to customers instantly' },
      ],
    },
    faq: {
      heading: 'Frequently Asked',
      headingAccent: ' Questions',
      subtitle: 'The questions merchants ask us most. If you don\'t see your answer here, just reach out.',
      items: [
        {
          q: 'Which banks are supported?',
          a: 'Currently SCB (Siam Commercial Bank) is supported for QR generation. Customers can pay by scanning with any Thai banking app that supports QR30 / PromptPay — the national standard. More banks are being added soon.',
        },
        {
          q: 'Do customers need to download a special app?',
          a: 'Not at all. Customers scan the QR using any banking app they already have. We use the standard QR30 / PromptPay format supported by every major Thai bank app — no extra registration or installation required.',
        },
        {
          q: 'How fast does the money arrive?',
          a: 'Much faster than a typical payment gateway, because the money transfers directly through the banking system without passing through our holding account. In practice, funds land in your account within seconds of the customer confirming payment — no T+1 or T+3 settlement cycle.',
        },
        {
          q: 'What if a customer pays but the system doesn\'t update?',
          a: 'Our system receives automatic Webhook notifications from the bank. If for any reason a Webhook doesn\'t arrive, admins can manually trigger a status inquiry directly with the bank from the dashboard at any time.',
        },
        {
          q: 'Do we need our own dev team to get started?',
          a: 'Not if you use our Merchant Portal — it has a full UI for generating QR codes, viewing transactions, and checking statuses. If you want to integrate into your own system, we provide a REST API with documentation ready to use.',
        },
        {
          q: 'How secure is the bank connection?',
          a: 'We connect to the bank\'s Open Banking API directly using OAuth / JWT authentication over HTTPS throughout. Each merchant\'s bank credentials are stored separately and encrypted at every layer — never shared across merchants.',
        },
      ],
    },
    footer: {
      description: 'Non-custodial QR payment gateway — money goes straight into the merchant\'s bank account, never held by us.',
      linksTitle: 'Links',
      links: ['How It Works', 'Money Flow', 'Use Cases', 'FAQ'],
      legalLinks: { privacy: 'Privacy Policy', terms: 'Terms & Conditions' },
      contactTitle: 'Contact',
      copyright: 'Please Payment — A Dev Hub Product',
    },
    privacy: {
      title: '🛡️ Privacy Policy',
      intro: 'Please Payment places the utmost importance on the privacy and security of merchant data. This policy explains how we collect, use, and protect your information.',
      sections: [
        {
          heading: '1. Information We Collect',
          items: [
            { label: 'Merchant information', text: 'such as company name, address, email, and phone number provided at sign-up.' },
            { label: 'Bank account data', text: 'account numbers and credentials provided by merchants to connect to their bank (stored encrypted).' },
            { label: 'Transaction data', text: 'amounts, timestamps, and statuses of each payment.' },
            { label: 'Usage logs', text: 'IP addresses, access times, and API request logs for security and debugging purposes.' },
          ],
        },
        {
          heading: '2. How We Use Your Information',
          intro: 'We use your information to:',
          items: [
            { label: 'Provide QR generation and payment status verification services.' },
            { label: 'Issue monthly service invoices.' },
            { label: 'Notify merchants and resolve issues with their account or transactions.' },
            { label: 'Improve and develop our system.' },
            { label: 'Comply with applicable legal requirements.' },
          ],
        },
        {
          heading: '3. Disclosure to Third Parties',
          items: [
            { label: 'We do not sell or rent merchant data to any third party.' },
            { label: 'We transmit only the minimum necessary data to the bank', text: 'for QR generation and payment confirmation.' },
            { label: 'We may disclose data when required by law', text: 'or ordered by a competent authority.' },
          ],
        },
        {
          heading: '4. Data Security',
          items: [
            { label: 'All credentials are encrypted before storage', text: 'and are never recorded in plain text.' },
            { label: 'All communication uses HTTPS / TLS throughout.' },
            { label: 'The system enforces JWT authentication', text: 'and role-based access control.' },
            { label: 'We maintain audit logs of all significant actions', text: 'for transparency.' },
          ],
        },
        {
          heading: '5. Your Rights',
          intro: 'Merchants may:',
          items: [
            { label: 'Request to view, correct, or delete their personal data at any time.' },
            { label: 'Cancel the service at any time.', text: 'Data will be removed from our systems within 30 days of cancellation.' },
          ],
        },
        {
          heading: '6. Policy Updates',
          text: 'We may update this privacy policy from time to time. The latest version will always be published on our website.',
        },
        {
          heading: '7. Contact Us',
          intro: 'If you have any questions about this policy, please contact us at:',
          contact: { company: 'Dev Hub Co., Ltd.', address: '55 Sutthisan Winitchai Road, Din Daeng, Bangkok 10400, Thailand', email: 'contact@dev-hubs.com', phone: '66(0) 94-249-4880' },
        },
      ],
    },
    terms: {
      title: '📋 Terms & Conditions',
      intro: 'Please read these terms carefully before using Please Payment. By using our service, you agree to all of the terms below.',
      sections: [
        {
          heading: '1. Our Services',
          items: [
            { label: 'Please Payment operates as a non-custodial payment gateway:', text: 'we generate QR Codes for receiving payments and send notifications when transactions are completed.' },
            { label: 'We do not receive, hold, or transfer funds on behalf of merchants.', text: 'All payments flow directly from the customer to the merchant\'s bank account through the banking system.' },
          ],
        },
        {
          heading: '2. Permitted Use',
          items: [
            { label: 'This service may only be used to accept payment for lawful goods and services', text: 'that are not contrary to public morality.' },
            { label: 'Merchants must be genuine, verifiable businesses', text: 'with accurate information on record.' },
            { label: 'Merchants must comply with all applicable Thai law', text: 'and Bank of Thailand regulations.' },
          ],
        },
        {
          heading: '3. Prohibited Use',
          items: [
            { label: 'You may not use this service to accept payment for illegal goods or services,', text: 'including narcotics, weapons, or obscene materials.' },
            { label: 'You may not use this service for money laundering, tax evasion, or any form of fraud.' },
            { label: 'You may not use this service for gambling or online gaming,', text: 'or any business prohibited by Bank of Thailand policy.' },
            { label: 'You may not attempt to reverse engineer, penetrate,', text: 'or compromise the security of our systems.' },
          ],
        },
        {
          heading: '4. Merchant Responsibilities',
          items: [
            { label: 'Merchants are responsible for the accuracy of all information provided to us,', text: 'including bank account details.' },
            { label: 'Merchants must keep their credentials and API keys confidential', text: 'and notify us immediately if unauthorized access is suspected.' },
            { label: 'Merchants are solely responsible to their own customers', text: 'for goods, services, and refunds.' },
            { label: 'Merchants must pay service fees as agreed', text: 'on the monthly billing cycle.' },
          ],
        },
        {
          heading: '5. Suspension and Termination',
          items: [
            { label: 'We reserve the right to immediately suspend or terminate an account', text: 'if we detect use that violates these terms, is unlawful, or poses a risk to our systems or other users.' },
            { label: 'Merchants may cancel the service at any time', text: 'by notifying us at contact@dev-hubs.com.' },
          ],
        },
        {
          heading: '6. Limitation of Liability',
          items: [
            { label: 'We are not liable for damages arising from errors in the banking system', text: 'or external factors beyond our control.' },
            { label: 'Our maximum liability to any merchant', text: 'shall not exceed the service fees paid by that merchant in the month the incident occurred.' },
          ],
        },
        {
          heading: '7. Pricing & Payment Terms',
          items: [
            { label: 'Service fees will be communicated in the agreed contract or quotation', text: 'and may vary depending on the selected package.' },
            { label: 'Please Payment reserves the right to adjust fees', text: 'with no less than 30 days\' notice via email or on our website.' },
            { label: 'Failure to pay service fees by the due date', text: 'may result in temporary account suspension until payment is settled.' },
          ],
        },
        {
          heading: '8. Intellectual Property',
          items: [
            { label: 'All software, code, trademarks, and content of Please Payment', text: 'are the property of Dev Hub Co., Ltd. and are protected under applicable law.' },
            { label: 'Merchants may not copy, modify, or commercially use our systems', text: 'without prior written consent from us.' },
          ],
        },
        {
          heading: '9. Amendments to Terms',
          items: [
            { label: 'We reserve the right to amend these terms at any time', text: 'with at least 30 days\' notice via email or on our website.' },
            { label: 'Continued use of the service after the amended terms take effect', text: 'constitutes acceptance of the updated terms.' },
          ],
        },
        {
          heading: '10. Governing Law',
          text: 'These terms are governed by the laws of the Kingdom of Thailand. Any dispute shall be subject to the jurisdiction of the Thai courts.',
        },
        {
          heading: '11. Contact Us',
          intro: 'For questions about these terms, or to report improper use of the platform, please contact us at:',
          contact: { company: 'Dev Hub Co., Ltd.', address: '55 Sutthisan Winitchai Road, Din Daeng, Bangkok 10400, Thailand', email: 'contact@dev-hubs.com', phone: '66(0) 94-249-4880' },
        },
      ],
    },
  },
}
