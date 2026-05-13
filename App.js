import React, { useState, useEffect } from 'react';
import { 
  Sun, BookOpen, Calculator, Atom, FlaskConical, 
  Utensils, Coffee, BedDouble, CheckCircle2, Circle,
  Trophy, Flame, Home, User, Settings, Clock
} from 'lucide-react';

// भाई, ये रहा तुम्हारा अल्ट्रा-प्रो टाइम टेबल का डेटा!
const SCHEDULE = [
  { id: 1, time: '05:30 AM - 06:00 AM', title: 'उठना और नित्य कर्म 🌅', desc: 'पानी पियो, फ्रेश हो जाओ!', icon: Sun, type: 'routine' },
  { id: 2, time: '06:00 AM - 08:00 AM', title: 'Maths (JEE Focus) 📐', desc: 'दिमाग एकदम फ्रेश है, तगड़े सवाल लगाओ!', icon: Calculator, type: 'study' },
  { id: 3, time: '08:00 AM - 08:30 AM', title: 'नाश्ता टाइम 🍳', desc: 'हल्का और हेल्दी नाश्ता करो।', icon: Utensils, type: 'break' },
  { id: 4, time: '08:30 AM - 10:30 AM', title: 'Physics 🧲', desc: 'कांसेप्ट समझो और न्यूमेरिकल्स फोड़ो!', icon: Atom, type: 'study' },
  { id: 5, time: '10:30 AM - 11:00 AM', title: 'छोटा ब्रेक 💧', desc: 'थोड़ा टहलो, स्ट्रेचिंग करो।', icon: Coffee, type: 'break' },
  { id: 6, time: '11:00 AM - 01:00 PM', title: 'Chemistry 🧪', desc: 'फॉर्मूले याद करो और रिएक्शन समझो।', icon: FlaskConical, type: 'study' },
  { id: 7, time: '01:00 PM - 02:00 PM', title: 'लंच + पावर नैप 😴', desc: 'गर्मी है भाई, खाना खाकर थोड़ा सो लो।', icon: BedDouble, type: 'break' },
  { id: 8, time: '02:00 PM - 03:30 PM', title: 'UP Board: Hindi & English 📝', desc: 'परसेंटेज बढ़ाने के लिए ये बहुत ज़रूरी है!', icon: BookOpen, type: 'study' },
  { id: 9, time: '03:30 PM - 04:00 PM', title: 'शाम की चाय / नाश्ता ☕', desc: 'एनर्जी वापस लाओ!', icon: Utensils, type: 'break' },
  { id: 10, time: '04:00 PM - 06:00 PM', title: 'CGL Maths + History 🏛️', desc: 'गवर्नमेंट जॉब की तगड़ी तैयारी!', icon: Trophy, type: 'study' },
  { id: 11, time: '06:00 PM - 07:00 PM', title: 'रिलैक्स / वॉक 🚶‍♂️', desc: 'छत पर घूमो, गाने सुनो, माइंड फ्रेश करो।', icon: Sun, type: 'break' },
  { id: 12, time: '07:00 PM - 09:00 PM', title: 'PCM Revision & Mock 🔄', desc: 'दिन भर जो पढ़ा उसका रिवीज़न और प्रैक्टिस!', icon: BookOpen, type: 'study' },
  { id: 13, time: '09:00 PM - 09:30 PM', title: 'डिनर टाइम 🍽️', desc: 'हल्का खाना खाओ।', icon: Utensils, type: 'break' },
  { id: 14, time: '09:30 PM - 10:00 PM', title: 'Daily Planning 📅', desc: 'कल क्या पढ़ना है, वो सेट करो और सो जाओ!', icon: Clock, type: 'routine' },
];

