import AuroraPanel from "../../components/acernity/aurora-panel";

export default function RecordingsPage() {
  return (
    <main className="container rs-page">
      <h1 className="rs-title">Recordings Library</h1>
      <p className="rs-subtitle">A clean, high-contrast content table with premium spacing and readability.</p>

      <AuroraPanel title="All recordings" subtitle="Filter, review, and publish with confidence.">
        <table className="rs-table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Guests</th>
              <th>Duration</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Founder Circle #17</td>
              <td>3</td>
              <td>58m</td>
              <td>Published</td>
            </tr>
            <tr>
              <td>Growth Sprint Debrief</td>
              <td>2</td>
              <td>45m</td>
              <td>Editing</td>
            </tr>
            <tr>
              <td>Community Spotlight</td>
              <td>4</td>
              <td>63m</td>
              <td>Uploading</td>
            </tr>
          </tbody>
        </table>
      </AuroraPanel>
    </main>
  );
}
