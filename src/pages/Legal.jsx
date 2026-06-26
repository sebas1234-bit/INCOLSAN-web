import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowLeft, Shield, Wifi, Users, FileText, AlertTriangle, BarChart2 } from 'lucide-react'

const fontLink = document.createElement('link')
fontLink.href = 'https://fonts.googleapis.com/css2?family=Syne:wght@400;700;800;900&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap'
fontLink.rel = 'stylesheet'
document.head.appendChild(fontLink)

export default function Legal() {
  const navigate = useNavigate()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const secciones = [
    {
      id: 'neutralidad',
      icon: <Wifi size={22} />,
      titulo: 'Neutralidad de Red',
      color: '#3b82f6',
      contenido: [
        'INCOLSAN garantiza el acceso libre y no discriminatorio a Internet, conforme a la normativa vigente emitida por la Comisión de Regulación de Comunicaciones (CRC).',
        'La empresa no bloquea, restringe, discrimina ni interfiere injustificadamente con el acceso a contenidos, aplicaciones, servicios o protocolos disponibles en Internet.',
        'Las medidas de gestión de tráfico implementadas por INCOLSAN responden exclusivamente a criterios técnicos, de seguridad, integridad de la red o calidad del servicio.',
        'El servicio permite el acceso tanto a contenidos nacionales como internacionales bajo las condiciones técnicas de la red y de los proveedores de tránsito IP contratados.',
      ]
    },
    {
      id: 'seguridad',
      icon: <Shield size={22} />,
      titulo: 'Seguridad de la Información',
      color: '#ea580c',
      contenido: [
        'INCOLSAN cuenta con políticas y procedimientos orientados a proteger la confidencialidad, integridad y disponibilidad de la información de sus usuarios y de la infraestructura tecnológica utilizada para la prestación del servicio.',
        'La empresa adopta medidas de seguridad administrativas, técnicas y operativas para minimizar riesgos que puedan afectar la continuidad del servicio o la protección de la información.',
      ],
      lista: [
        '1. Utilice contraseñas seguras y difíciles de adivinar',
        '2. Cambie periódicamente la contraseña de su red WiFi',
        '3. No comparta sus credenciales de acceso con terceros',
        '4. Mantenga actualizados sus dispositivos y aplicaciones',
        '5. Instale software de seguridad cuando sea necesario',
        '6. Evite acceder a enlaces o sitios web sospechosos',
      ],
      listaTitulo: 'Recomendaciones de seguridad para usuarios:'
    },
    {
      id: 'calidad',
      icon: <BarChart2 size={22} />,
      titulo: 'Calidad del Servicio',
      color: '#10b981',
      contenido: [
        'INCOLSAN informa a sus usuarios las características técnicas de los servicios ofrecidos, incluyendo velocidades de transmisión y demás condiciones asociadas a la prestación del servicio de acceso a Internet.',
        'Todos nuestros planes ofrecen velocidad simétrica, es decir, igual velocidad de descarga y subida.',
        'La calidad del servicio puede verse afectada por factores externos, condiciones de red, características de los equipos del usuario y condiciones propias de Internet.',
      ],
      tabla: [
        { plan: 'Plan Económico Hogar', velocidad: 'Simétrica', tecnologia: 'Fibra Óptica', precio: '$90.000/mes' },
        { plan: 'Plan Especial Hogar', velocidad: 'Simétrica', tecnologia: 'Fibra Óptica', precio: '$110.000/mes' },
        { plan: 'Plan Premium Hogar', velocidad: 'Simétrica', tecnologia: 'Fibra Óptica', precio: '$150.000/mes' },
        { plan: 'Internet 10 Mbps', velocidad: '10 Mbps simétrico', tecnologia: 'Fibra Óptica', precio: '$110.000/mes' },
        { plan: 'Internet 15 Mbps', velocidad: '15 Mbps simétrico', tecnologia: 'Fibra Óptica', precio: '$150.000/mes' },
        { plan: 'Empresarial 15 Megas', velocidad: '15 Mbps dedicado', tecnologia: 'Fibra Óptica', precio: '$300.000/mes' },
        { plan: 'Empresarial 20 Megas', velocidad: '20 Mbps dedicado', tecnologia: 'Fibra Óptica', precio: '$400.000/mes' },
      ]
    },
    {
      id: 'velocidad',
      icon: <Wifi size={22} />,
      titulo: 'Medición de Velocidad',
      color: '#a855f7',
      contenido: [
        'Los usuarios pueden verificar la velocidad efectiva de su conexión a Internet utilizando herramientas de medición independientes y gratuitas.',
      ],
      links: [
        { label: '⚡ Fast.com', url: 'https://fast.com' },
        { label: '📊 Speedtest by Ookla', url: 'https://www.speedtest.net' },
      ]
    },
    {
      id: 'menores',
      icon: <AlertTriangle size={22} />,
      titulo: 'Protección de Menores — Ley 679 de 2001',
      color: '#ef4444',
      contenido: [
        'INCOLSAN apoya las iniciativas orientadas a la protección de los menores de edad frente a contenidos que puedan afectar su desarrollo integral, de conformidad con la Ley 679 de 2001.',
        'Esta ley establece medidas para prevenir y contrarrestar la explotación, pornografía, turismo sexual y demás formas de abuso sexual con menores de edad.',
        'Se recomienda a los padres y acudientes utilizar herramientas de control parental disponibles en sus dispositivos y routers para supervisar el acceso de los menores a Internet.',
      ],
      lista: [
        'Control parental en routers: acceda a la configuración de su router y active las restricciones de contenido',
        'Aplicaciones de control parental: Family Link (Google), Screen Time (Apple)',
        'Filtros de contenido: OpenDNS Family Shield (208.67.222.123)',
      ],
      listaTitulo: 'Herramientas de control parental recomendadas:',
      links: [
        { label: '🚨 Denunciar ante Te Protejo', url: 'https://www.teprotejo.org' },
        { label: '👮 Policía Nacional de Colombia', url: 'https://www.policia.gov.co' },
        { label: '⚖️ Fiscalía General de la Nación', url: 'https://www.fiscalia.gov.co' },
      ],
      linksTitulo: 'Canales oficiales de denuncia:'
    },
    {
      id: 'contrato',
      icon: <FileText size={22} />,
      titulo: 'Contrato de Prestación de Servicios',
      color: '#f59e0b',
      contenido: [
        'El contrato de prestación de servicios de INCOLSAN estará disponible próximamente para descarga en esta sección.',
        'Para solicitar una copia del contrato, comuníquese con nosotros a través de nuestros canales de atención.',
      ]
    },
    {
      id: 'pqr',
      icon: <Users size={22} />,
      titulo: 'Atención al Usuario — PQR',
      color: '#25D366',
      contenido: [
        'INCOLSAN pone a disposición de sus usuarios los siguientes canales para la presentación de Peticiones, Quejas y Recursos (PQR):',
      ],
      lista: [
        'WhatsApp: 314 779 7710',
        'Teléfono: 321 817 1947',
        'Oficina: Calle 8 #2-25, Acandí, Chocó (Calle Miramar, frente al antiguo Telecom)',
        'Horario: Lunes a viernes 8am-12pm y 2pm-6pm, Sábados 8am-12pm',
      ],
      listaTitulo: 'Canales de atención:'
    },
  ]

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(160deg, #07111f 0%, #0d1f3c 100%)',
      color: '#f0e6d3',
      fontFamily: 'Plus Jakarta Sans, sans-serif',
    }}>
      {/* Header */}
      <div style={{
        background: 'rgba(7,17,31,0.95)',
        backdropFilter: 'blur(16px)',
        borderBottom: '1px solid rgba(234,88,12,0.2)',
        padding: '1.2rem 2rem',
        display: 'flex', alignItems: 'center', gap: '1rem',
        position: 'sticky', top: 0, zIndex: 100,
      }}>
        <button onClick={() => navigate('/')} style={{
          display: 'flex', alignItems: 'center', gap: '0.5rem',
          background: 'rgba(234,88,12,0.1)', border: '1px solid rgba(234,88,12,0.3)',
          color: '#ea580c', padding: '0.5rem 1rem', borderRadius: '999px',
          cursor: 'pointer', fontFamily: 'Plus Jakarta Sans, sans-serif',
          fontWeight: 600, fontSize: '0.85rem',
        }}>
          <ArrowLeft size={16} /> Volver al inicio
        </button>
        <div>
          <span style={{ fontFamily: 'Syne, sans-serif', fontWeight: 900, fontSize: '1.2rem', color: '#ea580c' }}>INCOL</span>
          <span style={{ fontFamily: 'Syne, sans-serif', fontWeight: 900, fontSize: '1.2rem', color: '#f0e6d3' }}>SAN</span>
          <span style={{ color: 'rgba(240,230,211,0.4)', marginLeft: '0.8rem', fontSize: '0.85rem' }}>Información Legal</span>
        </div>
      </div>

      {/* Contenido */}
      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '3rem 2rem' }}>
        <h1 style={{
          fontFamily: 'Syne, sans-serif', fontWeight: 900,
          fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
          marginBottom: '0.8rem',
        }}>
          Información <span style={{ color: '#ea580c' }}>Legal</span>
        </h1>
        <p style={{ color: 'rgba(240,230,211,0.55)', marginBottom: '3rem', fontSize: '1rem', lineHeight: 1.7 }}>
          Cumplimiento normativo según la Comisión de Regulación de Comunicaciones (CRC) de Colombia.
          Resolución CRC 5050 de 2016 y normas concordantes.
        </p>

        {/* Índice */}
        <div style={{
          background: 'rgba(255,255,255,0.03)',
          border: '1px solid rgba(255,255,255,0.08)',
          borderRadius: '1.2rem', padding: '1.5rem 2rem',
          marginBottom: '3rem',
        }}>
          <h3 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, marginBottom: '1rem', fontSize: '1rem' }}>
            Contenido
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0.5rem' }}>
            {secciones.map(s => (
              <a key={s.id} href={`#${s.id}`} style={{
                color: s.color, fontSize: '0.88rem', textDecoration: 'none',
                padding: '0.3rem 0', display: 'flex', alignItems: 'center', gap: '6px',
              }}>
                → {s.titulo}
              </a>
            ))}
          </div>
        </div>

        {/* Secciones */}
        {secciones.map(s => (
          <div key={s.id} id={s.id} style={{
            background: 'rgba(255,255,255,0.03)',
            border: `1px solid rgba(255,255,255,0.07)`,
            borderLeft: `4px solid ${s.color}`,
            borderRadius: '1.2rem', padding: '2rem',
            marginBottom: '1.5rem',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '1.2rem' }}>
              <div style={{
                width: '40px', height: '40px', borderRadius: '10px',
                background: `rgba(${s.color === '#3b82f6' ? '59,130,246' : s.color === '#ea580c' ? '234,88,12' : s.color === '#10b981' ? '16,185,129' : s.color === '#a855f7' ? '168,85,247' : s.color === '#ef4444' ? '239,68,68' : s.color === '#f59e0b' ? '245,158,11' : '37,211,102'},0.15)`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: s.color, flexShrink: 0,
              }}>
                {s.icon}
              </div>
              <h2 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '1.15rem', color: s.color }}>
                {s.titulo}
              </h2>
            </div>

            {s.contenido.map((p, i) => (
              <p key={i} style={{ color: 'rgba(240,230,211,0.75)', lineHeight: 1.75, marginBottom: '0.8rem', fontSize: '0.93rem' }}>
                {p}
              </p>
            ))}

            {s.tabla && (
              <div style={{ overflowX: 'auto', marginTop: '1.2rem' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.85rem' }}>
                  <thead>
                    <tr style={{ background: 'rgba(255,255,255,0.05)' }}>
                      {['Plan', 'Velocidad', 'Tecnología', 'Precio'].map(h => (
                        <th key={h} style={{ padding: '0.7rem 1rem', textAlign: 'left', color: '#10b981', fontWeight: 700, borderBottom: '1px solid rgba(255,255,255,0.08)' }}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {s.tabla.map((row, i) => (
                      <tr key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                        <td style={{ padding: '0.7rem 1rem', color: 'rgba(240,230,211,0.85)' }}>{row.plan}</td>
                        <td style={{ padding: '0.7rem 1rem', color: 'rgba(240,230,211,0.7)' }}>{row.velocidad}</td>
                        <td style={{ padding: '0.7rem 1rem', color: 'rgba(240,230,211,0.7)' }}>{row.tecnologia}</td>
                        <td style={{ padding: '0.7rem 1rem', color: '#10b981', fontWeight: 700 }}>{row.precio}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {s.listaTitulo && (
              <p style={{ color: 'rgba(240,230,211,0.6)', fontSize: '0.88rem', marginTop: '1rem', marginBottom: '0.5rem', fontWeight: 600 }}>
                {s.listaTitulo}
              </p>
            )}

            {s.lista && (
              <ul style={{ paddingLeft: '1.2rem', marginTop: '0.5rem' }}>
                {s.lista.map((item, i) => (
                  <li key={i} style={{ color: 'rgba(240,230,211,0.7)', lineHeight: 1.7, marginBottom: '0.4rem', fontSize: '0.9rem' }}>
                    {item}
                  </li>
                ))}
              </ul>
            )}

            {s.linksTitulo && (
              <p style={{ color: 'rgba(240,230,211,0.6)', fontSize: '0.88rem', marginTop: '1.2rem', marginBottom: '0.5rem', fontWeight: 600 }}>
                {s.linksTitulo}
              </p>
            )}

            {s.links && (
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem', marginTop: '0.5rem' }}>
                {s.links.map((link, i) => (
                  <a key={i} href={link.url} target="_blank" rel="noopener noreferrer" style={{
                    background: `rgba(255,255,255,0.05)`,
                    border: `1px solid rgba(255,255,255,0.1)`,
                    color: s.color, padding: '0.5rem 1rem',
                    borderRadius: '999px', fontSize: '0.85rem',
                    textDecoration: 'none', fontWeight: 600,
                    transition: 'background 0.2s',
                  }}>
                    {link.label}
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}

        {/* Footer de la página legal */}
        <div style={{
          textAlign: 'center', marginTop: '3rem',
          paddingTop: '2rem', borderTop: '1px solid rgba(255,255,255,0.07)',
          color: 'rgba(240,230,211,0.35)', fontSize: '0.82rem',
        }}>
          <p>© {new Date().getFullYear()} INCOLSAN — Inversiones Colón Santa María S.A.S.</p>
          <p style={{ marginTop: '0.3rem' }}>Acandí, Chocó, Colombia · NIT: Pendiente</p>
        </div>
      </div>
    </div>
  )
}