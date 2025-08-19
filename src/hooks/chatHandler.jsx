import { useState, useRef, useEffect } from "react";

export function ChatHandler() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [isFirstOpen, setIsFirstOpen] = useState(true);
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");

  const messagesEndRef = useRef(null);

  //array quest
  const COMMON_QUESTIONS = [
    {
      //keys: adalah kata kunci untuk mencari
      keys: [
        "jurusan dkv",
        "dkv itu apa",
        "desain komunikasi visual",
        "dkv gimana",
        "rasanya dkv",
      ],
      //answer: adalah jawaban dari kata kunci
      answer:
        "🎨 DKV (Desain Komunikasi Visual) : belajar desain grafis, ilustrasi, tipografi, fotografi, videografi, UI/UX dasar & branding. Cocok buat yang kreatif, suka seni & visual.",
    },
    {
      keys: [
        "jurusan tkj",
        "tkj apa",
        "tkj susah",
        "teknik komputer jaringan",
        "tkj",
      ],
      answer:
        "💻 TKJ (Teknik Komputer & Jaringan) : instalasi OS, rakit PC, jaringan LAN/WAN, server, keamanan jaringan, sampai basic web. Banyak praktik lab & troubleshooting.",
    },
    {
      keys: [
        "jurusan mesin",
        "teknik mesin",
        "mesin itu apa",
        "tsm",
        "tkr",
        "otomotif",
      ],
      answer:
        "⚙️ Teknik Mesin/Otomotif : dasar engine, sistem transmisi, kelistrikan, perawatan & perbaikan kendaraan, manufaktur dasar, gambar teknik. Cocok yang suka bongkar-pasang & teknik.",
    },
    {
      keys: ["ppdb", "pendaftaran siswa", "cara daftar"],
      answer:
        "📝 PPDB : pendaftaran online via situs resmi sekolah saat periode dibuka. Siapkan NISN, rapor, KK & berkas pendukung. Pantau pengumuman sekolah untuk jadwal & syarat detail.",
    },
    {
      keys: ["ekstrakurikuler", "ekskul", "kegiatan siswa"],
      answer:
        "🎯 Ekstrakurikuler populer : Pramuka, Paskibra, Voli, Futsal, Musik, PMR, Jurnalistik, Desain, Programming Club. Jadwal & pendaftaran diumumkan tiap awal semester.",
    },
    {
      keys: ["kantin", "menu hari ini", "makan siang"],
      answer:
        "🍽️ Kantin : menu harian bervariasi (nasi goreng, bakso, soto, aneka minuman). Jam buka umumnya istirahat 1 & 2. Harga ramah pelajar.",
    },
    {
      keys: ["alamat sekolah", "lokasi sekolah", "dimana sekolah"],
      answer:
        "📍 Alamat : Jl. Mastrip No.2, Sidorejo, Kec. Tuban, Kabupaten Tuban, Jawa Timur 62315.",
    },
    {
      keys: ["jadwal pelajaran", "hari ini belajar apa", "mapel hari ini"],
      answer:
        "📅 Jadwal pelajaran berbeda tiap kelas. Cek papan informasi/wali kelas atau aplikasi jadwal sekolah.",
    },
    {
      keys: ["prestasi", "juara", "lomba"],
      answer:
        "🏆 Prestasi terbaru : siswa aktif raih juara akademik & non-akademik tingkat kabupaten/provinsi. Detail biasanya diumumkan di mading & media sosial sekolah.",
    },
    {
      keys: ["mata pelajaran", "mapel", "guru pengampu"],
      answer:
        "📚 Mata pelajaran mengikuti kurikulum nasional + mapel kejuruan sesuai jurusan. Daftar guru pengampu per kelas diumumkan di awal semester.",
    },
  ];

  //obj bot msg
  const BOT_MESSAGES = {
    greeting:
      "👋 Halow, Aku VHSONEBOT, asisten virtual SMK Negeri 1 Tuban yang siap bantu kamu 24/7.",
    menu: `📋 MENU UTAMA
  1. Sejarah Sekolah SMKN 1 Tuban
  2. Lokasi dan alamat sekolah
  3. Prestasi terbaru siswa
  4. Cara daftar PPDB
  5. Info ekstrakurikuler
  6. Jadwal kantin & menu hari ini
  7. Pengumuman terbaru
  8. Mata pelajaran`,
          
    replies: {
      1: "🏫 Sejarah Singkat SMKN 1 Tuban: Berdiri untuk mencetak lulusan siap kerja & berwirausaha. Berkembang dengan berbagai kompetensi keahlian, fasilitas praktik, serta kerjasama industri.",
      2: "📍 Alamat: Jl. Mastrip No.2, Sidorejo, Kec. Tuban, Kabupaten Tuban, Jawa Timur 62315.",
      3: "🏆 Prestasi terbaru: siswa-siswi aktif menjuarai lomba akademik & non-akademik tingkat kabupaten/provinsi. Cek pengumuman sekolah untuk detailnya.",
      4: "📝 Cara daftar PPDB: buka situs PPDB resmi, siapkan NISN, rapor, KK & berkas pendukung, lalu ikuti alurnya. Datang ke sekolah jika diminta verifikasi berkas.",
      5: "🎯 Ekstrakurikuler: Pramuka, Paskibra, Voli, Futsal, Musik, Jurnalistik, Programming Club, dsb. Daftar di awal semester pada pembina ekskul.",
      6: "🍽️ Menu kantin hari ini: nasi goreng, bakso, soto, es teh, jus. Jam buka saat istirahat 1 & 2.",
      7: "📢 Pengumuman terbaru: pantau mading, website, atau media sosial sekolah untuk info agenda & jadwal penting.",
      8: "📚 Mata pelajaran & guru pengampu dibagikan per kelas di awal semester oleh wali kelas.",
    },
    invalid:
      "⚠️ Belum ketemu jawabannya. Kamu bisa ketik 0 atau menu untuk lihat menu, atau tanya bebas misal : “Gimana rasanya jurusan DKV?”",
  };

  const NOTIFS = [
    "✅ Terkirim!",
    "ℹ️ Ketik 0 / 'menu' buat lihat menu.",
    "⚠️ Pertanyaan ga ketemu, coba kata lain ya.",
  ];

  const [notif, setNotif] = useState({ open: false, index: null, message: "" });
  const notifTimerRef = useRef(null);

  function showNotifByIndex(i, duration = 2500) {
    if (i == null || i < 0 || i >= NOTIFS.length) return;

    setNotif({ open: true, index: i, message: NOTIFS[i] });

    if (notifTimerRef.current) clearTimeout(notifTimerRef.current);
    notifTimerRef.current = setTimeout(() => {
      setNotif({ open: false, index: null, message: "" });
    }, duration);
  }

  function closeNotif() {
    if (notifTimerRef.current) clearTimeout(notifTimerRef.current);
    setNotif({ open: false, index: null, message: "" });
  }

  // bersihin timer notif saat unmount
  useEffect(() => {
    return () => {
      if (notifTimerRef.current) clearTimeout(notifTimerRef.current);
    };
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // toggle class body saat chat open/close
  useEffect(() => {
    if (isChatOpen) {
      document.body.classList.add("chat-opened");
    } else {
      document.body.classList.remove("chat-opened");
    }
    return () => {
      document.body.classList.remove("chat-opened");
    };
  }, [isChatOpen]);

  const toggleChat = () => setIsChatOpen((v) => !v);

  // greet + menu saat pertama kali dibuka
  useEffect(() => {
    if (isChatOpen && isFirstOpen) {
      setIsFirstOpen(false);
      setIsTyping(true);
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            id: Date.now(),
            text: BOT_MESSAGES.greeting,
            sender: "bot",
            timestamp: new Date(),
          },
        ]);
        setTimeout(() => {
          setMessages((prev) => [
            ...prev,
            {
              id: Date.now() + 1,
              text: BOT_MESSAGES.menu,
              sender: "bot",
              timestamp: new Date(),
            },
          ]);
          setIsTyping(false);
        }, 1000);
      }, 1000);
    }
  }, [isChatOpen, isFirstOpen]); // deps rapi

  const normalize = (s) =>
    s
      .toLowerCase()
      .replace(/[^\p{L}\p{N}\s]/gu, "")
      .replace(/\s+/g, " ")
      .trim();

  const findCommonAnswer = (text) => {
    const t = normalize(text);
    for (const item of COMMON_QUESTIONS) {
      if (item.keys.some((k) => t.includes(normalize(k)))) return item.answer;
    }
    return null;
  };

  const sendMessage = (e) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    const userText = inputMessage.trim();
    const userMessage = {
      id: Date.now(),
      text: userText,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputMessage("");
    setIsTyping(true);

    let botText;
    const isNumber = /^\d+$/.test(userText);
    const isMenu = userText.toLowerCase() === "menu" || userText === "0";
    const common = findCommonAnswer(userText);

    if (common) {
      botText = common + "\n\nKetik 0 untuk lihat menu.";
    } else if (isMenu) {
      botText = BOT_MESSAGES.menu;
    } else if (isNumber && BOT_MESSAGES.replies[userText]) {
      botText =
        BOT_MESSAGES.replies[userText] + "\n\nKetik 0 untuk lihat menu.";
    } else {
      botText = BOT_MESSAGES.invalid;
    }

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          text: botText,
          sender: "bot",
          timestamp: new Date(),
        },
      ]);
      setIsTyping(false);

      if (common) {
        showNotifByIndex(0);
      } else if (isMenu) {
        showNotifByIndex(1);
      } else if (isNumber && BOT_MESSAGES.replies[userText]) {
        showNotifByIndex(0);
      } else {
        showNotifByIndex(2);
      }
    }, 700);
  };

  const formatTime = (date) =>
    new Date(date).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });

  return {
    isChatOpen,
    toggleChat,
    messages,
    isTyping,
    messagesEndRef,
    setInputMessage,
    inputMessage,
    sendMessage,
    formatTime,
    notif,
    showNotifByIndex,
    closeNotif,
  };
}
