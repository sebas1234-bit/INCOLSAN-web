import { useState, useEffect } from 'react'
import { Menu, X, Phone, Mail, MapPin, Wifi, Shield, Users, Leaf, ChevronDown, Send, MessageCircle } from 'lucide-react'

// ── FUENTES GOOGLE ───────────────────────────────────────
const fontLink = document.createElement('link')
fontLink.href = 'https://fonts.googleapis.com/css2?family=Syne:wght@400;700;800;900&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap'
fontLink.rel = 'stylesheet'
document.head.appendChild(fontLink)

// ── ESTILOS GLOBALES ─────────────────────────────────────
const GlobalStyles = () => (
  <style>{`
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    html { scroll-behavior: smooth; }
    body { background: #07111f; color: #f0e6d3; font-family: 'Plus Jakarta Sans', sans-serif; }
    h1,h2,h3,h4,h5 { font-family: 'Syne', sans-serif; }
    ::-webkit-scrollbar { width: 6px; }
    ::-webkit-scrollbar-track { background: #07111f; }
    ::-webkit-scrollbar-thumb { background: #ea580c; border-radius: 3px; }
    input::placeholder, textarea::placeholder { color: rgba(240,230,211,0.35); }
    input, textarea { font-family: 'Plus Jakarta Sans', sans-serif; }
    @keyframes bounce { 0%,100%{transform:translateY(0)} 50%{transform:translateY(10px)} }
    @keyframes fadeUp { from{opacity:0;transform:translateY(30px)} to{opacity:1;transform:translateY(0)} }
    @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.5} }
    @keyframes shimmer { 0%{background-position:200% center} 100%{background-position:-200% center} }
    .tab-indicator {
      position: absolute; bottom: 0; left: 0; right: 0; height: 3px;
      background: #ea580c; border-radius: 3px 3px 0 0;
      box-shadow: 0 0 12px rgba(234,88,12,0.8);
    }
    .nav-tab:hover { color: #f0e6d3 !important; }
    .plan-card { transition: transform 0.25s ease, box-shadow 0.25s ease; }
    .plan-card:hover { transform: translateY(-8px); }
    .stat-card { transition: transform 0.2s ease; }
    .stat-card:hover { transform: scale(1.04); }
    @media (max-width: 768px) {
      .desktop-nav { display: none !important; }
      .hamburger { display: flex !important; }
    }
  `}</style>
)

// ── NAVBAR ───────────────────────────────────────────────
function Navbar({ active }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const tabs = [
    { id: 'inicio', label: 'Inicio' },
    { id: 'planes', label: 'Planes' },
    { id: 'cobertura', label: 'Cobertura' },
    { id: 'nosotros', label: 'Quiénes Somos' },
    { id: 'contacto', label: 'Contacto' },
  ]

  const go = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, width: '100%', zIndex: 1000,
        background: scrolled ? 'rgba(7,17,31,0.95)' : 'rgba(7,17,31,0.7)',
        backdropFilter: 'blur(16px)',
        borderBottom: '1px solid rgba(234,88,12,0.15)',
        transition: 'all 0.3s ease',
        height: '66px', display: 'flex', alignItems: 'stretch',
        padding: '0 2rem',
      }}>
        {/* Logo */}
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img 
            src="/logo.png" 
            alt="INCOLSAN" 
            style={{ height: '48px', width: 'auto' }} 
          />
        </div>

        {/* Tabs desktop */}
        <div className="desktop-nav" style={{ display: 'flex', alignItems: 'stretch', flex: 1 }}>
          {tabs.map(tab => (
            <button key={tab.id} onClick={() => go(tab.id)} className="nav-tab" style={{
              position: 'relative', background: 'none', border: 'none',
              color: active === tab.id ? '#f0e6d3' : 'rgba(240,230,211,0.5)',
              fontFamily: 'Plus Jakarta Sans, sans-serif',
              fontWeight: active === tab.id ? 700 : 500,
              fontSize: '0.88rem', letterSpacing: '0.3px',
              padding: '0 1.1rem', cursor: 'pointer',
              transition: 'color 0.2s',
            }}>
              {tab.label}
              {active === tab.id && <span className="tab-indicator" />}
            </button>
          ))}
        </div>

        {/* CTA */}
        <div className="desktop-nav" style={{ display: 'flex', alignItems: 'center' }}>
          <button onClick={() => go('planes')} style={{
            background: 'linear-gradient(135deg, #ea580c, #c2410c)',
            color: 'white', border: 'none', padding: '0.5rem 1.3rem',
            borderRadius: '999px', fontWeight: 700, fontSize: '0.85rem',
            cursor: 'pointer', fontFamily: 'Plus Jakarta Sans, sans-serif',
            boxShadow: '0 0 20px rgba(234,88,12,0.35)',
            transition: 'box-shadow 0.2s',
          }}>
            Únete a la Red
          </button>
        </div>

        {/* Hamburger */}
        <button className="hamburger" onClick={() => setMenuOpen(o => !o)} style={{
          display: 'none', alignItems: 'center', justifyContent: 'center',
          marginLeft: 'auto', background: 'none', border: 'none',
          color: '#f0e6d3', cursor: 'pointer',
        }}>
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {/* Mobile overlay */}
      {menuOpen && (
        <div style={{
          position: 'fixed', top: '66px', left: 0, right: 0, bottom: 0,
          background: 'rgba(7,17,31,0.98)', zIndex: 999,
          display: 'flex', flexDirection: 'column', alignItems: 'center',
          justifyContent: 'center', gap: '2rem',
        }}>
          {tabs.map(tab => (
            <button key={tab.id} onClick={() => go(tab.id)} style={{
              background: 'none', border: 'none', color: '#f0e6d3',
              fontFamily: 'Syne, sans-serif', fontWeight: 700,
              fontSize: '1.6rem', cursor: 'pointer',
              borderBottom: active === tab.id ? '2px solid #ea580c' : '2px solid transparent',
              paddingBottom: '4px',
            }}>
              {tab.label}
            </button>
          ))}
          <button onClick={() => go('planes')} style={{
            marginTop: '1rem', background: '#ea580c', color: 'white',
            border: 'none', padding: '0.8rem 2rem', borderRadius: '999px',
            fontWeight: 700, fontSize: '1rem', cursor: 'pointer',
          }}>
            Únete a la Red
          </button>
        </div>
      )}
    </>
  )
}

