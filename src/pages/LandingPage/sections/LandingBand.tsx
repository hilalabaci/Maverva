import {
  BandSection, BandInner, BandIdx, BandH2, BandP, BandKv,
  AppMini, ProgressBar, PillStatus, Avatar, MonoText, TbarRight,
} from "../landing-styled";
import { BAND_KV, PORTFOLIO_ROWS, AVATAR_COLORS } from "../data";

const TABLE_HEADERS = ["Project", "Lead", "Progress", "Status", "Ship"];

export function LandingBand() {
  return (
    <BandSection>
      <BandInner>
        <div>
          <BandIdx>— 02 / Visibility</BandIdx>
          <BandH2>
            One view, every project.{" "}
            <em>No status meetings required.</em>
          </BandH2>
          <BandP>
            Portfolio rollups update automatically from the work itself.
            Exec-ready summaries, without the slide deck.
          </BandP>
          <BandKv>
            {BAND_KV.map(({ k, v }) => (
              <div key={k}>
                <div className="k">{k}</div>
                <div className="v">{v}</div>
              </div>
            ))}
          </BandKv>
        </div>

        <AppMini>
          <div className="tbar">
            <div className="tbar-dots">
              <span className="tbar-dot" />
              <span className="tbar-dot" />
              <span className="tbar-dot" />
            </div>
            <b>Portfolio · Q2 2026</b>
            <TbarRight>8 projects · 4 leads</TbarRight>
          </div>

          <table>
            <thead>
              <tr>{TABLE_HEADERS.map((h) => <th key={h}>{h}</th>)}</tr>
            </thead>
            <tbody>
              {PORTFOLIO_ROWS.map((row) => (
                <tr key={row.project}>
                  <td><b>{row.project}</b></td>
                  <td>
                    <Avatar $color={AVATAR_COLORS[row.initials]}>
                      {row.initials}
                    </Avatar>
                    {row.lead}
                  </td>
                  <td>
                    <ProgressBar $pct={row.pct} $color={row.progressColor} />
                    <MonoText>{row.pct}%</MonoText>
                  </td>
                  <td>
                    <PillStatus $variant={row.status}>{row.statusLabel}</PillStatus>
                  </td>
                  <td><MonoText>{row.ship}</MonoText></td>
                </tr>
              ))}
            </tbody>
          </table>
        </AppMini>
      </BandInner>
    </BandSection>
  );
}
