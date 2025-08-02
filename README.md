# MyProject CLI

เครื่องมือ CLI สำหรับสร้างโปรเจค Full-stack แบบอัตโนมัติ ที่รองรับ Frontend และ Backend frameworks ยอดนิยม

## 🚀 คุณสมบัติ

- **Frontend Frameworks:**
  - Nuxt 3
  - Vue 3 (Vite)

- **Backend Frameworks:**
  - Fastify
  - NestJS

- **การติดตั้งอัตโนมัติ:**
  - สร้างโครงสร้างโปรเจค
  - ติดตั้ง dependencies
  - สร้างไฟล์เริ่มต้น

## 📦 การติดตั้ง

```bash
npm install
npm run build
npm link
```

## 🎯 วิธีการใช้งาน

เรียกใช้คำสั่งเพื่อเริ่มสร้างโปรเจคใหม่:

```bash
npx ts-node src/app.ts
```

หรือหลังจากติดตั้งแล้ว:

```bash
myproject-cli
```

## 🛠 ขั้นตอนการใช้งาน

1. **เลือกตำแหน่งโปรเจค** - ระบุโฟลเดอร์ที่ต้องการสร้างโปรเจค
2. **เลือก Frontend Framework** - เลือกระหว่าง Nuxt 3 หรือ Vue 3
3. **เลือก Backend Framework** - เลือกระหว่าง Fastify หรือ NestJS  
4. **ติดตั้ง Dependencies** - เลือกว่าจะให้ติดตั้งอัตโนมัติหรือไม่

## 📁 โครงสร้างโปรเจคที่สร้างขึ้น

```
my-app/
├── frontend/          # Frontend application
├── backend/           # Backend application
└── README.md         # ข้อมูลโปรเจค
```

## 🔧 ตัวอย่างการใช้งาน

### สร้างโปรเจค Nuxt 3 + Fastify

```bash
📁 Where would you like to create your project? → ./my-nuxt-app
🌐 Choose your frontend framework: → Nuxt 3
🛠 Choose your backend framework: → Fastify
📥 Install dependencies? → Yes
```

### สร้างโปรเจค Vue 3 + NestJS

```bash
📁 Where would you like to create your project? → ./my-vue-app
🌐 Choose your frontend framework: → Vue 3 (Vite)
🛠 Choose your backend framework: → NestJS
📥 Install dependencies? → Yes
```

## 🏃‍♂️ การเริ่มต้นโปรเจค

หลังจากสร้างโปรเจคแล้ว:

### Frontend (Nuxt 3)
```bash
cd my-app/frontend
npm run dev
```

### Frontend (Vue 3)
```bash
cd my-app/frontend  
npm run dev
```

### Backend (Fastify)
```bash
cd my-app/backend
node index.js
```

### Backend (NestJS)
```bash
cd my-app/backend
npm run start:dev
```

## 📋 ความต้องการของระบบ

- Node.js 16+ 
- npm หรือ yarn
- Git (สำหรับ clone templates)

## 🤝 การมีส่วนร่วม

หากต้องการปรับปรุงหรือเพิ่มคุณสมบัติ:

1. Fork โปรเจคนี้
2. สร้าง feature branch
3. Commit การเปลี่ยนแปลง
4. สร้าง Pull Request

## 📝 License

MIT License

## 👨‍💻 ผู้พัฒนา

สร้างโดยทีมพัฒนาเพื่อความสะดวกในการสร้างโปรเจค Full-stack
