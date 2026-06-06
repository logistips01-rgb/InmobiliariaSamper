import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Estrategia de Redes Sociales | Revivtaliza",
};

export default function EstrategiaRedesPage() {
  return (
    <div className="p-8 max-w-5xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
          <Link href="/admin/recursos" className="hover:text-verde-vida transition-colors">
            Recursos
          </Link>
          <span>/</span>
          <span>Estrategia redes sociales</span>
        </div>
        <h1 className="font-serif text-3xl font-bold text-tierra">
          Estrategia de Redes Sociales
        </h1>
        <p className="text-gray-500 text-sm mt-1">
          Plan de contenido para Instagram y Facebook — Revivtaliza
        </p>
      </div>

      <div className="space-y-10">

        {/* ── OBJETIVOS ── */}
        <section>
          <SectionTitle number="1" title="Objetivos" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <ObjectiveCard
              icon={
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              }
              title="Brand awareness"
              description="Posicionar Revivtaliza como la referencia inmobiliaria del Bajo Aragón rural. Que cuando alguien piense en vender o comprar en la zona, nos conozca."
            />
            <ObjectiveCard
              icon={
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              }
              title="Captación de propietarios"
              description="Llegar a dueños de viviendas deshabitadas o en desuso en Samper de Calanda, Alcorisa, Andorra, La Puebla de Híjar, Híjar, Chiprana y Escatrón."
            />
            <ObjectiveCard
              icon={
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              }
              title="Atracción de compradores"
              description="Conectar con personas de Zaragoza y otras ciudades que sueñan con una casa rural, teletrabajadores, nómadas digitales e inversores de bajo presupuesto."
            />
          </div>
        </section>

        {/* ── PLATAFORMAS ── */}
        <section>
          <SectionTitle number="2" title="Plataformas: Instagram y Facebook" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Instagram */}
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
              <div className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 px-5 py-4">
                <h3 className="font-bold text-white text-lg">Instagram</h3>
                <p className="text-white/80 text-xs mt-0.5">Canal visual principal</p>
              </div>
              <div className="p-5 space-y-3">
                <ProfileItem label="Nombre de perfil" value="@revivtaliza" />
                <ProfileItem label="Bio" value='"Casas con historia en el Bajo Aragón · Vende o compra sin complicaciones · 🌿 Teruel · Link ↓"' />
                <ProfileItem label="Link en bio" value="Enlace a revivtaliza.es + link a WhatsApp de contacto (Linktree o similar)" />
                <ProfileItem label="Foto de perfil" value="Logo sobre fondo verde oscuro (verde-aragón). Evitar texto pequeño." />
                <ProfileItem label="Frecuencia" value="3-4 publicaciones por semana + Stories diarios cuando sea posible" />
                <ProfileItem label="Formato estrella" value="Reels de propiedades (vídeo corto 30-60s) + carruseles informativos" />
              </div>
            </div>

            {/* Facebook */}
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
              <div className="bg-blue-600 px-5 py-4">
                <h3 className="font-bold text-white text-lg">Facebook</h3>
                <p className="text-white/80 text-xs mt-0.5">Alcance local y audiencia mayor</p>
              </div>
              <div className="p-5 space-y-3">
                <ProfileItem label="Página" value="Revivtaliza — Página de empresa verificada" />
                <ProfileItem label="Descripción" value="Agencia inmobiliaria especializada en propiedades rurales del Bajo Aragón (Teruel). Vende sin complicaciones." />
                <ProfileItem label="CTA del perfil" value="Botón «Enviar mensaje» o «Llamar ahora»" />
                <ProfileItem label="Grupos locales" value="Participar en grupos de Samper de Calanda, Alcorisa, Andorra, etc. para ganar visibilidad orgánica" />
                <ProfileItem label="Frecuencia" value="Mismas publicaciones que Instagram + posibilidad de publicar artículos más largos" />
                <ProfileItem label="Meta Business Suite" value="Gestionar Instagram y Facebook desde una sola herramienta gratuitamente" />
              </div>
            </div>
          </div>
        </section>

        {/* ── PILARES DE CONTENIDO ── */}
        <section>
          <SectionTitle number="3" title="Pilares de contenido" />
          <div className="space-y-4">
            <ContentPillar
              percentage={40}
              color="bg-verde-vida"
              textColor="text-verde-vida"
              title="Propiedades en venta"
              description="El corazón del perfil. Cada propiedad nueva merece al menos dos publicaciones: una presentación visual (carrusel de fotos o Reel) y un post con detalles clave."
              tips={[
                "Foto principal: exterior de la casa en buena luz, sin coches aparcados delante",
                "Caption: empieza con el gancho (p.ej. «Casa de piedra en Alcorisa desde 30.000 €»)",
                "Incluye siempre: m², habitaciones, municipio y precio",
                "CTA claro: «Link en bio para ver todas las fotos» o «Escríbenos para visita»",
                "Reel corto (30s) con música tranquila: pasillo por las estancias de la casa",
              ]}
            />
            <ContentPillar
              percentage={25}
              color="bg-terracota"
              textColor="text-terracota"
              title="El territorio"
              description="Vender el estilo de vida, no solo la casa. Fotos y vídeos del paisaje, los pueblos, la naturaleza y la gastronomía del Bajo Aragón despiertan el deseo de vivir allí."
              tips={[
                "Amanecer sobre el Ebro en Chiprana o Escatrón",
                "Las chimeneas de Andorra al atardecer",
                "Calles empedradas de Samper de Calanda en primavera",
                "Almendros en flor, otoño en los olivares",
                "«Así se vive en [municipio]» — mini-guía de lugares",
              ]}
            />
            <ContentPillar
              percentage={20}
              color="bg-amber-600"
              textColor="text-amber-700"
              title="Propietarios / Captación"
              description="Posts específicos para llegar a dueños de casas cerradas o sin uso. El objetivo es que se sientan identificados y nos contacten."
              tips={[
                "«¿Tienes una casa cerrada en el pueblo? Te ayudamos a venderla sin complicaciones»",
                "«No necesitas tasar la casa para venderla — tú fijas el precio»",
                "«Gestión 100% online: solo te pedimos que abras la puerta en la visita»",
                "Historias de propietarios satisfechos (con permiso) — humaniza la marca",
                "FAQ: «¿Cuánto me cobráis?», «¿Cuánto tarda en venderse?»",
              ]}
            />
            <ContentPillar
              percentage={15}
              color="bg-salvia"
              textColor="text-green-700"
              title="Confianza y proceso"
              description="Mostrar cómo funciona Revivtaliza por dentro genera confianza. Transparencia sobre el proceso, la documentación y los pasos de una venta."
              tips={[
                "«Así publicamos tu casa: de la foto al portal en 48h»",
                "«¿Qué documentos necesitas para vender?» — carrusel educativo",
                "Behind the scenes: preparación de un reportaje fotográfico",
                "Testimoniales reales (foto + nombre + pueblo si el cliente lo permite)",
                "Hitos del negocio: «Primera venta en Alcorisa ✓»",
              ]}
            />
          </div>
        </section>

        {/* ── CALENDARIO SEMANAL ── */}
        <section>
          <SectionTitle number="4" title="Calendario semanal" />
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-verde-vida text-crema">
                  <th className="text-left px-5 py-3 font-semibold">Día</th>
                  <th className="text-left px-5 py-3 font-semibold">Formato</th>
                  <th className="text-left px-5 py-3 font-semibold">Pilar</th>
                  <th className="text-left px-5 py-3 font-semibold">Descripción</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <CalendarRow day="Lunes" format="Carrusel / Reel" pillar="Propiedades (40%)" pillarbg="bg-verde-vida/10 text-verde-vida" description="Presenta una propiedad nueva o destaca una que lleve tiempo publicada. Empieza la semana con el producto." />
                <CalendarRow day="Miércoles" format="Post + imagen" pillar="Territorio (25%)" pillarbg="bg-terracota/20 text-amber-700" description="Foto del paisaje, el pueblo o la vida rural del Bajo Aragón. Contenido aspiracional y de comunidad." />
                <CalendarRow day="Viernes" format="Story + Post" pillar="Captación (20%)" pillarbg="bg-amber-600/10 text-amber-700" description="Mensaje dirigido a propietarios. Viernes es buen día para que decidan contactar el fin de semana." />
                <CalendarRow day="Domingo" format="Carrusel o vídeo corto" pillar="Confianza (15%)" pillarbg="bg-salvia/40 text-green-700" description="Contenido educativo, proceso o testimonio. El domingo la gente tiene más tiempo para leer y reflexionar." />
              </tbody>
            </table>
            <div className="px-5 py-3 bg-gray-50 border-t border-gray-100">
              <p className="text-xs text-gray-500">
                <strong>Stories diarios (opcional):</strong> compartir fotos del día, encuestas («¿Preferirías una casa en el campo o en el pueblo?»), countdowns de publicaciones nuevas, o re-compartir publicaciones antiguas.
              </p>
            </div>
          </div>
        </section>

        {/* ── 20 IDEAS DE PUBLICACIONES ── */}
        <section>
          <SectionTitle number="5" title="20 ideas de publicaciones concretas" />
          <div className="space-y-3">
            {postIdeas.map((idea, i) => (
              <PostIdeaCard key={i} number={i + 1} idea={idea} />
            ))}
          </div>
        </section>

        {/* ── HASHTAGS ── */}
        <section>
          <SectionTitle number="6" title="Hashtags" />
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 space-y-6">
            <div>
              <h3 className="font-semibold text-tierra mb-3">Set principal (todos los posts)</h3>
              <div className="flex flex-wrap gap-2">
                {primaryHashtags.map((tag) => (
                  <span key={tag} className="bg-verde-vida/10 text-verde-vida border border-verde-vida/20 text-xs px-2.5 py-1 rounded-full font-mono">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <HashtagSet
                title="Propiedades"
                color="bg-green-50 border-green-200"
                tags={["#casarural", "#casaenelpueblo", "#viviendarural", "#propiedadrural", "#casaenAragon", "#teruelexiste", "#inmuebles", "#seVende"]}
              />
              <HashtagSet
                title="Territorio"
                color="bg-amber-50 border-amber-200"
                tags={["#BajoAragon", "#Teruel", "#Aragon", "#pueblosdeEspaña", "#vidaenelpueblo", "#rurallife", "#escapadarural", "#naturalezaAragon"]}
              />
              <HashtagSet
                title="Propietarios / Proceso"
                color="bg-blue-50 border-blue-200"
                tags={["#vendeTuCasa", "#inmobiliariaonline", "#sincomplicaciones", "#vendersinagencia", "#casadeshabitada", "#herencia", "#gestioninmobiliaria"]}
              />
            </div>

            <div className="p-4 bg-terracota/10 rounded-lg border border-terracota/30">
              <p className="text-xs text-gray-600">
                <strong className="text-tierra">Recomendación:</strong> Usa entre 8 y 15 hashtags por publicación en Instagram. No repitas exactamente el mismo set en cada post — rota entre el set principal más uno de los específicos según el contenido.
              </p>
            </div>
          </div>
        </section>

        {/* ── TONO Y ESTILO ── */}
        <section>
          <SectionTitle number="7" title="Tono y estilo" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
              <h3 className="font-semibold text-tierra mb-4 flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-verde-vida flex items-center justify-center">
                  <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                Voz de marca — hacer
              </h3>
              <ul className="space-y-2.5">
                {voiceDo.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                    <span className="text-verde-vida mt-0.5 flex-shrink-0">+</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
              <h3 className="font-semibold text-tierra mb-4 flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-red-500 flex items-center justify-center">
                  <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </span>
                Qué evitar
              </h3>
              <ul className="space-y-2.5">
                {voiceDont.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                    <span className="text-red-500 mt-0.5 flex-shrink-0">-</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 md:col-span-2">
              <h3 className="font-semibold text-tierra mb-4">Estilo fotográfico</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {photoStyle.map(({ title, desc }) => (
                  <div key={title} className="bg-gray-50 rounded-lg p-3">
                    <p className="font-medium text-sm text-tierra mb-1">{title}</p>
                    <p className="text-xs text-gray-600">{desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── HERRAMIENTAS ── */}
        <section>
          <SectionTitle number="8" title="Herramientas gratuitas recomendadas" />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {tools.map(({ name, use, url }) => (
              <div key={name} className="bg-white rounded-xl border border-gray-200 shadow-sm p-5">
                <p className="font-semibold text-tierra">{name}</p>
                <p className="text-xs text-gray-600 mt-1 mb-3">{use}</p>
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-verde-vida hover:underline"
                >
                  {url.replace("https://", "")}
                </a>
              </div>
            ))}
          </div>
        </section>

      </div>

      {/* Footer nav */}
      <div className="mt-12 pt-6 border-t border-gray-200 flex items-center justify-between">
        <Link href="/admin/recursos" className="text-sm text-gray-500 hover:text-verde-vida transition-colors flex items-center gap-1">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Volver a Recursos
        </Link>
        <Link href="/admin/recursos/carta" className="text-sm text-verde-vida hover:underline flex items-center gap-1">
          Ver carta propietarios
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </Link>
      </div>
    </div>
  );
}

// ── Sub-components ──

function SectionTitle({ number, title }: { number: string; title: string }) {
  return (
    <div className="flex items-center gap-3 mb-5">
      <span className="w-8 h-8 rounded-full bg-verde-vida text-crema text-sm font-bold flex items-center justify-center flex-shrink-0">
        {number}
      </span>
      <h2 className="font-serif text-xl font-bold text-tierra">{title}</h2>
    </div>
  );
}

function ObjectiveCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-5">
      <div className="w-10 h-10 bg-verde-vida/10 rounded-lg flex items-center justify-center text-verde-vida mb-3">
        {icon}
      </div>
      <h3 className="font-semibold text-tierra mb-1">{title}</h3>
      <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
}

function ProfileItem({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">{label}</p>
      <p className="text-sm text-gray-700 mt-0.5">{value}</p>
    </div>
  );
}

function ContentPillar({
  percentage, color, textColor, title, description, tips,
}: {
  percentage: number; color: string; textColor: string; title: string; description: string; tips: string[];
}) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
      <div className="flex items-center gap-4 p-5 border-b border-gray-100">
        <div className={`text-3xl font-black ${textColor}`}>{percentage}%</div>
        <div className="flex-1">
          <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
            <div className={`h-full ${color} rounded-full`} style={{ width: `${percentage}%` }} />
          </div>
        </div>
        <h3 className="font-semibold text-tierra text-sm">{title}</h3>
      </div>
      <div className="p-5">
        <p className="text-sm text-gray-600 mb-3 leading-relaxed">{description}</p>
        <ul className="space-y-1.5">
          {tips.map((tip) => (
            <li key={tip} className="flex items-start gap-2 text-xs text-gray-600">
              <span className={`${textColor} mt-0.5 flex-shrink-0 font-bold`}>›</span>
              {tip}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function CalendarRow({
  day, format, pillar, pillarbg, description,
}: {
  day: string; format: string; pillar: string; pillarbg: string; description: string;
}) {
  return (
    <tr className="hover:bg-gray-50 transition-colors">
      <td className="px-5 py-3.5 font-semibold text-tierra">{day}</td>
      <td className="px-5 py-3.5 text-gray-600">{format}</td>
      <td className="px-5 py-3.5">
        <span className={`inline-block text-xs px-2 py-0.5 rounded-full font-medium ${pillarbg}`}>
          {pillar}
        </span>
      </td>
      <td className="px-5 py-3.5 text-gray-600 text-xs">{description}</td>
    </tr>
  );
}

function PostIdeaCard({ number, idea }: { number: number; idea: PostIdea }) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-5 flex gap-4">
      <span className="text-2xl font-black text-gray-200 flex-shrink-0 w-8 text-right leading-none mt-0.5">
        {number}
      </span>
      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-4 flex-wrap">
          <h3 className="font-semibold text-tierra text-sm">{idea.title}</h3>
          <span className={`text-xs px-2 py-0.5 rounded-full flex-shrink-0 ${idea.pillarStyle}`}>
            {idea.pillar}
          </span>
        </div>
        <p className="text-xs text-gray-500 mt-1 mb-2 italic">"{idea.hook}"</p>
        <p className="text-xs text-gray-600 mb-2">{idea.description}</p>
        <div className="flex flex-wrap gap-1">
          {idea.hashtags.map((tag) => (
            <span key={tag} className="text-xs text-verde-vida/70 font-mono">{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

function HashtagSet({ title, color, tags }: { title: string; color: string; tags: string[] }) {
  return (
    <div className={`rounded-lg border p-4 ${color}`}>
      <p className="font-semibold text-tierra text-sm mb-3">{title}</p>
      <div className="flex flex-wrap gap-1.5">
        {tags.map((tag) => (
          <span key={tag} className="text-xs font-mono text-gray-600 bg-white/70 px-1.5 py-0.5 rounded border border-gray-200">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

// ── Data ──

type PostIdea = {
  title: string;
  hook: string;
  description: string;
  pillar: string;
  pillarStyle: string;
  hashtags: string[];
};

const primaryHashtags = [
  "#Revivtaliza",
  "#BajoAragon",
  "#Teruel",
  "#casarural",
  "#inmobiliaria",
  "#Aragon",
  "#vidaenelpueblo",
  "#propiedadrural",
];

const postIdeas: PostIdea[] = [
  {
    title: "Presentación de propiedad nueva",
    hook: "Casa de piedra en Alcorisa lista para ser habitada. ¿Te la imaginas?",
    description: "Carrusel de 8-10 fotos: exterior, salón, cocina, habitaciones, patio y entorno. Incluir precio, m² y CTA al link en bio.",
    pillar: "Propiedades",
    pillarStyle: "bg-verde-vida/10 text-verde-vida",
    hashtags: ["#casarural", "#Alcorisa", "#seVende", "#BajoAragon"],
  },
  {
    title: "Reel tour por una casa",
    hook: "30 segundos para enamorarte de esta casa en Samper de Calanda",
    description: "Vídeo corto con música tranquila (folk o ambient). Planos: fachada, entrada, habitaciones, vistas. Sin voz en off, solo texto superpuesto con datos clave.",
    pillar: "Propiedades",
    pillarStyle: "bg-verde-vida/10 text-verde-vida",
    hashtags: ["#houseTour", "#SamperDeCalanda", "#inmuebles", "#Reel"],
  },
  {
    title: "Antes / Después de una rehabilitación",
    hook: "Mira cómo quedó esta casa que parecía perdida para siempre",
    description: "Fotos del estado original vs. estado actual o reformado. Ideal para mostrar el potencial de casas abandonadas. Pide permiso al comprador o dueño.",
    pillar: "Propiedades",
    pillarStyle: "bg-verde-vida/10 text-verde-vida",
    hashtags: ["#rehabilitacion", "#reforma", "#casarural", "#antesDespues"],
  },
  {
    title: "Propiedad de la semana — precio de derribo",
    hook: "¿Sabías que hay casas en el Bajo Aragón por menos de 20.000 €?",
    description: "Destaca una propiedad de bajo precio con alto potencial. Útil para atraer inversores y compradores de presupuesto ajustado.",
    pillar: "Propiedades",
    pillarStyle: "bg-verde-vida/10 text-verde-vida",
    hashtags: ["#inmobiliaria", "#inversiónrural", "#casabarata", "#oportunidad"],
  },
  {
    title: "El Bajo Aragón en primavera",
    hook: "Esto es lo que ves desde el jardín de algunas de nuestras casas",
    description: "Fotos del paisaje de almendros en flor, olivares o campos. Contenido aspiracional que vende el estilo de vida más que la casa.",
    pillar: "Territorio",
    pillarStyle: "bg-terracota/20 text-amber-700",
    hashtags: ["#BajoAragon", "#paisaje", "#naturaleza", "#Aragon", "#primavera"],
  },
  {
    title: "Mini-guía de un municipio",
    hook: "5 razones para vivir en Híjar que probablemente no conoces",
    description: "Carrusel: cada slide presenta un motivo (tranquilidad, precio de vida, naturaleza, comunidad, conexión por carretera). Termina con «y nosotros te encontramos la casa».",
    pillar: "Territorio",
    pillarStyle: "bg-terracota/20 text-amber-700",
    hashtags: ["#Hijar", "#vivirenpueblo", "#BajoAragon", "#calidad de vida"],
  },
  {
    title: "Atardecer desde un pueblo",
    hook: "Buenas noches desde Chiprana. ¿Quién quiere despertar aquí mañana?",
    description: "Foto o Reel corto de un atardecer espectacular. Contenido de alto engagement, fácil de producir. Ideal para fin de semana.",
    pillar: "Territorio",
    pillarStyle: "bg-terracota/20 text-amber-700",
    hashtags: ["#Chiprana", "#sunset", "#Aragon", "#ruralphotography"],
  },
  {
    title: "La vida del teletrabajador rural",
    hook: "Reunión por Zoom a las 10. Paseo por el monte a las 13. Así es vivir en el Bajo Aragón.",
    description: "Post de lifestyle mostrando cómo se puede teletrabajar desde un pueblo. Atrae al segmento nómada digital. Puedes hacer colaboración con algún teletrabajador local.",
    pillar: "Territorio",
    pillarStyle: "bg-terracota/20 text-amber-700",
    hashtags: ["#teletrabajo", "#nomadadigital", "#remotework", "#ruralliving"],
  },
  {
    title: "¿Tienes una casa cerrada?",
    hook: "¿Y si esa casa cerrada en el pueblo pudiera generar dinero en lugar de gastos?",
    description: "Post de captación directo. Explica en 4 puntos breves el servicio. CTA: «Escríbenos y te lo contamos sin compromiso». Buen candidato para publicidad pagada.",
    pillar: "Captación",
    pillarStyle: "bg-amber-600/10 text-amber-700",
    hashtags: ["#vendeTuCasa", "#casadeshabitada", "#propietario", "#sincomplicaciones"],
  },
  {
    title: "No necesitas hacer obras para vender",
    hook: "La vendemos como está. Sin reformas previas, sin presiones.",
    description: "Desmonta el mito de que hay que reformar para vender. Explica que los compradores del Bajo Aragón a menudo buscan proyectos a reformar.",
    pillar: "Captación",
    pillarStyle: "bg-amber-600/10 text-amber-700",
    hashtags: ["#vendeSinReformar", "#casarural", "#propietario", "#BajoAragon"],
  },
  {
    title: "Preguntas frecuentes de propietarios",
    hook: "«¿Cuánto cobráis?» «¿Hay permanencia?» — respondemos las dudas más habituales",
    description: "Carrusel: cada slide responde una pregunta habitual. Diseño limpio con fondo neutro y texto grande. Muy compartible.",
    pillar: "Captación",
    pillarStyle: "bg-amber-600/10 text-amber-700",
    hashtags: ["#FAQ", "#inmobiliaria", "#vendercasa", "#sincomisión"],
  },
  {
    title: "Herencia de una casa en el pueblo",
    hook: "¿Has heredado una casa que no sabes qué hacer con ella? No estás solo.",
    description: "Post empático para personas que han heredado propiedades y no saben qué hacer. Ofrece asesoramiento sin compromiso. Tono cálido y cercano.",
    pillar: "Captación",
    pillarStyle: "bg-amber-600/10 text-amber-700",
    hashtags: ["#herencia", "#casaheredad", "#propietario", "#inmobiliaria"],
  },
  {
    title: "Cómo funciona — en 5 pasos",
    hook: "Desde «quiero vender» hasta escritura firmada: así funciona Revivtaliza",
    description: "Infografía o carrusel con los 5 pasos: contacto → visita y fotos → publicación → visitas de compradores → cierre. Simple, visual, sin jerga.",
    pillar: "Confianza",
    pillarStyle: "bg-salvia/40 text-green-700",
    hashtags: ["#comoFunciona", "#inmobiliaria", "#transparencia", "#venderCasa"],
  },
  {
    title: "¿Qué documentos necesitas para vender?",
    hook: "Muchos propietarios no saben qué papeles necesitan. Aquí te lo explicamos.",
    description: "Carrusel educativo: nota simple, certificado energético, últimos recibos del IBI, DNI. Muestra que os encargáis de ayudar con todo.",
    pillar: "Confianza",
    pillarStyle: "bg-salvia/40 text-green-700",
    hashtags: ["#documentacion", "#venderCasa", "#inmobiliaria", "#consejo"],
  },
  {
    title: "Presentación del equipo / historia de la agencia",
    hook: "Somos del Bajo Aragón, conocemos cada pueblo y cada casa.",
    description: "Post personal presentando la agencia, su origen y por qué se especializa en propiedades rurales. Humaniza la marca y genera confianza.",
    pillar: "Confianza",
    pillarStyle: "bg-salvia/40 text-green-700",
    hashtags: ["#Revivtaliza", "#equipo", "#BajoAragon", "#sobreNosotros"],
  },
  {
    title: "Testimonio de cliente satisfecho",
    hook: "«No creía que fuera posible vender tan rápido desde Madrid» — Carlos, propietario en Escatrón",
    description: "Foto del propietario (o solo texto si prefiere anonimato) con quote destacado. Genuino, sin exageraciones. Pide siempre permiso por escrito.",
    pillar: "Confianza",
    pillarStyle: "bg-salvia/40 text-green-700",
    hashtags: ["#testimonial", "#clienteSatisfecho", "#vendercasa", "#Escatron"],
  },
  {
    title: "Comprar en el Bajo Aragón: presupuestos reales",
    hook: "¿Cuánto cuesta realmente una casa rural en Teruel? Menos de lo que piensas.",
    description: "Post informativo con rangos de precio según municipio y tipo de propiedad. Útil para compradores. Puede llevar tráfico al catálogo.",
    pillar: "Propiedades",
    pillarStyle: "bg-verde-vida/10 text-verde-vida",
    hashtags: ["#preciosCasas", "#inmobiliaria", "#Teruel", "#inversión"],
  },
  {
    title: "Encuesta: ¿qué buscarías en tu casa rural?",
    hook: "Ayúdanos a encontrar la casa perfecta para ti — vota en la encuesta",
    description: "Story con encuesta de Instagram (o post con pregunta en comments): ¿Piscina o jardín grande? ¿Pueblo o campo abierto? ¿Reformada o a reformar? Alto engagement.",
    pillar: "Territorio",
    pillarStyle: "bg-terracota/20 text-amber-700",
    hashtags: ["#encuesta", "#casarural", "#BajoAragon", "#tuOpinion"],
  },
  {
    title: "Reel: un día en [municipio]",
    hook: "Un día en Andorra (Teruel): así se vive aquí en otoño",
    description: "Vídeo de 30-60s con tomas del municipio a lo largo de un día: mercado, calles, naturaleza cercana, atardecer. Contenido aspiracional y turístico.",
    pillar: "Territorio",
    pillarStyle: "bg-terracota/20 text-amber-700",
    hashtags: ["#Andorra", "#Teruel", "#rutarural", "#BajoAragon", "#diario"],
  },
  {
    title: "Comparativa ciudad vs. pueblo",
    hook: "En Zaragoza pagas 1.200 €/mes de alquiler. En Samper compras por 45.000 €.",
    description: "Infografía simple comparando coste de vida ciudad vs. Bajo Aragón. Muy compartible y genera debate. Ideal para captar compradores urbanos.",
    pillar: "Propiedades",
    pillarStyle: "bg-verde-vida/10 text-verde-vida",
    hashtags: ["#CiudadVsPueblo", "#Zaragoza", "#SamperDeCalanda", "#calidad de vida"],
  },
];

const voiceDo = [
  "Cercano y humano — habla de tú a los seguidores cuando sea apropiado",
  "Honesto sobre precios, plazos y realidad del mercado",
  "Poético cuando hablas del territorio — evoca emociones y recuerdos",
  "Claro y directo con las propiedades — datos concretos, sin exagerar",
  "Optimista sin ser exagerado — el Bajo Aragón tiene valor real",
  "Responde a todos los comentarios y mensajes en menos de 24h",
  "Usa emojis con moderación — refuerzan pero no sustituyen al texto",
];

const voiceDont = [
  "Lenguaje de venta agresivo o presión («¡No pierdas esta oportunidad!»)",
  "Promesas irreales sobre tiempos de venta o precios",
  "Demasiada jerga inmobiliaria — habla como una persona normal",
  "Fotos de mala calidad, oscuras o con desorden visible",
  "Publicar sin planificación — la consistencia importa más que la frecuencia",
  "Ignorar comentarios negativos — responde siempre con calma",
  "Copiar contenido de otras cuentas — el contenido propio siempre gana",
];

const photoStyle = [
  {
    title: "Luz natural siempre",
    desc: "Fotografía las casas a media mañana o tarde. Nunca con flash ni luz artificial fría.",
  },
  {
    title: "Limpio y ordenado",
    desc: "Antes de fotografiar, quita objetos personales, basura y desorden. Menos es más.",
  },
  {
    title: "Gran angular suave",
    desc: "Usa focal corta para que las habitaciones parezcan más amplias, pero sin distorsionar.",
  },
  {
    title: "Exteriores en hora dorada",
    desc: "Las fotos de fachada y entorno lucen mucho mejor al amanecer o al atardecer.",
  },
  {
    title: "Paleta cálida y terrenal",
    desc: "Edición suave con tonos cálidos que evocan el color de la tierra de Aragón. Nada de filtros fuertes.",
  },
  {
    title: "Vídeo estabilizado",
    desc: "Usa un gimbal o estabilizador para los Reels. Los vídeos temblorosos restan profesionalidad.",
  },
];

const tools = [
  {
    name: "Canva",
    use: "Diseño de posts, carruseles, Stories e infografías sin necesidad de conocimientos de diseño.",
    url: "https://canva.com",
  },
  {
    name: "Meta Business Suite",
    use: "Gestión, programación y análisis de Instagram y Facebook desde una sola interfaz. Gratis.",
    url: "https://business.facebook.com",
  },
  {
    name: "Google Photos",
    use: "Almacenamiento y organización de fotos de propiedades. Fácil acceso desde cualquier dispositivo.",
    url: "https://photos.google.com",
  },
  {
    name: "CapCut",
    use: "Edición de vídeo gratuita para Reels. Plantillas, subtítulos automáticos y transiciones.",
    url: "https://capcut.com",
  },
  {
    name: "Linktree",
    use: "Página de enlace único para el bio de Instagram con acceso a web, WhatsApp y catálogo.",
    url: "https://linktr.ee",
  },
  {
    name: "Google Analytics",
    use: "Seguimiento de tráfico web procedente de redes sociales. Útil para medir qué contenido convierte.",
    url: "https://analytics.google.com",
  },
];