// ══════════════════════════════════════════════════════════
// SECCIÓN 1 — INICIO
// Identidad: azul marino profundo, partículas, hero épico
// ══════════════════════════════════════════════════════════
function SeccionInicio() {
  return (
    <section id="inicio" style={{
      minHeight: '100vh', position: 'relative', overflow: 'hidden',
      background: 'linear-gradient(160deg, #07111f 0%, #0d1f3c 55%, #1a0c02 100%)',
      backgroundImage: `linear-gradient(160deg, rgba(7,17,31,0.92) 0%, rgba(13,31,60,0.88) 55%, rgba(26,12,2,0.92) 100%), url(/instalacion2.jpeg)`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      padding: '7rem 2rem 4rem',
    }}>
      {/* Grid de fondo */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'linear-gradient(rgba(234,88,12,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(234,88,12,0.05) 1px, transparent 1px)',
        backgroundSize: '60px 60px',
      }} />

      {/* Glow orbs */}
      <div style={{
        position: 'absolute', width: '500px', height: '500px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(234,88,12,0.12) 0%, transparent 70%)',
        top: '10%', right: '-10%', pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', width: '400px', height: '400px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(59,130,246,0.1) 0%, transparent 70%)',
        bottom: '10%', left: '-5%', pointerEvents: 'none',
      }} />

      <div style={{ position: 'relative', zIndex: 1, maxWidth: '820px', textAlign: 'center', animation: 'fadeUp 0.8s ease' }}>
        {/* Badge */}
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: '8px',
          background: 'rgba(234,88,12,0.12)', border: '1px solid rgba(234,88,12,0.35)',
          borderRadius: '999px', padding: '0.45rem 1.2rem', marginBottom: '2rem',
          fontSize: '0.75rem', letterSpacing: '2px', color: '#fb923c',
          fontWeight: 700, textTransform: 'uppercase',
        }}>
          <span style={{ animation: 'pulse 2s infinite', color: '#ea580c' }}>⚡</span>
          Internet de Alta Velocidad — Acandí, Chocó
        </div>

        <h1 style={{
          fontSize: 'clamp(2.4rem, 6vw, 4.5rem)', fontWeight: 900,
          lineHeight: 1.08, marginBottom: '1.6rem', letterSpacing: '-1px',
        }}>
          Conectados al Mundo,{' '}
          <br />
          <span style={{
            background: 'linear-gradient(90deg, #ea580c, #fb923c, #ea580c)',
            backgroundSize: '200% auto', WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent', backgroundClip: 'text',
            animation: 'shimmer 3s linear infinite',
          }}>Arraigados</span>{' '}
          a la{' '}
          <span style={{ color: '#60a5fa' }}>Costa</span>
        </h1>

        <p style={{
          fontSize: '1.1rem', color: 'rgba(240,230,211,0.7)',
          maxWidth: '560px', margin: '0 auto 2.8rem', lineHeight: 1.75,
        }}>
          Fibra óptica de alta velocidad para las comunidades de la costa caribe colombiana.
          Tu vida mejora con nuestra conexión.
        </p>

        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <button onClick={() => document.getElementById('planes')?.scrollIntoView({ behavior: 'smooth' })} style={{
            background: 'linear-gradient(135deg, #ea580c, #c2410c)',
            color: 'white', border: 'none', padding: '0.95rem 2.2rem',
            borderRadius: '999px', fontWeight: 700, fontSize: '1rem', cursor: 'pointer',
            fontFamily: 'Plus Jakarta Sans, sans-serif',
            boxShadow: '0 4px 30px rgba(234,88,12,0.45)',
          }}>
            Ver Planes →
          </button>
          <button onClick={() => document.getElementById('nosotros')?.scrollIntoView({ behavior: 'smooth' })} style={{
            background: 'transparent', color: '#f0e6d3',
            border: '1px solid rgba(240,230,211,0.25)',
            padding: '0.95rem 2.2rem', borderRadius: '999px',
            fontWeight: 600, fontSize: '1rem', cursor: 'pointer',
            fontFamily: 'Plus Jakarta Sans, sans-serif',
            backdropFilter: 'blur(8px)',
          }}>
            Nuestra Historia
          </button>
        </div>

        {/* Stats rápidos */}
        <div style={{
          display: 'flex', gap: '2rem', justifyContent: 'center', flexWrap: 'wrap',
          marginTop: '4rem', paddingTop: '3rem',
          borderTop: '1px solid rgba(255,255,255,0.07)',
        }}>
          {[['500+', 'Familias conectadas'], ['99.5%', 'Uptime garantizado'], ['<4h', 'Soporte técnico'], ['3', 'Planes disponibles']].map(([val, label]) => (
            <div key={label} style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '1.8rem', fontWeight: 900, color: '#ea580c', fontFamily: 'Syne, sans-serif' }}>{val}</div>
              <div style={{ fontSize: '0.8rem', color: 'rgba(240,230,211,0.5)', marginTop: '2px' }}>{label}</div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: '3rem', animation: 'bounce 2s infinite' }}>
          <ChevronDown size={26} color="rgba(234,88,12,0.5)" />
        </div>
      </div>
    </section>
  )
}

