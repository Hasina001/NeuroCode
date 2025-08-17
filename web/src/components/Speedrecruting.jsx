import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";


const steps = [
  { id: 1, title: "Informations" },
  { id: 2, title: "Expérience & Compétences" },
  { id: 3, title: "Disponibilités & Consentement" },
  { id: 4, title: "Résumé" },
];

const SLOT_TEMPLATES = [
  { day: "Lundi", slots: ["09:00", "09:20", "09:40", "10:00", "10:20"] },
  { day: "Mardi", slots: ["14:00", "14:20", "14:40", "15:00", "15:20"] },
  { day: "Mercredi", slots: ["09:00", "09:20", "09:40", "10:00", "10:20"] },
];

const JOB_CATEGORIES = [
  "Frontend", "Backend", "Full‑Stack", "UI/UX", "DevOps", "Data", "QA/Test","Admin Reseau & Systeme"
];

const YEARS = Array.from({ length: 11 }, (_, i) => i); // 0..10

function ErrorText({ children }) {
  if (!children) return null;
  return <p className="mt-1 text-sm text-red-600" role="alert">{children}</p>;
}

function Badge({ active, children, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={
        "px-3 py-1.5 rounded-full border text-sm mr-2 mb-2 transition " +
        (active
          ? "bg-black text-white border-black"
          : "bg-white text-gray-800 border-gray-300 hover:border-gray-500")
      }
    >
      {children}
    </button>
  );
}

function Section({ title, subtitle, children }) {
  return (
    <section className="bg-white rounded-2xl shadow-sm p-6 mb-6">
      <h2 className="text-xl font-semibold mb-1">{title}</h2>
      {subtitle && <p className="text-sm text-gray-600 mb-4">{subtitle}</p>}
      {children}
    </section>
  );
}

function Progress({ step }) {
  const percent = ((step - 1) / (steps.length - 1)) * 100;
  return (
    <div className="w-full mb-6">
      <div className="flex justify-between mb-2">
        {steps.map((s, i) => (
          <div key={s.id} className="text-xs font-medium text-gray-600">
            {s.title}
          </div>
        ))}
      </div>
      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
        <div
          className="h-2 bg-black transition-all"
          style={{ width: `${percent}%` }}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={percent}
          role="progressbar"
        />
      </div>
    </div>
  );
}

const initialData = {
  // Step 1
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  linkedin: "",
  portfolio: "",
  role: "",
  city: "",
  // Step 2
  years: 0,
  category: "",
  skills: [],
  skillInput: "",
  salary: "",
  resumeFile: null,
  // Step 3
  selectedSlots: [], // array of { day, time }
  notes: "",
  consent: false,
};

function validate(data, step) {
  const errors = {};
  if (step === 1) {
    if (!data.firstName.trim()) errors.firstName = "Prénom requis";
    if (!data.lastName.trim()) errors.lastName = "Nom requis";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) errors.email = "Email invalide";
    if (!data.phone.trim()) errors.phone = "Téléphone requis";
    if (!data.role.trim()) errors.role = "Poste ciblé requis";
  }
  if (step === 2) {
    if (!data.category) errors.category = "Sélectionne une catégorie";
    if (data.skills.length === 0) errors.skills = "Ajoute au moins 1 compétence";
    if (!data.resumeFile) errors.resumeFile = "CV requis (PDF)";
  }
  if (step === 3) {
    if (data.selectedSlots.length === 0) errors.selectedSlots = "Choisis au moins 1 créneau";
    if (!data.consent) errors.consent = "Tu dois accepter le traitement des données";
  }
  return errors;
}

