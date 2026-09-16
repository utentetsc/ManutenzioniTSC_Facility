export default function Home() {
  return (
    <main style={{ padding: "40px", fontFamily: "Arial" }}>
      <h1>The Space Maintenance Manager</h1>

      <p>
        Sistema gestione manutenzioni cinema The Space
      </p>

      <h2>Login</h2>

      <div style={{ marginTop: "20px" }}>
        <input
          placeholder="Username"
          style={{
            display: "block",
            marginBottom: "10px",
            padding: "8px"
          }}
        />

        <input
          type="password"
          placeholder="Password"
          style={{
            display: "block",
            marginBottom: "10px",
            padding: "8px"
          }}
        />

        <button>
          Accedi
        </button>
      </div>
    </main>
  );
}
