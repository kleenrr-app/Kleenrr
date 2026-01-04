export default function Home() {
  return (
    <main style={{ padding: 20 }}>
      <h1>kleenrr</h1>
      <p>On-demand snow, lawn, and vehicle services</p>

      <div style={{ display: 'flex', gap: 12, marginTop: 20 }}>
        <button>❄ Snow</button>
        <button>🌱 Lawn</button>
        <button>🚗 Vehicle</button>
      </div>
    </main>
  );
}