function Summary({ data }) {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <h4 className="font-semibold mb-2">Identité</h4>
          <ul className="text-sm text-gray-700 space-y-1">
            <li><span className="font-medium">Nom:</span> {data.firstName} {data.lastName}</li>
            <li><span className="font-medium">Email:</span> {data.email}</li>
            <li><span className="font-medium">Téléphone:</span> {data.phone}</li>
            <li><span className="font-medium">Ville:</span> {data.city || "—"}</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Profil</h4>
          <ul className="text-sm text-gray-700 space-y-1">
            <li><span className="font-medium">Cible:</span> {data.role}</li>
            <li><span className="font-medium">Catégorie:</span> {data.category}</li>
            <li><span className="font-medium">Années d'expérience:</span> {data.years}</li>
            <li><span className="font-medium">Salaire souhaité:</span> {data.salary || "—"}</li>
            <li><span className="font-medium">Compétences:</span> {data.skills.join(", ")}</li>
          </ul>
        </div>
      </div>
      <div>
        <h4 className="font-semibold mb-2">Liens</h4>
        <ul className="text-sm text-blue-700 space-y-1">
          {data.linkedin && (
            <li>
              <a href={data.linkedin} target="_blank" rel="noreferrer" className="underline">LinkedIn</a>
            </li>
          )}
          {data.portfolio && (
            <li>
              <a href={data.portfolio} target="_blank" rel="noreferrer" className="underline">Portfolio</a>
            </li>
          )}
        </ul>
      </div>
      <div>
        <h4 className="font-semibold mb-2">Disponibilités</h4>
        {data.selectedSlots.length === 0 ? (
          <p className="text-sm text-gray-600">—</p>
        ) : (
          <ul className="flex flex-wrap gap-2">
            {data.selectedSlots.map((s, idx) => (
              <span key={idx} className="px-2 py-1 rounded bg-gray-100 text-sm border">{s.day} {s.time}</span>
            ))}
          </ul>
        )}
      </div>
      {data.notes && (
        <div>
          <h4 className="font-semibold mb-2">Notes</h4>
          <p className="text-sm text-gray-700 whitespace-pre-line">{data.notes}</p>
        </div>
      )}
    </div>
  );
}

