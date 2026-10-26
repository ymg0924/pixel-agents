/**
 * Disclosure text for the hooks consent gate. Both surfaces show the SAME
 * in-app ask: the server ships these strings in the `hooksConsentRequest`
 * message and the webview's IntroBubble (the greeter character's speech
 * bubble) renders them verbatim on the Intro's consent step, so there is
 * exactly one copy of the terms and no client-side duplicate to drift into
 * asking for approval on weaker terms.
 *
 * Two pieces: the HEADLINE is the title of the Intro's consent step and the
 * DISCLOSURE is that step's body. The headline carries NO disclosure facts —
 * every fact lives in the shared disclosure block, so no fact depends on how a
 * surface renders its title slot (consentCopy.test.ts pins that split).
 *
 * The event count is interpolated from CLAUDE_HOOK_EVENTS, never written out:
 * a hardcoded number silently becomes a lie the next time the list changes.
 */

import { CLAUDE_HOOK_EVENTS, SETTINGS_BACKUP_SUFFIX } from './constants.js';

const SETTINGS_FILE = '~/.claude/settings.json';

/** WHY we ask + WHAT we write. */
export const CONSENT_FACT_WHAT =
  `에이전트를 실시간으로 움직이게 하려고, Pixel Agents가 ${SETTINGS_FILE}에 ` +
  `Claude Code 이벤트 ${CLAUDE_HOOK_EVENTS.length}개에 대한 훅을 추가합니다. ` +
  `기존 설정은 그대로 유지되고, 한 번 settings.json${SETTINGS_BACKUP_SUFFIX} 로 백업해 둡니다.`;

/** WHAT data moves, and where it stops.
 *
 *  "Nothing leaves your machine" is not something this prompt can promise:
 *  `npx pixel-agents --host 0.0.0.0` binds the same server to every interface,
 *  and an accepted socket receives the store broadcasts
 *  (server/src/httpServer.ts). So it states the default and names the one
 *  thing that changes it, rather than making a promise the software can be
 *  asked to break. */
export const CONSENT_FACT_DATA =
  'Claude Code는 이 이벤트(도구 이름과 입력 포함)를 이 컴퓨터의 Pixel Agents 서버로 보냅니다. ' +
  '서버는 127.0.0.1에서만 듣기 때문에 모든 정보는 이 컴퓨터 안에 머뭅니다. ' +
  '--host 옵션으로 네트워크에 직접 공개하지 않는 한 밖으로 나가지 않습니다.';

/** HOW to undo it. */
export const CONSENT_FACT_REVERSIBLE =
  '훅은 언제든 설정 → 실시간 감지 (훅)에서 제거할 수 있습니다.';

/** Headline for the first-run gate — the only population that is asked. A user
 *  whose hooks a pre-consent version already installed is migrated silently
 *  (the migration only ever drops events), so there is no second headline.
 *  Title of the Intro's consent step ("Welcome to Pixel Agents!" is the
 *  Intro's own opening-step title, owned by the webview). Carries NO
 *  disclosure facts by design: the facts all live in CONSENT_DISCLOSURE. */
export const CONSENT_INSTALL_HEADLINE = '하나만 더: 훅 설치!';

/** The three disclosure facts, in order, as one block.
 *
 *  This is the consent step's body. The IntroBubble splits it on the blank
 *  lines and renders every paragraph in full on the decision surface itself — no
 *  "Details" affordance, which would put the disclosure one click away from
 *  the decision it is there to inform. */
export const CONSENT_DISCLOSURE = [
  CONSENT_FACT_WHAT,
  CONSENT_FACT_DATA,
  CONSENT_FACT_REVERSIBLE,
].join('\n\n');
