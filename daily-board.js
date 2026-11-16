// Simple daily leaderboard + "made by gero" footer — shared by fengle, minkle and hollisle.
// Master copy lives in "ai wordles/wordles-leaderboard/daily-board.js"; each game has a copy next to its game.js.
// Usage (BEFORE game.js):  <script src="daily-board.js" data-game="fengle" data-kinds="cover,song,song-hard"></script>
// game.js fires "sd:render" {play, kind, day, done, won, guesses} on every render and "sd:finish" when a round ends.
(() => {
  "use strict";
  const me = document.currentScript;
  const GAME = me.dataset.game;
  const KINDS = me.dataset.kinds.split(",");
  const LOCAL = /^(localhost|127.0.0.1)$/.test(location.hostname);   // local testing: `npx wrangler dev --port 8788` in wordles-leaderboard/
  const API = LOCAL ? "http://127.0.0.1:8788" : "https://wordles-leaderboard.smokedople.workers.dev";
  const EPOCH = Date.UTC(2026, 0, 1);
  const WORDS = ["one", "two", "three", "four", "five", "six"];
  const LABEL = { cover: "cover", song: KINDS.includes("song-hard") ? "song · easy" : "song", "song-hard": "song · hard" };
  const $ = (id) => document.getElementById(id);
  const ls = {
    get(k, d) { try { const v = localStorage.getItem(GAME + ":" + k); return v ? JSON.parse(v) : d; } catch { return d; } },
    set(k, v) { try { localStorage.setItem(GAME + ":" + k, JSON.stringify(v)); } catch {} },
  };
  const today = () => { const n = new Date(); return Math.floor((Date.UTC(n.getFullYear(), n.getMonth(), n.getDate()) - EPOCH) / 864e5); };

  // private id so each person counts once per puzzle — never shown to anyone
  let pid = ls.get("pid", null);
  if (!pid || !/^[a-z0-9]{24,64}$/.test(pid)) {
    const a = new Uint8Array(16); crypto.getRandomValues(a);
    pid = [...a].map((b) => b.toString(36).padStart(2, "0")).join("").slice(0, 32).padEnd(24, "0");
    ls.set("pid", pid);
  }

  // ---------- markup: trophy button, crowd line, dialog, footer ----------
  const stats = $("statsBtn");
  const trophy = document.createElement("button");
  trophy.className = "icon"; trophy.id = "lbBtn"; trophy.setAttribute("aria-label", "Leaderboard");
  trophy.innerHTML = `<svg viewBox="0 0 20 20" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M5 2h10v2h3v3a4 4 0 0 1-4 4h-.3A5 5 0 0 1 11 13.9V16h3v2H6v-2h3v-2.1A5 5 0 0 1 6.3 11H6a4 4 0 0 1-4-4V4h3zm0 4H4v1a2 2 0 0 0 1 1.7zm10 0v2.7A2 2 0 0 0 16 7V6z"/></svg>`;
  const right = document.createElement("div");
  right.className = "icons";
  stats.replaceWith(right); right.append(trophy, stats);
  const help = $("helpBtn"), left = document.createElement("div");
  left.className = "icons"; help.replaceWith(left); left.append(help);

  const crowd = document.createElement("p");
  crowd.className = "crowd"; crowd.id = "crowd"; crowd.hidden = true;
  $("answerMeta").after(crowd);

  const dlg = document.createElement("dialog");
  dlg.id = "lbDlg";
  dlg.innerHTML = `<h2>leaderboard</h2><p class="lb-sub" id="lbSub"></p><div id="lbBody"></div><form method="dialog"><button>close</button></form>`;
  document.body.append(dlg);

  const foot = document.createElement("footer");
  foot.className = "credit";
  foot.innerHTML = `<span>made by <b>gero</b></span><button type="button" class="dc" id="dcBtn" title="copy discord username">
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M20.3 4.4A19.6 19.6 0 0 0 15.4 3l-.6 1.3a18.2 18.2 0 0 0-5.6 0L8.6 3a19.5 19.5 0 0 0-4.9 1.5C.6 9.1-.3 13.7.1 18.2A19.7 19.7 0 0 0 6.1 21l1.3-2a12.7 12.7 0 0 1-2-1l.5-.4a14 14 0 0 0 12.2 0l.5.4a12.7 12.7 0 0 1-2 1l1.3 2a19.6 19.6 0 0 0 6-2.8c.5-5.2-.8-9.8-3.6-13.8ZM8 15.5c-1.2 0-2.2-1.1-2.2-2.4S6.8 10.7 8 10.7s2.2 1.1 2.2 2.4-1 2.4-2.2 2.4Zm8 0c-1.2 0-2.2-1.1-2.2-2.4s1-2.4 2.2-2.4 2.2 1.1 2.2 2.4-1 2.4-2.2 2.4Z"/></svg><span>gero__</span></button>`;
  document.querySelector("main").after(foot);

  let toastT;
  function toast(msg) {
    const t = $("toast"); if (!t) return;
    t.textContent = msg; t.hidden = false;
    clearTimeout(toastT); toastT = setTimeout(() => (t.hidden = true), 1800);
  }
  $("dcBtn").onclick = async () => {
    try { await navigator.clipboard.writeText("gero__"); toast("discord copied: gero__"); }
    catch { toast("discord: gero__"); }
  };

  // ---------- talking to the leaderboard ----------
  async function api(path, body) {
    const r = await fetch(API + path, body
      ? { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body) } : undefined);
    if (!r.ok) throw new Error("leaderboard unavailable");
    return r.json();
  }
  const sentKey = (day, kind) => `lb:sent:${kind}:${day}`;
  async function send(day, kind, won, guesses) {
    if (ls.get(sentKey(day, kind), false)) return null;
    const s = await api("/daily", { game: GAME, pid, day, kind, guesses: won ? guesses : 0 });
    ls.set(sentKey(day, kind), true);
    return s;
  }
  let cache = null;
  async function all(day) {
    if (cache && cache.day === day && Date.now() - cache.t < 30000) return cache.data;
    const data = await api(`/daily?game=${GAME}&day=${day}`);
    cache = { day, t: Date.now(), data };
    return data;
  }
  const pct = (n, t) => (t ? Math.round((n / t) * 100) : 0);
  function line(s, mine) {
    if (!s || !s.total) return "";
    if (s.total === 1) return "you're the first to finish today's puzzle!";
    const parts = [s.counts[0] ? `${pct(s.counts[0], s.total)}% solved it in one!` : "nobody's got it in one yet"];
    if (s.counts[1]) parts.push(`${pct(s.counts[1], s.total)}% in two`);
    if (mine > 2 && s.counts[mine - 1]) parts.push(`${pct(s.counts[mine - 1], s.total)}% in ${WORDS[mine - 1]} like you`);
    return `${parts.join(" · ")} — ${s.total} players today`;
  }

  // ---------- crowd line under the answer ----------
  let shown = "";
  async function showCrowd(d, fresh) {
    const id = `${d.kind}:${d.day}`;
    if (!fresh && shown === id) { crowd.hidden = !crowd.textContent; return; }
    shown = id; crowd.hidden = true; crowd.textContent = "";
    try {
      let s = await send(d.day, d.kind, d.won, d.guesses);
      if (!s) s = (await all(d.day))[d.kind];
      if (shown !== id) return;
      const t = line(s, d.won ? d.guesses : 0);
      if (t) { crowd.textContent = t; crowd.hidden = false; }
    } catch {}
  }
  document.addEventListener("sd:finish", (e) => { if (e.detail.play === "daily") { cache = null; showCrowd(e.detail, true); } });
  document.addEventListener("sd:render", (e) => {
    const d = e.detail;
    if (d.play === "daily" && d.done) showCrowd(d, false);
    else { crowd.hidden = true; shown = ""; }
  });

  // dailies finished before this existed (or while offline) get counted on the next visit
  window.addEventListener("load", () => {
    const day = today();
    for (const k of KINDS) {
      const r = ls.get(`day:${k}:${day}`, null);
      if (r && r.done && !ls.get(sentKey(day, k), false)) send(day, k, r.won, (r.guesses || []).length).catch(() => {});
    }
  });

  // ---------- the leaderboard dialog ----------
  trophy.onclick = async () => {
    const day = today(), body = $("lbBody");
    $("lbSub").textContent = `how everyone did on today's daily #${day + 1}`;
    body.innerHTML = `<p class="lb-dim">loading…</p>`;
    dlg.showModal();
    cache = null;
    try {
      const data = await all(day);
      body.innerHTML = KINDS.map((k) => {
        const s = data[k], t = s.total;
        const mine = ls.get(`day:${k}:${day}`, null);
        const myRow = mine && mine.done ? (mine.won ? mine.guesses.length - 1 : 6) : -1;
        const rows = [...s.counts, s.lost].map((n, i) =>
          `<div>${i < 6 ? i + 1 : "X"}<i class="${i === myRow ? "hl" : ""}" style="width:${Math.max(10, pct(n, t))}%">${pct(n, t)}%</i></div>`).join("");
        const head = t ? (s.counts[0] ? `${pct(s.counts[0], t)}% solved it in one!` : "nobody in one yet") : "nobody's finished it yet";
        return `<section class="lb-day"><h3>${LABEL[k] || k} <small>${t} player${t === 1 ? "" : "s"}</small></h3>
          <p class="lb-head">${head}</p>${t ? `<div class="dist">${rows}</div>` : ""}</section>`;
      }).join("");
    } catch {
      body.innerHTML = `<p class="lb-dim">leaderboard unavailable right now — try again in a bit</p>`;
    }
  };
})();
