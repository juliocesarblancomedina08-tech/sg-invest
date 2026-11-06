
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="sg-container">
      <nav
        style={{
          padding: "24px 7%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 15,
          borderBottom: "1px solid #172b42"
        }}
      >
        <h2 style={{ color: "#48a5ff" }}>
          SG INVEST
        </h2>

        <Link href="/login" className="sg-link">
          Iniciar sesión
        </Link>
      </nav>

      <section
        style={{
          minHeight: "78vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          padding: "50px 22px"
        }}
      >
        <p
          style={{
            color: "#48a5ff",
            letterSpacing: 3,
            fontWeight: "bold"
          }}
        >
          BIENVENIDO A SG INVEST
        </p>

        <h1
          style={{
            fontSize: "clamp(38px, 7vw, 68px)",
            maxWidth: 850,
            margin: "22px 0",
            lineHeight: 1.15
          }}
        >
          Construye tu conocimiento{" "}
          <span style={{ color: "#48a5ff" }}>
            financiero.
          </span>
        </h1>

        <p
          className="sg-muted"
          style={{
            maxWidth: 600,
            lineHeight: 1.9,
            fontSize: 17
          }}
        >
          Aprende conceptos financieros,
          descubre herramientas digitales
          y administra tu cuenta desde una
          plataforma moderna.
        </p>

        <div
          style={{
            display: "flex",
            gap: 15,
            flexWrap: "wrap",
            justifyContent: "center",
            marginTop: 35
          }}
        >
          <Link
            href="/register"
            className="sg-button"
          >
            Crear cuenta →
          </Link>

          <Link
            href="/login"
            style={{
              padding: 15,
              border: "1px solid #1685f8",
              borderRadius: 10,
              textDecoration: "none"
            }}
          >
            Iniciar sesión
          </Link>
        </div>
      </section>

      <footer
        style={{
          textAlign: "center",
          padding: 25,
          color: "#91a9c2",
          borderTop: "1px solid #172b42"
        }}
      >
        © 2026 SG INVEST

        <p style={{ marginTop: 10, fontSize: 12 }}>
          Plataforma de demostración y educación financiera.
          No ofrece inversiones ni garantiza rendimientos.
        </p>
      </footer>
    </main>
  );
}
