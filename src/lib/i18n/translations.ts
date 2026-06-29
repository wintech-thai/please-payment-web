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
  footer: { description: string; linksTitle: string; links: string[]; contactTitle: string; copyright: string }
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
      body1: 'payment gateway ทั่วไปมักจะพักเงินลูกค้าไว้ที่บัญชีกลางก่อน แล้วค่อยโอนต่อให้ร้านค้าทีหลัง ซึ่งหมายความว่าเงินของร้านค้าต้อง“ผ่าน”ตัวกลางก่อนเสมอ',
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
      headingAccent: 'คิดค่าบริการยังไง',
      question: '“ในเมื่อเงินไม่ได้ผ่านระบบของ Please Payment เลย แล้วจะหักค่าบริการกันยังไง?”',
      answer: 'คำตอบคือ เราไม่ได้หักค่าบริการแบบอัตโนมัติทันทีที่มีการจ่ายเงิน (เพราะเงินไม่ได้ผ่านเราจริง ๆ) แต่จะ “วางบิล” เรียกเก็บค่าบริการทุกสิ้นเดือนแทน โดยรูปแบบการคิดค่าบริการสามารถเลือกได้ตามที่ตกลงกันในสัญญา เช่น',
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
    footer: {
      description: 'Non-custodial QR payment gateway — เงินเข้าบัญชีร้านค้าโดยตรง ไม่มีการพักเงินไว้ที่ระบบของเราเลย',
      linksTitle: 'ลิงก์',
      links: ['วิธีการทำงาน', 'การไหลของเงิน', 'เอาไปใช้ทำอะไรได้บ้าง'],
      contactTitle: 'ติดต่อเรา',
      copyright: 'Please Payment — A Dev Hub Product',
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
        'Please Payment is a payment gateway that only generates a QR code for customers to scan and pay. Every baht is transferred directly into the merchant’s own bank account — we never hold the money in our system at all.',
    },
    painPoints: {
      heading: 'Common Pain Points,',
      headingAccent: ' Solved',
      subtitle: 'How typical payment gateway problems compare to the Please Payment way.',
      items: [
        { problem: 'Money doesn’t arrive instantly — you wait for T+1 or T+3 settlement', solution: 'Funds land in your bank account the moment the customer pays — no settlement cycle at all' },
        { problem: 'Worried about funds stuck with a middleman if something goes wrong', solution: 'Your money never passes through us, so there’s zero risk of funds being held or frozen by a middleman' },
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
        { label: '3. Money goes to merchant', desc: 'Transferred directly to the merchant’s bank account, never through us' },
        { label: '4. Automatic confirmation', desc: 'The merchant’s system is notified instantly once payment succeeds' },
      ],
    },
    nonCustodial: {
      heading: 'Why Non-Custodial',
      body1: 'Most payment gateways hold customer funds in a central account first, then transfer it to the merchant later — meaning the merchant’s money always has to “pass through” a middleman.',
      bodyStrong: 'Please Payment doesn’t work that way',
      body2: ' — we only generate QR codes and listen for/notify when payment arrives. Every baht flows straight from the customer into the merchant’s own bank account, so merchants never have to worry about funds being stuck or counterparty risk from a middleman.',
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
      answer: 'We don’t deduct a fee automatically at the moment of payment (since the money genuinely never touches our system). Instead, we invoice you monthly. The billing model itself is flexible and agreed upon in the contract, for example:',
      models: [
        { title: '% of Volume', desc: 'A percentage of the total transaction volume processed each month' },
        { title: 'Flat Monthly Fee', desc: 'A fixed monthly rate regardless of transaction volume' },
        { title: 'Per-Transaction', desc: 'Charged based on the actual number of transactions each month' },
      ],
      note: 'The exact rate depends on negotiation and what fits your business best.',
      ctaText: 'We’re confident our pricing beats the competition — just talk to us first.',
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
    footer: {
      description: 'Non-custodial QR payment gateway — money goes straight into the merchant’s bank account, never held by us.',
      linksTitle: 'Links',
      links: ['How It Works', 'Money Flow', 'Use Cases'],
      contactTitle: 'Contact',
      copyright: 'Please Payment — A Dev Hub Product',
    },
  },
}
