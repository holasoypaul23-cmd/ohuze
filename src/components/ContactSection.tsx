import React, { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';
import { Language, translations } from '../i18n/translations';

const WhatsAppIcon: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.885-9.884 9.885m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.456 5.711 1.457h.004c6.554 0 11.89-5.335 11.893-11.893a11.82 11.82 0 00-3.48-8.413Z" />
  </svg>
);

interface ContactSectionProps {
  currentLang: Language;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ currentLang }) => {
  const t = translations[currentLang];
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'legal',
    message: ''
  });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contacto" className="py-16 sm:py-24 px-3 sm:px-4 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        
        {/* Info & Nodes Column */}
        <div className="lg:col-span-5 space-y-4 sm:space-y-6">
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-wider">
            <span>{t.contact.badge}</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
            {t.contact.title}
          </h2>

          <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
            {t.contact.desc}
          </p>
        </div>

        {/* Form Column */}
        <div className="lg:col-span-7 glass-panel rounded-2xl sm:rounded-3xl p-4 sm:p-8 lg:p-10 border border-slate-800">
          {sent ? (
            <div className="text-center py-8 sm:py-10">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center text-emerald-400 mx-auto mb-4">
                <CheckCircle2 className="w-7 h-7 sm:w-8 sm:h-8" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Mensaje Recibido / Message Sent</h3>
              <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto mb-6">
                {formData.name ? `${formData.name}, ` : ''}tu requerimiento ha sido registrado en el nodo de atención de OHUZE Holding.
              </p>
              <button
                onClick={() => setSent(false)}
                className="btn-neon-cyan px-6 py-2.5 rounded-xl font-mono text-xs font-bold uppercase cursor-pointer"
              >
                Enviar Otro Mensaje
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
              <h3 className="text-lg sm:text-xl font-bold text-white mb-1">{t.contact.formTitle}</h3>
              <p className="text-xs text-slate-400 mb-4 sm:mb-6">
                {t.contact.formDesc}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div>
                  <label className="block text-[11px] sm:text-xs font-mono text-slate-400 mb-1 uppercase tracking-wide">
                    {t.contact.nameLabel}
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Ej. Roberto Gómez"
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl p-2.5 sm:p-3 text-xs sm:text-sm text-white focus:outline-none focus:border-cyan-400 transition"
                  />
                </div>

                <div>
                  <label className="block text-[11px] sm:text-xs font-mono text-slate-400 mb-1 uppercase tracking-wide">
                    {t.contact.emailLabel}
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="roberto@empresa.com"
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl p-2.5 sm:p-3 text-xs sm:text-sm text-white focus:outline-none focus:border-cyan-400 transition"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] sm:text-xs font-mono text-slate-400 mb-1 uppercase tracking-wide">
                  {t.contact.interestLabel}
                </label>
                <select
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full bg-slate-900 border border-slate-700 rounded-xl p-2.5 sm:p-3 text-xs sm:text-sm text-white focus:outline-none focus:border-cyan-400 transition"
                >
                  <option value="legal">{t.contact.optLegal}</option>
                  <option value="realestate">{t.contact.optRealEstate}</option>
                  <option value="education">{t.contact.optEducation}</option>
                  <option value="insurance">{t.contact.optInsurance}</option>
                  <option value="investment">{t.contact.optInvestment}</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] sm:text-xs font-mono text-slate-400 mb-1 uppercase tracking-wide">
                  {t.contact.messageLabel}
                </label>
                <textarea
                  rows={3}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Detalla tu requerimiento o proyecto..."
                  className="w-full bg-slate-900 border border-slate-700 rounded-xl p-2.5 sm:p-3 text-xs sm:text-sm text-white focus:outline-none focus:border-cyan-400 transition"
                />
              </div>

              <div className="pt-1 sm:pt-2">
                <a
                  href={`https://wa.me/593963018699?text=${encodeURIComponent(
                    formData.message
                      ? `¡Hola OHUZE GROUP! Mi nombre es ${formData.name || 'un cliente'}. Asunto: ${formData.subject}. Mensaje: ${formData.message}`
                      : '¡Hola OHUZE GROUP! Deseo solicitar asesoría corporativa directa.'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-6 sm:px-8 py-3.5 rounded-xl font-mono text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-lg shadow-[#25D366]/30 border border-emerald-300/40 hover:scale-[1.01] active:scale-[0.99] transition duration-200 cursor-pointer group"
                >
                  <WhatsAppIcon className="w-5 h-5 text-white shrink-0 group-hover:scale-110 transition-transform duration-200" />
                  <span className="truncate">ENVIAR POR WHATSAPP</span>
                </a>
              </div>
            </form>
          )}
        </div>

      </div>
    </section>
  );
};