// ══════════════════════════════════════════════════════════
// SECCIÓN 2 — PLANES
// Identidad: fondo casi negro cálido, tarjetas con brillo
// ══════════════════════════════════════════════════════════
function SeccionPlanes() {
  const planes = [
    {
      icon: '🪺', nombre: 'El Nido', velocidad: '10 Mbps', precio: '$35.000',
      desc: 'Ideal para navegar, redes sociales y videollamadas básicas.',
      features: ['Navegación fluida', 'Redes sociales', 'Videollamadas', 'Soporte básico'],
      color: '#3b82f6', popular: false,
    },
    {
      icon: '🌊', nombre: 'El Navegante', velocidad: '30 Mbps', precio: '$65.000',
      desc: 'Perfecto para familias y trabajo desde casa.',
      features: ['Streaming HD', 'Trabajo remoto', 'Gaming casual', 'Soporte prioritario', 'WiFi potente'],
      color: '#ea580c', popular: true,
    },
    {
      icon: '🐢', nombre: 'La Gran Caná', velocidad: '100 Mbps', precio: '$120.000',
      desc: 'Máxima velocidad para negocios y usuarios exigentes.',
      features: ['Streaming 4K', 'Gaming online', 'Múltiples dispositivos', 'Soporte 24/7', 'IP fija', 'SLA garantizado'],
      color: '#a855f7', popular: false,
    },
  ]

  return (
    <section id="planes" style={{
      minHeight: '100vh', padding: '7rem 2rem 5rem',
      background: 'linear-gradient(180deg, #0a0f18 0%, #111827 100%)',
      position: 'relative', overflow: 'hidden',
    }}>
      {/* Líneas decorativas */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: '4px',
        background: 'linear-gradient(90deg, transparent, #ea580c, transparent)',
      }} />

      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <div style={{
            display: 'inline-block', background: 'rgba(234,88,12,0.1)',
            border: '1px solid rgba(234,88,12,0.25)', borderRadius: '999px',
            padding: '0.35rem 1rem', marginBottom: '1.2rem',
            fontSize: '0.75rem', letterSpacing: '2px', color: '#fb923c',
            fontWeight: 700, textTransform: 'uppercase',
          }}>
            Nuestros Planes
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 900, marginBottom: '1rem', letterSpacing: '-0.5px' }}>
            Planes que <span style={{ color: '#ea580c' }}>Fluyen</span> Contigo
          </h2>
          <p style={{ color: 'rgba(240,230,211,0.55)', fontSize: '1.05rem' }}>
            Elige el plan que se adapta a tu vida en la costa
          </p>
        </div>

        {/* Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))', gap: '1.8rem' }}>
          {planes.map((plan) => (
            <div key={plan.nombre} className="plan-card" style={{
              background: plan.popular
                ? 'linear-gradient(160deg, rgba(234,88,12,0.12), rgba(194,65,12,0.06))'
                : 'rgba(255,255,255,0.03)',
              border: plan.popular
                ? `2px solid rgba(234,88,12,0.5)`
                : `1px solid rgba(${plan.color === '#3b82f6' ? '59,130,246' : '168,85,247'},0.2)`,
              borderRadius: '1.6rem', padding: '2.2rem',
              position: 'relative',
              boxShadow: plan.popular ? '0 0 40px rgba(234,88,12,0.12)' : 'none',
            }}>
              {plan.popular && (
                <div style={{
                  position: 'absolute', top: '-15px', left: '50%', transform: 'translateX(-50%)',
                  background: 'linear-gradient(135deg, #ea580c, #c2410c)',
                  color: 'white', padding: '0.3rem 1.2rem', borderRadius: '999px',
                  fontSize: '0.72rem', fontWeight: 700, letterSpacing: '1.5px',
                  boxShadow: '0 0 15px rgba(234,88,12,0.5)',
                }}>
                  ⭐ MÁS POPULAR
                </div>
              )}

              <div style={{ fontSize: '2.8rem', marginBottom: '1.2rem' }}>{plan.icon}</div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '0.5rem' }}>{plan.nombre}</h3>
              <p style={{ color: 'rgba(240,230,211,0.55)', fontSize: '0.9rem', marginBottom: '1.4rem', lineHeight: 1.6 }}>{plan.desc}</p>

              <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px', marginBottom: '0.5rem' }}>
                <span style={{ fontSize: '2.4rem', fontWeight: 900, color: plan.color, fontFamily: 'Syne, sans-serif' }}>{plan.precio}</span>
                <span style={{ color: 'rgba(240,230,211,0.4)', fontSize: '0.85rem' }}>/mes</span>
              </div>

              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: '6px',
                background: `rgba(${plan.color === '#ea580c' ? '234,88,12' : plan.color === '#3b82f6' ? '59,130,246' : '168,85,247'},0.15)`,
                border: `1px solid rgba(${plan.color === '#ea580c' ? '234,88,12' : plan.color === '#3b82f6' ? '59,130,246' : '168,85,247'},0.3)`,
                borderRadius: '0.5rem', padding: '0.35rem 0.8rem',
                marginBottom: '1.6rem', fontSize: '0.82rem', fontWeight: 700, color: plan.color,
              }}>
                <Wifi size={13} /> {plan.velocidad}
              </div>

              <ul style={{ listStyle: 'none', marginBottom: '2rem' }}>
                {plan.features.map(f => (
                  <li key={f} style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '0.4rem 0', fontSize: '0.9rem', color: 'rgba(240,230,211,0.8)' }}>
                    <span style={{ color: plan.color, fontSize: '1rem' }}>✓</span> {f}
                  </li>
                ))}
              </ul>

              <button onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })} style={{
                width: '100%', padding: '0.85rem',
                background: plan.popular ? 'linear-gradient(135deg, #ea580c, #c2410c)' : 'transparent',
                border: plan.popular ? 'none' : `1px solid ${plan.color}40`,
                color: plan.popular ? 'white' : plan.color,
                borderRadius: '999px', fontWeight: 700, cursor: 'pointer',
                fontSize: '0.95rem', fontFamily: 'Plus Jakarta Sans, sans-serif',
                transition: 'opacity 0.2s',
              }}>
                {plan.popular ? 'Elegir Este Plan' : 'Contratar'}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ══════════════════════════════════════════════════════════
// SECCIÓN 3 — COBERTURA
// Identidad: azul océano, patrón de ondas, stats prominentes
// ══════════════════════════════════════════════════════════
function SeccionCobertura() {
  const stats = [
    { valor: '12+', label: 'Barrios Cubiertos', icon: '🏘️' },
    { valor: '99.5%', label: 'Uptime Garantizado', icon: '⚡' },
    { valor: '<4h', label: 'Tiempo de Respuesta', icon: '🛡️' },
    { valor: '500+', label: 'Familias Conectadas', icon: '👨‍👩‍👧' },
  ]

  const zonas = ['Centro de Acandí', 'Barrio El Puerto', 'Zona Residencial Norte', 'Sector Comercial', 'Barrio La Playa', 'Comunidad Triganá', 'Zona Turística', 'Sector El Morro']

  return (
    <section id="cobertura" style={{
      minHeight: '100vh', padding: '7rem 2rem 5rem',
      background: 'linear-gradient(160deg, #071a2e 0%, #0a2540 50%, #071a2e 100%)',
      position: 'relative', overflow: 'hidden',
    }}>
      {/* Top border */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: '4px',
        background: 'linear-gradient(90deg, transparent, #3b82f6, transparent)',
      }} />

      {/* Patrón de puntos */}
      <div style={{
        position: 'absolute', inset: 0, opacity: 0.3,
        backgroundImage: 'radial-gradient(rgba(59,130,246,0.4) 1px, transparent 1px)',
        backgroundSize: '30px 30px',
      }} />

      {/* Glow */}
      <div style={{
        position: 'absolute', width: '600px', height: '600px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(59,130,246,0.08) 0%, transparent 70%)',
        top: '50%', left: '50%', transform: 'translate(-50%,-50%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '1000px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <div style={{
            display: 'inline-block', background: 'rgba(59,130,246,0.12)',
            border: '1px solid rgba(59,130,246,0.3)', borderRadius: '999px',
            padding: '0.35rem 1rem', marginBottom: '1.2rem',
            fontSize: '0.75rem', letterSpacing: '2px', color: '#60a5fa',
            fontWeight: 700, textTransform: 'uppercase',
          }}>
            📍 Cobertura Regional
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 900, marginBottom: '1rem' }}>
            Nuestra <span style={{ color: '#60a5fa' }}>Red</span> Llega Lejos
          </h2>
          <p style={{ color: 'rgba(240,230,211,0.55)', fontSize: '1.05rem' }}>
            Llevando conectividad a cada rincón de Acandí y la costa del Chocó
          </p>
        </div>

        {/* Stats */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.4rem', marginBottom: '3.5rem' }}>
          {stats.map(s => (
            <div key={s.label} className="stat-card" style={{
              background: 'rgba(59,130,246,0.07)',
              border: '1px solid rgba(59,130,246,0.2)',
              borderRadius: '1.3rem', padding: '2rem 1.5rem', textAlign: 'center',
              backdropFilter: 'blur(8px)',
            }}>
              <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{s.icon}</div>
              <div style={{ fontSize: '2.2rem', fontWeight: 900, color: '#60a5fa', fontFamily: 'Syne, sans-serif', marginBottom: '0.4rem' }}>{s.valor}</div>
              <div style={{ color: 'rgba(240,230,211,0.6)', fontSize: '0.88rem' }}>{s.label}</div>
            </div>
          ))}
        </div>

        {/* Galería instalaciones */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem', marginBottom: '2rem' }}>
          {[
            { src: '/instalacion1.jpeg', label: 'Tendido de fibra óptica' },
            { src: '/instalacion2.jpeg', label: 'Instalación en campo' },
            { src: '/instalacion3.jpeg', label: 'Equipo técnico en acción' },
          ].map(img => (
            <div key={img.src} style={{ position: 'relative', borderRadius: '1rem', overflow: 'hidden', aspectRatio: '4/3' }}>
              <img src={img.src} alt={img.label} style={{
                width: '100%', height: '100%', objectFit: 'cover',
                filter: 'brightness(0.8)',
              }} />
              <div style={{
                position: 'absolute', bottom: 0, left: 0, right: 0,
                background: 'linear-gradient(transparent, rgba(7,26,46,0.9))',
                padding: '0.8rem', fontSize: '0.78rem',
                color: 'rgba(240,230,211,0.9)', fontWeight: 600,
              }}>
                {img.label}
              </div>
            </div>
          ))}
        </div>

        {/* Mapa de zonas */}
        <div style={{
          background: 'rgba(59,130,246,0.05)',
          border: '1px solid rgba(59,130,246,0.2)',
          borderRadius: '1.5rem', padding: '2.5rem',
        }}>
          <h3 style={{ fontSize: '1.2rem', fontWeight: 800, marginBottom: '0.5rem', color: '#60a5fa' }}>
            📡 Zonas con Cobertura Activa
          </h3>
          <p style={{ color: 'rgba(240,230,211,0.45)', fontSize: '0.85rem', marginBottom: '2rem' }}>
            ¿No ves tu zona? Contáctanos, estamos en expansión constante.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0.8rem' }}>
            {zonas.map(zona => (
              <div key={zona} style={{
                display: 'flex', alignItems: 'center', gap: '10px',
                background: 'rgba(59,130,246,0.08)', borderRadius: '0.7rem',
                padding: '0.7rem 1rem', fontSize: '0.88rem',
              }}>
                <span style={{ color: '#34d399', fontSize: '0.6rem' }}>●</span>
                <span style={{ color: 'rgba(240,230,211,0.85)' }}>{zona}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// ══════════════════════════════════════════════════════════
// SECCIÓN 4 — QUIÉNES SOMOS
// Identidad: fondo cálido tierra/arena, elegante y humano
// ══════════════════════════════════════════════════════════
function SeccionNosotros() {
  const valores = [
    { icon: <Leaf size={22} />, titulo: 'Compromiso Ambiental', desc: 'Protegemos el ecosistema costero, incluyendo la tortuga Caná que anida en nuestras playas cada temporada.' },
    { icon: <Users size={22} />, titulo: 'Raíces Comunitarias', desc: 'Empresa local fundada por y para las comunidades afrodescendientes de Acandí y el litoral chocoano.' },
    { icon: <Shield size={22} />, titulo: 'Conectividad Resiliente', desc: 'Red robusta diseñada para resistir las condiciones del trópico caribeño con respaldo permanente.' },
  ]

  return (
    <section id="nosotros" style={{
      minHeight: '100vh', padding: '7rem 2rem 5rem',
      background: 'linear-gradient(160deg, #120b04 0%, #1c1008 50%, #0f1420 100%)',
      position: 'relative', overflow: 'hidden',
    }}>
      {/* Top border */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: '4px',
        background: 'linear-gradient(90deg, transparent, #ea580c, #fb923c, transparent)',
      }} />

      {/* Textura sutil */}
      <div style={{
        position: 'absolute', inset: 0, opacity: 0.15,
        backgroundImage: 'radial-gradient(rgba(234,88,12,0.6) 1px, transparent 1px)',
        backgroundSize: '40px 40px',
      }} />

      <div style={{ maxWidth: '1100px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <div style={{
            display: 'inline-block', background: 'rgba(234,88,12,0.1)',
            border: '1px solid rgba(234,88,12,0.25)', borderRadius: '999px',
            padding: '0.35rem 1rem', marginBottom: '1.2rem',
            fontSize: '0.75rem', letterSpacing: '2px', color: '#fb923c',
            fontWeight: 700, textTransform: 'uppercase',
          }}>
            Nuestra Historia
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 900, marginBottom: '1rem' }}>
            Quiénes <span style={{ color: '#ea580c' }}>Somos</span>
          </h2>
          <p style={{ color: 'rgba(240,230,211,0.6)', maxWidth: '580px', margin: '0 auto', fontSize: '1.05rem', lineHeight: 1.75 }}>
            INCOLSAN nació en Acandí para cerrar la brecha digital en las comunidades costeras del Chocó,
            llevando fibra óptica donde más se necesita.
          </p>
        </div>

        {/* Misión + Visión */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginBottom: '2.5rem' }}>
          {[
            { color: '#ea580c', rgb: '234,88,12', titulo: '🎯 Misión', texto: 'Proveer internet de fibra óptica de alta calidad a las comunidades de la costa del Chocó, impulsando el desarrollo económico, educativo y social de nuestra región.' },
            { color: '#60a5fa', rgb: '96,165,250', titulo: '🔭 Visión', texto: 'Ser el proveedor de internet más confiable y comprometido del litoral Caribe colombiano, conectando comunidades con el mundo sin perder sus raíces.' },
          ].map(item => (
            <div key={item.titulo} style={{
              background: `rgba(${item.rgb},0.07)`,
              border: `1px solid rgba(${item.rgb},0.22)`,
              borderRadius: '1.5rem', padding: '2.2rem',
              borderLeft: `4px solid ${item.color}`,
            }}>
              <h3 style={{ color: item.color, fontWeight: 800, fontSize: '1.15rem', marginBottom: '1rem' }}>{item.titulo}</h3>
              <p style={{ color: 'rgba(240,230,211,0.72)', lineHeight: 1.75, fontSize: '0.95rem' }}>{item.texto}</p>
            </div>
          ))}
        </div>

        {/* Valores */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.2rem', marginBottom: '2.5rem' }}>
          {valores.map(v => (
            <div key={v.titulo} style={{
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(255,255,255,0.07)',
              borderRadius: '1.2rem', padding: '1.8rem',
              transition: 'border-color 0.2s',
            }}>
              <div style={{
                width: '44px', height: '44px', borderRadius: '12px',
                background: 'rgba(234,88,12,0.15)', display: 'flex',
                alignItems: 'center', justifyContent: 'center',
                color: '#ea580c', marginBottom: '1rem',
              }}>
                {v.icon}
              </div>
              <h4 style={{ fontWeight: 800, marginBottom: '0.6rem', fontSize: '1rem' }}>{v.titulo}</h4>
              <p style={{ color: 'rgba(240,230,211,0.6)', fontSize: '0.88rem', lineHeight: 1.65 }}>{v.desc}</p>
            </div>
          ))}
        </div>

        {/* Foto del equipo */}
        <div style={{ marginBottom: '2.5rem', borderRadius: '1.5rem', overflow: 'hidden', position: 'relative' }}>
          <img src="/equipo.jpeg" alt="Equipo INCOLSAN" style={{
            width: '100%',
            height: 'clamp(280px, 40vw, 420px)',
            objectFit: 'cover',
            objectPosition: 'center 15%',
          }} />
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(to top, rgba(18,11,4,0.88) 0%, rgba(18,11,4,0.1) 45%, transparent 70%)',
            display: 'flex', alignItems: 'flex-end', padding: '2rem',
          }}>
            <div>
              <h3 style={{ fontWeight: 900, fontSize: 'clamp(1.1rem, 3vw, 1.4rem)', marginBottom: '0.3rem' }}>
                Nuestro Equipo
              </h3>
              <p style={{ color: 'rgba(240,230,211,0.7)', fontSize: 'clamp(0.8rem, 2vw, 0.9rem)' }}>
                El corazón de INCOLSAN — personas de Acandí conectando a Acandí
              </p>
            </div>
          </div>
        </div>

        {/* Impacto social — sorteos */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.2rem', marginBottom: '2.5rem' }}>
          {[
            { 
              src: '/sorteo2.jpeg', 
              titulo: 'Compromiso con la comunidad', 
              desc: 'Premiamos la fidelidad de nuestros clientes con sorteos y regalos.',
              position: 'center center'
            },
            { 
              src: '/sorteo1.jpeg', 
              titulo: 'Internet que transforma vidas', 
              desc: 'Cada familia conectada es un paso más hacia el desarrollo de Acandí.',
              position: 'center 30%'
            },
          ].map(item => (
            <div key={item.titulo} style={{
              borderRadius: '1.2rem', overflow: 'hidden',
              border: '1px solid rgba(234,88,12,0.15)',
              background: 'rgba(255,255,255,0.02)',
            }}>
              <div style={{ width: '100%', height: '240px', overflow: 'hidden' }}>
                <img src={item.src} alt={item.titulo} style={{
                  width: '100%', height: '100%', objectFit: 'cover',
                  objectPosition: item.position,
                  transition: 'transform 0.3s ease',
                }} />
              </div>
              <div style={{ padding: '1.2rem' }}>
                <h4 style={{ fontWeight: 800, fontSize: '0.95rem', marginBottom: '0.4rem', color: '#ea580c' }}>{item.titulo}</h4>
                <p style={{ color: 'rgba(240,230,211,0.6)', fontSize: '0.85rem', lineHeight: 1.6 }}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Tortuga Caná */}
        <div style={{
          background: 'linear-gradient(135deg, rgba(59,130,246,0.07), rgba(234,88,12,0.05))',
          border: '1px solid rgba(96,165,250,0.18)',
          borderRadius: '1.5rem', padding: '2.5rem',
          display: 'flex', gap: '2rem', alignItems: 'center', flexWrap: 'wrap',
        }}>
          <div style={{ fontSize: '4.5rem', filter: 'drop-shadow(0 0 20px rgba(59,130,246,0.3))' }}>🐢</div>
          <div style={{ flex: 1, minWidth: '220px' }}>
            <div style={{
              display: 'inline-block', background: 'rgba(96,165,250,0.12)',
              border: '1px solid rgba(96,165,250,0.25)', borderRadius: '999px',
              padding: '0.25rem 0.9rem', fontSize: '0.72rem', color: '#93c5fd',
              fontWeight: 700, marginBottom: '0.9rem', letterSpacing: '1px', textTransform: 'uppercase',
            }}>
              🌿 Guardianes del Mar · Playa Caná, Acandí
            </div>
            <h3 style={{ fontWeight: 800, fontSize: '1.25rem', marginBottom: '0.7rem' }}>La tortuga Caná, nuestra guía</h3>
            <p style={{ color: 'rgba(240,230,211,0.65)', fontSize: '0.92rem', lineHeight: 1.75 }}>
              Como la tortuga que regresa cada año a las playas de Acandí, INCOLSAN mantiene
              un compromiso constante con su comunidad. Nuestra red, igual que sus rutas migratorias,
              conecta mundos distintos sin olvidar el punto de partida.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

// ══════════════════════════════════════════════════════════
// SECCIÓN 5 — CONTACTO
// Identidad: verde WhatsApp oscuro, acción directa
// ══════════════════════════════════════════════════════════
function SeccionContacto() {
  const [form, setForm] = useState({ nombre: '', telefono: '', email: '', mensaje: '' })

  const WA_NUMBER = '573218171947' // ← Cambia esto por el número real

  const handleWhatsApp = () => {
    const msg = encodeURIComponent('Hola INCOLSAN 👋, me interesa conocer más sobre sus planes de internet.')
    window.open(`https://wa.me/${WA_NUMBER}?text=${msg}`, '_blank')
  }

  const handleSubmit = () => {
    if (!form.nombre) return
    const msg = encodeURIComponent(
      `Hola INCOLSAN 👋\n\nNombre: ${form.nombre}\nTeléfono: ${form.telefono}\nEmail: ${form.email}\nMensaje: ${form.mensaje}`
    )
    window.open(`https://wa.me/${WA_NUMBER}?text=${msg}`, '_blank')
  }

  return (
    <section id="contacto" style={{
      minHeight: '100vh', padding: '7rem 2rem 5rem',
      background: 'linear-gradient(160deg, #071a10 0%, #0a1f14 50%, #07111f 100%)',
      position: 'relative', overflow: 'hidden',
    }}>
      {/* Top border */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: '4px',
        background: 'linear-gradient(90deg, transparent, #25D366, transparent)',
      }} />

      {/* Glow verde */}
      <div style={{
        position: 'absolute', width: '500px', height: '500px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(37,211,102,0.06) 0%, transparent 70%)',
        bottom: '-100px', right: '-100px', pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '1000px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <div style={{
            display: 'inline-block', background: 'rgba(37,211,102,0.1)',
            border: '1px solid rgba(37,211,102,0.25)', borderRadius: '999px',
            padding: '0.35rem 1rem', marginBottom: '1.2rem',
            fontSize: '0.75rem', letterSpacing: '2px', color: '#4ade80',
            fontWeight: 700, textTransform: 'uppercase',
          }}>
            Estamos aquí para ti
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 900, marginBottom: '1rem' }}>
            Comienza a <span style={{ color: '#ea580c' }}>Navegar</span>
          </h2>
          <p style={{ color: 'rgba(240,230,211,0.55)', fontSize: '1.05rem' }}>
            Contáctanos y te ayudamos a elegir el mejor plan para ti
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2.5rem', alignItems: 'start' }}>
          {/* Info */}
          <div>
            <h3 style={{ fontWeight: 800, fontSize: '1.15rem', marginBottom: '1.8rem', color: '#4ade80' }}>
              Información de Contacto
            </h3>
            {[
              { icon: <Phone size={18} />, texto: '+57 321 8171947', color: '#4ade80' },
              { icon: <Mail size={18} />, texto: 'info@incolsan.com', color: '#60a5fa' },
              { icon: <MapPin size={18} />, texto: 'Acandí, Chocó, Colombia', color: '#ea580c' },
            ].map(item => (
              <div key={item.texto} style={{
                display: 'flex', gap: '1rem', marginBottom: '1.3rem', alignItems: 'center',
                background: 'rgba(255,255,255,0.03)', borderRadius: '0.8rem',
                padding: '0.9rem 1rem', border: '1px solid rgba(255,255,255,0.06)',
              }}>
                <div style={{ color: item.color, flexShrink: 0 }}>{item.icon}</div>
                <span style={{ color: 'rgba(240,230,211,0.8)', fontSize: '0.92rem' }}>{item.texto}</span>
              </div>
            ))}
 
          {/* Foto oficina */}
          <div style={{ 
            borderRadius: '1rem', overflow: 'hidden', 
            marginBottom: '1.2rem', marginTop: '1rem',
            border: '1px solid rgba(37,211,102,0.15)',
          }}>
            <img src="/oficina.jpeg" alt="Oficina INCOLSAN" style={{
              width: '100%', 
              height: 'clamp(220px, 30vw, 280px)', 
              objectFit: 'cover',
              objectPosition: 'center 20%',
            }} />
            <div style={{
              background: 'rgba(7,26,16,0.8)',
              padding: '0.9rem 1rem',
              fontSize: '0.85rem',
              color: 'rgba(240,230,211,0.7)',
              borderTop: '1px solid rgba(37,211,102,0.1)',
            }}>
              📍 Calle Miramar, frente al antiguo Telecom — Acandí, Chocó
            </div>
          </div>

            <button onClick={handleWhatsApp} style={{
              marginTop: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.7rem',
              background: 'linear-gradient(135deg, #25D366, #128C7E)',
              color: 'white', border: 'none', padding: '1rem 1.8rem',
              borderRadius: '999px', fontWeight: 700, fontSize: '1rem', cursor: 'pointer',
              fontFamily: 'Plus Jakarta Sans, sans-serif',
              boxShadow: '0 0 25px rgba(37,211,102,0.3)', width: '100%',
              justifyContent: 'center',
            }}>
              <MessageCircle size={20} /> Contactar por WhatsApp
            </button>
          </div>

          {/* Formulario */}
          <div style={{
            background: 'rgba(255,255,255,0.03)',
            border: '1px solid rgba(37,211,102,0.15)',
            borderRadius: '1.5rem', padding: '2.2rem',
            backdropFilter: 'blur(12px)',
          }}>
            <h3 style={{ fontWeight: 800, fontSize: '1.1rem', marginBottom: '1.5rem', color: 'rgba(240,230,211,0.9)' }}>
              Envíanos un mensaje
            </h3>
            {[
              { field: 'nombre', placeholder: 'Tu nombre completo' },
              { field: 'telefono', placeholder: 'Número de teléfono' },
              { field: 'email', placeholder: 'Correo electrónico' },
            ].map(({ field, placeholder }) => (
              <input key={field} placeholder={placeholder}
                value={form[field]}
                onChange={e => setForm({ ...form, [field]: e.target.value })}
                style={{
                  width: '100%', background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.1)', borderRadius: '0.8rem',
                  padding: '0.85rem 1rem', color: '#f0e6d3', fontSize: '0.92rem',
                  marginBottom: '0.9rem', outline: 'none', boxSizing: 'border-box',
                  transition: 'border-color 0.2s',
                }}
                onFocus={e => e.target.style.borderColor = 'rgba(234,88,12,0.5)'}
                onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
              />
            ))}
            <textarea placeholder="¿En qué podemos ayudarte?" rows={4}
              value={form.mensaje}
              onChange={e => setForm({ ...form, mensaje: e.target.value })}
              style={{
                width: '100%', background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.1)', borderRadius: '0.8rem',
                padding: '0.85rem 1rem', color: '#f0e6d3', fontSize: '0.92rem',
                marginBottom: '1.2rem', outline: 'none', resize: 'vertical',
                boxSizing: 'border-box', fontFamily: 'Plus Jakarta Sans, sans-serif',
              }}
              onFocus={e => e.target.style.borderColor = 'rgba(234,88,12,0.5)'}
              onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
            />
            <button onClick={handleSubmit} style={{
              width: '100%', background: 'linear-gradient(135deg, #ea580c, #c2410c)',
              color: 'white', border: 'none', padding: '0.95rem',
              borderRadius: '999px', fontWeight: 700, fontSize: '0.95rem', cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem',
              fontFamily: 'Plus Jakarta Sans, sans-serif',
              boxShadow: '0 4px 20px rgba(234,88,12,0.3)',
            }}>
              <Send size={17} /> Enviar por WhatsApp
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

// ── FOOTER ───────────────────────────────────────────────
function Footer() {
  return (
    <footer style={{
      background: '#040a12', padding: '2.5rem 2rem',
      borderTop: '1px solid rgba(234,88,12,0.12)', textAlign: 'center',
    }}>
      <div style={{ marginBottom: '1rem' }}>
        <img src="/logo.png" alt="INCOLSAN" style={{ height: '55px', width: 'auto' }} />
      </div>
      <p style={{ color: 'rgba(240,230,211,0.35)', fontSize: '0.85rem', marginBottom: '0.4rem' }}>
        Hecho con ❤️ en Acandí, Chocó — Colombia
      </p>
      <p style={{ color: 'rgba(240,230,211,0.25)', fontSize: '0.78rem' }}>
        © {new Date().getFullYear()} INCOLSAN. Todos los derechos reservados.
      </p>
    </footer>
  )
}

// ── CHAT WIDGET ──────────────────────────────────────────
function ChatWidget() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState([
    { role: 'assistant', text: '¡Hola! Soy Caná 🐢, el asistente de INCOLSAN. ¿En qué puedo ayudarte hoy?' }
  ])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)

  const send = async () => {
    if (!input.trim() || loading) return
    const userMsg = input.trim()
    setInput('')
    setMessages(prev => [...prev, { role: 'user', text: userMsg }])
    setLoading(true)
    try {
      const res = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          model: 'claude-sonnet-4-20250514',
          max_tokens: 1000,
          system: `Eres Caná, el asistente virtual de INCOLSAN, proveedor de internet de fibra óptica en Acandí, Chocó, Colombia. Eres amigable, cálido y conoces la cultura afrocolombiana de la costa del Pacífico. Ayudas con: planes (El Nido 10Mbps $35.000, El Navegante 30Mbps $65.000, La Gran Caná 100Mbps $120.000), soporte técnico básico, cobertura y registro de nuevos clientes. Responde en español, de forma concisa y amable. Si quieren contratar, diles que llamen o escriban al WhatsApp de INCOLSAN.`,
          messages: messages.concat({ role: 'user', content: userMsg }).map(m => ({
            role: m.role, content: m.role === 'user' ? (m.text || m.content) : (m.text || m.content)
          }))
        })
      })
      const data = await res.json()
      const reply = data.content?.[0]?.text || 'Lo siento, hubo un error. Intenta de nuevo.'
      setMessages(prev => [...prev, { role: 'assistant', text: reply }])
    } catch {
      setMessages(prev => [...prev, { role: 'assistant', text: 'Error de conexión. Por favor intenta más tarde.' }])
    }
    setLoading(false)
  }

  return (
    <>
      {open && (
        <div style={{
          position: 'fixed', bottom: '90px', right: '1.5rem', width: '330px',
          background: '#0a1628', border: '1px solid rgba(234,88,12,0.25)',
          borderRadius: '1.3rem', overflow: 'hidden', zIndex: 2000,
          boxShadow: '0 25px 70px rgba(0,0,0,0.6)',
          animation: 'fadeUp 0.25s ease',
        }}>
          <div style={{
            background: 'linear-gradient(135deg, rgba(234,88,12,0.2), rgba(194,65,12,0.1))',
            padding: '1rem 1.2rem', display: 'flex', alignItems: 'center', gap: '0.8rem',
            borderBottom: '1px solid rgba(234,88,12,0.15)',
          }}>
            <div style={{
              width: '38px', height: '38px', borderRadius: '50%',
              background: 'linear-gradient(135deg, #ea580c, #c2410c)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontFamily: 'Syne, sans-serif', fontWeight: 900, fontSize: '1.1rem',
              boxShadow: '0 0 12px rgba(234,88,12,0.4)',
            }}>C</div>
            <div>
              <div style={{ fontWeight: 800, fontSize: '0.95rem', fontFamily: 'Syne, sans-serif' }}>Caná</div>
              <div style={{ fontSize: '0.72rem', color: '#4ade80', display: 'flex', alignItems: 'center', gap: '4px' }}>
                <span style={{ animation: 'pulse 2s infinite' }}>●</span> En línea
              </div>
            </div>
            <button onClick={() => setOpen(false)} style={{
              marginLeft: 'auto', background: 'none', border: 'none',
              color: 'rgba(240,230,211,0.6)', cursor: 'pointer',
            }}><X size={18} /></button>
          </div>

          <div style={{ height: '270px', overflowY: 'auto', padding: '1rem', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
            {messages.map((m, i) => (
              <div key={i} style={{
                alignSelf: m.role === 'user' ? 'flex-end' : 'flex-start',
                background: m.role === 'user'
                  ? 'linear-gradient(135deg, #ea580c, #c2410c)'
                  : 'rgba(255,255,255,0.06)',
                padding: '0.65rem 1rem', borderRadius: m.role === 'user' ? '1rem 1rem 0.2rem 1rem' : '1rem 1rem 1rem 0.2rem',
                fontSize: '0.85rem', maxWidth: '88%', lineHeight: 1.55,
                border: m.role === 'assistant' ? '1px solid rgba(255,255,255,0.07)' : 'none',
              }}>
                {m.text}
              </div>
            ))}
            {loading && (
              <div style={{
                alignSelf: 'flex-start', background: 'rgba(255,255,255,0.06)',
                padding: '0.65rem 1rem', borderRadius: '1rem 1rem 1rem 0.2rem',
                fontSize: '0.85rem', border: '1px solid rgba(255,255,255,0.07)',
              }}>
                <span style={{ animation: 'pulse 1s infinite' }}>●●●</span>
              </div>
            )}
          </div>

          <div style={{ padding: '0.8rem', borderTop: '1px solid rgba(255,255,255,0.07)', display: 'flex', gap: '0.5rem' }}>
            <input value={input} onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && send()}
              placeholder="Escribe tu pregunta..."
              style={{
                flex: 1, background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.1)', borderRadius: '0.7rem',
                padding: '0.65rem 0.9rem', color: '#f0e6d3',
                fontSize: '0.85rem', outline: 'none',
                fontFamily: 'Plus Jakarta Sans, sans-serif',
              }}
            />
            <button onClick={send} disabled={loading} style={{
              background: 'linear-gradient(135deg, #ea580c, #c2410c)',
              border: 'none', borderRadius: '0.7rem',
              padding: '0.65rem 0.9rem', cursor: 'pointer', color: 'white',
            }}>
              <Send size={16} />
            </button>
          </div>
        </div>
      )}

      <button onClick={() => setOpen(o => !o)} style={{
        position: 'fixed', bottom: '1.5rem', right: '1.5rem',
        width: '58px', height: '58px', borderRadius: '50%',
        background: 'linear-gradient(135deg, #ea580c, #c2410c)',
        border: 'none', cursor: 'pointer',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        boxShadow: '0 0 30px rgba(234,88,12,0.5)', zIndex: 2000,
        transition: 'transform 0.2s',
      }}
        onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.1)'}
        onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
      >
        {open ? <X size={24} color="white" /> : <MessageCircle size={24} color="white" />}
      </button>
    </>
  )
}

// ── APP ──────────────────────────────────────────────────
export default function App() {
  const [active, setActive] = useState('inicio')

  useEffect(() => {
    const ids = ['inicio', 'planes', 'cobertura', 'nosotros', 'contacto']
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id) }),
      { threshold: 0.2 }
    )
    ids.forEach(id => { const el = document.getElementById(id); if (el) obs.observe(el) })
    return () => obs.disconnect()
  }, [])

  return (
    <>
      <GlobalStyles />
      <Navbar active={active} />
      <SeccionInicio />
      <SeccionPlanes />
      <SeccionCobertura />
      <SeccionNosotros />
      <SeccionContacto />
      <Footer />
      <ChatWidget />
    </>
  )
}