export default function App() {
  const [completed, setCompleted] = useState([]);
  const [progress, setProgress] = useState(0);

  // जब भी कोई टास्क टिक होता है, प्रोग्रेस अपडेट हो जाएगी
  useEffect(() => {
    const percentage = Math.round((completed.length / SCHEDULE.length) * 100);
    setProgress(percentage);
  }, [completed]);

  const toggleTask = (id) => {
    if (completed.includes(id)) {
      setCompleted(completed.filter(taskId => taskId !== id));
    } else {
      setCompleted([...completed, id]);
    }
  };

  return (
    // मोबाइल UI का लुक देने के लिए max-w-md यूज़ किया है
    <div className="min-h-screen bg-slate-950 text-white font-sans flex justify-center pb-20">
      <div className="w-full max-w-md bg-slate-900 min-h-screen shadow-2xl overflow-hidden flex flex-col relative">
        
        {/* Header Section */}
        <div className="p-6 bg-gradient-to-br from-indigo-900 via-purple-900 to-slate-900 rounded-b-3xl shadow-lg border-b border-indigo-500/30">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                नमस्ते, टॉपर! 👑
              </h1>
              <p className="text-slate-300 text-sm mt-1">मिशन 2026: UP Board + JEE + CGL</p>
            </div>
            <div className="bg-slate-800 p-2 rounded-full border border-slate-700 shadow-[0_0_15px_rgba(56,189,248,0.2)]">
              <Flame className="w-6 h-6 text-orange-500" />
            </div>
          </div>

          {/* Progress Bar Card */}
          <div className="bg-slate-800/50 p-4 rounded-2xl border border-slate-700 backdrop-blur-sm">
            <div className="flex justify-between items-end mb-2">
              <span className="text-sm text-slate-300 font-medium">आज का टारगेट</span>
              <span className="text-2xl font-bold text-cyan-400">{progress}%</span>
            </div>
            <div className="w-full bg-slate-950 rounded-full h-3 mb-1 overflow-hidden border border-slate-700">
              <div 
                className="bg-gradient-to-r from-cyan-500 to-purple-500 h-3 rounded-full transition-all duration-500 ease-out" 
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            <p className="text-xs text-slate-400 mt-2 text-center">
              12 घंटे की सॉलिड पढ़ाई करनी है भाई! 💪
            </p>
          </div>
        </div>

        {/* Timeline List */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar">
          {SCHEDULE.map((task) => {
            const isDone = completed.includes(task.id);
            const Icon = task.icon;
            
            return (
              <div 
                key={task.id}
                onClick={() => toggleTask(task.id)}
                className={`relative flex items-center p-4 rounded-2xl cursor-pointer transition-all duration-300 border ${
                  isDone 
                    ? 'bg-emerald-900/20 border-emerald-500/30 opacity-70' 
                    : task.type === 'study' 
                      ? 'bg-slate-800 border-indigo-500/30 hover:border-indigo-400 shadow-[0_4px_20px_rgba(0,0,0,0.3)]' 
                      : 'bg-slate-800/60 border-slate-700/50'
                }`}
              >
                {/* Left Time Column */}
                <div className="flex flex-col items-center justify-center w-20 border-r border-slate-700/50 pr-3 mr-4">
                  <span className="text-xs font-bold text-cyan-400 text-center leading-tight">
                    {task.time.split(' - ')[0]}
                  </span>
                  <span className="text-[10px] text-slate-500 my-1">से</span>
                  <span className="text-xs font-bold text-purple-400 text-center leading-tight">
                    {task.time.split(' - ')[1]}
                  </span>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className={`text-sm font-bold mb-1 ${isDone ? 'text-emerald-400 line-through' : 'text-slate-100'}`}>
                    {task.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {task.desc}
                  </p>
                </div>

                {/* Checkbox Icon */}
                <div className="ml-3">
                  {isDone ? (
                    <CheckCircle2 className="w-7 h-7 text-emerald-500 drop-shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
                  ) : (
                    <Circle className="w-7 h-7 text-slate-500 hover:text-cyan-400 transition-colors" />
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Navigation (Dummy for UI feel) */}
        <div className="absolute bottom-0 left-0 w-full bg-slate-900 border-t border-slate-800 p-4 flex justify-around items-center">
          <div className="flex flex-col items-center text-cyan-400">
            <Home className="w-6 h-6 mb-1" />
            <span className="text-[10px] font-bold">होम</span>
          </div>
          <div className="flex flex-col items-center text-slate-500 hover:text-slate-300 transition-colors">
            <BookOpen className="w-6 h-6 mb-1" />
            <span className="text-[10px]">स्टडी</span>
          </div>
          <div className="flex flex-col items-center text-slate-500 hover:text-slate-300 transition-colors">
            <User className="w-6 h-6 mb-1" />
            <span className="text-[10px]">प्रोफाइल</span>
          </div>
          <div className="flex flex-col items-center text-slate-500 hover:text-slate-300 transition-colors">
            <Settings className="w-6 h-6 mb-1" />
            <span className="text-[10px]">सेटिंग्स</span>
          </div>
        </div>

      </div>

      <style dangerouslySetInnerHTML={{__html: `
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #475569;
          border-radius: 10px;
        }
      `}} />
    </div>
  );
}


