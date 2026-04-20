import {
  ProductWrap, ProductFrame, PfChrome, AppGrid,
  AppSidebar, MainCol, Board, BoardCol, BoardCard, SmallBtn,
} from "../landing-styled";
import type { CardPriority } from "../data";
import { SIDEBAR_ENTRIES, BOARD_COLUMNS, AVATAR_COLORS } from "../data";

const PRIORITY_CLASS: Record<CardPriority, string> = {
  ok: "pri ok",
  med: "pri med",
  warn: "pri",
};

const BOARD_TABS = ["Backlog", "Board", "Timeline", "List", "Reports"];

export function LandingProduct() {
  return (
    <ProductWrap>
      <ProductFrame>
        <PfChrome>
          <div className="dots">
            <span /><span /><span />
          </div>
          <div className="url">app.maverva.com/projects/MAV/board</div>
          <div className="ctrls"><span>⌘K</span></div>
        </PfChrome>

        <AppGrid>
          <AppSidebar>
            <div className="sbrand">
              <span className="m" /> Maverva
            </div>

            {SIDEBAR_ENTRIES.map((entry, i) =>
              entry.type === "group" ? (
                <h6 key={i}>{entry.label}</h6>
              ) : (
                <div key={i} className={`item${entry.active ? " active" : ""}`}>
                  <span
                    className="ico"
                    style={entry.color ? { background: entry.color, borderColor: entry.color } : undefined}
                  />
                  {" "}{entry.label}
                  {entry.badge && <span className="cnt">{entry.badge}</span>}
                </div>
              )
            )}
          </AppSidebar>

          <MainCol>
            <div className="crumb">
              <b>Projects</b> / <b>Core platform</b> / Sprint 14
            </div>

            <div className="mhead">
              <div>
                <h3>Sprint 14 — Billing migration</h3>
                <div className="meta">APR 13 → APR 27 · 18 ISSUES · 62% COMPLETE</div>
              </div>
              <div className="actions">
                <SmallBtn $variant="outline">Filter</SmallBtn>
                <SmallBtn $variant="outline">Group: Status</SmallBtn>
                <SmallBtn $variant="accent">+ New issue</SmallBtn>
              </div>
            </div>

            <div className="tabs">
              {BOARD_TABS.map((tab) => (
                <span key={tab} className={tab === "Board" ? "on" : undefined}>
                  {tab}
                </span>
              ))}
            </div>

            <Board>
              {BOARD_COLUMNS.map((col) => (
                <BoardCol key={col.title}>
                  <h5>
                    {col.title} <span className="c">{col.count}</span>
                  </h5>
                  {col.cards.map((card) => (
                    <BoardCard key={card.id} $faded={card.faded}>
                      <span className={PRIORITY_CLASS[card.priority]} />
                      {card.text}
                      <div className="tag">
                        <span>{card.id}</span>
                        <span
                          className="av"
                          style={{ background: AVATAR_COLORS[card.initials] }}
                        >
                          {card.initials}
                        </span>
                      </div>
                    </BoardCard>
                  ))}
                </BoardCol>
              ))}
            </Board>
          </MainCol>
        </AppGrid>
      </ProductFrame>
    </ProductWrap>
  );
}
