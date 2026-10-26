/**
 * Korean display text for agent activity statuses.
 *
 * The server keeps emitting English statuses ("Reading foo.ts") because
 * toolUtils.extractToolName parses their prefixes to pick animations, so the
 * translation happens only at render time.
 */
const RULES: Array<[RegExp, string]> = [
  [/^Reading (.+)$/, '$1 읽는 중'],
  [/^Editing notebook$/, '노트북 편집 중'],
  [/^Editing (.+)$/, '$1 수정 중'],
  [/^Writing (.+)$/, '$1 작성 중'],
  [/^Running subtask$/, '하위 작업 실행 중'],
  [/^Running: (.*)$/, '명령 실행: $1'],
  [/^Searching files$/, '파일 찾는 중'],
  [/^Searching code$/, '코드 검색 중'],
  [/^Searching the web$/, '웹 검색 중'],
  [/^Fetching web content$/, '웹 페이지 가져오는 중'],
  [/^Subtask: (.*)$/, '하위 작업: $1'],
  [/^Waiting for your answer$/, '답변 기다리는 중'],
  [/^Waiting for input$/, '입력 대기 중'],
  [/^Needs approval$/, '승인 필요'],
  [/^Using (.+)$/, '$1 사용 중'],
  [/^Idle$/, '쉬는 중'],
];

export function koStatus(status: string): string {
  for (const [pattern, replacement] of RULES) {
    if (pattern.test(status)) return status.replace(pattern, replacement);
  }
  return status;
}