export default function Speedrecruting() {
  const [step, setStep] = useState(1);
  const [data, setData] = useState(initialData);
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const canNext = useMemo(() => Object.keys(validate(data, step)).length === 0, [data, step]);

  function handleNext() {
    const errs = validate(data, step);
    setErrors(errs);
    if (Object.keys(errs).length === 0) setStep((s) => Math.min(s + 1, steps.length));
  }

  function handleBack() {
    setStep((s) => Math.max(1, s - 1));
  }

  function onChange(e) {
    const { name, value, type, checked, files } = e.target;
    setData((d) => ({
      ...d,
      [name]: type === "checkbox" ? checked : files ? files[0] : value,
    }));
  }

  function addSkill() {
    const v = data.skillInput.trim();
    if (!v) return;
    if (data.skills.includes(v)) return;
    setData((d) => ({ ...d, skills: [...d.skills, v], skillInput: "" }));
  }

  function removeSkill(s) {
    setData((d) => ({ ...d, skills: d.skills.filter((x) => x !== s) }));
  }

  function toggleSlot(day, time) {
    const key = `${day}-${time}`;
    setData((d) => {
      const exists = d.selectedSlots.find((s) => `${s.day}-${s.time}` === key);
      if (exists) {
        return { ...d, selectedSlots: d.selectedSlots.filter((s) => `${s.day}-${s.time}` !== key) };
      }
      return { ...d, selectedSlots: [...d.selectedSlots, { day, time }] };
    });
  }

  async function submitForm(e) {
    e.preventDefault();
    // Valide toutes les étapes
    const allErrs = { ...validate(data, 1), ...validate(data, 2), ...validate(data, 3) };
    setErrors(allErrs);
    if (Object.keys(allErrs).length > 0) {
      setStep(1);
      return;
    }

    setSubmitting(true);
    // Simulation d'appel API
    await new Promise((res) => setTimeout(res, 1000));
    setSubmitting(false);
    setSubmitted(true);
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-10 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="mb-6 text-center">
          <h1 className="text-3xl font-bold tracking-tight">Speed Recruiting — Inscription</h1>
          <p className="text-gray-600 mt-2">Remplis ce formulaire pour réserver un créneau express avec nos recruteurs.</p>
        </div>

        <Progress step={step} />

        <form onSubmit={submitForm} className="">
          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
              >
                <Section title="Informations personnelles" subtitle="Dis-nous qui tu es et comment te contacter.">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium">Prénom</label>
                      <input
                        name="firstName"
                        value={data.firstName}
                        onChange={onChange}
                        className="mt-1 w-full rounded-xl border-gray-300 focus:ring-2 focus:ring-black focus:border-black"
                        placeholder="Ex: Aina Aro "
                      />
                      <ErrorText>{errors.firstName}</ErrorText>
                    </div>
                    <div>
                      <label className="block text-sm font-medium">Nom</label>
                      <input
                        name="lastName"
                        value={data.lastName}
                        onChange={onChange}
                        className="mt-1 w-full rounded-xl border-gray-300 focus:ring-2 focus:ring-black focus:border-black"
                        placeholder="Ex: Rakotoniaina"
                      />
                      <ErrorText>{errors.lastName}</ErrorText>
                    </div>
                    <div>
                      <label className="block text-sm font-medium">Email</label>
                      <input
                        type="email"
                        name="email"
                        value={data.email}
                        onChange={onChange}
                        className="mt-1 w-full rounded-xl border-gray-300 focus:ring-2 focus:ring-black focus:border-black"
                        placeholder="exemple@gmail.com"
                      />
                      <ErrorText>{errors.email}</ErrorText>
                    </div>
                    <div>
                      <label className="block text-sm font-medium">Téléphone</label>
                      <input
                        name="phone"
                        value={data.phone}
                        onChange={onChange}
                        className="mt-1 w-full rounded-xl border-gray-300 focus:ring-2 focus:ring-black focus:border-black"
                        placeholder="Ex: +261 34 32 919 58"
                      />
                      <ErrorText>{errors.phone}</ErrorText>
                    </div>
                    <div>
                      <label className="block text-sm font-medium">Ville (optionnel)</label>
                      <input
                        name="city"
                        value={data.city}
                        onChange={onChange}
                        className="mt-1 w-full rounded-xl border-gray-300 focus:ring-2 focus:ring-black focus:border-black"
                        placeholder="Antananarivo"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium">Poste ciblé</label>
                      <input
                        name="role"
                        value={data.role}
                        onChange={onChange}
                        className="mt-1 w-full rounded-xl border-gray-300 focus:ring-2 focus:ring-black focus:border-black"
                        placeholder="Ex: Développeur Frontend"
                      />
                      <ErrorText>{errors.role}</ErrorText>
                    </div>
                    <div>
                      <label className="block text-sm font-medium">LinkedIn (optionnel)</label>
                      <input
                        name="linkedin"
                        value={data.linkedin}
                        onChange={onChange}
                        className="mt-1 w-full rounded-xl border-gray-300 focus:ring-2 focus:ring-black focus:border-black"
                        placeholder="https://linkedin.com/in/..."
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium">Portfolio (optionnel)</label>
                      <input
                        name="portfolio"
                        value={data.portfolio}
                        onChange={onChange}
                        className="mt-1 w-full rounded-xl border-gray-300 focus:ring-2 focus:ring-black focus:border-black"
                        placeholder="https://..."
                      />
                    </div>
                  </div>
                </Section>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div key="step2" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}>
                <Section title="Expérience & Compétences" subtitle="Parle-nous de ton niveau et de tes atouts.">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium">Catégorie</label>
                      <select
                        name="category"
                        value={data.category}
                        onChange={onChange}
                        className="mt-1 w-full rounded-xl border-gray-300 focus:ring-2 focus:ring-black focus:border-black bg-white"
                      >
                        <option value="">Sélectionner…</option>
                        {JOB_CATEGORIES.map((c) => (
                          <option key={c} value={c}>{c}</option>
                        ))}
                      </select>
                      <ErrorText>{errors.category}</ErrorText>
                    </div>
                    <div>
                      <label className="block text-sm font-medium">Années d'expérience</label>
                      <select
                        name="years"
                        value={data.years}
                        onChange={onChange}
                        className="mt-1 w-full rounded-xl border-gray-300 focus:ring-2 focus:ring-black focus:border-black bg-white"
                      >
                        {YEARS.map((y) => (
                          <option key={y} value={y}>{y}</option>
                        ))}
                      </select>
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium">Compétences</label>
                      <div className="mt-1 flex gap-2">
                        <input
                          name="skillInput"
                          value={data.skillInput}
                          onChange={onChange}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter') { e.preventDefault(); addSkill(); }
                          }}
                          className="flex-1 rounded-xl border-gray-300 focus:ring-2 focus:ring-black focus:border-black"
                          placeholder="Ex: React, Node, Tailwind, SQL…"
                        />
                        <button type="button" onClick={addSkill} className="px-4 py-2 rounded-xl bg-black text-white font-medium">Ajouter</button>
                      </div>
                      <ErrorText>{errors.skills}</ErrorText>
                      <div className="mt-3 flex flex-wrap">
                        {data.skills.map((s) => (
                          <span key={s} className="flex items-center px-3 py-1.5 rounded-full bg-gray-100 border mr-2 mb-2 text-sm">
                            {s}
                            <button type="button" onClick={() => removeSkill(s)} className="ml-2 text-gray-500 hover:text-gray-800" aria-label={`Retirer ${s}`}>×</button>
                          </span>
                        ))}
                      </div>
                      {/* Suggestions rapides */}
                      <div className="mt-3">
                        {['React', 'TypeScript', 'Node.js', 'Laravel', 'Tailwind', 'PostgreSQL'].map((s) => (
                          <Badge key={s} onClick={() => setData((d) => ({ ...d, skills: d.skills.includes(s) ? d.skills : [...d.skills, s] }))}>{s}</Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium">Salaire souhaité (optionnel)</label>
                      <input name="salary" value={data.salary} onChange={onChange} className="mt-1 w-full rounded-xl border-gray-300 focus:ring-2 focus:ring-black focus:border-black" placeholder="Ex: 1 200 000 MGA / mois" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium">CV (PDF)</label>
                      <input type="file" accept="application/pdf" name="resumeFile" onChange={onChange} className="mt-1 w-full rounded-xl border-gray-300 focus:ring-2 focus:ring-black focus:border-black file:mr-4 file:py-2 file:px-4 file:rounded-xl file:border-0 file:bg-gray-900 file:text-white" />
                      <ErrorText>{errors.resumeFile}</ErrorText>
                      {data.resumeFile && (
                        <p className="text-xs text-gray-600 mt-1">Fichier: {data.resumeFile.name}</p>
                      )}
                    </div>
                  </div>
                </Section>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div key="step3" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}>
                <Section title="Choix de créneaux" subtitle="Sélectionne 1 à 3 créneaux pour l'entretien express (20 min).">
                  <div className="space-y-4">
                    {SLOT_TEMPLATES.map(({ day, slots }) => (
                      <div key={day}>
                        <h4 className="font-medium mb-2">{day}</h4>
                        <div className="flex flex-wrap">
                          {slots.map((time) => {
                            const active = !!data.selectedSlots.find((s) => s.day === day && s.time === time);
                            return (
                              <Badge key={time} active={active} onClick={() => toggleSlot(day, time)}>
                                {time}
                              </Badge>
                            );
                          })}
                        </div>
                      </div>
                    ))}
                    <ErrorText>{errors.selectedSlots}</ErrorText>
                  </div>
                </Section>
                <Section title="Notes & Consentement">
                  <div className="grid grid-cols-1 gap-4">
                    <div>
                      <label className="block text-sm font-medium">Notes (optionnel)</label>
                      <textarea name="notes" value={data.notes} onChange={onChange} rows={3} className="mt-1 w-full rounded-xl border-gray-300 focus:ring-2 focus:ring-black focus:border-black" placeholder="Disponibilités spécifiques, besoins d'accessibilité, etc." />
                    </div>
                    <label className="flex items-start gap-3">
                      <input type="checkbox" name="consent" checked={data.consent} onChange={onChange} className="mt-1 h-5 w-5 rounded border-gray-300" />
                      <span className="text-sm text-gray-700">J'accepte que mes données soient traitées pour l'organisation du speed recruiting.</span>
                    </label>
                    <ErrorText>{errors.consent}</ErrorText>
                  </div>
                </Section>
              </motion.div>
            )}

            {step === 4 && (
              <motion.div key="step4" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}>
                <Section title="Résumé">
                  <Summary data={data} />
                </Section>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Actions */}
          <div className="flex items-center justify-between mt-4">
            <button
              type="button"
              onClick={handleBack}
              disabled={step === 1}
              className="px-4 py-2 rounded-xl border border-gray-300 text-gray-800 disabled:opacity-50"
            >
              Retour
            </button>

            {step < 4 ? (
              <button
                type="button"
                onClick={handleNext}
                className={`px-5 py-2.5 rounded-xl font-semibold text-white transition ${canNext ? "bg-black hover:opacity-90" : "bg-gray-400"}`}
              >
                Continuer
              </button>
            ) : (
              <button
                type="submit"
                disabled={submitting}
                className="px-5 py-2.5 rounded-xl font-semibold text-white bg-black hover:opacity-90 disabled:opacity-50"
              >
                {submitting ? "Envoi…" : "Envoyer la candidature"}
              </button>
            )}
          </div>

          {submitted && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-6">
              <div className="p-4 rounded-xl border bg-green-50 border-green-200">
                <p className="text-green-800 font-medium"> .-Candidature envoyée !</p>
                <p className="text-sm text-green-800 mt-1">Nous te confirmerons un créneau par email sous peu.</p>
              </div>
            </motion.div>
          )}
        </form>
      </div>
    </div>
  );
}
