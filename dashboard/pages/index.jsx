export default function Home() {
  const features = [
    {
      name: "Auto Moderation",
      desc: "Protect server from spam and bad words",
      enabled: true,
    },
    {
      name: "Welcome System",
      desc: "Send welcome messages automatically",
      enabled: false,
    },
    {
      name: "Ticket System",
      desc: "Support ticket management",
      enabled: true,
    },
    {
      name: "Music System",
      desc: "24/7 music and voice controls",
      enabled: false,
    },
  ];

  return (
    <div className="dashboard">
      <aside className="sidebar">
        <div>
          <h2>TITAN</h2>

          <nav>
            <a href="#">Dashboard</a>
            <a href="#">Moderation</a>
            <a href="#">Welcome</a>
            <a href="#">Tickets</a>
            <a href="#">Music</a>
            <a href="#">Logs</a>
            <a href="#">Settings</a>
          </nav>
        </div>

        <div className="sidebarBottom">
          <p>Connected</p>
          <span>Bot Online</span>
        </div>
      </aside>

      <main className="main">
        <div className="topbar">
          <div>
            <h1>Titan Dashboard</h1>
            <p>Manage your Discord server easily.</p>
          </div>

          <button className="discordBtn">
            Login Discord
          </button>
        </div>

        <div className="stats">
          <div className="statCard">
            <h3>Servers</h3>
            <p>12</p>
          </div>

          <div className="statCard">
            <h3>Users</h3>
            <p>8,429</p>
          </div>

          <div className="statCard">
            <h3>Commands</h3>
            <p>24,521</p>
          </div>
        </div>

        <div className="featureHeader">
          <h2>Features</h2>
        </div>

        <div className="featureGrid">
          {features.map((feature, index) => (
            <div className="featureCard" key={index}>
              <div className="featureTop">
                <div>
                  <h3>{feature.name}</h3>
                  <p>{feature.desc}</p>
                </div>

                <label className="switch">
                  <input
                    type="checkbox"
                    defaultChecked={feature.enabled}
                  />
                  <span className="slider"></span>
                </label>
              </div>

              <button className="settingsBtn">
                Settings
              </button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
